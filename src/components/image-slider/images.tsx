"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./images-slider";
import Image from "next/image";
import { FlipWords } from "./images-slider";

export function ImagesSliderDemo() {
  const images = [
    "./images/Carousal/carousel-1.jpg",
    "./images/Carousal/carousel-2.jpg",
    "./images/Carousal/hyundai-motor-group-bfLoXCRijvQ-unsplash.jpg",
  ];
  const words = ["affordable", "convenient", "flexible", "luxurious"];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-50 flex w-full flex-col items-start justify-start px-4 sm:px-8 lg:px-16"
      >
        <div className="ml-15">
          <div className="ml-10 flex-col sm:ml-0">
            <div className="flex h-[10rem] items-start justify-start">
              <div className="text-3xl font-normal text-white sm:text-5xl">
                Rent
                <FlipWords
                  className="text-3xl font-normal text-white sm:text-5xl"
                  words={words}
                />
                <br />
                <span className="inline">space with</span>{" "}
                <span className="inline text-5xl text-white">KarConnect</span>
              </div>
            </div>
            <button className="relative mt-4 rounded-full border border-blue-500/20 bg-blue-300/10 px-6 py-4 text-white backdrop-blur-sm">
              <span>Join now →</span>
              <div className="absolute inset-x-0 -bottom-px mx-auto h-px w-3/4 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Render images directly using Image component */}
      <div className="relative h-full w-full">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Carousel image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        ))}
      </div>
    </ImagesSlider>
  );
}

export function FlipWordsDemo() {
  return <div></div>;
}
