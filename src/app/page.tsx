// pages/index.tsx
"use client";
import { useRouter } from "next/navigation";
import React from "react";
import LandingPage from "./landing/page";

const HomePage = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/auth/signin"); // Redirect to the sign-in page
  };

  return <LandingPage />;
};

export default HomePage;
