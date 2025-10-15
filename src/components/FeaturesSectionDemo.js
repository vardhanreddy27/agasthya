"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  FaCogs,
  FaRecycle,
  FaFlask,
  FaWarehouse,
  FaStream,
  FaGlobe,
} from "react-icons/fa";
import {  GiTestTubes,  GiModernCity } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);

export function FeaturesSectionDemo() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.set(card, {
        opacity: 0,
      });

      gsap.to(card, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        delay: i * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  const features = [
    {
      title: "State-of-the-Art Manufacturing",
      description:
        "Our factory is equipped with advanced automation and modern machinery that ensures precision, consistency, and large-scale output. We meet global food safety and hygiene standards.",
      icon: <GiModernCity className="text-indigo-600 text-3xl feature-animate" />,
    },
    {
      title: "Dual In-House Labs",
      description:
        "We maintain both a General Quality Lab and a dedicated Microbiology Lab to ensure every product batch meets stringent safety and nutritional standards.",
      icon: <GiTestTubes className="text-red-500 text-3xl feature-animate" />,
    },
    {
      title: "Robust R&D & Product Innovation",
      description:
        "Our in-house R&D team works closely with nutritionists and food technologists to create and refine health-focused food products.",
      icon: <FaFlask className="text-yellow-500 text-3xl feature-animate" />,
    },
    {
      title: "Cost-Effective Manufacturing",
      description:
        "We optimize supply chains and leverage our scale to deliver high-quality products at highly competitive pricing.",
      icon: <FaCogs className="text-blue-500 text-3xl feature-animate" />,
    },
    {
      title: "End-to-End Traceability",
      description:
        "From raw material sourcing to final packaging, every step in our production process is fully traceable for superior quality control.",
      icon: <FaStream className="text-green-500 text-3xl feature-animate" />,
    },
    {
      title: "Sustainably Engineered Supply Chain",
      description:
        "Our operations reduce food waste, maximize resource efficiency, and partner with sustainable ingredient suppliers.",
      icon: <FaRecycle className="text-emerald-600 text-3xl feature-animate" />,
    },
    {
      title: "Flexible Multi-Category Production",
      description:
        "We manufacture a wide range of product types — from cereals and bars to mixes and snacks — ideal for multi-SKU brands.",
      icon: <FaWarehouse className="text-purple-500 text-3xl feature-animate" />,
    },
    {
      title: "Global-Standard Compliance",
      description:
        "We comply with FSSAI, ISO, HACCP and more — ensuring we are audit-ready for export and private-label partnerships.",
      icon: <FaGlobe className="text-blue-500 text-3xl feature-animate" />,
    },
  ];

  return (
    <section className="py-10 px-4 md:px-10 bg-white text-neutral-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Agasthya</h2>
        <p className="text-base md:text-lg pt-3 text-gray-700">
          Committed to Your Health and Wellness
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="group p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-start bg-neutral-50 overflow-hidden"
          >
            <div className="mb-4 text-neutral-700 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 feature-animate">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed feature-animate">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
