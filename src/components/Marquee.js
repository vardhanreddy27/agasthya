"use client";
import Image from 'next/image';

import { motion } from "framer-motion";

export const Marquee = ({ images, className }) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div className={`mx-auto block h-[600px] overflow-hidden max-sm:h-100 ${className}`}>
      <div className="flex size-full items-center justify-center">
        <div className="size-[1720px] shrink-0 scale-50 sm:scale-75 lg:scale-100">
          <div
            style={{ transform: "rotateX(48deg) rotateY(0deg) rotateZ(-45deg)" }}
            className="relative top-96 right-[50%] grid size-full origin-top-left grid-cols-4 gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
             <motion.div
  key={colIndex}
  className="flex flex-col items-start gap-8"
  animate={{ y: ["0%", "-100%"] }}
  transition={{
    duration: 500 + colIndex * 5, 
    ease: "linear",
                     repeat: Infinity,
                  repeatType: "reverse",

  }}
>

                <GridLineVertical className="-left-4" offset="80px" />
                {[...subarray, ...subarray].map((image, index) => (
                  <div className="relative" key={`${colIndex}-${index}`}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                  <Image
  src={image}
  alt={`Image ${index + 1}`}
  width={970}
  height={700}
  loading="lazy"
  className="aspect-[970/700] rounded-lg object-cover hover:shadow-md transition"
/>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = ({ className, offset }) => (
  <div
    style={{
      "--background": "#ffffff",
      "--color": "rgba(0, 0, 0, 0.2)",
      "--height": "1px",
      "--width": "5px",
      "--fade-stop": "90%",
      "--offset": offset || "200px",
      "--color-dark": "rgba(255, 255, 255, 0.2)",
    }}
    className={`absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))] 
      bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]
      [background-size:var(--width)_var(--height)] 
      [mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]
      [mask-composite:exclude] z-30 
      dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] ${className}`}
  />
);

const GridLineVertical = ({ className, offset }) => (
  <div
    style={{
      "--background": "#ffffff",
      "--color": "rgba(0, 0, 0, 0.2)",
      "--height": "5px",
      "--width": "1px",
      "--fade-stop": "90%",
      "--offset": offset || "150px",
      "--color-dark": "rgba(255, 255, 255, 0.2)",
    }}
    className={`absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)] 
      bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]
      [background-size:var(--width)_var(--height)] 
      [mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]
      [mask-composite:exclude] z-30 
      dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)] ${className}`}
  />
);
