"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ingredients = [
  { name: "Sorghum", description: "Rich in fiber and gluten free", image: "/jowar.webp" },
  { name: "Pearl Millet", description: "Packed with iron and boosts energy", image: "/bajra.webp" },
  { name: "Finger Millet", description: "Improves digestion", image: "/ragi.webp" },
  { name: "Quinoa", description: "Rich in Fibre for a Healthy Gut", image: "/corn.webp" },
  { name: "Pumpkin & Sunflower seeds", description: "Boosts heart health", image: "/pumpkin.webp" },
  { name: "Almonds & Cashews", description: "Lowers cholesterol levels", image: "/almonds.webp" },
  { name: "Mixed Berries", description: "Anti-inflammatory properties", image: "/raisins.webp" },
  { name: "Flax,Chia & Watermelon seeds", description: "High in Omega-3 and fiber", image: "/chiaseeds.webp" },
];

function Ingredients() {
  const cardRefs = useRef([]);

  useEffect(() => {
  cardRefs.current.forEach((el, index) => {
    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  });
}, []);


  return (
    <div className="bg-[#F6F1EB] py-6">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#9D252D] my-6">
        Powerhouse Ingredients
      </h1>

      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {ingredients.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="flex flex-col items-center text-center opacity-0"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-full"
                />
              </div>
              <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Ingredients;
