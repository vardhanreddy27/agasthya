import React from "react";

function Aboutus() {
  return (
    <div className="relative p-6 md:p-12 bg-white text-gray-800">
      {/* Section 1: Video + Intro */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Video */}
        <div className="w-full md:w-1/2">
    <iframe
  className="w-full h-[300px] md:h-[400px] rounded-xl shadow-lg"
  src="https://www.youtube.com/embed/nIXLgPHTgYc?si=rRqywaGzEP87eLCA"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>


        </div>

        {/* Our Story */}
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold">Our Story</h1>
          <h2 className="text-lg font-semibold text-[rgb(157,37,45)]">
            From Our Soil to the World - Welcome to Agasthya SuperFoods
          </h2>
          <p>
            At Agasthya SuperFoods, we’re redefining how clean, conscious nutrition is created. With our own certified organic farm, we grow a part of our raw materials, ensuring purity and traceability from the source.
          </p>
          <p>
            Our advanced manufacturing facility is dedicated to millets and superfoods and meets global standards.
            We’re proudly certified with: FSSC 22000 Version 6, BRC F9 , USFDA , HALAL , India Organic , FSSAI , FoSTaC
        
            With offices in <strong>Dubai, Australia, Canada, Saudi Arabia, and the UK</strong>, our reach is global - but our values are rooted in sustainable, homegrown goodness.
          </p>
          <p>
            From farm to formulation, every Agasthya product is crafted with care  blending tradition with modern science to nourish the world, one bite at a time.
          </p>
        </div>
      </div>

      {/* Section 2: Vision + Mission */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-16">
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl font-bold">Our Vision</h2>
          <p>
            To become a global leader in redefining everyday nutrition - making clean, delicious, and culturally rooted superfoods accessible to every table.
          </p>

          <h2 className="text-3xl font-bold">Our Mission</h2>
          <p>
            At Agasthya SuperFoods, our mission is to spread nourishment with purpose - blending nutrition with taste, tradition with innovation, and science with soul.
          </p>

          <p>We believe in the <strong>extraordinary power of millets, quinoa, and ancient superfoods</strong> - nature’s most nutrient-rich ingredients - to transform the way the world eats.</p>

          <p>We are committed to:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Reviving ancient grains like millets into modern, convenient formats</li>
            <li>Innovating smarter, cleaner foods through continuous R&D</li>
            <li>Delivering safe, certified, and flavourful nutrition</li>
            <li>Offering regular and enhanced superfood formulations</li>
            <li>Building a global community that chooses health without compromise</li>
          </ul>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/farmtofactory.webp"
            alt="Agasthya SuperFoods "
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
