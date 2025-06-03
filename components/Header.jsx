'use client';

import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white px-4 pt-4 pb-2 border-b border-blue-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:justify-between gap-4">
        {/* Top: University Info */}
        <div className="w-full flex flex-row sm:flex-row items-start sm:items-center gap-4">
          {/* Logo */}
          <Image
            src="https://university.walstarfinance.com/wp-content/uploads/2024/10/shivaji-university-2-min.png"
            alt="Shivaji University Logo"
            width={70}
            height={70}
            className="object-contain"
          />

          {/* Text Block */}
          <div className="text-left">
            <h1 className="text-blue-900 text-base sm:text-lg font-semibold leading-snug">
              शिवाजी विद्यापीठ, कोल्हापूर
            </h1>
            <h2 className="text-blue-900 text-sm sm:text-base font-bold leading-tight">
              SHIVAJI UNIVERSITY, KOLHAPUR
            </h2>
            <p className="text-gray-700 text-xs mt-1">
              Estd-1962 – recognized by UGC U/s 2(f) and 12 (B)
            </p>
            <p className="text-blue-800 text-xs font-semibold">
              NAAC “A++” Grade with CGPA 3.52
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-auto flex justify-center">
          <div className="flex items-center bg-[#f0f0f0] rounded-full overflow-hidden h-10 w-full max-w-md">
            <input
              type="text"
              placeholder="Type & Hit Enter..."
              className="flex-1 px-4 text-sm text-gray-600 bg-transparent focus:outline-none"
            />
            <button className="bg-[#2196f3] text-white px-4 h-full flex items-center justify-center">
              <FaSearch className="text-lg" />
            </button>
          </div>
        </div>

        {/* Right: Certification Badges */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="hidden lg:flex items-center gap-4">
            <Image
              src="https://university.walstarfinance.com/wp-content/uploads/2024/10/iso-g20-1.png"
              alt="NAAC Badge"
              width={200}
              height={0}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
