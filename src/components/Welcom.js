"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import SplitType from "split-type";
import { ThreeDMarqueeDemo } from "./ThreeDMarqueeDemo";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandHeartDuotone } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function Welcome() {
  useEffect(() => {
    const titleSplit = new SplitType("#welcome-title", { types: "words" });
    const subtitleSplit = new SplitType("#welcome-subtitle", { types: "words" });

    gsap.set("#welcome-title, #welcome-subtitle", { opacity: 1 }); // reveal parent container after splitting
    gsap.set(".word", { y: 100, opacity: 0 }); // initial position

    gsap.to(".word", {
      y: 0,
      opacity: 1,
      stagger: 0,
      duration: 0.6,
      ease: "power2.out",
      delay: 0.2,
    });
  }, []);

  return (
    <section className="bg-[#FFF0F1]">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Column - Text + CTA */}
        <div className="lg:w-1/3 w-full flex flex-col px-4 text-center lg:text-left pb-5">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/agasthyalogo.svg"
              alt="Agasthya Logo"
              width={140}
              height={70}
              className="w-auto h-auto max-w-[180px]"
            />
          </div>

          {/* Animated Title */}
          <h1
            id="welcome-title"
            className="text-2xl sm:text-4xl lg:text-4xl font-bold leading-tight overflow-hidden opacity-0"style={{ lineHeight: "3.5rem" }}
          >
            Agastya SuperFoods
          </h1>

          {/* Animated Subtitle */}
          <p
            id="welcome-subtitle"
            className="text-base sm:text-lg lg:text-xl pt-3 text-gray-800 overflow-hidden opacity-0"
          >
            Where Superfoods Begin and Wellness Follows
          </p>

          {/* CTA + Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 pt-4">
            <button  className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Shop Now
            </button>
            <VscWorkspaceTrusted className="text-2xl" />
            <PiHandHeartDuotone className="text-3xl" />
            <LiaCertificateSolid className="text-3xl" />
          </div>
        </div>

        {/* Right Column - Marquee Animation */}
        <div className="lg:w-2/3 w-full">
          <ThreeDMarqueeDemo />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
