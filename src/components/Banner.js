"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Flame,
  ShieldCheck,
  Sparkles,
  Star,
  Leaf,
  ThumbsUp,
} from "lucide-react";

const slides = [
  {
    image: "/chips.webp",
    heading: "Crispy Delight, Every Bite",
    description:
      "Dive into the crunchy world of Nutrix Chips – made from quality ingredients and bursting with flavor.",
    features: [
      { icon: Flame, text: "4 Delicious Flavors" },
      { icon: Leaf, text: "No Preservatives" },
      { icon: Sparkles, text: "Ultimate Crunch" },
    ],
  },
  {
    image: "/milkmix.webp",
    heading: "Daily Nutrition for Growing Kids",
    description:
      "Nutrix Nutri Fusion – A multigrain powerhouse enriched with essential vitamins and minerals for active kids.",
    features: [
      { icon: ShieldCheck, text: "Boosts Immunity" },
      { icon: Star, text: "Builds Strength" },
      { icon: Sparkles, text: "Energizes Daily" },
    ],
  },
  {
    image: "/froot.webp",
    heading: "Tasty Trio for Happy Mornings",
    description:
      "Start your kid’s day with a fun mix of flavor and nutrition—featuring Froot Loops, Choco Fills, and Choco Flakes from Mr. Flakes Nutrix.",
    features: [
      { icon: ThumbsUp, text: "Kids’ Favorite Picks" },
      { icon: Sparkles, text: "Bursting with Flavor & Color" },
      { icon: ShieldCheck, text: "Fortified with Key Vitamins" },
    ],
  },
];


function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[current];
return (
  <div className="w-full h-auto pt-9 bg-[#f7efdf] flex flex-col lg:flex-row overflow-hidden relative">
    {/* Left - Slideshow */}
    <div className="w-full lg:w-1/2 h-auto flex items-center justify-center overflow-hidden relative px-4">
      <div
        className="flex transition-transform duration-[4500ms] ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            className="w-full flex-shrink-0 flex justify-center items-center"
            key={index}
          >
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              width={600}
              height={600}
              className="object-contain w-full h-auto max-h-[400px] md:max-h-[500px] lg:max-h-full"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>

    {/* Right - Dynamic Text */}
    <div className="w-full lg:w-1/2 h-auto pt-6 lg:pt-7 flex flex-col justify-center px-6 text-black transition-opacity duration-1000 ease-in-out">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight text-center lg:text-left">
        {currentSlide.heading}
      </h2>
      <p className="text-lg md:text-xl mt-2 text-center lg:text-left">
        {currentSlide.description}
      </p>

      {/* Icon + Text Feature List */}
      <div className="flex flex-col gap-3 py-6 items-center lg:items-start">
        {currentSlide.features.map((item, idx) => (
          <div className="flex items-center gap-3" key={idx}>
            <item.icon className="w-6 h-6 text-[rgb(157,37,45)]" />
            <span className="text-base md:text-lg">{item.text}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:justify-start">
     <div className="flex justify-center lg:justify-start mb-10 lg:mb-0">
  <button className="bg-[rgb(157,37,45)] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition w-fit">
    Shop Now
  </button>
</div>
      </div>
    </div>
  </div>
);
}

export default Banner;
