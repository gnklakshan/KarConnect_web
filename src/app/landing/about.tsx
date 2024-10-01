"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState, useRef } from "react";
import Image from 'next/image';

interface CounterProps {
  icon: string;
  start: number;
  end: number;
  label: string;
}

const CounterItem: React.FC<CounterProps> = ({ icon, start, end, label }) => {
  const [count, setCount] = useState<number>(start);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const counterRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const refValue = counterRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (refValue) {
      observer.observe(refValue);
    }

    return () => {
      if (refValue) {
        observer.unobserve(refValue);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const incrementTime = Math.abs(Math.floor(2000 / (end - start))); // Adjust duration based on range
      let current = start;

      const counter = setInterval(() => {
        if (current < end) {
          current += 1;
          setCount(current);
        } else {
          clearInterval(counter);
        }
      }, incrementTime);

      return () => clearInterval(counter); // Cleanup on unmount
    }
  }, [isVisible, start, end]);

  return (
    <div className="text-center" ref={counterRef}>
      <div className="flex justify-center mb-4">
        <i className={`fas ${icon} text-3xl text-white`}></i>
      </div>
      <div className="my-3">
        <span className="text-white text-3xl font-bold">{count}</span>
        <span className="text-white text-3xl font-bold">+</span>
      </div>
      <h4 className="text-xl text-white">{label}</h4>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <div className='space-y-15'>
      <div className="flex flex-col overflow-hidden py-5 ml-25">
        <div className="flex flex-col xl:flex-row py-5 gap-5">
          {/* Left section */}
          <div className="flex-1">
            <div className="about-item">
              <div className="pb-5">
                <h1 className="text-5xl text-black mb-3">
                  KarConnect <span className="text-primary">About</span>
                </h1>
                <p className="mb-0 text-black text-center">
                  At KarConnect, we&apos;re committed to revolutionizing the way
                  people connect with automotive care. With a deep understanding
                  of the industry&apos;s challenges, we blend innovation with
                  convenience to deliver unmatched services to our customers. Our
                  goal is to make car maintenance and repairs effortless, ensuring
                  peace of mind on every journey.
                </p>
              </div>
              {/* Vision and Mission */}
              <div className="flex flex-col md:flex-row gap-4 text-black">
                <div className="border p-4 flex-1">
                  <div className="mb-4">
                    <Image
                      src="/images/product/about-icon-1.png"
                      width={80}
                      height={80}
                      alt="Vision Icon"
                    />
                  </div>
                  <h5 className="mb-3 text-3xl">Our Vision</h5>
                  <p className="mb-0 text-justify">
                    To create a world where vehicle maintenance is no longer a
                    hassle but a seamless experience, driven by technology, trust,
                    and transparency. We envision KarConnect as the leading
                    platform empowering drivers with smart solutions for their
                    automotive needs.
                  </p>
                </div>
                <div className="border p-4 flex-1">
                  <div className="mb-4">
                    <Image
                      src="/images/product/about-icon-2.png"
                      width={80}
                      height={80}
                      alt="Mission Icon"
                    />
                  </div>
                  <h5 className="mb-3 text-3xl">Our Mission</h5>
                  <p className="mb-0 text-justify">
                    To provide top-notch automotive services that are accessible,
                    reliable, and affordable for everyone. We strive to simplify
                    car care through cutting-edge technology, delivering superior
                    customer service, and building long-lasting relationships with
                    our clients.
                  </p>
                </div>
              </div>
              {/* Years of Experience */}
              <p className="my-4 text-black">
                With over 2 years of experience in the automotive industry, we&apos;ve
                mastered the art of delivering value:
              </p>
              <div className="flex flex-col md:flex-row gap-4 text-black">
                <div className="bg-secondary p-4 w-25 text-center rounded flex-1">
                  <h1 className="text-4xl text-white">2+</h1>
                  <h5 className="text-light mb-0">Years Of Experience</h5>
                </div>
                {/* Check Items */}
                <div className="flex-1">
                  <p className="mb-2">
                    <i className="fa fa-check-circle text-primary mr-2"></i>{" "}
                    Expertise you can trust
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check-circle text-primary mr-2"></i>{" "}
                    Seamless service
                  </p>
                  <p className="mb-2">
                    <i className="fa fa-check-circle text-primary mr-2"></i>{" "}
                    Innovative solutions
                  </p>
                  <p className="mb-0">
                    <i className="fa fa-check-circle text-primary mr-2"></i>{" "}
                    User Friendly
                  </p>
                </div>
              </div>
              {/* Button */}
              <div className="flex flex-col md:flex-row gap-4 mt-5">
                <button className="border text-sm font-medium bg-white border-neutral-200 hover:bg-blue-800 text-black px-6 py-4 rounded-full">
                  More About Us
                </button>
              </div>
            </div>
          </div>
          {/* Right section with images */}
          <div className="flex-1 flex relative">
            <div className="img-1 flex-1">
              <Image
                src="/images/product/about-img.jpg"
                width={600}
                height={500}
                className="rounded-lg"
                alt="Main Image"
              />
            </div>
            <div className="img-2 absolute top-90 left-1/4 w-3/4">
              <Image
                src="/images/product/about-img-1.jpg"
                width={400}
                height={300}
                className="rounded-lg"
                alt="Overlay Image"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-secondary py-5 flex items-center justify-center relative bg-cover bg-center h-[75vh]" // Full viewport height for centering
        style={{ backgroundImage: "url('/images/cover/fact-bg.jpg')" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 w-full justify-items-center z-10"> {/* Ensuring it's above the overlay */}
          <CounterItem icon="fa-thumbs-up" start={0} end={829} label="Happy Customers" />
          <CounterItem icon="fa-car-alt" start={0} end={56} label="Number of Cars" />
          <CounterItem icon="fa-id-badge" start={0} end={127} label="Car Owners" />
          <CounterItem icon="fa-handshake" start={0} end={589} label="Total Deals" />
        </div>
      </div>
    </div>
  );
};
