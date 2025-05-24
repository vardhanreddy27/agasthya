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
            We collaborate with dedicated farmers who hand-pick the finest quality oats, ensuring both purity and sustainability. We prioritize sustainability at every step. Our oats are sourced responsibly, processed using energy-efficient methods, and packaged with eco-friendly materials.
          </p>
        </div>
      ),
    },
    {
      title: "Farm to Factory",
      content: (
        <div className="mb-14">
          <div className="mb-4">
            <Image
              src="/farmtofactory.jpg"
              alt="Farm to Factory"
              width={1000}
              height={imageHeight}
              className="object-cover rounded-lg w-full h-[250px]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm">
            From farm to factory, we prioritize sustainability at every step. Our oats are sourced responsibly, processed using energy-efficient methods, and packaged with eco-friendly materials. We are committed to a zero-carbon footprint, ensuring that every batch of oats you enjoy is not only healthy for you but also kind to the planet.
          </p>
        </div>
      ),
    },
    {
      title: "Quality Check & Cleaning",
      content: (
        <div className="mb-14">
          <div className="mb-4">
            <Image
              src="/cleaning.jpg"
              alt="Quality Check & Cleaning"
              width={1000}
              height={imageHeight}
              className="object-cover rounded-lg w-full h-[250px]"
            />
          </div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-2">
            After sourcing, our oats undergo a meticulous quality check and multi-stage cleaning process to ensure only the purest grains reach your table.
          </p>
          <ul className="list-none text-neutral-800 dark:text-neutral-200 text-sm space-y-1">
            <li className="flex items-start">
              <span className="mr-2">✓</span> Advanced sorting technology removes impurities.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Multiple cleaning cycles eliminate dust and foreign particles.
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span> Strict hygiene standards maintain oat purity and freshness.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Traditional Stone Milling & Packing",
      content: (
        <div className="mb-8">
          <div className="mb-4">
            <Image
              src="/milling.jpg"
              alt="Traditional Stone Milling & Packing"
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
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
