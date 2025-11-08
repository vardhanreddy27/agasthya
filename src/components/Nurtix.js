import React from "react";
import Image from "next/image";
import Products from "./Products";

function Nurtix() {
  return (
    <section className="bg-[#fdfdfd] text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[rgb(157,37,45)] drop-shadow-sm mb-4">
          Welcome to Nutrix
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A wholesome sub-brand of Agasthya SuperFoods, Nutrix is dedicated to delivering
          premium-quality oats-based products that blend health and taste in every bite.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mb-10 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 md:h-[400px]">
          <Image
            src="/aboutus.webp"
            alt="Nutrix Oats"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Quinoa Choco Flakes – Real Ingredients, Real Goodness
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <span className="font-medium">Wholesome Nutrition:</span> Made from oats and quinoa, our choco flakes are rich in fiber and essential nutrients.
            </li>
            <li>
              <span className="font-medium">Natural Cocoa:</span> Enjoy the deep, rich taste of real cocoa—no artificial flavors or synthetic colors.
            </li>
            <li>
              <span className="font-medium">Kid-Friendly & Adult-Approved:</span> A perfect breakfast or snack for all ages with delightful crunch and flavor.
            </li>
            <li>
              <span className="font-medium">Clean Ingredients:</span> Every bite is made with transparency and care—just real food, nothing fake.
            </li>
          </ul>
        </div>
      </div>

  
      <Products />
          {/* CTA */}
          {/* <div className="text-center mt-16">
        <h3 className="text-xl font-semibold mb-3">Ready to taste the difference?</h3>
        <button className="bg-[rgb(157,37,45)] hover:opacity-90 text-white px-6 py-3 rounded-full font-medium transition">
          Shop Nutrix Products
        </button>
      </div> */}
    </section>

  );
}

export default Nurtix;
