"use client"; 

import React, { useState, useEffect } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { metadata } from "./vehicleManagementMetaData";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { collection, deleteDoc, getFirestore, getDocs, doc, updateDoc } from 'firebase/firestore';
import "../../firebaseConfig";

interface Vehicle {
  id: string;
  Availability: number;
  brand: string;
  name: string;
  owner: string;
  price: number;
  type: string;
  vehicle_no: string;
}

const VehicleManagement: React.FC = () => {
  document.title = metadata.title;
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [availabilityFilter, setAvailabilityFilter] = useState("");

  const db = getFirestore();

  // Fetch vehicles from Firestore
  useEffect(() => {
    const fetchVehicles = async () => {
      const vehicleCollection = collection(db, "vehicle_db");
      const vehicleSnapshot = await getDocs(vehicleCollection);
      const vehicleList = vehicleSnapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<Vehicle, 'id'>), 
      })) as Vehicle[];
      setVehicles(vehicleList);
    };

    fetchVehicles();
  }, [db]);

  const updateAvailability = async (vehicle: Vehicle) => {
    const vehicleDocRef = doc(db, "vehicle_db", vehicle.id);
    await updateDoc(vehicleDocRef, { Availability: vehicle.Availability === 0 ? 1 : 0 });
    setVehicles(vehicles.map(v => v.id === vehicle.id ? { ...v, Availability: vehicle.Availability === 0 ? 1 : 0 } : v));
  };

  const deleteVehicle = async (vehicle: Vehicle) => {
    if (confirm(`Are you sure you want to delete ${vehicle.name}?`)) {
      const vehicleDocRef = doc(db, "vehicle_db", vehicle.id);
      await deleteDoc(vehicleDocRef);
      setVehicles(vehicles.filter(v => v.id !== vehicle.id));
    }
  };

  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = vehicle.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      vehicle.vehicle_no.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = typeFilter === '' || vehicle.type === typeFilter;
    const matchesAvailability = availabilityFilter === '' || vehicle.Availability.toString() === availabilityFilter;
    return matchesSearch && matchesType && matchesAvailability;
  });

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Vehicle Management" />
      <div className="container mx-auto p-5">
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
            <option value="1">Available</option>
            <option value="0">Unavailable</option>
          </select>
        </div>
        <Link href="/manage/add-vehicle">
          <button className="bg-green-500 text-white py-2 px-4 rounded mb-5 hover:bg-green-600">
            Add New Vehicle
          </button>
        </Link>
        <table className="bg-white p-6 rounded-lg shadow mb-8 dark:border-strokedark dark:bg-boxdark">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="text-left p-3">Vehicle</th>
              <th className="text-left p-3">Type</th>
              <th className="text-left p-3">License Plate</th>
              <th className="text-left p-3">Price</th>
              <th className="text-left p-3">Availability</th>
              <th className="text-left p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredVehicles.map(vehicle => (
              <tr key={vehicle.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{vehicle.brand} {vehicle.name}</td>
                <td className="p-3">{vehicle.type}</td>
                <td className="p-3">{vehicle.vehicle_no}</td>
                <td className="p-3">Rs.{vehicle.price}</td>
                <td className="p-3">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="toggle-checkbox"
                      checked={vehicle.Availability === 1}
                      onChange={() => updateAvailability(vehicle)}
                    />
                    <span className={`status-indicator ${vehicle.Availability === 1 ? 'bg-green-500' : 'bg-red'}`} />
                    {vehicle.Availability === 1 ? 'Available' : 'Unavailable'}
                  </label>
                </td>
                <td className="p-3">
                  <div className="flex space-x-2">
                    <button
                      className="bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
                      // onClick={() => editVehicle(vehicle)}
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
