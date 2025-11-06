"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const productCatalog = {
    "Crisps": {
        "Jowar/Sorghum Millet Crisps": [{ sku: "Jowar/Sorghum Millet Crisps", variants: [{ name: "Regular", image: "/Productsremain/Jowarcrisps.png"}] }],
        "Multi-Millet Crisps": [{ sku: "Multi-Millet Crisps", variants: [{ name: "Regular", image: "/Productsremain/MMcr.jpg" }] }],
        "Rice Crisps": [{ sku: "Rice Crisps", variants: [{ name: "Regular", image: "/Productsremain/RiceCrisps.png" }] }],
        "Soya Crisps": [{ sku: "Soya Crisps", variants: [{ name: "Regular", image: "/Productsremain/Soyacrisps.png" }] }]
    },
    "Regular": {
        "Corn Flakes": [{ sku: "Corn Flakes", variants: [{ name: "Regular", image: "/Productsremain/Cornflakes-regular.png" }, { name: "Honey & Almond", image: "/Productsremain/Cornflakeshoneyandalmond.png" }] }],
        "Multigrain Flakes": [{ sku: "Multigrain Flakes", variants: [{ name: "Regular", image: "/Productsremain/Multgraincerealflakes.png" }] }], 
        "Multigrain Chocos": [{ sku: "Multigrain Chocos", variants: [{ name: "Adults", image: null }, { name: "Chocolate", image: "/Productsremain/Chocoflakes.png" }] }]
    },
    "Kids Category": {
        "Multigrain Fills": [{ sku: "Multigrain Fills", variants: [{ name: "Regular", image: "/Productsremain/Chocofills.png" }] }],
        "Choco Fills": [{ sku: "Choco Fills", variants: [{ name: "Regular", image: "/Productsremain/Ragindchoco.png" }, { name: "Red Velvet", image: "/Productsremain/Redvelvet.png" }, { name: "Banana Caramel", image: null }, { name: "Strawberry", image: null }, { name: "Vanilla", image: "/Productsremain/Vanilla.png" }] }],
        "Choco Balls": [{ sku: "Choco Balls", variants: [{ name: "Regular", image: "/Productsremain/Chocoballs.png" }] }],
        "Fruit Loops": [{ sku: "Fruit Loops", variants: [{ name: "Regular", image: "/Productsremain/Frootloops.png" }] }]
    },
    "Superfoods - Flakes": {
        "Ragi/Finger Millet Rolled Flakes": [{ sku: "Ragi/Finger Millet Rolled Flakes", variants: [{ name: "Regular", image: "/Productsremain/Fingermilletrolledflakes.png" }] }],
        "Bajra/Pearl Millet Rolled Flakes": [{ sku: "Bajra/Pearl Millet Rolled Flakes", variants: [{ name: "Regular", image: "/Productsremain/BajraF.png" }] }],
        "Jowar/Sorghum Rolled Flakes": [{ sku: "Jowar/Sorghum Millet Rolled Flakes", variants: [{ name: "Regular", image: "/Productsremain/Jowarrolled.png" }] }],
        "Ragi/Finger Millet Flakes": [{ sku: "Ragi/Finger Millet Flakes", variants: [{ name: "Regular", image: "/Productsremain/Fingermilletflakes.png" }] }],
        "Quinoa Chocos": [{ sku: "Quinoa Chocos", variants: [{ name: "Regular", image: "/Productsremain/Chocos.png" }] }],
        "Ragi/Finger Millet Chocos": [{ sku: "Ragi/Finger Millet Chocos", variants: [{ name: "Regular", image:"/Productsremain/Chocos.png" }] }],
        "Multi-Millet Chocos": [{ sku: "Multi-Millet Chocos", variants: [{ name: "Regular", image: "/Productsremain/Chocos.png" }] }],
        "Ragi/Finger Millet Fills": [{ sku: "Ragi/Finger Millet Fills", variants: [{ name: "Regular", image: "/Productsremain/Chocofills.png" }, { name: "Red Velvet", image: "/Productsremain/Redvelvet.png" }, { name: "Vanilla", image: null }, { name: "Strawberry", image: null }, { name: "Banana Caramel", image: null }, { name: "Chocolate", image: null }] }],
        "Multi Millet Fills": [{ sku: "Multi Millet Fills", variants: [{ name: "Regular", image: "/Productsremain/Chocofills.png" }] }],
        "Quinoa Cereal Flakes": [{ sku: "Quinoa Cereal Flakes", variants: [{ name: "Honey & Almond", image: "/Productsremain/Cornflakeshoneyandalmond.png" },{ name: "Regular", image: "/Productsremain/Quinoa.png" }] }] 
    },
    "Superfoods - Muesli": {
        "Quinoa Muesli - Fruit & Nut": [{ sku: "Quinoa Muesli ", variants: [{ name: "Regular", image: null }, { name: "No Added Sugar", image: null },  { name: "Nutty Crunchy", image: "/Productsremain/Milletmueslinuttycrunchy.png" }] }],
        "Millet Muesli": [{ sku: "Millet Muesli", variants: [{ name: "Belgian Dark Chocolate", image: "/Productsremain/Darkchocolatemilletmuesli.png" },{ name: "Berry Burst", image: "/Productsremain/Berryburst.png" },{ name: "Nutty Delight", image: null }] }]
    },
    "Savory Snacks": {
        "Corn Balls": [{
            sku: "Corn Balls",
            variants: [
                { name: "Regular", image: "/Corn Balls/Reg.png" },
                { name: "Desi-Masala", image: "/Corn Balls/Desimasala.png" },
                { name: "Tangy Tomato", image: "/Corn Balls/Tangytomato.png" },
                { name: "Nacho Cheese", image: "/Corn Balls/NachoCheese.png" },
                { name: "Peri-Peri", image: null },
                { name: "Sweet Chilli", image: null },
                { name: "Sour Cream & Onion", image: null },
                { name: "Mint", image: "/Corn Balls/Mint.png" }
            ]
        }],
        "Corn Curls": [{
            sku: "Corn Curls",
            variants: [
                { name: "Regular", image: "/Curls/Corncurls.png" },
                { name: "Desi-Masala", image: "/Curls/Desimasalac.png" },
                { name: "Tangy Tomato", image: "/Curls/Tangyc.png" },
                { name: "Nacho Cheese", image: null },
                { name: "Peri-Peri", image: null },
                { name: "Sweet Chilli", image: "/Curls/Sweetchillic.png" },
                { name: "Sour Cream & Onion", image: null },
                { name: "Mint", image: "/Curls/Mintc.png" }
            ]
        }],
        "Quinoa Rings": [{
            sku: "Quinoa Rings",
            variants: [
                { name: "Desi-Masala", image: "/Rings Low/Desimasalar.png" },
                { name: "Tangy Tomato", image: "/Rings Low/Tangyr.png" },
                { name: "Nacho Cheese", image: null },
                { name: "Peri-Peri", image: null },
                { name: "Sweet Chilli", image: "/Rings Low/Sweetchillir.png" },
                { name: "Sour Cream & Onion", image: null },
                { name: "Mint", image: "/Rings Low/Mintr.png" }
            ]
        }],
        "High Protein Wavy Chips": [{
            sku: "High Protein Wavy Chips",
            variants: [
                { name: "Desi-Masala", image: "/Wavy Chips/Desimasalaw.png" },
                { name: "Tangy Tomato", image: "/Wavy Chips/TangyW.png" },
                { name: "Nacho Cheese", image: null },
                { name: "Peri-Peri", image: null },
                { name: "Sweet Chilli", image: "/Wavy Chips/Sweetchilliw.png" },
                { name: "Sour Cream & Onion", image: null },
                { name: "Mint", image: "/Wavy Chips/Mintw.png" }
            ]
        }],
          "Corn Puffs": [{
            sku: "Puffs",
            variants: [
                { name: "Desi-Masala", image: "/Puffs/Dm.png" },
                { name: "Tangy Tomato", image: "/Puffs/TT.png" },
                { name: "Nacho Cheese", image: "/Puffs/NC.png" },
                { name: "Sweet Chilli", image: "/Puffs/Sc.png" },
                { name: "Sour Cream & Onion", image: null }
            ]
        }],
        "Puffs/Balls/Rings/Curls - Multi-Millet": [{ sku: "MultiMillet", variants: [{ name: "Desi-Masala Puffs", image: "/Puffs/Dm.png" }, { name: "Tangy Tomato Wavy chips", image: "/Wavy Chips/TangyW.png" }, { name: "Nacho Cheese Balls", image: "/Corn Balls/NachoCheese.png" }, { name: "Peri-Peri", image: null }, { name: "Sweet Chilli", image: null }, { name: "Sour Cream & Onion", image: null }] }],
        "Veggie Sticks": [{ sku: "Veggie Sticks", variants: [ 
            { name: "Desi-Masala", image: "/Productsremain/Veggisticks.png" }, 
            { name: "Tangy Tomato", image: null }, 
            { name: "Nacho Cheese", image: null }, 
            { name: "Peri-Peri", image: null }, 
            { name: "Sweet Chilli", image: null }, 
            { name: "Sour Cream & Onion", image: null }
        ] }],
        "Protein - GP - Puffs/Curls/Balls/Rings": [{ sku: "Protein GP", variants: [{ name: "Desi-Masala Balls", image: "/Corn Balls/Desimasala.png" }, { name: "Tangy Tomato Curls", image: "/Curls/Tangyc.png" }, { name: "Nacho Cheese Puffs", image: "/Puffs/NC.png" }, { name: "Peri-Peri", image: null }, { name: "Sweet Chilli Rings", image: "/Rings Low/Sweetchillir.png" }, { name: "Sour Cream & Onion", image: null }, { name: "Plain", image: null }] }],
        "Makhana": [{ sku: "Makhana", variants: [ 
            { name: "Desi-Masala", image: null },
            { name: "Roasted", image: "/Productsremain/Makhanaroast.png" }, 
            { name: "Peri-Peri", image: null }, 
            { name: "Mint", image: null }, 
            { name: "Plain", image: "/Productsremain/Makhana.png" } 

        ] }]
    },
    "Nutrition Bars": {
        "Millet Bar": [{ sku: "Millet Bar", variants: [{ name: "Regular", image: "/Productsremain/Milletbar.png" },{ name: "Fruits & Berries", image: "/Productsremain/MFB.png" }, { name: "Nuts & Seeds", image: "/Productsremain/MNS.png" }] }],
        "Protein Bar": [{ sku: "Protein Bar", variants: [ { name: "Cranberry", image: "/Productsremain/cranberry.png" }, { name: "Almond Choco", image: "/Productsremain/Almondchoco.png" }] }],
        "Meal Replacement Bar": [{ sku: "Meal Replacement Bar", variants: [{ name: "Multigrain", image: "/Productsremain/Mealreplacement.png" }] }]
    },
    "Ready-to-Cook": {
        "Millet Porridge": [{ sku: "Millet Porridge", variants: [
            { name: "Mixed Vegetables", image: "/Productsremain/Milletporridgemixedvegitables.png" }, 
            { name: "Tangy Tomato & Onion", image: "/Productsremain/Milletporridge-Tangytomamtoandonion.png" }, 
            { name: "Apple & Cinnamon", image: "/Productsremain//Milletporridgeappleandcinnamon.png" },
            { name: "Mixed fruit and Chocolate", image: "/Productsremain/mm.png" }
        ] }],
        "Health  Mix Adults": [{ sku: "Health Mix ", variants: [
            { name: "Malt", image: "/Productsremain/Healthmixmalt.png" }, 
            { name: "Vanilla", image:"/Productsremain/Healthmixvanilla.png" }
        ] }],
        "Health Mix Kids": [{ sku: "Health Mix", variants: [
            { name: "Strawberry ", image: "/Productsremain/Healthmixstrawberry.png" }, 
            { name: "Vanilla ", image: "/Productsremain/Healthmixvanilla.png" }
        ] }]
    },
    "Flour": {
        "Flour": [
            { sku: "Flour", variants: [{ name: "Jowar/Sorghum Millet", image: "/Productsremain/Sorghumflour.png" }] },
            { sku: "Flour", variants: [{ name: "Ragi/Finger Millet", image: "/Productsremain/Fingermilletflour.png" }] },
            { sku: "Flour", variants: [{ name: "Bajra/Pearl Millet", image: "/Productsremain/Pearlmilletflour.png" }] }
        ]
    },
    "Rava": {
        "Idly Rava": [{ 
            sku: "Idly Rava", 
            variants: [
                { name: "Jowar/Sorghum Millet", image: "/Productsremain/Sorghumidlyrava.png" },
                { name: "Ragi/Finger Millet", image: "/Productsremain/Fingermilletidlyravva.png" },
                { name: "Bajra/Pearl Millet", image: "/Productsremain/Pearlmilletidlyrava.png" }
            ] 
        }],
        "Upma Rava": [{ 
            sku: "Upma Rava", 
            variants: [
                { name: "Jowar/Sorghum Millet", image: "/Productsremain/Sorghumupmarava.png" }, 
                { name: "Ragi/Finger Millet", image: "/Productsremain/Fingermilletupmarava.png" }, 
                { name: "Bajra/Pearl Millet", image: "/Productsremain/Pearlmilletupmarava.png" }
            ] 
        }]
    }
}

