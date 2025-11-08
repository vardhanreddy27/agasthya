'use client';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  const contentRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    animationRef.current = gsap.timeline({ paused: true })
      .fromTo(contentRef.current,
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

const ContactBanner = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/ask-ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
  
      const data = await res.json();
      
      if (!res.ok) {
        if (data.error && data.error.includes('The AI model has been updated')) {
          alert('The system has been updated. Please refresh your page and try again.');
          window.location.reload();
          return;
        }
        throw new Error(data.error || 'Something went wrong');
      }
  
      setSent(true);
      setEmail('');
      setMessage('');
    } catch (error) {
      alert(error.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      question: "What minimum order quantity do you require?",
      answer: "We accommodate orders from 500 units for trial batches up to full container loads. Specific MOQs depend on product type and packaging requirements."
    },
    {
      question: "Do you offer private label manufacturing?",
      answer: "Yes, we provide complete private label solutions including formulation, packaging design, and regulatory compliance support."
    },
    {
      question: "What certifications does your facility have?",
      answer: "Our facility is BRC F9, FSSC 22000, HALAL, and USDA Organic certified, meeting global food safety standards."
    },
    {
      question: "How long does production typically take?",
      answer: "Standard production timelines range from 4-6 weeks post-approval, with expedited options available for urgent orders."
    }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-800">Contact Us</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* FAQ & Info Column */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-[rgb(157,37,45)] mb-6">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  />
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-700">Factory Address:</h4>
                  <p className="text-gray-600">
                    Plot No 26/A, Industrial Park, Narmala,<br />
                    Rajanna Sircilla Dt., Telangana. 505304
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Corporate Office:</h4>
                  <p className="text-gray-600">
                    Unit 3, Floor 20, One West Terminus,<br />
                    Financial District, Nanakramguda,<br />
                    Hyderabad, Telangana 500032
                  </p>
                </div>
                <div className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium text-gray-700">Email:</span>
                    <a href="mailto:info@agasthya.co.in" className="text-[rgb(157,37,45)] hover:underline">
                      info@agasthya.co.in
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-700">Phone:</span>
                    <a href="tel:+917075704167" className="text-[rgb(157,37,45)] hover:underline">
                      +91 70757 04167
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-gray-600">
                    <span className="font-medium">Working Hours:</span><br />
                    Monday—Friday: 9am — 6pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Contact Our Team</h3>
            <form className="space-y-2" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-2">Name<span className="text-[rgb(157,37,45)]">*</span></label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="Agasthya"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email<span className="text-[rgb(157,37,45)]">*</span></label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="Agasthya@.co.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Phone<span className="text-[rgb(157,37,45)]">*</span></label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="+91 7075 704156"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Message<span className="text-[rgb(157,37,45)]">*</span></label>
                <textarea
                  className="w-full p-3 border rounded-lg h-32 focus:outline-none focus:ring-0 focus:border-transparent"
                  placeholder="Interested in our snack food selection"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[rgb(157,37,45)] text-white py-3 rounded-lg hover:bg-[rgb(120,28,34)] transition-colors font-semibold"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {sent && (
                <p className="text-green-600 text-center mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};//9177732199

export default ContactBanner;
