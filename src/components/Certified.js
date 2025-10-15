"use client";

import { useState } from "react";
import Image from "next/image";

const certData = [
  {
    img: "https://img.freepik.com/premium-vector/green-gradient-halal-food-certified-stamp-sticker-with-stars-vector-illustration_723710-407.jpg",
    preview: "/halal.jpeg",
    title: "Halal Certified",
    desc: "Certified for meeting Halal compliance in food safety and preparation processes.",
    more: "This ensures that all raw materials, preparation methods, and handling comply with Islamic dietary laws and are verified by accredited Halal bodies.",
  },
  {
    img: "/hacp.png",
    preview: "/haccp.jpg",
    title: "HACCP Certified",
    desc: "Complies with European Union standards for organic food production.",
    more: "This certification confirms our commitment to sustainability and non-GMO, chemical-free farming practices aligned with EU regulations.",
  },
  {
    img: "https://i.pinimg.com/736x/0c/42/43/0c42438b9ee32255e18497d14d024547.jpg",
    preview: "/gmp.jpg",
    title: "GMP Certified",
    desc: "Accredited by the Japanese Agricultural Standards for organic agriculture.",
    more: "Our compliance with JAS ensures strict quality control and traceability in production, packaging, and distribution of organic goods.",
  },
  {
    img: "https://www.certification-india.com/wp-content/uploads/food-safety-and-standards-authority-of-india-logo.png",
    preview: "/fsscv.jpg",
    title: "FSSAI Approved",
    desc: "Licensed by the Food Safety and Standards Authority of India.",
    more: "FSSAI licensing ensures our products meet national hygiene, safety, and labeling standards before reaching Indian consumers.",
  },
  {
    img: "https://www.prepol.com/wp-content/uploads/2024/04/FDA-1.png",
    preview: "/usfda.jpg",
    title: "US FDA",
    desc: "Registered with the U.S. Food and Drug Administration for export compliance.",
    more: "This reflects our eligibility for export into the U.S., assuring buyers of our adherence to FDA-monitored processes and food safety.",
  },
  {
  img: "/brclogo.png",
  preview: "/brc.jpg",
  title: "BRC Food Safety",
  desc: "Certified to the BRCGS Global Standard for Food Safety (GFSI-recognized).",
  more: "BRC certification confirms HACCP-based food safety plans, GMP and hygiene controls, site and equipment standards, allergen and supplier management, full traceability, and compliance with retailer and legal requirements."
},

];

export default function Certified() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-8 px-4 bg-white mt-16 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold tracking-wide text-gray-800">
            Our Certifications Say It All
          </h2>
          <p className="text-gray-600 mt-1 mb-16 max-w-2xl mx-auto text-sm">
            We comply with internationally recognized quality and safety standards to ensure absolute trust and compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certData.map((cert, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="rounded-lg bg-white p-3 border border-gray-200"
            >
              <div className="relative w-full h-44 mb-3 rounded overflow-hidden">
                <div
                  className={`absolute inset-0 ${
                    cert.title === "FSSAI Approved"
                      ? "p-6 scale-90"
                      : ""
                  }`}
                >
                  <Image
                    src={
                      hoveredIndex === index && cert.preview
                        ? cert.preview
                        : cert.img
                    }
                    alt={cert.title}
                    fill
                    className="object-contain transition duration-300 ease-in-out"
                    unoptimized
                  />
                </div>
              </div>

              <h3 className="text-base font-semibold text-gray-800 text-center mb-1">
                {cert.title}
              </h3>

              <p className="text-sm text-gray-600 text-center">
                {cert.desc}
                {expandedIndex === index && (
                  <span className="text-gray-500"> {cert.more}</span>
                )}
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-[rgb(157,37,45)] text-sm font-medium  ml-1 inline"
                >
                  {expandedIndex === index ? "Read Less" : "Read More"}
                </button>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
