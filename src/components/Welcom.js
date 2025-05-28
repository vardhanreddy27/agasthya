import React from 'react';
import Image from 'next/image';
import { ThreeDMarqueeDemo } from './ThreeDMarqueeDemo';
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { PiHandHeartDuotone } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function Welcome() {
  return (
    <section className="bg-[#FFF0F1]	 ">
<div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="lg:w-1/3 mb-10 lg:mb-0 p-10">
          <div className='flex pl-2 mb-3'>
                 <Image src="/agasthyalogo.png" alt="Agasthya Logo" width={155} height={80} />
               </div> <h1 className="text-4xl md:text-5xl font-bold mb-4">
           Agastya SuperFoods
          </h1>
          <p className="text-lg md:text-xl pb-5">
        Where Superfoods Begins and Wellness Follows
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
