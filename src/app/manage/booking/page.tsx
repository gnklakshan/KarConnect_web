"use client"; 

import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

// export const metadata: Metadata = {
//   title: "Booking | KarConnect",
//   description: "Booking ",
// };

const bookingpage: React.FC = () => {
  const bookings = [
    { id: 1, renter: "Alice Smith", vehicle: "Tesla Model 3", startDate: "2023-07-15", endDate: "2023-07-18", status: "pending" },
    { id: 2, renter: "Bob Johnson", vehicle: "Toyota Camry", startDate: "2023-07-20", endDate: "2023-07-25", status: "confirmed" },
    { id: 3, renter: "Charlie Brown", vehicle: "Ford F-150", startDate: "2023-07-22", endDate: "2023-07-24", status: "cancelled" },
    { id: 4, renter: "Diana Prince", vehicle: "Tesla Model 3", startDate: "2023-08-01", endDate: "2023-08-05", status: "pending" },
    { id: 5, renter: "Ethan Hunt", vehicle: "Toyota Camry", startDate: "2023-08-10", endDate: "2023-08-15", status: "confirmed" }
  ];

  const [filteredBookings, setFilteredBookings] = useState(bookings);

  const applyFilters = (statusFilter: string, vehicleFilter: string, dateFilter: string) => {
    const filtered = bookings.filter(booking => {
      return (statusFilter === 'all' || booking.status === statusFilter) &&
        (vehicleFilter === 'all' || booking.vehicle === vehicleFilter) &&
        (!dateFilter || (booking.startDate <= dateFilter && booking.endDate >= dateFilter));
    });
    setFilteredBookings(filtered);
  };

  useEffect(() => {
    // Initial render
    applyFilters('all', 'all', '');
  }, []);

  return (
    <DefaultLayout>
      <div className="container mx-auto px-4 py-8">
      <Breadcrumb pageName="Booking Manage" />
        <main className="mt-10">
          {/* <h1 className="text-meta-5 text-3xl font-bold mb-6">Booking Management</h1> */}

          <section className="bg-white p-6 rounded-lg shadow mb-8 dark:border-strokedark dark:bg-boxdark">
            <h2 className="text-meta-5 text-2xl font-bold mb-4">Overview</h2>
            <div className="flex flex-wrap justify-around text-center">
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">5</div>
                <div>Pending Requests</div>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">12</div>
                <div>Confirmed Rentals</div>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">3</div>
                <div>Active Rentals</div>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-primary-color">Rs 1,250</div>
                <div>Monthly Earnings</div>
              </div>
            </div>
          </section>

          <section className="bg-white p-6 rounded-lg shadow dark:bg-boxdark">
            <h2 className="text-primary-color text-2xl font-bold mb-4">Booking Requests</h2>
            <div className="flex flex-wrap gap-4 mb-6">
              <select className="p-2 rounded border flex-grow md:flex-none" onChange={(e) => applyFilters(e.target.value, 'all', '')}>
                <option value="all">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <select className="p-2 rounded border flex-grow md:flex-none" onChange={(e) => applyFilters('all', e.target.value, '')}>
                <option value="all">All Vehicles</option>
                <option value="Tesla Model 3">Tesla Model 3</option>
                <option value="Toyota Camry">Toyota Camry</option>
                <option value="Ford F-150">Ford F-150</option>
              </select>
              <input type="date" className="p-2 rounded border flex-grow md:flex-none" onChange={(e) => applyFilters('all', 'all', e.target.value)} />
            </div>

            <div>
              {filteredBookings.map(booking => (
                <div key={booking.id} className="flex flex-wrap justify-between items-center py-4 border-b">
                  <div>
                    <h3 className="font-bold">{booking.renter}</h3>
                    <p>{booking.vehicle}</p>
                    <p>{booking.startDate} to {booking.endDate}</p>
                    <span className={`inline-block px-2 py-1 rounded-full text-sm text-rose-400 font-bold status-${booking.status}`}>
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 justify-end mt-4 md:mt-0">
                    {booking.status === 'pending' && (
                      <>
                        <Link href="#">
                          <button className="px-4 py-2 bg-success-color text-white  rounded bg-green-500">Confirm</button>
                        </Link>
                        <Link href="#">
                          <button className="px-4 py-2 bg-danger-color text-white rounded  bg-red">Cancel</button>
                        </Link>
                      </>
                    )}

                    <Link href="#">
                      <button className="px-4 py-2 bg-primary-color text-white rounded  bg-orange-300">Message</button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </DefaultLayout>
  );
};

export default bookingpage;
