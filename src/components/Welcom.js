import React from 'react';
import Image from 'next/image';
import { ThreeDMarqueeDemo } from './ThreeDMarqueeDemo';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandHeartDuotone } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function Welcome() {
  return (
    <section className="bg-[#FFF0F1] ">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Column - Padded */}
        <div className="lg:w-1/3 w-full flex flex-col  px-4 text-center lg:text-left pb-5">
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

          {/* Heading and Tagline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Agastya SuperFoods
          </h1>
          <p className="text-base sm:text-lg lg:text-xl pt-3 text-gray-800">
            Where Superfoods Begin and Wellness Follows
          </p>

          {/* CTA Button + Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 pt-2">
            <button className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Shop Now
            </button>
            <VscWorkspaceTrusted className="text-2xl" />
            <PiHandHeartDuotone className="text-3xl" />
            <LiaCertificateSolid className="text-3xl" />
          </div>
        </div>

        {/* Right Column - No padding applied */}
        <div className="lg:w-2/3 w-full">
          <ThreeDMarqueeDemo />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
