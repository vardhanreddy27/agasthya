"use client";

import { Marquee } from "./Marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/factoryin1.webp",
    "/factory4.webp",
    "/factoryinn5.webp",
    "/factory3.webp",
    "/factory1.webp",
    "/farmtofactory.webp",
    "/factory2.webp",
  ];

  // Repeat the images for a seamless marquee effect
  const repeatedImages = Array.from({ length: 4 }, () => images).flat();

  return (
    <div className="relative mx-auto flex screenheight w-full flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-10 h-full w-full bg-black/10 dark:bg-black/40" />
      <Marquee className="pointer-events-none absolute inset-0 h-full w-full" images={repeatedImages} />
    </div>
  );
}
