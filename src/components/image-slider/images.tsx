"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";
import { FlipWords } from "./images-slider";

export function ImagesSliderDemo() {
  const images = [
    "/images/Carousal/carousel-1.jpg",
    "/images/Carousal/carousel-2.jpg",
    "/images/Carousal/hyundai-motor-group-bfLoXCRijvQ-unsplash.jpg",
  ];
  const words = ["affordable", "convenient", "flexible", "luxurious"];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-start items-start px-4 sm:px-8 lg:px-16 w-full"
      >
        <div className="ml-15">
          <div className="ml-10 sm:ml-0 flex-col">
            <div className="h-[10rem] flex justify-start items-start">
              <div className="text-3xl sm:text-5xl font-normal text-white">
                Rent
                <FlipWords className="text-3xl sm:text-5xl font-normal text-white" words={words} />
                <br />
                <span className="inline">space with</span> <span className="text-5xl text-white inline">KarConnect</span>
              </div>
          
            </div>
            <button className="px-6 py-4 backdrop-blur-sm border bg-blue-300/10 border-blue-500/20 text-white rounded-full relative mt-4">
              <span>Join now →</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-500 to-transparent" />
            </button>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}

export function FlipWordsDemo() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
   <div></div>
  );
}
