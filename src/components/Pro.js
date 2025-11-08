// src/components/Pro.js

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Re-using the same ingredient data
const ingredients = [
  { name: "Sorghum", description: "Rich in fiber and gluten-free, Sorghum is a wholesome grain that supports digestive health.", image: "/jowar.webp" },
  { name: "Pearl Millet", description: "Packed with iron and essential minerals, Pearl Millet is a powerhouse of energy.", image: "/bajra.webp" },
  { name: "Finger Millet", description: "A nutrient-dense grain that is excellent for improving digestion and overall well-being.", image: "/ragi.webp" },
  { name: "Quinoa", description: "A complete protein, rich in fiber and essential amino acids for a healthy gut and body.", image: "/corn.webp" },
  { name: "Pumpkin & Sunflower Seeds", description: "A heart-healthy duo, loaded with antioxidants, magnesium, and beneficial fats.", image: "/pumpkin.webp" },
  { name: "Almonds & Cashews", description: "Deliciously crunchy nuts that help lower cholesterol and provide healthy fats and protein.", image: "/almonds.webp" },
  { name: "Mixed Berries", description: "A blend of sweet and tart berries with powerful anti-inflammatory properties.", image: "/raisins.webp" },
  { name: "Flax, Chia & Watermelon Seeds", description: "A super-seed trio high in Omega-3 fatty acids, fiber, and essential nutrients.", image: "/chiaseeds.webp" },
];

