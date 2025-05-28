"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "./Timeline";

export function TimelineDemo() {
  const imageHeight = 100; // Set your desired image height here

  const data = [
    {
      title: "Hand Picked Farmers ",
      content: (
        <div className="mb-14">
          <div className="mb-4">
            <Image
              src="/farmers.jpg"
              alt="Hand Picked Farmers"
              width={1000}
              height={imageHeight}
              className="object-cover rounded-lg w-full h-[250px]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">

At Agasthya Superfoods, we proudly collaborate with trusted, hand-picked farmers who share our commitment to quality and sustainability. Every batch of oats is carefully selected at the source to ensure maximum purity and nutritional integrity. From responsible sourcing to energy-efficient processing and eco-friendly packaging, sustainability is embedded into every step of our supply chain.          </p>
        </div>
      ),
    },
    {
      title: "Farm to Factory",
      content: (
        <div className="mb-14">
          <div className="mb-4">
            <Image
              src="/farmtofactory.webp"
              alt="Farm to Factory"
              width={1000}
              height={imageHeight}
              className="object-cover rounded-lg w-full h-[250px]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
From farm to factory, we prioritize sustainability at every step. Our ingredients are responsibly sourced from trusted farmers, processed using energy-efficient methods, and packaged with eco-conscious materials. At Agasthya Superfoods, we are committed to reducing our environmental impact — ensuring every product you enjoy supports both your health and the planet.          </p>
        </div>
      ),
    },
      {
      title: "Enhanced Extrusion Packing",
      content: (
        <div className="mb-8">
          <div className="mb-4">
            <Image
              src="/milling.webp"
              alt="Enhanced Extrusion Packing"
              width={1000}
              height={imageHeight}
              className="object-cover rounded-lg w-full h-[250px]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-2">
            We preserve the rich nutrients and authentic flavor of oats through traditional stone milling techniques.
          </p>
          <ul className="list-none text-neutral-800 dark:text-neutral-200 text-sm space-y-1">
            <li className="flex items-start">
              <span className="mr-2">✓</span> Slow milling process retains essential fiber and vitamins.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> No excessive heat – keeps oats naturally fresh.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Eco-friendly packaging ensures sustainability.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Quality Check & Packing",
      content: (
        <div className="mb-14">
          <div className="mb-4">
            <Image
              src="/factroy1.webp"
              alt="Quality Check & Packing"
              width={1000}
              height={imageHeight}
              className="object-cover rounded-lg w-full h-[250px]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-2">
After sourcing, every ingredient undergoes a meticulous quality check and a multi-stage cleaning process — ensuring only the finest grains and superfoods reach your table.



      </p>
          <ul className="list-none text-neutral-800 dark:text-neutral-200 text-sm space-y-1">
            <li className="flex items-start">
              <span className="mr-2">✅ </span>Precision Sorting: Advanced technology eliminates unwanted impurities.
            </li>
            <li className="flex items-start">
              <span className="mr-2">🌿 </span> Deep Cleaning Cycles: Multiple passes remove dust, husks, and foreign particles.
            </li>
            <li className="flex items-start">
              <span className="mr-2">🧼 </span> Hygiene Assured: Strict standards preserve natural purity, flavor, and freshness.    
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
