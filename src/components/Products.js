import React from 'react';

function Products() {
  const Card = ({ imageUrl, title }) => {
    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
        <div className="relative aspect-square overflow-hidden">
          <img
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            src={imageUrl}
            alt={title}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 text-white">
            <h3 className="text-lg font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    );
  };

  const products = [
    { title: "White Oats", imageUrl: "/whiteoats.jpg" },
    { title: "Honey & Almond Corn Flakes", imageUrl: "/honeyandalmondflakes.jpg" },
    { title: "Nutty Delight Millet Muesli", imageUrl: "/MilletMuesliNuttyDelight.jpg" },
    { title: "Berry Burst Millet Muesli", imageUrl: "/berryblastwithbg.png" },
    { title: "Belgian Dark Chocolate Millet Muesli", imageUrl: "/MilletMuesliBelgianDarkChocolate.jpg" },
    { title: "Multi Millet Chocos", imageUrl: "/chocoflakes.jpg" },
    { title: "Ragi Chocos", imageUrl: "/ragichoco.jpg" },
    { title: "Multi Millet Vermicelli", imageUrl: "/multimilletvermicelli.jpg" },
    { title: "Peanut Coco Bar", imageUrl: "/proteinbar.jpg" },
  ];

  return (
    <section className="bg-[#fdfdfd] py-16 px-4 sm:px-16">
      {/* Title */}
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-gray-800 relative inline-block">
          <span className="relative z-10 bg-white px-3">Our Products</span>
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-24 h-[3px] bg-[rgb(157,37,45)] mt-2"></div>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Mr. Flakes food products are an innovative, value-added solution in the packaged food space.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {products.map((item, index) => (
          <Card key={index} imageUrl={item.imageUrl} title={item.title} />
        ))}
      </div>
    </section>
  );
}

export default Products;
