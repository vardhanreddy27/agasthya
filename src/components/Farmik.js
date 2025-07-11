import React from "react";
import Image from "next/image";
import Products from "./Products";

function Farmik() {
  return (
    <section className="bg-white text-gray-800 px-6 py-12">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-[rgb(157,37,45)] drop-shadow-sm mb-4">
          Welcome to Farmik
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A wholesome sub-brand of Agasthya SuperFoods, <span className="font-semibold">Farmik</span> is dedicated
          to providing fresh and nutritious dairy products that combine quality,
          purity, and the rich traditions of Indian dairy farming.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mb-10 mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="relative w-full h-72 md:h-[400px]">
          <Image
            src="/milk.png"
            alt="Farmik Dairy"
            layout="fill"
            objectFit="cover"
            className="rounded-2xl shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Pure Dairy Goodness – From Farm to Table
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>
              <span className="font-medium">Fresh & Wholesome:</span> We offer a range of fresh milk, curd, paneer, and ghee sourced from trusted farms.
            </li>
            <li>
              <span className="font-medium">No Preservatives:</span> Our dairy products are made without any synthetic additives—just pure dairy nutrition.
            </li>
            <li>
              <span className="font-medium">Rich in Taste:</span> Experience authentic flavor with every spoonful, thanks to our traditional preparation methods.
            </li>
            <li>
              <span className="font-medium">Health First:</span> Farmik focuses on clean-label dairy that's high in calcium and essential nutrients.
            </li>
          </ul>
        </div>
      </div>

      <Products />

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-3">Experience Dairy the Farmik Way!</h3>
        <button className="bg-[rgb(157,37,45)] hover:opacity-90 text-white px-6 py-3 rounded-full font-medium transition">
          Explore Farmik Products
        </button>
      </div>
    </section>
  );
}

export default Farmik;
