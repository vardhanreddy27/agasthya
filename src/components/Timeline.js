"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data = [] }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []); // Removed ref from dependencies array

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white mt-14 dark:bg-neutral-950 font-sans "
      ref={containerRef}
    >
   <div className="p-10 flex flex-col items-center justify-center text-center ">
  <h2 className="text-lg md:text-4xl font-bold  text-black dark:text-white ">
    Why Mr. Flakes Nutrix
  </h2>
  <p className="text-neutral-700 mb-20 dark:text-neutral-300 text-sm p-5">
    We believe in the power of the right ingredients and aim to bring you the perfect blend of taste and nutrition. That is why everything at Mr Flakes Nutrix is packed with natural goodness from around the world – oats from open fields, real fruits, and whole grains.
  </p>
</div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {Array.isArray(data) && data.map((item, index) => (
          <div key={index} className="flex justify-start  md:gap-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden mb-7 md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item?.title || ""} 
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item?.title || ""}
              </h3>
              {item?.content || null}
            </div>
          </div>
        ))}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
      <motion.div
  style={{
    height: heightTransform,
    opacity: opacityTransform,
  }}
  className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[rgb(157,37,45)] via-[rgb(157,37,45,0.7)] to-transparent from-[0%] via-[10%] rounded-full"
/>

        </div>
      </div>
    </div>
  );
};

Timeline.defaultProps = {
  data: []
};