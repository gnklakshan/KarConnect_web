"use client";
import { useState } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { metadata } from "./metadataaddvehicle";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import SelectGroupOne from "@/components/SelectGroup/SelectGroupOne";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import "../../../firebaseConfig";
import Link from "next/link";

const FormLayout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    vehicleType: "",
    vehicleName: "",
    vehicleNumber: "",
    price: "",
    brand: "",
    description: "",
    image: "",
    Availability: "",
  });

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const db = getFirestore(); // Initialize Firestore with the Firebase app

    try {
      const collectionRef = collection(db, "vehicle_db"); // Reference to the collection
      await addDoc(collectionRef, {
        brand: formData.brand,
        description: formData.description,
        main_image: formData.image,
        name: formData.vehicleName,
        owner: `${formData.firstName} ${formData.lastName}`,
        price: Number(formData.price),
        type: formData.vehicleType,
        vehicle_no: formData.vehicleNumber,
        Availability: 1,
        createdAt: new Date(),
      });
      alert("Vehicle added successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        vehicleType: "",
        vehicleName: "",
        vehicleNumber: "",
        price: "",
        description: "",
        brand: "",
        image: "",
        Availability: "",
      });
    } catch (error) {
      console.error("Error adding vehicle: ", error);
      alert("Error adding vehicle. Please try again.");
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Add Vehicle" />

      {/* <div className="grid grid-cols-1 gap-9 sm:grid-cols-2"> */}
      <div className="grid grid-cols-1 gap-9">
        <div className="grid grid-cols-1 gap-9">
          <div className="flex flex-col gap-9">
            {/* VEHICLE DETAILS */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h2 className="font-medium text-blue-700 dark:text-white">
                  Vehicle details
                </h2>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Owner&apos;s First name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter owner's first name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Owner&apos;s Last name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter owner's last name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Vehicle type
                    </label>
                    <input
                      type="text"
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      placeholder="car,van...etc"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Vehicle Name
                    </label>
                    <input
                      type="text"
                      name="vehicleName"
                      value={formData.vehicleName}
                      onChange={handleChange}
                      placeholder="Vehicle Name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Vehicle Number
                    </label>
                    <input
                      type="text"
                      name="vehicleNumber"
                      value={formData.vehicleNumber}
                      onChange={handleChange}
                      placeholder="Enter Vehicle Number"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <SelectGroupOne
                    selectedBrand={formData.brand}
                    onBrandChange={handleChange}
                  />

                  {/* <!-- File upload --> */}
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Upload Images
                    </label>
                  </div>
                  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex flex-col gap-1.5 p-3.5">
                      <div>
                        <input
                          type="file"
                          name="image"
                          value={formData.image}
                          onChange={handleChange}
                          className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:px-2.5 file:py-1 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Price
                    </label>
                    <input
                      type="text"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="rent price"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>

                  <div className="mb-6 gap-1.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white ">
                      Description
                    </label>
                    <textarea
                      rows={6}
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Type your message"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>

                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Add Vehicle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9"></div>
      </div>
    </DefaultLayout>
  );
};

export default FormLayout;
