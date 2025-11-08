import React from "react";
import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Nutrix",
    description:
      "Explore our wholesome range of oat-based products, crafted for a healthy lifestyle. From instant oats to tasty granola, Nutrix has your nutritious cravings covered.",
    image: "/nutrix.png",
    link: "/Nutrixmenu",
  },
  {
    name: "Farmik",
    description:
      "Discover our premium dairy products made with farm-fresh goodness. From milk and paneer to traditional ghee, Farmik brings purity to your table.",
    image: "/farmiklogo.png",
    link: "/Farmikmenu",
  },
];

export default function Brandsmain() {
  return (
    <section className="w-full px-6 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Our Trusted Brands
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At Agasthya SuperFoods, we proudly bring you excellence through our
          dedicated brands — Nutrix and Farmik. Each crafted to meet your
          health and wellness needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand) => (
            <Link
              key={brand.name}
              href={brand.link}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="relative h-64 w-full bg-gradient-to-br from-[#fdf0f3] to-[#f9f9f9] flex items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={200}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {brand.name}
                </h3>
                <p className="text-gray-600 text-sm">{brand.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
