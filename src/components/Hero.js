import React, { useState } from 'react';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Link from 'next/link';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className='grid grid-cols-3 items-center px-10 pt-4 pb-1 w-full sticky top-0 z-50 bg-white'>
      {/* Left Social Icons - Aligned to Start */}
      <div className='flex gap-9 justify-start'>
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
      
      {/* Centered Logo - Aligned to Center */}
      <div className='flex justify-center mb-3'>
        <Image src="/agasthyalogo.png" alt="Agasthya Logo" width={155} height={80} />
      </div>
      
      {/* Right Menu Items - Aligned to End */}
      <nav className='flex gap-7 justify-end relative'>
        <Link href="/" className='hover:text-gray-600 transition-colors'>Home</Link>
        <Link href="/About" className='hover:text-gray-600 transition-colors'>About</Link>
        
        <div 
          className='relative group'
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <Link
            href="/Brands"
            className='flex items-center gap-1 hover:text-gray-600 transition-colors'
          >
            Brands <FaChevronDown size={12} />
          </Link>
          {isDropdownOpen && (
            <div className='absolute top-6 left-0 w-32 bg-white shadow-md rounded-md py-2 group-hover:block'>
              <Link href='/Nutrixmenu' className='block px-4 py-2 hover:bg-gray-100'>Nutrix</Link>
              <Link href='/Farmikmenu' className='block px-4 py-2 hover:bg-gray-100'>Farmik</Link>
            </div>
          )}
        </div>
        
        <Link href="/Contact" className='hover:text-gray-600 transition-colors'>Contact</Link>
        <Link href="/WholesaleBulk" className='hover:text-gray-600 transition-colors'>Shop</Link>
      </nav>
    </div>
  );
};

export default Hero;
