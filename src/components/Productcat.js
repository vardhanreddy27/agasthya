"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PhotoIcon, SparklesIcon } from '@heroicons/react/24/solid';

// --- UPDATED DATA BASED ON THE PROVIDED SPREADSHEET, WITH CORRECTIONS FOR TYPOS AND COMPLETENESS ---
const productCatalog = {
  "Crisps": {
    "Rice Crisps": [{ sku: "Rice Crisps", variants: ["Regular"] }],
    "Jowar/Sorghum Crisps": [{ sku: "Jowar/Sorghum Crisps", variants: ["Regular"] }],
    "Ragi/Finger Millet Crisps": [{ sku: "Ragi/Finger Millet Crisps", variants: ["Regular"] }],
    "Multi-Millet Crisps": [{ sku: "Multi-Millet Crisps", variants: ["Regular"] }],
  },
  "Regular": {
    "Corn Flakes": [{ sku: "Corn Flakes", variants: ["Honey & Almond", "Regular"] }],
    "Frosted Flakes": [{ sku: "Frosted Flakes", variants: ["Regular"] }],
    "Multigrain Flakes": [{ sku: "Multigrain Flakes", variants: ["Regular"] }],
    "Multigrain Cereal Flakes": [{ sku: "Multigrain Cereal Flakes", variants: ["Adults"] }],
    "Multigrain Fills": [{ sku: "Multigrain Fills", variants: ["Regular"] }],
    "Multigrain Chocos": [{ sku: "Multigrain Chocos", variants: ["Chocolate"] }],
  },
  "Kids Favorite": {
    "Chocos": [{ sku: "Chocos", variants: ["Regular"] }],
    "Choco Balls": [{ sku: "Choco Balls", variants: ["Regular"] }],
    "Choco Fills": [{ sku: "Choco Fills", variants: ["Red Velvet", "Banana Caramel", "Strawberry", "Vanilla", "Chocolate"] }],
    "Froot Loops": [{ sku: "Froot Loops", variants: ["Regular"] }],
  },
  "Superfoods - Flakes": {
    "Ragi/Finger Millet Rolled Flakes": [{ sku: "Ragi/Finger Millet Rolled Flakes", variants: ["Regular"] }],
    "Bajra/Pearl Millet Rolled Flakes": [{ sku: "Bajra/Pearl Millet Rolled Flakes", variants: ["Regular"] }],
    "Jowar/Sorghum Rolled Flakes": [{ sku: "Jowar/Sorghum Rolled Flakes", variants: ["Regular"] }],
    "Quinoa Flakes": [{ sku: "Quinoa Flakes", variants: ["Regular"] }],
    "Ragi/Finger Millet Flakes": [{ sku: "Ragi/Finger Millet Flakes", variants: ["Regular"] }],
    "Multi-Millet Flakes": [{ sku: "Multi-Millet Flakes", variants: ["Regular"] }],
    "Multi-Millet Chocos": [{ sku: "Multi-Millet Chocos", variants: ["Regular"] }],
    "Quinoa Chocos": [{ sku: "Quinoa Chocos", variants: ["Regular"] }],
    "Ragi/Finger Millet Chocos": [{ sku: "Ragi/Finger Millet Chocos", variants: ["Regular"] }],
    "Ragi/Finger Millet Fills": [{ sku: "Ragi/Finger Millet Fills", variants: ["Red Velvet", "Banana Caramel", "Strawberry", "Vanilla", "Chocolate"] }],
    "Multi-Millet Fills": [{ sku: "Multi-Millet Fills", variants: ["Chocolate"] }],
    "Quinoa Cereal Flakes": [{ sku: "Quinoa Cereal Flakes", variants: ["Honey & Almond", "Regular"] }],
  },
  "Superfoods - Muesli": {
    "Quinoa Muesli - Fruit & Nut": [{ sku: "Quinoa Muesli - Fruit & Nut", variants: ["Regular", "No Added Sugar"] }],
    "Millet Muesli": [{ sku: "Millet Muesli", variants: ["Berry Blast", "Nutty Crunchy", "Belgian Dark Chocolate"] }],
  },
  "Savoury Snacks": {
    "Puffs/Balls/Rings/Curls- Corn": [{ sku: "Puffs/Balls/Rings/Curls- Corn", variants: ["Desi-Masala", "Tangy Tomato", "Peri-Peri", "Nacho Cheese", "Sweet Chilli", "Sour Cream & Onion"] }],
    "Puffs/Balls/Curls - Multi-Millet": [{ sku: "Puffs/Balls/Curls - Multi-Millet", variants: ["Desi-Masala", "Tangy Tomato", "Peri-Peri", "Nacho Cheese", "Sweet Chilli", "Sour Cream & Onion"] }],
    "Rings - Quinoa": [{ sku: "Rings - Quinoa", variants: ["Desi-Masala", "Tangy Tomato", "Peri-Peri", "Nacho Cheese", "Sweet Chilli", "Sour Cream & Onion"] }],
    "Wavy Chips - High Protein": [{ sku: "Wavy Chips - High Protein", variants: ["Desi-Masala", "Tangy Tomato", "Peri-Peri", "Nacho Cheese", "Sweet Chilli", "Sour Cream & Onion"] }],
    "Veggie Sticks": [{ sku: "Veggie Sticks", variants: ["Desi-Masala", "Tangy Tomato", "Peri-Peri", "Nacho Cheese", "Sweet Chilli", "Sour Cream & Onion"] }],
    "Protein - GP - Puffs/Curls/Balls/Rings": [{ sku: "Protein - GP - Puffs/Curls/Balls/Rings", variants: ["Desi-Masala", "Tangy Tomato", "Peri-Peri", "Nacho Cheese", "Sweet Chilli", "Sour Cream & Onion"] }],
    "Makhana": [{ sku: "Makhana", variants: ["Plain", "Roasted", "Peri-Peri", "Mint"] }],
  },
  "Nutrition Bars": {
    "Millet Bar": [{ sku: "Millet Bar", variants: ["Fruits & Berries", "Nuts & Seeds", "Peanut"] }],
    "Protein Bar": [{ sku: "Protein Bar", variants: ["Peanut Cocoa", "Peanut Butter", "Cranberry"] }],
    "Snack Bar": [{ sku: "Snack Bar", variants: ["Almond Choco", "Cranberry"] }],
    "Meal Replacement Bar": [{ sku: "Meal Replacement Bar", variants: ["Multigrain"] }],
  },
  "Ready-to-Cook": {
    "Millet Porridge": [{ sku: "Millet Porridge", variants: ["Mixed Vegetables", "Tangy Tomato & Onion", "Apple & Cinnamon", "Mixed Fruit & Chocolate"] }],
    "Health Mix - Adults": [{ sku: "Health Mix - Adults", variants: ["Strawberry", "Vanilla", "Malt"] }],
    "Health Mix - Kids": [{ sku: "Health Mix - Kids", variants: ["Strawberry", "Vanilla", "Malt"] }],
  },
  "Flour": {
    "Jowar/Sorghum Flour": [{ sku: "Jowar/Sorghum Flour", variants: ["Regular"] }],
    "Bajra/Pearl Millet Flour": [{ sku: "Bajra/Pearl Millet Flour", variants: ["Regular"] }],
    "Ragi/Finger Millet Flour": [{ sku: "Ragi/Finger Millet Flour", variants: ["Regular"] }],
  },
  "Semolina": {
    "Idly Rawa": [
      { sku: "Jowar/Sorghum Idly Rawa", variants: ["Regular"] },
      { sku: "Bajra/Pearl Millet Idly Rawa", variants: ["Regular"] },
      { sku: "Ragi/Finger Millet Idly Rawa", variants: ["Regular"] },
      { sku: "Multi-Millet Idly Rawa", variants: ["Regular"] },
    ],
    "Upma Rawa": [
      { sku: "Jowar/Sorghum Upma Rawa", variants: ["Regular"] },
      { sku: "Bajra/Pearl Millet Upma Rawa", variants: ["Regular"] },
      { sku: "Ragi/Finger Millet Upma Rawa", variants: ["Regular"] },
      { sku: "Multi-Millet Upma Rawa", variants: ["Regular"] },
    ],
  },
};

