import React from "react";
import Image from "next/image";

const ingredients = [
  { name: "Jowar", description: "Rich in fiber and gluten free", image: "/jowar.png" },
  { name: "Bajra", description: "Packed with iron and boosts energy", image: "/bajra.png" },
  { name: "Ragi", description: "Improves digestion", image: "/ragi.png" },
  { name: "Corn & Quinoa", description: "Rich in Fibre for a Healthy Gut", image: "/corn.png" },
  { name: "Pumpkin & Sunflower seeds", description: "Boosts heart health", image: "/pumpkin.png" },
  { name: "Almonds & Cashews", description: "Lowers cholesterol levels", image: "/almonds.png" },
  { name: "Mixed Berries", description: "Anti-inflammatory properties", image: "/raisins.png" },
  { name: "Flax,Chia & Watermelon seeds", description: "High in Omega-3 and fiber", image: "/chiaseeds.png" },
];

function Ingredients() {
  return (
    <div className="bg-[#F6F1EB] py-6">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-4xl font-bold text-[#9D252D] my-6">
        Powerhouse Ingredients
      </h1>

      <div className="mx-auto">
        {/* First Row - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {ingredients.slice(0, 4).map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-36 h-36 md:w-40 md:h-40 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Second Row - 4 Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {ingredients.slice(4, 8).map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-36 h-36 md:w-40 md:h-40 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
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
