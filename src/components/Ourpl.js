"use client";
import Image from "next/image";

export default function Ourpl() {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Our Private Label Brands
        </h2>
        <p className="text-gray-600 max-w-2xl text-sm md:text-base">
          We’re proud to power the success of leading health and nutrition brands through our private label partnerships. From concept to shelf, Agasthya Superfoods delivers innovative, high-quality formulations tailored to every brand’s vision.
        </p>  {/* Logos image */}
        <div className="mb-8">
          <Image
            src="/pl.png" 
            alt="Private Label Client Logos"
            width={960}
            height={640}
            className="mx-auto w-full h-auto max-w-3xl object-contain"
          />
        </div>

        {/* Text content */}
      
      </div>
    </section>
  );
}
