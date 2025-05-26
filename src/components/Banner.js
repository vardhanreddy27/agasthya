import Image from 'next/image';
import React from 'react';

function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#009CCB] p-6  shadow-md">
      
      {/* Left: Smaller Product Line Image */}
      <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
        <div className="w-[300px] md:w-[400px]">
          <Image
            src="/bannertest.webp"
            alt="Mr. Flakes Product Lineup"
            layout="responsive"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Right: Centered Text Content */}
      <div className="md:w-1/2 w-full px-6 flex items-center justify-center text-white">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Mr. Flakes Nutrix</h2>
          <p className="text-lg mb-3">Our premium product line includes:</p>
          <ul className="list-disc list-inside space-y-1 text-base">
            <li><strong>Corn Flakes & Frosted Flakes</strong></li>
            <li><strong>Quinoa Cereals</strong> – Flakes, Muesli variants</li>
            <li><strong>Millet Muesli</strong> – Berry, Nutty, Dark Chocolate</li>
            <li><strong>Kids Range</strong> – Choco Flakes, Froot Loops, Choco Fills</li>
            <li><strong>Instant Foods</strong> – Energy Bars in multiple variants</li>
            <li><strong>Porridges</strong> – Millet Porridge in multiple flavors</li>
            <li><strong>Corn Rings</strong> – Cheese, BBQ, Pizza, Sour Cream & Onion</li>
            <li><strong>Wavy Chips</strong> – Sweet Chilli, Sour Cream, Lemon, BBQ</li>
            <li><strong>Corn Balls</strong> – Variety of innovative flavors</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Banner;
