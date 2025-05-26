"use client";

import { Marquee } from "./Marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/flakesbanner.webp",
    "/farmik.webp",
    "/snacksbanner.webp",
    "/chocoflakesgpt.webp",
    "/berryblastwithbg.webp",
    "/MilletMuesliBelgianDarkChocolate.jpg",
    "/banner4.jpg",
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
