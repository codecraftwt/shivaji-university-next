'use client';

import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white px-4 pt-4 pb-2 border-b border-blue-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* Left: Shivaji University Logo */}
        <div className="flex-shrink-0">
          <Image
            src="https://www.unishivaji.ac.in/images/uni_logo.png"
            alt="Shivaji University Logo"
            width={500}
            height={100}
            className="h-auto max-w-full"
            priority
          />
        </div>

        {/* Center: Search Bar */}
        <div className="w-full flex justify-center lg:justify-center">
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
        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
          <div className="flex items-center gap-4">
            <Image
              src="https://university.walstarfinance.com/wp-content/uploads/2024/10/iso-g20-1.png"
              alt="NAAC Badge"
              width={300}
              height={0}
              className=" "
            />
            {/* <div className="text-center text-xs text-[#002147] font-semibold">
              With CGPA 3.52
            </div> */}
          </div>
          {/* <div className="flex items-center gap-4">
            <Image
              src="https://www.unishivaji.ac.in/uploads/iso-logo.png"
              alt="ISO Certification"
              width={80}
              height={80}
              className="h-16 w-auto"
            />
            <div className="text-center text-xs text-[#002147] font-semibold">
              ISO 9001:2015 Certified<br />University
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
}
