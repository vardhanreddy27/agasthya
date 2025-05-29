import Image from "next/image";

const Certified = () => {
  const certImages = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Halal_logo.svg/1200px-Halal_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmesZLK16WzQC1dBmwuwbKssDDlJE8oW-zJZVDCbmKu7gPdf3u2Zgpo1AgRH7Fo74m0OU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaO6TMf3Toxuc1hFCC25TIGEq5-HfdEF06g&s",
    "https://upload.wikimedia.org/wikipedia/en/e/e2/FSSAI_logo.png",
    "/usfda.png",
    "https://www.boonsfis.com/uploads/longread_blocks/image/1937.png?t=1727170014",

  ];

  return (
    <section className="mt-10 flex flex-col md:flex-row items-center  bg-white shadow-xl border border-gray-200">
      {/* Left Section */}
      <div className="md:w-1/3 space-y-4 p-6">
        <h2 className="text-2xl font-bold">Our certifications say it all.</h2>
        <p className="text-gray-600">
          No one takes security more seriously than us. That’s why we work hard
          to achieve and maintain the highest security standards in the industry.
        </p>
        <button className="primarycolor text-white px-6 py-3 rounded-lg flex items-center space-x-2">
          <span>→</span>
          <span>Get in touch</span>
        </button>
      </div>

      {/* Right Section - Certification Logos Grid */}
      <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 border-l border-gray-200">
        {certImages.map((cert, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-6 bg-white border border-gray-200"
          >
            <div className="w-24 h-24 flex items-center justify-center">
              <Image 
                src={cert} 
                width={96} 
                height={96} 
                className="object-contain flex-shrink-0" 
                alt="Certification" 
                unoptimized 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certified;
