"use client";

import React, { useEffect, useRef } from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Band() {
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach((el, index) => {
      const icon = el.querySelector(".band-icon");
      const text = el.querySelector(".band-text");

      gsap.set([icon, text], {
        y: 50,
        opacity: 0,
        clipPath: "inset(100% 0% 0% 0%)",
      });

      gsap.to([icon, text], {
        y: 0,
        opacity: 1,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        stagger: 0.05,
      });
    });
  }, []);

  const features = [
    "100% Natural",
    "No Cholesterol",
    "No Added Sugar",
    "No Artificial Flavors",
  ];

  return (
    <div className="band-section py-4 border-t-[3px] border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:flex justify-between items-center gap-y-4 text-sm sm:text-base font-medium text-gray-900">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 overflow-hidden"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <BsPatchCheckFill className="text-black band-icon inline-block" />
              <span className="band-text inline-block">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Band;
