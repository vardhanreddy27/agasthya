import {  FaLeaf, FaTag, FaShieldAlt, FaStore, FaHeadset, FaMoneyBillAlt, FaUser } from 'react-icons/fa'; // Font Awesome icons
import { FcLike,FcCollaboration } from "react-icons/fc";

export function FeaturesSectionDemo() {
 const features = [
  {
    title: "Committed to Health",
    description: "At Agasthya Superfoods, we prioritize your well-being by offering millet-based, wholesome, and nutritionally balanced food options crafted to support a healthier lifestyle for all ages.",
    icon: <FcLike className="text-3xl" />, // Default color already styled by FcLike
  },
  {
    title: "Sustainably Sourced",
    description: "We are committed to sustainability. All our ingredients are responsibly sourced, ensuring minimal environmental impact while supporting local agriculture.",
    icon: <FaLeaf className="text-green-600 text-3xl" />, // Green
  },
  {
    title: "Affordable Nutrition",
    description: "Nutrition should never be a luxury. Our superfoods deliver premium quality at affordable prices, making healthy living accessible for everyone.",
    icon: <FaTag className="text-yellow-500 text-3xl" />, // Yellow
  },
  {
    title: "Quality Assurance",
    description: "With FSSC 22000, HACCP, GMP, and other certifications, we follow world-class quality protocols from sourcing to packaging, ensuring consistency, safety, and taste in every bite.",
    icon: <FaShieldAlt className="text-blue-500 text-3xl" />, // Blue
  },
  {
    title: "Multi Product Range",
    description: "From breakfast cereals and porridges to snacks and health mixes, our diverse range of millet and superfood products caters to every taste, age, and lifestyle.",
    icon: <FaStore className="text-purple-500 text-3xl" />, // Purple
  },
  {
    title: "24/7 Customer Support",
    description: "Our dedicated support team is always ready to assist you—whether you're a customer, distributor, or private label partner.",
    icon: <FaHeadset className="text-pink-500 text-3xl" />, // Pink
  },
  {
    title: "Innovation-Driven Manufacturing",
    description: "With advanced food processing infrastructure and a dedicated R&D team, we continuously innovate to create nutritious, tasty, and scalable superfood solutions.",
    icon: <FcCollaboration className=" text-3xl" />, // Indigo
  },
  {
    title: "Wellness First",
    description: "Our mission is to enhance everyday wellness through food by blending tradition, science, and nature in every product we create.",
    icon: <FaUser className="text-rose-500 text-3xl" />, // Rose
  },
];


  return (
    <div className="relative z-10 py-10 mx-auto p-5">
      {/* Contact Us Header */}
      <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-neutral-800">      Why To Choose Agasthya
          </h2>
          <p className=" text-neutral-800 pt-3"> Committed to Your Health and Wellness</p>
        </div>
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  // Conditional class names for borders and gradients
  const borderLeft = index === 0 || index === 4 ? " dark:border-neutral-800" : "";
  const borderBottom = index < 4 ? "lg:border-b dark:border-neutral-800" : "";

  const gradientTop = index < 4
    ? "opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
    : "";

  const gradientBottom = index >= 4
    ? "opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none"
    : "";

  // Hover effect only for icon: increase size without affecting position
  const iconHoverEffect = "group-hover:scale-125 transition-transform duration-200 ease-in-out";

  return (
    <div className={`flex flex-col  py-10 relative group dark:border-neutral-800 ${borderLeft} ${borderBottom}`}>
      {/* Gradient Effects */}
      {gradientTop && <div className={gradientTop} />}
      {gradientBottom && <div className={gradientBottom} />}

      {/* Icon */}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 ">
        {icon}
      </div>

      {/* Title */}
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-[rgb(130,30,37)] transition-all duration-200 origin-center" />
        <span className="inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
