import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
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
              <li><a href="/" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Brands</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-900">Shop</a></li>
            </ul>
          </div>

          {/* Right Column (Social Links) */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
            <p className="text-gray-600 mb-4">
              Join the squad, follow along, share your experience. We can't wait to meet you.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                       <FaFacebookF className='hover:text-blue-600 transition-colors' size={20} />
                     </a>
             <a href="https://youtube.com/@agasthyasuperfoods" target="_blank" rel="noopener noreferrer">
                      <FaYoutube className='hover:text-red-600 transition-colors' size={20} />
                    </a>
              <a href="https://www.instagram.com/mr.flakesnutrix/" target="_blank" rel="noopener noreferrer">
                       <FaInstagram className='hover:text-pink-600 transition-colors' size={20} />
                     </a>
              <a href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
                       <FaLinkedinIn className='hover:text-blue-700 transition-colors' size={20} />
                     </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-3 border-gray-300" />

        {/* Copyright Section */}
        <div className="text-center text-gray-600 pb-3">
          <p>&copy; 2025 Agasthya SuperFoods Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