function Pro() {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRef = useRef(null);
  const componentRef = useRef(null);

  // Animation for the entire component on load
  useEffect(() => {
    gsap.fromTo(
      componentRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  // Animate the content change when a new ingredient is selected
  useEffect(() => {
    const content = contentRef.current;
    if (content) {
      const tl = gsap.timeline();
      tl.to(content, { opacity: 0, y: 20, duration: 0.3, ease: "power2.in" })
        .to(content, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
    }
  }, [activeIndex]);

  const activeIngredient = ingredients[activeIndex];

  return (
    <section ref={componentRef} className="bg-[#F6F1EB] py-16 px-4 sm:px-6 lg:px-8 opacity-0">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#9D252D] mb-2">
            Crafted from Nature's Best
          </h1>
          <p className="text-lg text-gray-700">
            Discover the powerhouse ingredients that make our products exceptional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Column: Ingredient Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4">
            {ingredients.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center text-center p-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  activeIndex === index
                    ? "bg-white shadow-lg ring-2 ring-[#9D252D]"
                    : "bg-transparent hover:bg-white/60"
                }`}
              >
                <div className="w-20 h-20 relative">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    style={{ objectFit: "contain" }}
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-sm font-semibold mt-2 text-gray-800">{item.name}</h3>
              </button>
            ))}
          </div>

          {/* Right Column: Featured Ingredient Display */}
          <div ref={contentRef} className="md:col-span-2 flex flex-col lg:flex-row items-center gap-8 bg-white p-8 rounded-xl shadow-xl">
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative flex-shrink-0">
              <Image
                src={activeIngredient.image}
                alt={activeIngredient.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full shadow-2xl"
              />
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-[#9D252D] mb-3">
                {activeIngredient.name}
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                {activeIngredient.description}
              </p>
              <button className="bg-[#9D252D] text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 hover:bg-red-800 shadow-md">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pro;




// "use client";

// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";

// // --- The Complete Ingredient & Product Data ---
// // IMPORTANT: Replace the product image paths with your actual files.
// const ingredientsData = [
//   { 
//     name: "Sorghum", 
//     description: "Our crisp, gluten-free snacks start with this wholesome, fiber-rich grain.", 
//     image: "/jowar.webp",
//     products: [
//         { name: "Sorghum Puffs", image: "/path/to/product-placeholder.png" },
//         { name: "Millet Bites", image: "/path/to/product-placeholder.png" },
//     ]
//   },
//   { 
//     name: "Pearl Millet", 
//     description: "Packed with iron, this ancient grain gives our foods a satisfying, energetic crunch.", 
//     image: "/bajra.webp",
//     products: [
//         { name: "Millet Flakes", image: "/path/to/product-placeholder.png" },
//         { name: "Energy Bars", image: "/path/to/product-placeholder.png" },
//     ]
//   },
//   { 
//     name: "Finger Millet", 
//     description: "This nutrient-dense grain adds a deep, earthy flavor perfect for healthy baking.", 
//     image: "/ragi.webp",
//     products: [
//         { name: "Ragi Cookies", image: "/path/to/product-placeholder.png" },
//         { name: "Breakfast Mix", image: "/path/to/product-placeholder.png" },
//     ]
//   },
//   {
//     name: "Quinoa",
//     description: "A complete protein, packed with fiber to ensure a healthy gut and a happy you.",
//     image: "/corn.webp",
//     products: [
//       { name: "Quinoa Salad Mix", image: "/path/to/product-placeholder.png" },
//       { name: "Puffed Quinoa", image: "/path/to/product-placeholder.png" },
//     ],
//   },
//   {
//     name: "Pumpkin & Sunflower seeds",
//     description: "A heart-healthy duo, roasted to perfection to add a nutty richness you can't resist.",
//     image: "/pumpkin.webp",
//     products: [
//       { name: "Seed Mix", image: "/path/to/product-placeholder.png" },
//       { name: "Granola Topper", image: "/path/to/product-placeholder.png" },
//     ],
//   },
//   {
//     name: "Almonds & Cashews",
//     description: "Gently roasted to unlock a creamy, buttery flavor that elevates every bite.",
//     image: "/almonds.webp",
//     products: [
//       { name: "Roasted Nut Mix", image: "/path/to/product-placeholder.png" },
//       { name: "Nut Butter", image: "/path/to/product-placeholder.png" },
//     ],
//   },
//   {
//     name: "Mixed Berries",
//     description: "A sweet and tangy blend bursting with powerful antioxidants and anti-inflammatory properties.",
//     image: "/raisins.webp",
//     products: [
//       { name: "Berry Granola", image: "/path/to/product-placeholder.png" },
//       { name: "Fruit & Nut Bars", image: "/path/to/product-placeholder.png" },
//     ],
//   },
//   {
//     name: "Flax, Chia & Watermelon seeds",
//     description: "The ultimate super-seed trio, loaded with Omega-3s for peak wellness.",
//     image: "/chiaseeds.webp",
//     products: [
//       { name: "Super-seed Mix", image: "/path/to/product-placeholder.png" },
//       { name: "Breakfast Booster", image: "/path/to/product-placeholder.png" },
//     ],
//   },
// ];


// function Pro() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const contentRef = useRef(null);

//   useEffect(() => {
//     // A more sophisticated, staggered animation for the content
//     const elements = contentRef.current.children;
//     gsap.timeline()
//       .fromTo(elements, 
//         { opacity: 0, y: 30 }, 
//         { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
//       );
//   }, [activeIndex]);
  
//   const activeIngredient = ingredientsData[activeIndex];

//   return (
//     <section className="bg-[#FDFBF7] py-24 px-4 sm:px-6 lg:px-8 font-sans">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-800 mb-4">
//             The Heart of Our Craft
//           </h1>
//           <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
//             Explore the pure, powerful ingredients that form the soul of every Agasthya product.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
//           {/* --- Left Column: Interactive Ingredient List --- */}
//           <div className="lg:col-span-3">
//             <div className="relative" style={{ height: `${ingredientsData.length * 64}px` }}>
//                 {/* Sliding background indicator for a fluid feel */}
//                 <div 
//                     className="absolute left-0 w-full bg-white rounded-xl shadow-lg transition-transform duration-500 ease-in-out"
//                     style={{ 
//                         height: '56px',
//                         transform: `translateY(${activeIndex * 64}px)` 
//                     }}
//                 />
//                 {ingredientsData.map((item, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setActiveIndex(index)}
//                         className={`absolute w-full h-14 flex items-center px-6 text-lg transition-colors duration-300 z-10 ${
//                         activeIndex === index
//                             ? "text-[#9D252D] font-bold"
//                             : "text-neutral-600 hover:text-neutral-900"
//                         }`}
//                         style={{ top: `${index * 64}px` }}
//                     >
//                         {item.name}
//                     </button>
//                 ))}
//             </div>
//           </div>

//           {/* --- Right Column: Dynamic Content Showcase --- */}
//           <div ref={contentRef} className="lg:col-span-9">
//             {/* Ingredient Details */}
//             <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 items-center">
//               <div className="md:col-span-2 relative h-64 md:h-80">
//                 <div className="absolute inset-0 bg-red-50 rounded-full transform -rotate-12"/>
//                 <Image
//                   src={activeIngredient.image}
//                   alt={activeIngredient.name}
//                   fill
//                   style={{ objectFit: 'contain' }}
//                   className="drop-shadow-xl"
//                 />
//               </div>
//               <div className="md:col-span-3">
//                 <h2 className="font-serif text-5xl md:text-6xl font-bold text-neutral-800 mb-4">{activeIngredient.name}</h2>
//                 <p className="text-neutral-600 text-xl leading-relaxed">{activeIngredient.description}</p>
//               </div>
//             </div>

//             {/* Related Products */}
//             <div>
//                 <h3 className="font-serif text-3xl font-bold text-neutral-800 mb-6 border-t border-neutral-200 pt-8">Crafted With {activeIngredient.name}</h3>
//                 <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
//                     {activeIngredient.products.map((product) => (
//                         <div key={product.name} className="group cursor-pointer">
//                             <div className="bg-white rounded-xl shadow-sm p-4 aspect-square flex items-center justify-center mb-3 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
//                                 {/* Replace with your actual product image */}
//                                 <div className="w-full h-full bg-slate-100 rounded-md">
//                                     {/* <Image src={product.image} alt={product.name} ... /> */}
//                                 </div>
//                             </div>
//                             <p className="font-semibold text-neutral-700 text-center">{product.name}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section> 
//   );
// }

// export default Pro;