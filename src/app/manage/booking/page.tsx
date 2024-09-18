"use client";
import { useState, useEffect } from "react";
import { collection, getFirestore, getDocs, doc, getDoc, updateDoc, writeBatch } from 'firebase/firestore';
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { getAnalytics, isSupported } from "firebase/analytics";
import "../../../firebaseConfig";
import { metadata } from "./metadatabooking";

interface BookingData {
  id: string;
  RentUser: string;
  VehicleID: string;
  cancel: number;
  confirm: number;
  pending: number;
}

interface UserData {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  username: string;
}

interface RentData {
  id: string;
  StartDate: string;
  EndDate: string;
  VehicleID: string;
  cancel: number;
  confirm: number;
  pending: number;
}

interface VehicleData {
  Availability: number;
  brand: string;
  name: string;
  price: number;
  type: string;
}

const BookingPage: React.FC = () => {
  const [analyticsInitialized, setAnalyticsInitialized] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData[]>([]);
  const [users, setUsers] = useState<{ [key: string]: UserData }>({});
  const [pendingCount, setPendingCount] = useState(0);
  const [confirmedCount, setConfirmedCount] = useState(0);
  const [canceledCount, setCanceledCount] = useState(0);
  const [rentalData, setRentalData] = useState<{ [key: string]: RentData }>({});
  const [vehicledData, setVehicledData] = useState<{ [key: string]: VehicleData }>({});
  const [monthlyEarnings, setMonthlyEarnings] = useState(0);

  // Filter states
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [vehicleFilter, setVehicleFilter] = useState<string>('all');
  const [dateFilter, setDateFilter] = useState<string>('');

  useEffect(() => {
    // //0916
    //  // Ensure this runs only on the client-side
    //  if (typeof window === 'undefined') {
    //   return; // Exit early if this is running on the server
    // }
    // //0916
    const initAnalytics = async () => {
      if (typeof window !== "undefined") {
        try {
          const supported = await isSupported();
          if (supported) {
            getAnalytics();
            setAnalyticsInitialized(true);
            console.log("Firebase Analytics initialized");
          }
        } catch (error) {
          console.error("Error initializing Firebase Analytics", error);
        }
      }
    };
  
    initAnalytics();

    const db = getFirestore();
    document.title = metadata.title;
    const fetchBookingData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'current_rent'));
        const bookingsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        } as BookingData));

        // Fetch user data and rental data for each booking's RentUser
        bookingsData.forEach(booking => {
          fetchUserData(booking.RentUser);
          getRentData(booking.VehicleID, booking.RentUser);
          fetchVehicleData(booking.VehicleID);
          calculateMonthlyEarnings(booking.VehicleID, booking.RentUser);
        });

        // Apply filters
        applyFilters(bookingsData);
      } catch (error) {
        console.error('Error fetching booking data', error);
      }
    };

    const fetchUserData = async (userId: string) => {
      try {
        const userDoc = await getDoc(doc(db, 'users', userId));
        if (userDoc.exists()) {
          const userData = userDoc.data() as UserData;
          setUsers(prevUsers => ({
            ...prevUsers,
            [userId]: userData,
          }));
        } else {
          console.log(`No such user with ID: ${userId}`);
        }
      } catch (error) {
        console.error(`Error fetching user data for userId ${userId}:`, error);
      }
    };

    const getRentData = async (vehicleId: string, rentUser: string) => {
      try {
        const db = getFirestore();
        const rentRef = collection(db, 'users', rentUser, 'rent_vehicles');
        const rentQuerySnapshot = await getDocs(rentRef);

        const rentalDocs = rentQuerySnapshot.docs.map(doc => doc.data() as RentData);
        const rentalDataForBooking = rentalDocs.find(rent => rent.VehicleID === vehicleId);

        if (rentalDataForBooking) {
          setRentalData(prevRentalData => ({
            ...prevRentalData,
            [vehicleId]: rentalDataForBooking,
          }));
        } else {
          console.log(`No rental data found for VehicleID: ${vehicleId}`);
        }
      } catch (error) {
        console.error("Error fetching rental data: ", error);
      }
    };

    const fetchVehicleData = async (vehicleId: string) => {
      try {
        const vehicleDoc = await getDoc(doc(db, 'vehicle_db', vehicleId));
        if (vehicleDoc.exists()) {
          const vehicleData = vehicleDoc.data() as VehicleData;
          setVehicledData(prevVehicles => ({
            ...prevVehicles,
            [vehicleId]: vehicleData,
          }));
        } else {
          console.log(`No such vehicle with ID: ${vehicleId}`);
        }
      } catch (error) {
        console.error(`Error fetching vehicle data for vehicleId ${vehicleId}:`, error);
      }
    };

    const calculateMonthlyEarnings = async (vehicleId: string, rentUser: string) => {
      try {
        const db = getFirestore();

        // Fetch vehicle data
        const vehicleDoc = await getDoc(doc(db, 'vehicle_db', vehicleId));
        if (!vehicleDoc.exists()) {
          console.log(`No such vehicle with ID: ${vehicleId}`);
          return;
        }
        const vehicleData = vehicleDoc.data() as VehicleData;

        // Fetch rental data
        const rentRef = collection(db, 'users', rentUser, 'rent_vehicles');
        const rentQuerySnapshot = await getDocs(rentRef);
        const rentalDocs = rentQuerySnapshot.docs.map(doc => doc.data() as RentData);

        // Find rental data for the specific booking
        const rentalDataForBooking = rentalDocs.find(rent => rent.VehicleID === vehicleId);
        if (!rentalDataForBooking) {
          console.log(`No rental data found for VehicleID: ${vehicleId}`);
          return;
        }

        // Parse dates
        const startDate = new Date(rentalDataForBooking.StartDate);
        const endDate = new Date(rentalDataForBooking.EndDate);

        // Validate dates
        if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
          console.error('Invalid dates:', startDate, endDate);
          return;
        }

        // Calculate rental duration in days
        const diffInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

        // Convert price to number
        const pricePerDay = Number(vehicleData.price);
        if (isNaN(pricePerDay)) {
          console.error('Invalid price:', vehicleData.price);
          return;
        }

        // Calculate earnings
        const earnings = pricePerDay * diffInDays;

        // Update the state with the calculated earnings
        setMonthlyEarnings(prevEarnings => prevEarnings + earnings);

      } catch (error) {
        console.error(`Error calculating monthly earnings:`, error);
      }
    };

    const applyFilters = (bookingsData: BookingData[]) => {
      const filteredBookings = bookingsData.filter(booking => {
        const rentalDataForBooking = rentalData[booking.VehicleID];
        const vehicleDataForBooking = vehicledData[booking.VehicleID];
        
        const isStatusMatch = (statusFilter === 'all' ||
          (statusFilter === 'pending' && booking.pending === 1) ||
          (statusFilter === 'confirmed' && booking.confirm === 1) ||
          (statusFilter === 'cancelled' && booking.cancel === 1));

        const isVehicleMatch = (vehicleFilter === 'all' || (vehicleDataForBooking && vehicleDataForBooking.brand === vehicleFilter));

        const isDateMatch = !dateFilter || (rentalDataForBooking && new Date(rentalDataForBooking.StartDate) <= new Date(dateFilter) && new Date(rentalDataForBooking.EndDate) >= new Date(dateFilter));

        return isStatusMatch && isVehicleMatch && isDateMatch;
      });

      setBookingData(filteredBookings);

      const pending = filteredBookings.filter(booking => booking.pending === 1).length;
      const confirmed = filteredBookings.filter(booking => booking.confirm === 1).length;
      const canceled = filteredBookings.filter(booking => booking.cancel === 1).length;

      setPendingCount(pending);
      setConfirmedCount(confirmed);
      setCanceledCount(canceled);
    };

    fetchBookingData();
  }, [rentalData,vehicledData,statusFilter, vehicleFilter, dateFilter]); // Dependencies

  const handleConfirm = async (bookingId: string, RentUser: string) => {
    if (window.confirm("Are you sure you want to confirm this booking?")) {
      try {
        const db = getFirestore();
        const bookingRef = doc(db, 'current_rent', bookingId);
        const rentRef = collection(db, 'users', RentUser, 'rent_vehicles');
        const rentQuerySnapshot = await getDocs(rentRef);
        const batch = writeBatch(db);

        rentQuerySnapshot.docs.forEach(doc => {
          const rent = doc.data() as RentData;
          if (rent.VehicleID === bookingId) {
            batch.update(doc.ref, {
              confirm: 1,
              pending: 0
            });
          }
        });
        await batch.commit();

        await updateDoc(bookingRef, {
          confirm: 1,
          pending: 0
        });

        setBookingData(prevBookings =>
          prevBookings.map(booking =>
            booking.id === bookingId ? { ...booking, confirm: 1, pending: 0 } : booking
          )
        );

        setConfirmedCount(prevCount => prevCount + 1);
        setPendingCount(prevCount => prevCount - 1);
      } catch (error) {
        console.error("Error confirming booking: ", error);
      }
    }
  };

  const handleCancel = async (bookingId: string, RentUser: string) => {
    if (window.confirm("Are you sure you want to cancel this booking?")) {
      try {
        const db = getFirestore();
        const bookingRef = doc(db, 'current_rent', bookingId);
        const rentRef = collection(db, 'users', RentUser, 'rent_vehicles');
        const rentQuerySnapshot = await getDocs(rentRef);
        const batch = writeBatch(db);

        rentQuerySnapshot.docs.forEach(doc => {
          const rent = doc.data() as RentData;
          if (rent.VehicleID === bookingId) {
            batch.update(doc.ref, {
              cancel: 1,
              pending: 0
            });
          }
        });

        await batch.commit();

        await updateDoc(bookingRef, {
          cancel: 1,
          pending: 0
        });

        setBookingData(prevBookings =>
          prevBookings.map(booking =>
            booking.id === bookingId ? { ...booking, cancel: 1, pending: 0 } : booking
          )
        );

        setCanceledCount(prevCount => prevCount + 1);
        setPendingCount(prevCount => prevCount - 1);
      } catch (error) {
        console.error("Error canceling booking: ", error);
      }
    }
  };

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb pageName="Booking Manage" />
        <main className="mt-10">
          <section className="bg-white p-6 rounded-lg shadow mb-8 dark:border-strokedark dark:bg-boxdark">
            <h2 className="text-meta-5 text-2xl font-bold mb-4">Overview</h2>
            <div className="flex flex-wrap justify-around text-center">
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">{pendingCount}</div>
                <div>Pending Requests</div>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">{confirmedCount}</div>
                <div>Confirmed Rentals</div>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">{canceledCount}</div>
                <div>Canceled Requests</div>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">Rs.{}</div>
                <div>Monthly Earnings</div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow dark:bg-boxdark mb-8">
          <h2 className="text-primary-color text-2xl font-bold mb-4">Booking Requests</h2>
            <div className="flex flex-wrap gap-4">
              <div>
                <select id="statusFilter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="p-2 rounded border flex-grow md:flex-none">
                  <option value="all">All</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                
                <select id="vehicleFilter" value={vehicleFilter} onChange={e => setVehicleFilter(e.target.value)} className="p-2 rounded border flex-grow md:flex-none">
                  <option value="all">All</option>
                  {Object.values(vehicledData).map(vehicle => (
                    <option key={vehicle.name} value={vehicle.brand}>{vehicle.brand}</option>
                  ))}
                </select>
              </div>
              <div>
                <input type="date" id="dateFilter" value={dateFilter} onChange={e => setDateFilter(e.target.value)} className="p-2 rounded border flex-grow md:flex-none"/>
              </div>
            </div>
          

            <div>

              {bookingData.map(booking => {
                const user = users[booking.RentUser];
                const rent = rentalData[booking.id];
                const vehicle = vehicledData[booking.VehicleID];

                return (
                  <div key={booking.id} className="flex flex-wrap justify-between items-center py-4 border-b">
                    <div>
                      <h3 className="font-bold">{(user?.first_name + " " + user?.last_name) || booking.RentUser}</h3>
                      {vehicle ? (
                        <p>{vehicle.brand + " " + vehicle.name}</p>
                      ) : (
                        <p>Vehicle details not available</p>
                      )}
                      {rent && (
                        <>
                          <p>From {rent.StartDate} To {rent.EndDate}</p>
                        </>
                      )}
                      <span className={`inline-block px-2 py-1 rounded-full text-sm text-rose-400 font-bold status-${booking.pending ? 'pending' : booking.confirm ? 'confirmed' : 'cancelled'}`}>
                        {booking.pending ? 'Pending' : booking.confirm ? 'Confirmed' : 'Cancelled'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-end mt-4 md:mt-0">
                      {booking.pending === 1 && (
                        <>
                          <Link href="#">
                            <button className="px-4 py-2 bg-success-color text-white rounded bg-green-500" onClick={() => handleConfirm(booking.id, booking.RentUser)}>
                              Confirm
                            </button>
                          </Link>
                          <Link href="#">
                            <button className="px-4 py-2 bg-danger-color text-white rounded bg-red" onClick={() => handleCancel(booking.id, booking.RentUser)}>
                              Cancel
                            </button>
                          </Link>
                        </>
                      )}
                      <Link href="#">
                        <button className="px-4 py-2 bg-primary-color text-white rounded bg-orange-300">Message</button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

        </main>
      </div>
    </DefaultLayout>
  );
};

export default BookingPage;
