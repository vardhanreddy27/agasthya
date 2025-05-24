"use client";

import { Marquee } from "./Marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/flakesbanner.png",
    "/farmik.png",
    "/snacksbanner.png",
    "/snacksbanner.png",
    "/chocoflakesgpt.png",
    "/berryblastwithbg.png",
    "/farmik.png",
    "/berryblastwithbg.png",
    "/snacksbanner.png",
    "/farmik.png",
    "/berryblastwithbg.png",
    "/MilletMuesliBelgianDarkChocolate.jpg",
    "/banner4.png",
    "/farmik.png",
    "/farmik.png",
    "/berryblastwithbg.png",
    "/chocoflakesgpt.png",
    "/MilletMuesliBelgianDarkChocolate.jpg",
    "/berryblastwithbg.png",
    "/chocoflakesgpt.png",
    "/MilletMuesliBelgianDarkChocolate.jpg",
    "/berryblastwithbg.png",
    "/MilletMuesliBelgianDarkChocolate.jpg",
    "/berryblastwithbg.png",
    "/berryblastwithbg.png",
    "/chocoflakesgpt.png",
    "/berryblastwithbg.png",
    "/MilletMuesliBelgianDarkChocolate.jpg",
    "/berryblastwithbg.png",
    "/berryblastwithbg.png",
    "/MilletMuesliBelgianDarkChocolate.jpg",
  ];

  return (
    <div className="relative mx-auto  flex screenheight w-full  flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-10 h-full w-full bg-black/10 dark:bg-black/40" />
      <Marquee className="pointer-events-none absolute inset-0 h-full w-full" images={images} />
    </div>
  );
}
