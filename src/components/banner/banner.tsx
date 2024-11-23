// import React from "react";
// import { MapPin, Shield } from "lucide-react";
// import { motion } from "framer-motion";

// const CarRentalBanner = () => {
//   return (
//     <div className="relative h-64 w-full overflow-hidden bg-white">
//       {/* Diagonal background */}
//       <motion.div
//         className="absolute right-0 top-0 h-full w-3/4 translate-x-20 -skew-x-12 transform bg-sky-100"
//         initial={{ opacity: 0, x: 100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       />

//       {/* Content container */}
//       <div className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-4">
//         {/* Left side: Car image */}
//         <motion.div
//           className="w-1/2"
//           initial={{ opacity: 0, x: -100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <img
//             src="./images/Carousal/carousel-1.jpg"
//             alt="Luxury car rental"
//             className="-mt-4 h-48 w-auto -translate-x-6 transform object-contain"
//           />
//         </motion.div>

//         {/* Right side: Content */}
//         <motion.div
//           className="w-1/2 space-y-6 pr-8 text-right"
//           initial={{ opacity: 0, x: 100 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-gray-800 text-3xl font-bold">
//             Rent a car from <span className="text-blue-600">$99</span>/day
//           </h2>

//           <div className="space-y-3">
//             <div className="text-gray-600 flex items-center justify-end gap-2">
//               <span className="text-sm">Any where and any time you want</span>
//               <MapPin className="h-4 w-4 text-blue-600" />
//             </div>

//             <div className="text-gray-600 flex items-center justify-end gap-2">
//               <span className="text-sm">
//                 Extra insurance and extras for VIPs
//               </span>
//               <Shield className="h-4 w-4 text-blue-600" />
//             </div>
//           </div>

//           {/* Pinterest button */}
//           <motion.button
//             className="bg-red-600 hover:bg-red-700 inline-flex items-center rounded-full px-4 py-2 text-white transition-colors"
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//           >
//             <svg
//               className="mr-2 h-4 w-4"
//               viewBox="0 0 24 24"
//               fill="currentColor"
//             >
//               <path d="M12 0a12 12 0 0 0-4.373 23.178c-.01-.937-.004-2.062.244-3.082l1.8-7.616s-.446-.894-.446-2.216c0-2.076 1.203-3.627 2.7-3.627 1.274 0 1.886.956 1.886 2.1 0 1.28-.814 3.195-1.235 4.97-.35 1.482.744 2.692 2.207 2.692 2.647 0 4.68-2.788 4.68-6.82 0-3.57-2.564-6.063-6.235-6.063-4.253 0-6.747 3.18-6.747 6.47 0 1.282.496 2.662 1.114 3.406.123.149.14.28.103.433l-.416 1.698c-.066.277-.218.338-.503.204-1.88-.876-3.058-3.64-3.058-5.856 0-4.699 3.407-9.014 9.85-9.014 5.17 0 9.194 3.684 9.194 8.606 0 5.132-3.236 9.258-7.728 9.258-1.507 0-2.925-.782-3.41-1.706l-.928 3.53c-.337 1.3-1.248 2.925-1.857 3.92A12 12 0 1 0 12 0z" />
//             </svg>
//             Pinterest
//           </motion.button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default CarRentalBanner;

// import Image from "next/image";
// import { FiSearch } from "react-icons/fi";

// export default function Home() {
//   return (
//     <div className="bg-gray-50 flex min-h-screen items-center justify-center">
//       <div className="container mx-auto px-6 md:px-12 lg:px-20">
//         {/* Main Section */}
//         <div className="flex flex-wrap items-center justify-between">
//           {/* Left Content */}
//           <div className="w-full space-y-6 md:w-1/2">
//             <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
//               NEW
//             </span>
//             <h1 className="text-gray-800 text-4xl font-extrabold leading-tight lg:text-5xl">
//               Manage Your <br />
//               <span className="text-purple-600">Car Rentals</span> & Grow Your
//               Business
//             </h1>
//             <p className="text-gray-600">
//               Welcome to your dashboard. Here you can manage your car rentals,
//               view statistics, and more.
//             </p>
//             {/* Search Bar */}
//           </div>

