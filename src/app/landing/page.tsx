"use client";
import React from "react";
import { FloatingNav } from "@/components/floatingNav/floatingNav"; 
import Home from "@/app/landing/home";
import { FeaturesSectionDemo } from "./services";
import Footer from "./footer";

const LandingPage = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 space-y-15">
      {/* Floating Navigation */}
      <div>
        <FloatingNav />
      </div>
      <div><Home/></div>
      <div><FeaturesSectionDemo/></div>
      <div><Footer/></div>
    </div>
  );
};

export default LandingPage;
