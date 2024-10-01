"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import Image from "next/image"; 

interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    link: "/app/landing", 
    icon: <span>🏠</span>,
  },
  {
    name: "About",
    link: "/app/landing/about", 
    icon: <span>ℹ️</span>,
  },
  {
    name: "Services",
    link: "/app/landing/services", 
    icon: <span>💼</span>,
  },
  {
    name: "Contact",
    link: "/app/landing/footer", 
    icon: <span>📞</span>,
  },
];

export const FloatingNav: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); 
  const [isClient, setIsClient] = useState(false); 

 
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSignIn = () => {
    router.push("/auth/signin"); 
  };

  if (!isClient) {
    return null; 
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className={twMerge(
          "flex w-full fixed top-0 inset-x-0 border border-transparent dark:border-white/[0.2] dark:bg-black bg-white shadow-lg z-[5000] py-2 px-4 md:px-8 items-center justify-between gap-10",
          className
        )}
      >
        {/* Business Logo and Name */}
        <div className="flex items-center space-x-2">
          <Image
            src="./images/logo/logo.svg"
            alt="KarConnect Logo"
            className="h-16 w-16"
            width={64} 
            height={64} 
          />
          <span className="text-3xl font-bold dark:text-white text-black">KarConnect</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="text-base relative dark:text-neutral-50 flex space-x-2 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 items-center "
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block">{navItem.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-black dark:text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            //xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Dropdown Menu for Mobile */}
        {isOpen && (
          <div className="absolute top-16 right-0 bg-white dark:bg-black shadow-lg rounded-md w-48 z-50">
            {navItems.map((navItem, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={navItem.link}
                className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-50 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)} // Close dropdown on click
              >
                {navItem.name}
              </Link>
            ))}
            <button
              onClick={handleSignIn}
              className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-50 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              Get Started
            </button>
          </div>
        )}

        {/* Desktop 'Get Started' Button */}
        <button
          onClick={handleSignIn}
          className="border text-sm font-medium bg-blue-500 relative border-neutral-200 hover:bg-blue-800 dark:border-white/[0.2] text-white dark:text-white px-6 py-4 rounded-full hidden md:block"
        >
          Get Started
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