const categories = Object.keys(productCatalog);

function Productcat() {
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const mainContainerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('.product-category-section');

            sections.forEach((section, index) => {
                ScrollTrigger.create({
                    trigger: section,
                    start: "top center",
                    end: "bottom center",
                    onToggle: self => self.isActive && setActiveCategory(categories[index])
                });
            });

            // Animate sections on initial load
            gsap.from(sections, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out'
            });

        }, mainContainerRef);
        return () => ctx.revert();
    }, []);

    const handleNavLinkClick = (category) => {
        const section = document.getElementById(category);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="bg-[#FDFBF7] py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="text-center mb-20">
                    <h1 className="font-serif text-5xl md:text-6xl font-bold text-neutral-800 mb-4">
                        The Agasthya Collection
                    </h1>
                    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                        A complete look at our culinary craft. Select a category to begin your journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* --- Left Column: Sticky "Scrollspy" Navigation --- */}
                    <aside className="lg:col-span-3">
                        <nav className="sticky top-28 space-y-2">
                            <h3 className="font-semibold text-neutral-500 uppercase tracking-wider px-4 mb-2">Product Categories</h3>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => handleNavLinkClick(category)}
                                    className={`nav-link w-full text-left text-lg px-4 py-2.5 rounded-lg transition-all duration-300 font-medium ${activeCategory === category
                                            ? 'bg-[#9D252D] text-white shadow-md'
                                            : 'text-neutral-600 hover:bg-white hover:text-neutral-800'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </nav>
                    </aside>
                    <main ref={mainContainerRef} className="lg:col-span-9">
                        {categories.map((category) => (
                            <div key={category} id={category} className="product-category-section mb-20">
                                <h2 className="font-serif text-4xl font-bold text-neutral-800 mb-8 border-b-2 border-neutral-200 pb-4">
                                    {category}
                                </h2>
                                {Object.keys(productCatalog[category]).map(subCategory => (
                                    <div key={subCategory} className="mb-10">
                                        <h3 className="text-2xl font-semibold text-neutral-700 mb-6">{subCategory}</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                            {/* --- LOGIC TO SHOW EITHER IMAGE CARD OR "AVAILABLE FLAVOURS" LIST --- */}
                                            {(productCatalog[category][subCategory] || []).flatMap(product => {
                                                const variantsWithImages = product.variants.filter(v => v.image);
                                                const variantsWithoutImages = product.variants.filter(v => !v.image);
                                                
                                                const cards = [];

                                                // 1. Create cards for all variants that HAVE an image
                                                variantsWithImages.forEach(variant => {
                                                    let productName;
                                                    if ((category === "Crisps" || category === "Superfoods - Flakes") && variant.name === "Regular") {
                                                        productName = product.sku;
                                                    } else {
                                                        productName = `${product.sku} - ${variant.name}`;
                                                    }
                                                    
                                                    cards.push(
                                                        <div key={productName} className="bg-white rounded-2xl shadow-sm group p-5 flex flex-col text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border border-transparent hover:border-red-100 h-full">
                                                            <div className="relative aspect-square w-full flex items-center justify-center mb-4">
                                                                <div className="absolute inset-0   rounded-xl" />
                                                                <div className="relative h-3/4 w-3/4 transition-transform duration-300 group-hover:scale-105">
                                                                    <img src={variant.image} alt={productName} className="h-full w-full object-contain" />
                                                                </div>
                                                            </div>
                                                            <h4 className="font-semibold text-neutral-800 text-lg leading-tight flex-grow">{productName}</h4>
                                                        </div>
                                                    );
                                                });

                                                // 2. If there are any variants WITHOUT images, create ONE "options" card
                                                if (variantsWithoutImages.length > 0) {
                                                    const optionsKey = `${product.sku}-options`; 
                                                    cards.push(
                                                        <div key={optionsKey} className="bg-white rounded-2xl shadow-sm group p-5 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 border border-transparent hover:border-red-100 h-full">
                                                            {/* Product Name - flex-grow REMOVED */}
                                                            <h4 className="font-semibold text-neutral-800 text-lg leading-tight text-center mb-4">
                                                                {product.sku}
                                                                {/* Add a subtitle if there were also variants with images */}
                                                                {variantsWithImages.length > 0 && <span className="block text-sm text-neutral-500 font-normal">(Other Flavours)</span>}
                                                            </h4>
                                                            
                                                            {/* List of variants (flavors) - flex-grow ADDED HERE */}
                                                            <div className="pt-4 border-t border-neutral-100 flex-grow">
                                                                <h5 className="text-sm font-semibold text-neutral-500 mb-2 text-left uppercase tracking-wider">Available Options:</h5>
                                                                <ul className="list-disc list-inside space-y-1 text-left text-neutral-600 text-sm">
                                                                    {variantsWithoutImages.map(variant => (
                                                                        <li key={variant.name}>{variant.name}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    );
                                                }
       
return cards; // 
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </main>
                </div>
            </div>
        </section>
    );
}
export default Productcat;