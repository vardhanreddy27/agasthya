import { FaLeaf, FaTag, FaShieldAlt, FaStore, FaHeadset, FaMoneyBillAlt, FaUser } from 'react-icons/fa';
import { FcLike, FcCollaboration } from "react-icons/fc";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Committed to Health",
      description: "At Agasthya Superfoods, we prioritize your well-being by offering millet-based, wholesome, and nutritionally balanced food options crafted to support a healthier lifestyle for all ages.",
      icon: <FcLike className="text-3xl" />,
    },
    {
      title: "Sustainably Sourced",
      description: "We are committed to sustainability. All our ingredients are responsibly sourced, ensuring minimal environmental impact while supporting local agriculture.",
      icon: <FaLeaf className="text-green-600 text-3xl" />,
    },
    {
      title: "Affordable Nutrition",
      description: "Nutrition should never be a luxury. Our superfoods deliver premium quality at affordable prices, making healthy living accessible for everyone.",
      icon: <FaTag className="text-yellow-500 text-3xl" />,
    },
    {
      title: "Quality Assurance",
      description: "With FSSC 22000, HACCP, GMP, and other certifications, we follow world-class quality protocols from sourcing to packaging, ensuring consistency, safety, and taste in every bite.",
      icon: <FaShieldAlt className="text-blue-500 text-3xl" />,
    },
    {
      title: "Multi Product Range",
      description: "From breakfast cereals and porridges to snacks and health mixes, our diverse range of millet and superfood products caters to every taste, age, and lifestyle.",
      icon: <FaStore className="text-purple-500 text-3xl" />,
    },
    {
      title: "24/7 Customer Support",
      description: "Our dedicated support team is always ready to assist you—whether you're a customer, distributor, or private label partner.",
      icon: <FaHeadset className="text-pink-500 text-3xl" />,
    },
    {
      title: "Innovation-Driven Manufacturing",
      description: "With advanced food processing infrastructure and a dedicated R&D team, we continuously innovate to create nutritious, tasty, and scalable superfood solutions.",
      icon: <FcCollaboration className="text-3xl" />,
    },
    {
      title: "Wellness First",
      description: "Our mission is to enhance everyday wellness through food by blending tradition, science, and nature in every product we create.",
      icon: <FaUser className="text-rose-500 text-3xl" />,
    },
  ];

  return (
    <section className="py-10 px-4 md:px-10 bg-white text-neutral-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Why Choose Agasthya</h2>
        <p className="text-base md:text-lg pt-3 text-gray-700">Committed to Your Health and Wellness</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col items-start bg-neutral-50"
          >
            <div className="mb-4 text-neutral-700 group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>

            <h3 className="text-lg font-semibold mb-2 relative">
              <span>{feature.title}</span>
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
