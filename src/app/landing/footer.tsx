import React from "react";
import Image from "next/image";
import { Mail, Phone, Printer, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-blue-950 to-blue-800 text-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-64 w-64 rounded-full bg-blue-700/10"></div>
        <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-blue-700/10"></div>
      </div>

      <div className="relative">
        {/* Main content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* About Us */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-wide text-blue-200">
                About Us
              </h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                We are Nitro Runners, a passionate team of three developers in
                our third year of studies. Our collaborative approach and
                diverse skill set enable us to create innovative solutions that
                exceed expectations. We're committed to staying at the forefront
                of technology while delivering exceptional results.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-wide text-blue-200">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {[
                  "About",
                  "Cars",
                  "Car Types",
                  "Team",
                  "Contact us",
                  "Terms & Conditions",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 group flex items-center text-sm transition-colors hover:text-white"
                    >
                      <span className="mr-2 h-1 w-2 bg-blue-400 transition-all group-hover:w-3"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-wide text-blue-200">
                Contact Info
              </h4>
              <ul className="space-y-3">
                <li className="text-gray-300 flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Colombo, Sri Lanka</span>
                </li>
                <li>
                  <a
                    href="mailto:info@example.com"
                    className="text-gray-300 flex items-center space-x-3 text-sm transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-blue-400" />
                    <span>info@example.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+94123456789"
                    className="text-gray-300 flex items-center space-x-3 text-sm transition-colors hover:text-white"
                  >
                    <Phone className="h-4 w-4 text-blue-400" />
                    <span>+94 123456789</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+94123456789"
                    className="text-gray-300 flex items-center space-x-3 text-sm transition-colors hover:text-white"
                  >
                    <Printer className="h-4 w-4 text-blue-400" />
                    <span>+94 123456789</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold tracking-wide text-blue-200">
                Connect With Us
              </h4>
              <div className="flex space-x-4">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="group relative flex h-10 w-10 items-center justify-center rounded-lg bg-blue-800/50 transition-transform hover:-translate-y-1"
                    >
                      <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100"></span>
                      <i className={`fab fa-${platform} relative z-10`}></i>
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800/30">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col items-center justify-between space-y-4 text-center md:flex-row md:space-y-0">
              <div className="text-gray-400 flex items-center space-x-2 text-sm">
                <span>Designed by</span>
                <Image
                  src="/images/logo/teamlogo.png"
                  alt="Team Logo"
                  width={150}
                  height={50}
                  className="object-cover"
                />
              </div>
              <div className="text-gray-400 text-sm">
                © 2024{" "}
                <a
                  href="https://gnklakshan.github.io/KarConnect_web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors hover:text-white"
                >
                  KarConnect Web
                </a>
                . All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
