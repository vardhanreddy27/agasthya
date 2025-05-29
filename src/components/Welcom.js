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
        
        {/* Left Column */}
        <div className="lg:w-1/2 w-full flex pl-8 flex-col gap-5">
          {/* Logo */}
          <div className='mb-2'>
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
          <p className="text-base sm:text-lg lg:text-xl text-gray-800">
            Where Superfoods Begin and Wellness Follows
          </p>

          {/* CTA Button + Icons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Shop Now
            </button>
            <VscWorkspaceTrusted className="text-2xl" />
            <PiHandHeartDuotone className="text-3xl" />
            <LiaCertificateSolid className="text-3xl" />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 w-full">
          <ThreeDMarqueeDemo />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
