import React from 'react';

function Products() {
  const Card = ({ imageUrl, title, description }) => {
    let label = '';
    let value = '';

    if (description && description.includes(':')) {
      [label, value] = description.split(':');
    }

    return (
      <div className="bg-white rounded-2xl overflow-hidden shadow-md transition duration-300 max-w-[350px] mx-auto flex flex-col">
        {/* Image */}
        <div className="h-[300px] overflow-hidden group">
          <img
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={imageUrl}
            alt={title}
          />
        </div>

        {/* Title & Description */}
        <div className="p-4 text-center flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
          {description && (
            <p className="text-sm text-gray-600">
               <strong>{label}:{' '}</strong>
             {value}
            </p>
          )}
        </div>
      </div>
    );
  };

  const products = [
    { title: "Corn Flakes", imageUrl: "/cornflakes.webp" },
    { title: "Frosted Flakes", imageUrl: "/frostedflakes.webp" },
    {
      title: "Quinoa cereals",
      imageUrl: "/quinoa.webp",
      description: "Flavors :Honey & Almond , Cereal Flakes (No Added Sugar) , Fruit & Nut (No added Sugar) ,Fruit & Nut  ",
    },    {
      title: "Kids Range",
      imageUrl: "/kids.webp",
      description: "Flavors : Choco Flakes , Froot Loops , Choco Fills",
    },  {
      title: "Millet Muesli",
      imageUrl: "/muesli.webp",
      description: "Flavors :Berry Blast , Dark Chocolate , Nutty Crunchy ",
    }, {
      title: "Porridges",
      imageUrl: "/porridge.webp",
      description: "Flavors :Apple-cinnamon , Mixed Chocolate , Mixed Vegetables ,Tomato Tangy ",
    },
     {
      title: "NutriFusion Health Mix",
      imageUrl: "/farmik.webp",
      description: "Flavors : Vanilla , Strawberry",
    },
   {
      title: "Corn Rings",
      imageUrl: "/rings.webp",
      description: "Flavors : Cheese , Sour Creamy & Onion , Pizza , Barbique  ",
    }, {
      title: "Wavy Chips",
      imageUrl: "/wavy.webp",
      description: "Flavors : Barbique , Sweet Chilli , Lemon , Sour Cream  ",
    }, {
      title: "Corn Balls",
      imageUrl: "/balls.webp",
      description: "Flavors : BBQ Sweet Chilli , Pizza , Cheese , Sour Cream Onion  ",
    },
    { title: "Multi Millet Vermicelli", imageUrl: "/multimilletvermicelli.webp" },
    {
      title: "Bars",
      imageUrl: "/bars.webp",
      description: "Flavors : Meal Replacement Bar , Almond Power Crunch Energy Bar , Cranberry Choco Energy Bar , Peanut Cocoa Protein Bar",
    },
  ];

  return (
    <section className="bg-[#fdfdfd] py-16 px-4 sm:px-16">
      {/* Section Header */}
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
          <Card
            key={index}
            imageUrl={item.imageUrl}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
