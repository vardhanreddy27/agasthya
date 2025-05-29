import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Features = () => {
  const [toggles, setToggles] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
  });

  const textRefs = useRef([]);
  const paraRefs = useRef([]);

  useEffect(() => {
    Object.keys(toggles).forEach((index) => {
      if (toggles[index]) {
        gsap.to([textRefs.current[index], paraRefs.current[index]], {
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        });
      }
    });
  }, [toggles]);

  const handleHover = (index) => {
    setToggles((prev) => ({ ...prev, [index]: true }));
  };

  const images = [
    "/100organic.png", // 100% Natural
    "/certified.png", // Certified
    "/glutenfree.png", // Gluten-Free
    "/artificialpreservatives.png", // No Artificial Sweeteners
  ];

  const features = [
    {
      title: "100% Natural",
      text: "Our products are made from the finest, naturally grown ingredients free from pesticides, chemicals.",
    },
    {
      title: "Certified",
      text: "We are certified for the quality and safety, ensuring our superfoods meet global health standards.",
    },
    {
      title: "Made with Ancient Grains",
      text: "Our products are made with ancient grains to deliver time-tested nutrition with modern-day health benefits.",
    },
    {
      title: "No Artificial Sweeteners",
      text: "We believe in clean nutrition no artificial flavors, sweeteners, or preservatives.",
    },
  ];

  return (
  <div className="pb-7 pt-16 px-4">
    <h1 className="text-4xl md:text-5xl font-bold text-center mb-5 text-gray-800">
      WHY <span className="text-[#9D252D]">AGASTHYA</span> SUPERFOODS
    </h1>

    <p className="text-center max-w-3xl mx-auto mb-12 text-gray-800">
      Agasthya Superfoods was founded on a simple belief that a diverse range
      of grains and superfoods contribute to overall well-being. We are
      committed to providing high-quality, nutrient-rich products that
      support a healthier lifestyle.
    </p>

    <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl">
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-3 rounded-xl cursor-pointer"
          onMouseEnter={() => handleHover(index)}
        >
          <div className="h-20 flex">
            <div
              className={`w-28 h-14 flex items-center p-1 rounded-full -rotate-45 ${
                toggles[index] ? "bg-red-100" : "bg-red-50"
              } overflow-hidden`}
              style={{
                transformOrigin: "center",
                boxShadow:
                  "inset 4px 4px 10px rgba(0, 0, 0, 0.3), inset -4px -4px 10px rgba(255, 255, 255, 0.3)",
              }}
            >
              <img
                src={images[index]}
                alt={feature.title}
                className="w-12 h-12 rounded-full transition-transform duration-500"
                style={{
                  transform: toggles[index]
                    ? "translateX(56px)"
                    : "translateX(0)",
                }}
              />
            </div>
          </div>

          <h2
            ref={(el) => (textRefs.current[index] = el)}
            className="text-2xl font-bold mt-6 text-gray-800 opacity-80"
          >
            {feature.title}
          </h2>

          <p
            ref={(el) => (paraRefs.current[index] = el)}
            className="leading-relaxed text-gray-800 opacity-50"
          >
            {feature.text}
          </p>
        </div>
      ))}
    </div>
  </div>
);

};

export default Features;
