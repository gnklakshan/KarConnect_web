"use client";
import dynamic from "next/dynamic";
// import CardDataStats from "../CardDataStats";
import Link from "next/link";
import ActionAreaCard from "../Actioncards/ActionAreaCard";
import { Typography } from "@mui/material";
// import React, { useState, useEffect } from "react";
import "../../firebaseConfig";
// import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import Dashboard from "../banner/banner";

const MapOne = dynamic(() => import("@/components/Maps/MapOne"), {
  ssr: false,
});

const ChartThree = dynamic(() => import("@/components/Charts/ChartThree"), {
  ssr: false,
});

const ECommerce: React.FC = () => {
  return (
    <>
      <div className="mb-1.5 flex flex-wrap items-end justify-end gap-2 py-4 xl:gap-6">
        <Link
          href="/manage/add-vehicle"
          className="inline-flex items-center justify-center rounded-md bg-meta-3 px-10 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          Add Vehicle
        </Link>
        <Link
          href="/manage/booking"
          className="inline-flex items-center justify-center rounded-md  bg-meta-8 px-10 py-3 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          View Request
        </Link>
      </div>
      <Dashboard />

      <div style={{ display: "flex", gap: "16px", paddingTop: "20px" }}>
        <ActionAreaCard
          title="Add Vehicle"
          head1="0.95%"
          head2="Your Rental Journey is one click away."
          head3="Rent your Vehicle"
          image="./images/product/car-5.jpg"
          levelUp={true}
          link={"/manage/add-vehicle"}
        >
          <Typography variant="body2">
            {/* Additional information can go here. */}
          </Typography>
        </ActionAreaCard>

        <ActionAreaCard
          title="View Requests"
          head1="0.95%"
          head2="View the rental requests made by users."
          head3="Rent your Vehicle"
          image="./images/product/car-6.jpg"
          levelUp={true}
          link={"/manage/booking"}
        >
          <Typography variant="body2">
            {/* Additional information can go here. */}
          </Typography>
        </ActionAreaCard>
        <ActionAreaCard
          title="View My Vehicles"
          head1="0.95%"
          head2="Manage your vehicles."
          head3="Rent your Vehicle"
          image="./images/product/car-7.jpg"
          levelUp={true}
          link={"/vehicle"}
        >
          <Typography variant="body2">
            {/* Additional information can go here. */}
          </Typography>
        </ActionAreaCard>
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
      </div>
    </>
  );
};

export default ECommerce;
