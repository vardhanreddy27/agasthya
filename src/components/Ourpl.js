"use client";
import Image from "next/image";

export default function Ourpl() {
  return (
    <section className="bg-white pb-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Image */}
        <div>
          <Image
            src="/pl.webp"
            alt="Private Label Client Logos"
            width={600}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right Column - Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Private Label Brands
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            We’re proud to power the success of leading health and nutrition brands through our private label partnerships. From concept to shelf, Agasthya Superfoods delivers innovative, high-quality formulations tailored to every brand’s vision.
          </p>
        </div>
      </div>
    </section>
  );
}
