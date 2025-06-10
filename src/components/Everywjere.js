import React from "react";
import Image from "next/image";

const onlineStores = [
  { name: "Swiggy Instamart", src: "/instamart.PNG" },
  { name: "Big Basket", src: "/bigbasket.PNG" },
  { name: "Blinkit", src: "/blinkit.JPG" },
  { name: "Zepto", src: "/zepto.PNG" },
  { name: "Flipkart", src: "/flipkart.PNG" },
  { name: "Amazon", src: "/amazon.PNG" },
];

const offlineStores = [
  { name: "Carrefour", src: "/carre.PNG" },
  { name: "Lulu", src: "/lulu.PNG" },
  { name: "Coop", src: "/coop.JPG" },
  { name: "Union Coop", src: "/unicoop.PNG" },
  { name: "Abudabi Coop", src: "/abu.PNG" },
  { name: "Sharja Coop", src: "/sharja.JPG" },
];

function Everywhere() {
  return (
    <div className="w-full flex justify-center items-center">
      <section className="w-full px-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="uppercase text-[#d94b0f] px-8 pt-4 rounded-full text-3xl md:text-5xl font-bold mb-4 inline-block">
            We are everywhere
          </h1>
          <p className="rounded-full text-3xl md:text-xl font-bold mb-12 inline-block">Widely available through top e-commerce platforms and retail outlets worldwide</p>
          <div className="grid md:grid-cols-2 gap-10 items-start justify-between">
            {/* Online Section */}
            <div>
              <h2 className="inline-block bg-[#d94b0f] text-white px-6 py-2 rounded-full text-xl font-bold mb-9">
                Online
              </h2>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {onlineStores.map((store, index) => (
                  <div key={index} className="w-[90px] h-[90px] relative">
                    <Image
                      src={store.src}
                      alt={store.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Offline Section */}
            <div>
              <h2 className="inline-block bg-[#d94b0f] text-white px-6 py-2 rounded-full text-xl font-bold mb-9">
                Offline
              </h2>
              <div className="grid grid-cols-3 gap-6 justify-items-center">
                {offlineStores.map((store, index) => (
                  <div key={index} className="w-[90px] h-[90px] relative">
                    <Image
                      src={store.src}
                      alt={store.name}
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Everywhere;
