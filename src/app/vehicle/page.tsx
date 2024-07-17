"use client"

import React, { useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";


interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  type: string;
  licensePlate: string;
  dailyRate: number;
  isAvailable: boolean;
}

const VehicleManagement: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    { id: 1, make: 'Toyota', model: 'Camry', year: 2020, type: 'Sedan', licensePlate: 'ABC123', dailyRate: 5000, isAvailable: true },
    { id: 2, make: 'Honda', model: 'CR-V', year: 2019, type: 'SUV', licensePlate: 'XYZ789', dailyRate: 6500, isAvailable: false },
    { id: 3, make: 'Ford', model: 'F-150', year: 2021, type: 'Truck', licensePlate: 'DEF456', dailyRate: 8000, isAvailable: true },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const updateAvailability = (vehicle: Vehicle) => {
    const updatedVehicles = vehicles.map(v =>
      v.id === vehicle.id ? { ...v, isAvailable: !v.isAvailable } : v
    );
    setVehicles(updatedVehicles);
  };

  const editVehicle = (vehicle: Vehicle) => {
    console.log(`Editing vehicle: ${vehicle.make} ${vehicle.model}`);
  };

  const deleteVehicle = (vehicle: Vehicle) => {
    if (confirm(`Are you sure you want to delete ${vehicle.make} ${vehicle.model}?`)) {
      setVehicles(vehicles.filter(v => v.id !== vehicle.id));
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.licensePlate.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === '' || vehicle.type === typeFilter;
    const matchesAvailability = availabilityFilter === '' || vehicle.isAvailable.toString() === availabilityFilter;
    return matchesSearch && matchesType && matchesAvailability;
  });

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Vehicle Management" />
      <div className="container mx-auto p-5">
        {/* <h1 className="text-2xl font-bold text-gray-800 mb-5">KarConnect Vehicle Management</h1> */}
        <div className="flex flex-wrap justify-between mb-5">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-2"
            placeholder="Search vehicles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="p-2 border border-gray-300 rounded mb-2"
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="">All Types</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Luxury">Luxury</option>
          </select>
          <select
            className="p-2 border border-gray-300 rounded mb-2"
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
          >
            <option value="">All Availabilities</option>
            <option value="true">Available</option>
            <option value="false">Unavailable</option>
          </select>
        </div>
        <Link
          href="/manage/add-vehicle"
        >
          <button className="bg-green-500 text-white py-2 px-4 rounded mb-5 hover:bg-green-600">
            Add New Vehicle

          </button>
        </Link>



        <table className="w-full bg-white shadow-md rounded  dark:border-strokedark dark:bg-boxdark">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left p-3">Vehicle</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">License Plate</th>
              <th className="text-left p-3">Daily Rate</th>
              <th className="text-left p-3">Availability</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map(vehicle => (
              <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{vehicle.make} {vehicle.model} ({vehicle.year})</td>
                <td className="p-3">{vehicle.type}</td>
                <td className="p-3">{vehicle.licensePlate}</td>
                <td className="p-3">Rs.{vehicle.dailyRate}</td>
                <td className="p-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="toggle-checkbox"
                      checked={vehicle.isAvailable}
                      onChange={() => updateAvailability(vehicle)}
                    />
                    <span className={`status-indicator ${vehicle.isAvailable ? 'bg-green-500' : 'bg-red'}`} />
                    {vehicle.isAvailable ? 'Available' : 'Unavailable'}
                  </label>
                </td>
                <td className="p-3">
                  <div className="flex space-x-2">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                      onClick={() => editVehicle(vehicle)}
                    >
                      <i className="fas fa-edit"></i> Edit
                    </button>
                    <button
                      className="bg-red text-white py-1 px-2 rounded hover:bg-orange-800"
                      onClick={() => deleteVehicle(vehicle)}
                    >
                      <i className="fas fa-trash"></i> Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default VehicleManagement;
