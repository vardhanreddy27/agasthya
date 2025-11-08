"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function ThreeDMarqueeDemo() {
  const images = [
    "/factory2.webp",
    "/factoryin1.webp",
    "/factory4.webp",
    "/factoryin5.webp",
    "/factory3.webp",
    "/factory1.webp",
    "/farmtofactory.webp",
  ];

  const captions = [
    "State-of-the-art production unit",
    "Certified hygienic processing area",
    "Modern automated facility",
    "Sustainable packaging systems",
    "Strategically located logistics",
    "From farm to factory, seamless",
    "Global export-ready infrastructure",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Image Slides */}
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`Factory Slide ${index}`}
          fill
          className={`absolute object-cover transition-opacity duration-1000 ease-in-out ${
            currentIndex === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Caption Box */}
      <div className="absolute top-4 right-4 z-10 bg-white/30 backdrop-blur-md text-black px-5 py-3 rounded-md text-sm font-medium shadow-md max-w-xs">
        {captions[currentIndex]}
      </div>
    </div>
  );
}
