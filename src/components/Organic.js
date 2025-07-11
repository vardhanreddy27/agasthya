import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function Organic() {
  return (
    <div className="px-4 sm:px-12 lg:px-20 bg-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-20 text-gray-800">
        Our Organic Farm in Talakondapally
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {/* Image 1 */}
        <div className="rounded-2xl overflow-hidden group h-full">
          <Image
            src="/org.webp"
            alt="organic farming"
            width={500}
            height={400}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text Card 1 with link to NPOP */}
        <a
          href="https://apeda.gov.in/national-programme-for-organic-production-npop"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full transform transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-white rounded-2xl p-4 relative h-full flex flex-col justify-between shadow-md">
            <div className="absolute top-4 right-4 bg-black text-white p-2 rounded-full">
              <ArrowUpRight size={16} />
            </div>
            <div className="pt-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">Stage 2</h3>
              <h4 className="text-lg font-semibold mb-3">
                Advancing Towards Organic Certification
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                Our farm is currently progressing into Stage 2 of certification
                under India's National Programme for Organic Production (NPOP).
              </p>
            </div>
          </div>
        </a>

        {/* Image 2 */}
        <div className="rounded-2xl overflow-hidden group h-full">
          <Image
            src="/orgfarm.webp"
            alt="organic farming"
            width={500}
            height={400}
            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Text Card 2 with link to Aditi */}
        <a
          href="https://aditicert.net"
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full transform transition-transform duration-300 hover:scale-105"
        >
          <div className="bg-[#d7fc6d] rounded-2xl p-4 relative h-full flex flex-col justify-between shadow-md">
            <div className="absolute top-4 right-4 bg-black text-white p-2 rounded-full">
              <ArrowUpRight size={16} />
            </div>
            <div className="pt-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Aditi Organic Certification
              </h3>
              <h4 className="text-lg font-semibold mb-3">
                Accredited Certification Partner
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                The certification process is being carried out by Aditi Organic
                Certification Pvt. Ltd., an accredited body recognized under
                NPOP.
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Organic;
