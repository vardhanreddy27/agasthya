import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div>
          <Image src="/agasthyalogo.png" alt="Agasthya Logo" width={200} height={150} className="mb-3" />
          <p className="text-gray-600">
              Manufacturer of Breakfast Cereals, Snack Foods, Ready to Eat & Ready to Cook
              Products Made From Millets, Quinoa & Other Superfoods.
            </p>
          </div>

          {/* Middle Column */}
          <div className='ms-40'>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
              <li><a href="/about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="/recipes" className="text-gray-600 hover:text-gray-900">Recipes</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="/bulk" className="text-gray-600 hover:text-gray-900">Bulk Order</a></li>
            </ul>
          </div>

          {/* Right Column (Social Links) */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
            <p className="text-gray-600 mb-4">
              Join the squad, follow along, share your experience. We can't wait to meet you.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-pink-600">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-800">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-3 border-gray-300" />

        {/* Copyright Section */}
        <div className="text-center text-gray-600 pb-3">
          <p>&copy; 2025 Agasthya Super Foods Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
