'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaChevronDown,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-3">
        {/* Left - Social (Desktop only) */}
        <div className="hidden md:flex gap-6">
          <a href="https://www.instagram.com/mr.flakesnutrix/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-600" size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-blue-600" size={20} />
          </a>
          <a href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="hover:text-blue-700" size={20} />
          </a>
          <a href="https://youtube.com/@agasthyasuperfoods" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-600" size={20} />
          </a>
        </div>

        {/* Center - Logo */}
        <div className="flex justify-center w-full absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:w-auto py-2">
          <Image src="/agasthyalogo.png" alt="Agasthya Logo" width={155} height={80} />
        </div>

        {/* Right - Menu */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>

        <nav className="hidden md:flex gap-7 items-center">
          <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <Link href="/" className="hover:text-gray-600 transition-colors">About</Link>

          <div
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 hover:text-gray-600 transition-colors">
              Brands <FaChevronDown size={12} />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 w-32 bg-white shadow-md rounded-md py-2">
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Nutrix</Link>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100">Farmik</Link>
              </div>
            )}
          </div>

          <Link href="/Contact" className="hover:text-gray-600 transition-colors">Contact</Link>
          <Link href="/" className="hover:text-gray-600 transition-colors">Shop</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-6 flex flex-col gap-4 border-t border-gray-200">
          <Link href="/" className="hover:text-gray-600">Home</Link>
          <Link href="/" className="hover:text-gray-600">About</Link>

          <button
            onClick={() => setIsBrandsOpen(!isBrandsOpen)}
            className="flex items-center gap-1 hover:text-gray-600"
          >
            Brands <FaChevronDown size={12} />
          </button>
          {isBrandsOpen && (
            <div className="pl-4 flex flex-col gap-2">
              <Link href="/" className="hover:text-gray-600">Nutrix</Link>
              <Link href="/" className="hover:text-gray-600">Farmik</Link>
            </div>
          )}

          <Link href="/Contact" className="hover:text-gray-600">Contact</Link>
          <Link href="/" className="hover:text-gray-600">Shop</Link>

          <div className="pt-4 border-t border-gray-200 flex gap-4">
            <a href="https://www.instagram.com/mr.flakesnutrix/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-600" size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-blue-600" size={20} />
            </a>
            <a href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="hover:text-blue-700" size={20} />
            </a>
            <a href="https://youtube.com/@agasthyasuperfoods" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-red-600" size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Hero;
