"use client";

import Image from "next/image";
import Link from "next/link";

const certImages = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Halal_logo.svg/1200px-Halal_logo.svg.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmesZLK16WzQC1dBmwuwbKssDDlJE8oW-zJZVDCbmKu7gPdf3u2Zgpo1AgRH7Fo74m0OU&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWaO6TMf3Toxuc1hFCC25TIGEq5-HfdEF06g&s",
  "https://upload.wikimedia.org/wikipedia/en/e/e2/FSSAI_logo.png",
  "/usfda.png",
  "https://www.boonsfis.com/uploads/longread_blocks/image/1937.png?t=1727170014",
];

const Certified = () => {
  return (
    <section className="mt-10 bg-white shadow-xl border border-gray-200">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Left Section */}
        <div className="md:w-1/3 w-full p-6 space-y-4 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-2xl font-bold">
            Our certifications say it all.
          </h2>
          <p className="text-gray-600">
            No one takes security more seriously than us. That’s why we work
            hard to achieve and maintain the highest security standards in the
            industry.
          </p>
          <Link href="/Contact" passHref>
            <button className="primarycolor mt-9 text-white px-6 py-3 rounded-lg flex items-center justify-center md:justify-start space-x-2">
              <span>→</span>
              <span>Get in touch</span>
            </button>
          </Link>
        </div>

        {/* Right Grid Section */}
        <div className="md:w-2/3 w-full grid grid-cols-2 md:grid-cols-3 border-t md:border-t-0">
          {certImages.map((cert, index) => (
            <div
              key={index}
              className="flex justify-center items-center p-6 bg-white border border-gray-200"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <Image
                  src={cert}
                  width={96}
                  height={96}
                  className="object-contain max-w-full max-h-full"
                  alt={`Certification ${index + 1}`}
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certified;
