// Marquee.jsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export const Marquee = ({ images, className }) => {
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div className={`mx-auto block h-[600px] overflow-hidden ${className}`}>
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
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 400 + colIndex * 4,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...subarray, ...subarray].map((image, index) => (
                  <div className="relative" key={`${colIndex}-${index}`}>
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
