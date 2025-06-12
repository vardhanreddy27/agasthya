"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ---------- Fixed-size card with instant carousel ---------- */
function Card({ title, imageUrls = [], description }) {
  const gallery = imageUrls.length ? imageUrls : ["/placeholder.webp"];
  const [idx, setIdx] = useState(0);

  const change = (dir) => {
    setIdx((p) =>
      dir === "next"
        ? (p + 1) % gallery.length
        : (p - 1 + gallery.length) % gallery.length
    );
  };

  const [label = "", value = ""] = (description ?? "").split(/:\s*/);

  return (
    <div className="w-[350px] h-[380px] bg-[#dcac71] rounded-2xl overflow-hidden shadow-md flex flex-col">
      {/* Carousel */}
      <div className="relative h-[300px]">
        {gallery.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`${title} ${i + 1}`}
            width={1000}
            height={300}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-150 ${
              i === idx ? "opacity-100 z-10" : "opacity-0"
            }`}
            priority={i === idx}
          />
        ))}

        {gallery.length > 1 && (
          <>
            <button
              onClick={() => change("prev")}
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-[#ffffff]/80 p-1 rounded-full hover:scale-110 transition z-20"
            >
              <FiChevronLeft size={18} />
            </button>
            <button
              onClick={() => change("next")}
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-[#ffffff]/80 p-1 rounded-full hover:scale-110 transition z-20"
            >
              <FiChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      {/* Text content */}
      <div className="flex-1 px-3 py-2 text-center flex flex-col justify-center items-center gap-0.5">
        <h3 className="text-[1.5rem] font-semibold text-white leading-tight truncate w-full">
          {title}
        </h3>
        {description && (
          <p className="text-xs text-white leading-snug line-clamp-2 w-full">
            <strong className="font-medium">{label && `${label}: `}</strong>
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

/* ---------- Products section ---------- */
export default function Products() {
  const products = [
    { title: "Corn Flakes", imageUrls: ["/cornflake.jpg"] },
    { title: "Frosted Flakes", imageUrls: ["/frostedflakes.webp"] },
    {
      title: "Quinoa Cereals",
      imageUrls: ["/quinoa.webp", "/quinoa.webp", "/quinoa.webp"],
      description:
        "Flavors : Honey & Almond , Cereal Flakes (No Added Sugar) , Fruit & Nut (No Added Sugar) , Fruit & Nut",
    },
    {
      title: "Kids Range",
      imageUrls: ["/kids.webp", "/kids.webp"],
      description: "Flavors : Choco Flakes , Froot Loops , Choco Fills",
    },
    {
      title: "Millet Muesli",
      imageUrls: ["/muesli.webp", "/muesli.webp"],
      description: "Flavors : Berry Blast , Dark Chocolate , Nutty Crunchy",
    },
    {
      title: "Porridges",
      imageUrls: ["/porridge.webp"],
      description:
        "Flavors : Apple-Cinnamon , Mixed Chocolate , Mixed Vegetables , Tomato Tangy",
    },
    {
      title: "NutriFusion Health Mix",
      imageUrls: ["/farmik.webp", "/vanilla.webp", "/van.webp"],
      description: "Flavors : Vanilla , Strawberry",
    },
    {
      title: "Corn Rings",
      imageUrls: ["/rings.webp"],
      description: "Flavors : Cheese , Sour Cream & Onion , Pizza , Barbecue",
    },
    {
      title: "Wavy Chips",
      imageUrls: ["/wavy.webp"],
      description: "Flavors : Barbecue , Sweet Chilli , Lemon , Sour Cream",
    },
    {
      title: "Corn Balls",
      imageUrls: ["/balls.webp"],
      description: "Flavors : BBQ Sweet Chilli , Pizza , Cheese , Sour Cream Onion",
    },
    {
      title: "Multi Millet Vermicelli",
      imageUrls: ["/multimilletvermicelli.webp"],
    },
    {
      title: "Bars",
      imageUrls: ["/bars.webp", "/bars.webp"],
      description:
        "Flavors : Meal Replacement , Almond Power Crunch , Cranberry Choco , Peanut Cocoa",
    },
  ];

  return (
    <section className="bg-[#fdfdfd] py-16 px-4 sm:px-16">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          <span className="relative z-10 bg-white px-3">Our Products</span>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-24 h-[3px] bg-[rgb(157,37,45)] mt-2"></div>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Mr. Flakes food products are an innovative, value-added solution in the packaged-food space.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
        {products.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
