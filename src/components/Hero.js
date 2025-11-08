import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='w-full sticky top-0 z-50 bg-white'>
      {/* Top Bar */}
      <div className='hidden md:grid grid-cols-3 items-center px-10 pt-4 pb-1'>
        {/* Left - Social Icons */}
        <div className='flex gap-6 justify-start'>
          <a href="https://www.instagram.com/mr.flakesnutrix/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className='hover:text-pink-600 transition-colors' size={20} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className='hover:text-blue-600 transition-colors' size={20} />
          </a>
          <a href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className='hover:text-blue-700 transition-colors' size={20} />
          </a>
          <a href="https://youtube.com/@agasthyasuperfoods" target="_blank" rel="noopener noreferrer">
            <FaYoutube className='hover:text-red-600 transition-colors' size={20} />
          </a>
        </div>

        {/* Center - Logo */}
        <div className='flex justify-center mb-3'>
          <Image src="/agasthyalogo.png" alt="Agasthya Logo" width={155} height={80} />
        </div>

        {/* Right - Navigation Links */}
        <nav className='flex gap-7 justify-end relative'>
          <Link href="/" className='hover:text-gray-600 transition-colors'>Home</Link>
          <Link href="/About" className='hover:text-gray-600 transition-colors'>About</Link>
          
          {/* Changed span to Link to make it functional */}
          <Link href="/products" className='hover:text-gray-600 transition-colors'>Products</Link>
          
          <span className='text-black hover:text-gray-600 transition-colors cursor-not-allowed select-none'>Media</span>

          <Link href="/Contact" className='hover:text-gray-600 transition-colors'>Contact</Link>
        </nav>
      </div>

      {/* Mobile Nav */}
      <div className='md:hidden flex justify-between items-center px-4 py-3'>
        <Image src="/agasthyalogo.png" alt="Agasthya Logo" width={130} height={60} />
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className='md:hidden flex flex-col bg-white px-6 pb-4 gap-3 text-sm'>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/About" onClick={() => setIsMobileMenuOpen(false)}>About</Link>

          {/* Changed span to Link to make it functional */}
          <Link href="/Products" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
  
          
          <span className='text-black hover:text-gray-600 transition-colors cursor-not-allowed select-none'>Media</span>

          <Link href="/Contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Shop</Link>

          {/* Social Icons in Mobile */}
          <div className='flex gap-4 pt-2'>
            <a href="https://www.instagram.com/mr.flakesnutrix/" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={18} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={18} />
            </a>
            <a href="https://www.linkedin.com/company/agasthya-super-foods-india-pvt-ltd/posts/?feedView=all&viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={18} />
            </a>
            <a href="https://youtube.com/@agasthyasuperfoods" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={18} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
