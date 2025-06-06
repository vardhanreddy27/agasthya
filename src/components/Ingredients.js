import React from "react";
import Image from "next/image";

const ingredients = [
  { name: "Jowar", description: "Rich in fiber and gluten free", image: "/jowar.webp" },
  { name: "Bajra", description: "Packed with iron and boosts energy", image: "/bajra.webp" },
  { name: "Ragi", description: "Improves digestion", image: "/ragi.webp" },
  { name: "Corn & Quinoa", description: "Rich in Fibre for a Healthy Gut", image: "/corn.webp" },
  { name: "Pumpkin & Sunflower seeds", description: "Boosts heart health", image: "/pumpkin.webp" },
  { name: "Almonds & Cashews", description: "Lowers cholesterol levels", image: "/almonds.webp" },
  { name: "Mixed Berries", description: "Anti-inflammatory properties", image: "/raisins.webp" },
  { name: "Flax,Chia & Watermelon seeds", description: "High in Omega-3 and fiber", image: "/chiaseeds.webp" },
];

function Ingredients() {
  return (
    <div className="bg-[#F6F1EB] py-6">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#9D252D] my-6">
        Powerhouse Ingredients
      </h1>

      <div className="mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {ingredients.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
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