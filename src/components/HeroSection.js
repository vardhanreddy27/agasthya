"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  AnimatePresence,
} from "framer-motion";
import { Heart, X } from "lucide-react";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};
function ParallaxCardColumn({ items, baseVelocity = 8, onCardClick }) {
  const baseY = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const isHovered = useRef(false);
  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && itemRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const itemHeight = itemRef.current.offsetHeight;
        const newRepetitions = Math.ceil(containerHeight / itemHeight) + 2;
        setRepetitions(newRepetitions);
      }
    };
    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [items]);
  const y = useTransform(baseY, (v) => `${wrap(-100 / repetitions, 0, v)}%`);
  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    if (isHovered.current) return;
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    moveBy += directionFactor.current * moveBy * velocityFactor.get();
    baseY.set(baseY.get() + moveBy);
  });
  return (
    <div
      ref={containerRef}
      className="relative h-[80vh] w-[300px] overflow-hidden"
      onMouseEnter={() => (isHovered.current = true)}
      onMouseLeave={() => (isHovered.current = false)}
    >
      <motion.div className="absolute flex flex-col gap-4" style={{ y }}>
        {Array.from({ length: repetitions }).flatMap((_, i) =>
          items.map((item, index) => (
            <div
              key={`${i}-${index}`}
              ref={i === 0 && index === 0 ? itemRef : null}
              onClick={() => onCardClick(item)}
              className="cursor-pointer relative min-h-[180px] w-[280px] rounded-2xl shadow-md bg-cover bg-center flex items-end overflow-hidden"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              {/* Top Icons */}
              <div className="absolute top-2 right-2 flex gap-2 z-10">
                <div className="bg-white bg-opacity-80 p-1 rounded-full">
                  <Heart size={18} className="text-gray-600" />
                </div>
              </div>
              {/* Bottom Label */}
              <div className="w-full p-3"></div>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}
function VelocityScrollColumn({ defaultVelocity = 0.5, numColumns = 1, items, onCardClick }) {
  return (
    <div className="flex flex-row justify-center gap-1">
      {Array.from({ length: numColumns }).map((_, i) => (
        <ParallaxCardColumn
          key={i}
          items={items}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
}
export default function HeroSection() {
  const cards = [
{ image: "/farmik.png", title: "Berry Blast", description: "Delicious berry flavor with 21 vital nutrients." },
{ image: "/banner4.png", title: "Berry Blast", description: "A fruity milk mix fortified for growing kids." },
{ image: "/farmik.png", title: "Berry Blast", description: "Bursting with berry goodness and essential vitamins." },
{ image: "/berryblastwithbg.png", title: "Berry Blast", description: "Tasty, nutritious, and perfect for daily milk time." },
{ image: "/banner4.png", title: "Berry Blast", description: "Fuel up with antioxidants, protein & calcium in every sip." },
{ image: "/makana.png", title: "Berry Blast", description: "Tasty, nutritious, and perfect for daily milk time." },


  ];
  const [selectedItem, setSelectedItem] = useState(null);
  const handleCardClick = (item) => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);
  return (
    <section className="w-full px-6 py-16 bg-white">
      <div className="mx-auto flex flex-col-reverse lg:flex-row items-center gap-1">
        {/* Left Side */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-5xl leading-tight mb-4 text-gray-900 drop-shadow-lg">
       Reimagining Nutrition for Modern Living
            <br />
            <span className="font-bold text-[rgb(157,37,45)] drop-shadow-md">
              AGASTHYA SUPERFOODS
            </span>
          </h1>
          <p className="text-gray-600 mt-2 max-w-xl">
Discover our latest innovations — from protein-packed Milk Mixes to crunchy Ragi Fills and wholesome Millet Mueslis.
✨ Made with ancient grains, crafted for modern living.
Swipe through our newest launches and taste the future of nutrition!

          </p>
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            <button className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Contact Us
            </button>
            <button className="border border-[rgb(157,37,45)] text-[rgb(157,37,45)] px-6 py-3 rounded-full text-sm font-medium hover:bg-[rgb(157,37,45)] hover:text-white transition">
              Become a Partner
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            Naturally Sourced · Trusted by 1000+ Retailers
          </div>
        </div>
        {/* Right Side */}
        <div className="flex-1 relative h-[80vh]">
          <VelocityScrollColumn items={cards} numColumns={2} defaultVelocity={0.5} onCardClick={handleCardClick} />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
      {/* Detail Modal */}
    {/* Detail Modal */}
<AnimatePresence>
  {selectedItem && (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <X size={20} />
        </button>
        <img
          src={selectedItem.image}
          alt="Selected"
          className="w-full mt-4 h-60 object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {selectedItem.title}
        </h2>
        <p className="text-gray-600 text-sm mb-4">{selectedItem.description}</p>

        {/* ✅ Shop Now Button */}
        <button
          className="bg-[rgb(157,37,45)] text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition w-full"
          onClick={() => {
            window.location.href = "/WholesaleBulk";
          }}
        >
          Shop Now
        </button>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
}
