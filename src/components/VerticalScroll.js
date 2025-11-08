"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

// Utility function
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Wrap utility
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

// ParallaxCardColumn component (rotated 90 degrees)
function ParallaxCardColumn({ items, baseVelocity = 8, ...props }) {
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
      {...props}
    >
      <motion.div
        className="absolute flex flex-col gap-4"
        style={{ y }}
      >
        {Array.from({ length: repetitions }).flatMap((_, i) =>
          items.map((item, index) => (
            <div
              key={`${i}-${index}`}
              ref={i === 0 && index === 0 ? itemRef : null}
              className="min-h-[150px] bg-white border rounded-xl shadow-md p-4 w-[280px]"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </div>
          ))
        )}
      </motion.div>
    </div>
  );
}

// VelocityScrollColumn using vertical card columns
export function VelocityScrollColumn({
  defaultVelocity = 0.5,
  numColumns = 1,
  items,
  className,
  ...props
}) {
  return (
    <div className={cn("flex flex-row gap-10 justify-center", className)} {...props}>
      {Array.from({ length: numColumns }).map((_, i) => (
        <ParallaxCardColumn
          key={i}
          items={items}
          baseVelocity={defaultVelocity * (i % 2 === 0 ? 1 : -1)}
        />
      ))}
    </div>
  );
}

// Demo component
export default function ScrollBasedVerticalDemo() {
  const cards = [
    { title: "Card 1", description: "This is the first card." },
    { title: "Card 2", description: "Another one in the scroll." },
    { title: "Card 3", description: "Parallax makes it cool." },
    { title: "Card 4", description: "Add as many as you like." },
    { title: "Card 5", description: "Scroll speed = motion." },
    { title: "Card 6", description: "Each card is reusable." },
    { title: "Card 7", description: "Try changing styles!" },
  ];

  return (
    <div className="relative flex w-full flex-col items-center justify-center py-10">
      <VelocityScrollColumn items={cards} numColumns={2} defaultVelocity={0.5} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
