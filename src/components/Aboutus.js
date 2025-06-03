import React from "react";

function Aboutus() {
  return (
    <div className="relative p-8">
      {/* Video & Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Video Section */}
        <div className="w-full md:w-1/2 p-9">
          <iframe
            className="w-full h-[300px] md:h-[400px] rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/czI0ttoPWoo?autoplay=1&mute=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-1/2 text-gray-700 leading-relaxed space-y-4">
          <h1 className="text-2xl font-bold">Our Story</h1>
          <p>
            In a country where the rising tide of obesity has left millions struggling with weight and its associated health issues, 
            Mr. Varun Suri, CEO of AGASTHYA healthy foods private limited, being a fitness enthusiast, felt a deep responsibility to create a solution.
          </p>
          <p>
            Witnessing the challenges faced by many, he knew it was time to step in with a holistic approach that truly makes a difference.
          </p>
          <p>
            That’s how AGASTHYA was born—a brand dedicated to empowering individuals to embrace a healthier lifestyle and discover the healthier side of life.
          </p>
        </div>
      </div>

      {/* Image & Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-700 leading-relaxed space-y-4 pl-9">
          <h1 className="text-2xl font-bold">Our Mission</h1>
      At Agasthya Superfoods, we are dedicated to crafting a wholesome range of superfood-based cereals and snacks made from nutrient-rich ingredients like millets, quinoa, oats, and whole grains. Our mission is to promote balanced nutrition and healthy living for individuals and families across all age groups.

Whether it’s a quick, energizing breakfast for working professionals, a protein-rich snack for growing kids, or a clean-label option for health-conscious homemakers, Agasthya Superfoods delivers taste without compromise.

Our curated product lineup including Millet Muesli, Quinoa Flakes, Choco Fills, Protein Bars, and more—is trusted by families who value both functional health and flavorful variety. With every serving, we bring together nature’s finest ingredients and a commitment to better wellness, one bite at a time.

          <p>
            Our premium selection includes{" "}
            <span className="text-[rgb(157,37,45)] font-semibold">
              Nutrix Oats, Nutrix Muesli, Nutrix Choco Flakes
            </span>, 
            and more trusted by families who prioritize both taste and well-being. 
            With every bite, experience the goodness of quality ingredients and a commitment to better health.
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 p-9">
          <img
            src="/aboutus.png"
            alt="Mr. Flakes Nutrix Products"
            className=""
          />
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
