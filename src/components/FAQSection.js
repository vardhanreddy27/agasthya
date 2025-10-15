import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = gsap.timeline({ paused: true })
      .fromTo(
        contentRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.3, ease: 'power2.inOut' }
      );
  }, []);

  const toggleFAQ = () => {
    onClick();
    isOpen ? animationRef.current.reverse() : animationRef.current.play();
  };

  return (
    <div className="border-b border-[rgb(157,37,45)]/20">
      <div
        className="py-4 cursor-pointer transition-colors hover:bg-[rgb(253,242,242)]"
        onClick={toggleFAQ}
        role="button"
        tabIndex="0"
        onKeyPress={(e) => e.key === 'Enter' && toggleFAQ()}
      >
        <h4 className="font-semibold text-gray-800 flex justify-between items-center">
          {question}
          <span className="text-[rgb(157,37,45)] text-xl ml-2">
            {isOpen ? '−' : '+'}
          </span>
        </h4>
      </div>
      <div ref={contentRef} className="overflow-hidden" aria-expanded={isOpen}>
        <p className="pb-4 text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  );
};

const ContactCard = ({ Icon, title, content, href }) => (
  <div className="mt-2 bg-[rgb(253,242,242)] p-4 rounded-xl shadow border border-[rgb(157,37,45)]/20 flex items-center space-x-3">
    <Icon className="text-[rgb(157,37,45)] w-5 h-5" />
    <div className="flex items-center space-x-1 flex-wrap">
      <h4 className="font-semibold text-[rgb(157,37,45)]">{title}:</h4>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 text-sm"
        >
          {content}
        </a>
      ) : (
        <span className="text-gray-700 text-sm">{content}</span>
      )}
    </div>
  </div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      question: "What minimum order quantity do you require?",
      answer:
        "We accommodate orders from 500 units for trial batches up to full container loads. Specific MOQs depend on product type and packaging requirements.",
    },
    {
      question: "Do you offer private label manufacturing?",
      answer:
        "Yes, we provide complete private label solutions including formulation, packaging design, and regulatory compliance support.",
    },
    {
      question: "What certifications does your facility have?",
      answer:
        "Our facility is BRC F9, FSSC 22000, HALAL, and USDA Organic certified, meeting global food safety standards.",
    },
    {
      question: "How long does production typically take?",
      answer:
        "Standard production timelines range from 4-6 weeks post-approval, with expedited options available for urgent orders.",
    },
  ];

  return (
    <div className="bg-white p-6 mt-5">
      {/* Headings Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">
        <h3 className="text-2xl font-bold text-[rgb(157,37,45)]">
          Frequently Asked Questions
        </h3>
        <h3 className="text-2xl font-bold text-[rgb(157,37,45)]">
          Contact Information
        </h3>
      </div>

      {/* FAQ and Contact Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>

        {/* Right Column - Contact Cards */}
        <div className="flex flex-col space-y-4">
          <ContactCard
            Icon={MdEmail}
            title="Email"
            content="serviceteam@agasthyasuperfoods.com"
          />
          <ContactCard
            Icon={MdPhone}
            title="Contact Number"
            content="+91 70757 04167"
          />
          <ContactCard
            Icon={FaLinkedin}
            title="LinkedIn"
            content="Agasthya Super Foods"
            href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/mycompany/"
          />
          <ContactCard
            Icon={FaInstagram}
            title="Instagram"
            content="@agasthyasuperfoods"
            href="https://www.instagram.com/"
          />
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
