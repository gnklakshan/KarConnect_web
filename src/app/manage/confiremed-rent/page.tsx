"use client";
import { useState, useEffect } from "react";
import {
  collection,
  getFirestore,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

interface BookingData {
  id: string;
  RentUser: string;
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

interface UserData {
  first_name: string;
  last_name: string;
  phone_number: string;
}


const ConfirmedVehicles: React.FC = () => {
  const [confirmedBookings, setConfirmedBookings] = useState<BookingData[]>([]);
  const [vehicleData, setVehicleData] = useState<{ [key: string]: VehicleData }>({});
  const [users, setUsers] = useState<{ [key: string]: UserData }>({});

  useEffect(() => {
    const fetchConfirmedBookings = async () => {
      const db = getFirestore();
      try {
        const querySnapshot = await getDocs(collection(db, "current_rent"));
        const bookingsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as BookingData[];

        const confirmedBookings = bookingsData.filter(booking => booking.confirm === 1);

        setConfirmedBookings(confirmedBookings);

        confirmedBookings.forEach(booking => {
          fetchVehicleData(booking.VehicleID);
          fetchUserData(booking.RentUser);
        });
      } catch (error) {
        console.error("Error fetching confirmed bookings:", error);
      }
    };

    const fetchVehicleData = async (vehicleId: string) => {
      const db = getFirestore();
      try {
        const vehicleDoc = await getDoc(doc(db, "vehicle_db", vehicleId));
        if (vehicleDoc.exists()) {
          const vehicleData = vehicleDoc.data() as VehicleData;
          setVehicleData(prevData => ({
            ...prevData,
            [vehicleId]: vehicleData,
          }));
        }
      } catch (error) {
        console.error(`Error fetching vehicle data for vehicleId ${vehicleId}:`, error);
      }
    };

    const fetchUserData = async (userId: string) => {
      const db = getFirestore();
      try {
        const userDoc = await getDoc(doc(db, "users", userId));
        if (userDoc.exists()) {
          const user = userDoc.data() as UserData;
          setUsers(prevData => ({
            ...prevData,
            [userId]: user,
          }));
        }
      } catch (error) {
        console.error(`Error fetching user data for userId ${userId}:`, error);
      }
    };
    

    fetchConfirmedBookings();
  }, []);

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb pageName="Confirmed Vehicles" />
        <main className="mt-10">
          <section className="mb-8 rounded-lg bg-white p-6 shadow dark:border-strokedark dark:bg-boxdark">
            <h2 className="mb-4 text-2xl font-bold text-meta-5">Confirmed Vehicles</h2>
            <ul>
              {confirmedBookings.map(booking => {
                const user = users[booking.RentUser];
  
                  return (
                    <li key={booking.id} className="mb-4">
                      <h3 className="text-lg font-bold">{user?.first_name + " " + user?.last_name || booking.RentUser}</h3>
                      <p>Phone Number: {user?.phone_number}</p>
                      <p>Vehicle: {vehicleData[booking.VehicleID]?.name}</p>
                      <p>Brand: {vehicleData[booking.VehicleID]?.brand}</p>
                      <p>Price: ${vehicleData[booking.VehicleID]?.price} per day</p>
                      <p>Rental ID: {booking.id}</p>
                      
                    </li>
                  );
                })}

            </ul>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default ConfirmedVehicles;
