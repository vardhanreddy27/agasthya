"use client";
import React, { useEffect } from "react";
import SplitType from 'split-type'
import gsap from "gsap";
import Image from 'next/image'

export default function ImageSlider() {


  return (
    <div className="">


      <Image
              src="/banneroat.png"
              alt="Full Width Banner"
              width={2000} // Set exact width for optimization
              height={800} // Adjust height proportionally
              className="w-full h-auto"
              priority // Ensures faster loading
            />      

    </div>
  );
}
