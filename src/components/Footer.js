import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

          {/* Left Column */}
          <div>
            <div className="flex justify-center md:justify-start mb-4">
              <Image
                src="/agasthyalogo.png"
                alt="Agasthya Logo"
                width={180}
                height={120}
              />
            </div>
            <p className="text-gray-600">
              Manufacturer of Breakfast Cereals, Snack Foods, Ready to Eat & Ready to Cook Products Made From Millets, Quinoa & Other Superfoods.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="/About" className="text-gray-600 hover:text-gray-900">About</Link></li>
              <li className="text-gray-600 hover:text-gray-900 cursor-not-allowed select-none">Products</li>
              <li className="text-gray-600 hover:text-gray-900 cursor-not-allowed select-none">Media</li>
              <li><Link href="/Contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-gray-900">Shop</Link></li>
            </ul>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Follow Us</h3>
            <p className="text-gray-600 mb-4">
              Join the squad, follow along, share your experience. We can not wait to meet you.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.instagram.com/agasthya_superfoods/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-pink-600 transition-colors" size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-blue-600 transition-colors" size={20} />
              </a>
              <a href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-blue-700 transition-colors" size={20} />
              </a>
              <a href="https://youtube.com/@agasthyasuperfoods" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-red-600 transition-colors" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-300" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-600 pb-6">
          &copy; 2025 Agasthya SuperFoods Pvt Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