const categories = Object.keys(productCatalog);

function Productcat() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeSubCategory, setActiveSubCategory] = useState(Object.keys(productCatalog[categories[0]])[0]);

  const productGridRef = useRef(null);
  const tabsRef = useRef(null);
  const activeTabIndicatorRef = useRef(null);

  const subCategories = Object.keys(productCatalog[activeCategory] || {});
  const products = productCatalog[activeCategory]?.[activeSubCategory] || [];
  const flattenedProducts = products.flatMap(product =>
    product.variants.map(variant => ({
      sku: product.sku,
      variant,
      displayName: variant === "Regular" ? product.sku : `${product.sku} - ${variant}`
    }))
  );

  const handleCategoryClick = (category, event) => {
    setActiveCategory(category);
    setActiveSubCategory(Object.keys(productCatalog[category])[0]);

    const tab = event.currentTarget;
    const tabsContainer = tabsRef.current;
    if (tab && tabsContainer && activeTabIndicatorRef.current) {
      const offsetLeft = tab.offsetLeft - tabsContainer.scrollLeft;
      const width = tab.clientWidth;
      gsap.to(activeTabIndicatorRef.current, {
        left: offsetLeft,
        width: width,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  };

  useEffect(() => {
    const initialActiveTab = tabsRef.current?.querySelector('button');
    if (initialActiveTab && activeTabIndicatorRef.current) {
      activeTabIndicatorRef.current.style.left = `${initialActiveTab.offsetLeft}px`;
      activeTabIndicatorRef.current.style.width = `${initialActiveTab.clientWidth}px`;
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      productGridRef.current?.children,
      { opacity: 0, scale: 0.95, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power3.out" }
    );
  }, [activeSubCategory, activeCategory]);

  return (
    <section className="bg-[#FDFBF7] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-800 mb-4">
            Our Culinary Collection
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            An immersive journey through our finest products, crafted with passion and purpose.
          </p>
        </div>

        {/* --- Category Tabs (Made scrollable for better responsiveness) --- */}
        <div className="relative mb-12">
          <div
            ref={tabsRef}
            className="flex overflow-x-auto space-x-4 md:space-x-8 border-b border-neutral-200 pb-2 scrollbar-hide"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={(e) => handleCategoryClick(category, e)}
                className={`flex-shrink-0 px-4 py-3 text-lg font-medium transition-colors duration-300 relative ${
                  activeCategory === category ? 'text-[#9D252D]' : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div ref={activeTabIndicatorRef} className="absolute bottom-0 h-1 bg-[#9D252D] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* --- Sub-Category Sidebar (Enhanced with shadow and hover effects) --- */}
          <aside key={activeCategory} className="lg:col-span-3">
            <div className="sticky top-28 space-y-2 p-4 bg-white/60 backdrop-blur-md rounded-xl border border-neutral-200/80 shadow-sm">
              <h3 className="font-semibold text-neutral-800 px-3 pb-2">Varieties</h3>
              {subCategories.map((subCat) => (
                <button
                  key={subCat}
                  onClick={() => setActiveSubCategory(subCat)}
                  className={`w-full text-left text-base font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                    activeSubCategory === subCat
                      ? 'bg-[#9D252D] text-white shadow-md'
                      : 'text-neutral-600 hover:bg-neutral-100 hover:shadow-sm'
                  }`}
                >
                  {subCat}
                </button>
              ))}
            </div>
          </aside>

          {/* --- Product Grid (Separate cards for each variant, removed image animation) --- */}
          <main className="lg:col-span-9">
            <h2 className="text-3xl font-serif font-bold text-neutral-800 mb-6">{activeSubCategory}</h2>
            <div ref={productGridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {flattenedProducts.map((item) => (
                <div
                  key={`${item.sku}-${item.variant}`}
                  className="bg-white rounded-2xl shadow-sm group p-5 flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2"
                >
                  <div className="relative aspect-square w-full flex items-center justify-center mb-4 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-neutral-50" />
                    <div className="relative h-3/4 w-3/4">
                      <PhotoIcon className="h-full w-full text-neutral-300" />
                    </div>
                  </div>
                  <div className="flex-grow flex flex-col justify-center">
                    <h3 className="font-semibold text-neutral-800 text-lg leading-tight text-center">{item.displayName}</h3>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}

export default Productcat;