//           {/* Right Content */}
//           <div className="relative mt-10 flex w-full items-center justify-center md:mt-0 md:w-1/2">
//             <Image
//               src="./images/car1.png"
//               alt="Luxury Car"
//               width={1000}
//               height={1000}
//               className="rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { FiSearch, FiArrowRight } from "react-icons/fi";
// import { motion } from "framer-motion";

// const cars = [
//   { id: 1, src: "./images/car1.png", alt: "Luxury Car 1" },
//   { id: 2, src: "./images/car1.png", alt: "Luxury Car 2" },
//   { id: 3, src: "./images/car1.png", alt: "Luxury Car 3" },
// ];

// export default function Home() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % cars.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="from-gray-50 to-gray-100 flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br">
//       <div className="container mx-auto px-6 py-12 md:px-12 lg:px-20">
//         <div className="flex flex-wrap items-center justify-between">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full space-y-8 md:w-1/2"
//           >
//             <div className="space-y-6">
//               <motion.span
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-block cursor-pointer rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600"
//               >
//                 NEW FEATURE
//               </motion.span>

//               <h1 className="text-gray-800 text-4xl font-extrabold leading-tight lg:text-6xl">
//                 Manage Your{" "}
//                 <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                   Car Rentals
//                 </span>
//                 <br />& Grow Your Business
//               </h1>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Transform your rental business with our powerful management
//                 dashboard. Track performance, handle bookings, and scale your
//                 operations seamlessly.
//               </p>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-6">
//               {[
//                 { label: "Active Cars", value: "150+" },
//                 { label: "Happy Clients", value: "2.5k+" },
//                 { label: "Revenue", value: "$1M+" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 + index * 0.1 }}
//                   className="text-center"
//                 >
//                   <div className="text-gray-800 text-2xl font-bold">
//                     {stat.value}
//                   </div>
//                   <div className="text-gray-600 text-sm">{stat.label}</div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Right Content - Carousel */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative mt-10 w-full md:mt-0 md:w-1/2"
//           >
//             <div className="relative h-[400px] w-full">
//               {cars.map((car, index) => (
//                 <motion.div
//                   key={car.id}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{
//                     opacity: currentImage === index ? 1 : 0,
//                     scale: currentImage === index ? 1 : 0.8,
//                   }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                 >
//                   <div className="relative h-full w-full">
//                     <Image
//                       src={car.src}
//                       alt={car.alt}
//                       fill
//                       className="object-contain"
//                       priority={index === 0}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Carousel Navigation Dots */}
//             <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
//               {cars.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImage(index)}
//                   className={`h-2 w-2 rounded-full transition-all ${
//                     currentImage === index ? "w-6 bg-purple-600" : "bg-gray-300"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { FiSearch, FiArrowRight, FiDollarSign, FiUsers } from "react-icons/fi";
// import { FaCar } from "react-icons/fa";
// import { motion } from "framer-motion";

// const cars = [
//   { id: 1, src: "./images/car1.png", alt: "Luxury Car 1" },
//   { id: 2, src: "./images/car2.png", alt: "Luxury Car 2" },
//   { id: 3, src: "./images/car3.png", alt: "Luxury Car 3" },
// ];

// interface StatCardProps {
//   icon: React.ComponentType;
//   title: string;
//   total: string;
//   rate: string;
//   levelUp: boolean;
// }

// const StatCard: React.FC<StatCardProps> = ({
//   icon: Icon,
//   title,
//   total,
//   rate,
//   levelUp,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       whileHover={{ y: -5, transition: { duration: 0.2 } }}
//       className="border-gray-200 dark:border-gray-700 dark:bg-gray-800 rounded-xl border bg-white p-6 shadow-sm transition-all hover:shadow-md"
//     >
//       <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900">
//         <Icon
//           className="h-6 w-6 text-blue-600 dark:text-blue-400"
//           {...(Icon as any).props}
//         />
//       </div>

