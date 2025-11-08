"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Timeline } from "./Timeline";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ---------- Optimized Image Carousel ---------- */
function ImageCarousel({ src, images = [], alt, height = 250 }) {
  const gallery = images.length ? images : [src];
  const [idx, setIdx] = useState(0);

  const changeImage = (direction) => {
    setIdx((prev) =>
      direction === "next"
        ? (prev + 1) % gallery.length
        : (prev - 1 + gallery.length) % gallery.length
    );
  };

  return (
    <div className="relative mb-6 h-[250px] overflow-hidden rounded-lg">
      <div className="relative w-full h-full">
        <Image
          key={idx}
          src={gallery[idx]}
          alt={`${alt} ${idx + 1}`}
          width={1000}
          height={height}
          className="absolute w-full h-full object-cover transition-opacity duration-200 opacity-100"
          priority
        />
      </div>

      {gallery.length > 1 && (
        <>
          <button
            onClick={() => changeImage("prev")}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => changeImage("next")}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 dark:bg-black/50 p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <FiChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
}

/* ---------- Timeline Section ---------- */
export function TimelineDemo() {
  const data = [
    {
      title: "Hand Picked Farmers",
      content: (
        <div className="mb-14">
          <ImageCarousel
            images={["/farmers.jpg", "/farm.jpg", "/farm2.webp"]}
            alt="Hand Picked Farmers"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            At Agasthya Superfoods, we collaborate with rigorously vetted
            farmers, securing uncompromised grain quality while embedding
            sustainability across the supply chain.
          </p>
        </div>
      ),
    },
    {
      title: "Farm to Factory",
      content: (
        <div className="mb-14">
          <ImageCarousel
            images={[
              "/factory1.webp",
              "/factory2.webp",
              "/factory3.webp",
              "/factory4.webp",
            ]}
            alt="Farm to Factory"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            Our vertically integrated ecosystem optimizes energy-efficient
            processing and eco-conscious packaging to deliver maximum
            nutritional value with minimal environmental impact.
          </p>
        </div>
      ),
    },
    {
      title: "Enhanced Extrusion Packing",
      content: (
        <div className="mb-8">
          <ImageCarousel
            images={[
              "/milling.webp",
              "/factoryin1.webp",
              "/factoryin2.webp",
              "/factoryin3.webp",
              "/factoryin4.jpg",
              "/factoryin5.webp",
            ]}
            alt="Enhanced Extrusion Packing"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-2">
            Traditional stone-milling safeguards micro-nutrient density and
            authentic flavor.
          </p>
          <ul className="list-none text-neutral-800 dark:text-neutral-200 text-sm space-y-1">
            <li className="flex items-start">
              <span className="mr-2">✓</span> Slow milling retains fiber and
              vitamins.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Zero excessive heat preserves
              freshness.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Eco-friendly packaging reinforces
              sustainability.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Quality Check & Packing",
      content: (
        <div className="mb-14">
          <ImageCarousel
            images={["/pack2.webp", "/pack1.webp"]}
            alt="Quality Check & Packing"
          />
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-2">
            Multi-stage precision cleaning and AI-driven sorting ensure only the
            finest grains continue through the value chain.
          </p>
          <ul className="list-none text-neutral-800 dark:text-neutral-200 text-sm space-y-1">
            <li className="flex items-start">
              <span className="mr-2">✅</span> Advanced impurity elimination.
            </li>
            <li className="flex items-start">
              <span className="mr-2">🌿</span> Deep-clean cycles remove dust and
              husks.
            </li>
            <li className="flex items-start">
              <span className="mr-2">🧼</span> Strict hygiene preserves flavor
              integrity.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
