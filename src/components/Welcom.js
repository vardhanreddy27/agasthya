import React from 'react';
import { ThreeDMarqueeDemo } from './ThreeDMarqueeDemo';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandHeartDuotone } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function Welcome() {
  return (
    <section className=" ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="lg:w-1/3 mb-10 lg:mb-0 p-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Agastya Super Foods
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Discover the fusion of tradition and innovation with Agastya Superfoods.
          </p>
          {/* Button and Icons in Same Line */}
          <div className="flex items-center gap-4">
            <button className="bg-[rgb(157,37,45)] text-white px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
              Shop Now
            </button>
            <VscWorkspaceTrusted className="text-2xl" />
            <PiHandHeartDuotone className="text-3xl" />
            <LiaCertificateSolid className="text-3xl" />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3">
          <ThreeDMarqueeDemo />
        </div>
      </div>
    </section>
  );
}

export default Welcome;
