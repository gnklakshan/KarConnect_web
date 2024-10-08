"use client";

import React from "react";
import PricingCards from "@/app/payment_gateway/payment_gateway/subscription_card";
import { useRouter } from "next/navigation";

const SelectPackage = () => {
  const router = useRouter();

  return (
    <div className="m-3 flex justify-center">
      <div className="p-6 xl:w-[1000px]">
        <div className="m-2 rounded-xl border  border-stone-300 bg-white p-2">
          <div className="m-3 flex px-4">
            <button
              className="bg-gray-300 mx-2  rounded-xl pl-1 text-xl text-black"
              onClick={() => router.back()}
            >
              ← Back
            </button>
          </div>

          <h1 className="text-center text-3xl font-semibold text-blue-700">
            Available <span className="text-red">Plans</span>
          </h1>
          <p className="mx-3 text-center text-xl">
            Choose the right pricing for you and get started with KarConnect.
          </p>
          <PricingCards />

          <div className="mx-auto max-w-2xl pb-3 text-center">
            <p className="text-gray-500 text-sm">
              All plans include a 30-day money-back guarantee. Need help
              choosing? Contact our sales team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPackage;
