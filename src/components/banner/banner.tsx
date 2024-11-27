import Image from "next/image";
import { useState, useEffect } from "react";
import { FiDollarSign, FiUsers } from "react-icons/fi";
import { FaCar } from "react-icons/fa";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import "../../firebaseConfig";
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";
import Typewriter from "typewriter-effect";

const StatCard = ({
  icon: Icon,
  title,
  total,
  rate,
  levelUp,
}: {
  icon: IconType;
  title: string;
  total: string;
  rate: string;
  levelUp: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 relative overflow-hidden rounded-xl border bg-white p-6 shadow-lg dark:bg-meta-4"
    >
      {/* Decorative gradient background */}
      <div className="dark:from-gray-700 dark:to-gray-800 absolute inset-0 bg-gradient-to-r from-purple-50 to-blue-50 opacity-50" />

      {/* Content */}
      <div className="relative">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500">
          <Icon className="h-6 w-6 text-white" />
        </div>

        <div className="mt-4">
          <h4 className="text-gray-900 text-3xl font-bold dark:text-white">
            {total}
          </h4>
          <span className="text-gray-600 text-sm font-medium dark:text-gray-2">
            {title}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-1">
          <span
            className={`flex items-center gap-1 rounded-full ${
              levelUp
                ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
            } px-2 py-0.5 text-sm font-medium`}
          >
            {rate}
            {levelUp ? (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
          <span className="text-gray-500 text-sm dark:text-gray-2">
            vs last month
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  const cars = [
    { id: 1, src: "./images/car1.png", alt: "Luxury Car 1" },
    { id: 2, src: "./images/welcome.png", alt: "Luxury Car 2" },
    { id: 3, src: "./images/man.png", alt: "Luxury Car 3" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % cars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [userCount, setUserCount] = useState<number | null>(null);
  const [vehicleCount, setVehicleCount] = useState<number | null>(null);
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const db = getFirestore();
        const usersCollection = collection(db, "users");
        const userSnapshot = await getDocs(usersCollection);
        setUserCount(userSnapshot.size); // Set the number of users
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchUserCount();
  }, []);
  useEffect(() => {
    const fetchVehicleCount = async () => {
      try {
        const db = getFirestore();
        const vehicleCollection = collection(db, "vehicle_db");
        const vehicleSnapshot = await getDocs(vehicleCollection);
        setVehicleCount(vehicleSnapshot.size);
      } catch (error) {
        console.error("Error fetching vehicle count:", error);
      }
    };
    fetchVehicleCount();
  }, []);

  return (
    <div className="from-gray-50 to-gray-100 min-h-screen bg-gradient-to-br">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-20">
        <div className="relative mb-20 flex flex-wrap items-center justify-between">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full space-y-8 md:w-1/2"
          >
            <div className="space-y-6">
              <h1 className="text-gray-800 text-4xl font-extrabold leading-tight lg:text-5xl">
                Welcome to
                <br />
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  KarConnect Dashboard
                </span>
              </h1>

              <Typewriter
                options={{
                  strings: [
                    "Manage Your Rentals",
                    "Grow Your Business",
                    "Track Performance",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />

              <p className="text-gray-600 max-w-xl text-lg leading-relaxed">
                Monitor your business performance, track rentals, and manage
                your fleet all in one place. Get real-time insights and make
                data-driven decisions.
              </p>
            </div>
          </motion.div>

          {/* Right Content - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mt-10 w-full md:mt-0 md:w-1/2"
          >
            <div className="relative h-[400px] w-full">
              {cars.map((car, index) => (
                <motion.div
                  key={car.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: currentImage === index ? 1 : 0,
                    scale: currentImage === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full w-full">
                    <Image
                      src={car.src}
                      alt={car.alt}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Carousel Navigation */}
            <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
              {cars.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentImage === index
                      ? "w-6 bg-purple-600"
                      : "bg-gray-300 w-2"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <StatCard
            icon={FiDollarSign}
            title="Total Revenue"
            total="Rs 25000"
            rate="+2.5%"
            levelUp={true}
          />
          <StatCard
            icon={FaCar}
            title="Active Vehicles"
            total={`${vehicleCount ?? "Loading..."}`}
            rate="+3.2%"
            levelUp={true}
          />
          <StatCard
            icon={FiUsers}
            title="Total Users"
            total={`${userCount ?? "Loading..."}`}
            rate="-0.8%"
            levelUp={false}
          />
        </motion.div>
      </div>
    </div>
  );
}
function localGetFirestore() {
  throw new Error("Function not implemented.");
}