//       <div className="mt-4 flex items-end justify-between">
//         <div>
//           <h4 className="text-gray-900 text-2xl font-bold dark:text-white">
//             {total}
//           </h4>
//           <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
//             {title}
//           </span>
//         </div>

//         <span
//           className={`flex items-center gap-1 text-sm font-medium ${
//             levelUp ? "text-green-600" : "text-red-600"
//           }`}
//         >
//           {rate}
//           {levelUp ? (
//             <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           ) : (
//             <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
//               <path
//                 fillRule="evenodd"
//                 d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           )}
//         </span>
//       </div>
//     </motion.div>
//   );
// };

// export default function Home() {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % cars.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="from-gray-50 to-gray-100 min-h-screen bg-gradient-to-br">
//       {/* Stats Cards Section */}
//       <div className="container mx-auto px-6 pt-8 md:px-12 lg:px-20">
//         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           <StatCard
//             icon={FiDollarSign}
//             title="Total Revenue"
//             total="$84,250"
//             rate="+2.5%"
//             levelUp={true}
//           />
//           <StatCard
//             icon={FaCar}
//             title="Active Vehicles"
//             total="156"
//             rate="+3.2%"
//             levelUp={true}
//           />
//           <StatCard
//             icon={FiUsers}
//             title="Total Users"
//             total="2,420"
//             rate="-0.8%"
//             levelUp={false}
//           />
//         </div>
//       </div>

//       {/* Main Hero Section */}
//       <div className="container mx-auto px-6 py-12 md:px-12 lg:px-20">
//         <div className="flex flex-wrap items-center justify-between">
//           {/* Left Content */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-full space-y-8 md:w-1/2"
//           >
//             <div className="space-y-6">
//               <motion.span
//                 whileHover={{ scale: 1.05 }}
//                 className="inline-block cursor-pointer rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-600"
//               >
//                 NEW FEATURE
//               </motion.span>

//               <h1 className="text-gray-800 text-4xl font-extrabold leading-tight lg:text-6xl">
//                 Manage Your{" "}
//                 <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
//                   Car Rentals
//                 </span>
//                 <br />& Grow Your Business
//               </h1>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 Transform your rental business with our powerful management
//                 dashboard. Track performance, handle bookings, and scale your
//                 operations seamlessly.
//               </p>
//             </div>

//             {/* CTA Buttons */}
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="flex flex-col gap-4 sm:flex-row"
//             >
//               <button className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white transition-shadow hover:shadow-lg">
//                 Get Started
//                 <FiArrowRight className="h-5 w-5" />
//               </button>
//               <button className="border-gray-200 text-gray-800 rounded-full border-2 bg-white px-8 py-4 font-semibold transition-colors hover:border-purple-600">
//                 View Demo
//               </button>
//             </motion.div>
//           </motion.div>

//           {/* Right Content - Carousel */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="relative mt-10 w-full md:mt-0 md:w-1/2"
//           >
//             <div className="relative h-[400px] w-full">
//               {cars.map((car, index) => (
//                 <motion.div
//                   key={car.id}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{
//                     opacity: currentImage === index ? 1 : 0,
//                     scale: currentImage === index ? 1 : 0.8,
//                   }}
//                   transition={{ duration: 0.5 }}
//                   className="absolute inset-0"
//                 >
//                   <div className="relative h-full w-full">
//                     <Image
//                       src={car.src}
//                       alt={car.alt}
//                       fill
//                       className="object-contain"
//                       priority={index === 0}
//                     />
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Carousel Navigation */}
//             <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 gap-2">
//               {cars.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentImage(index)}
//                   className={`h-2 rounded-full transition-all ${
//                     currentImage === index
//                       ? "w-6 bg-purple-600"
//                       : "bg-gray-300 w-2"
//                   }`}
//                 />
//               ))}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

//--------------------------------------------------------------------------------

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
