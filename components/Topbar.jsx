'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaAngleDoubleDown,
  FaRegFileAlt,
} from 'react-icons/fa';

export default function Topbar() {
  return (
    <div className="hidden lg:block relative w-full text-white text-sm font-medium">
      <div className="flex h-12 relative z-0 overflow-hidden">
        {/* 🔸 Left Orange Block with Slant and Fixed Width */}
        <div className="relative bg-[#f58220] text-white flex items-center gap-3 ps-4 pe-2 min-w-[300px] lg:w-[400px]">
          <span className="font-semibold">Follow us:-</span>
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <div
              key={index}
              className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#f58220] transition"
            >
              <Icon size={14} />
            </div>
          ))}

          {/* 🔸 SVG Divider with adjusted sizing */}
          <svg
            className="absolute right-0 top-0 h-full w-8 lg:w-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="0,0 70,0 0,100" fill="#f58220" />
            <polygon points="70,0 100,0 100,100 0,0" fill="#2196f3" />
          </svg>
        </div>

        {/* 🔹 Right Blue Section (flex-1 remains responsive) */}
        <div className="flex-1 bg-[#2196f3] flex items-center justify-end gap-6 px-4 z-0">
          <select className="bg-white border border-white text-black px-2 py-1 rounded text-xs outline-none">
            <option className="text-black">Select Language</option>
            <option value="en" className="text-black">English</option>
            <option value="mr" className="text-black">मराठी</option>
          </select>


          {[
            { icon: <FaAngleDoubleDown />, text: 'To Content' },
            { icon: <FaAngleDoubleDown />, text: 'To Navigation' },
            { icon: <FaRegFileAlt />, text: 'Screen Reader' },
            { icon: <FaPhone />, text: '(0231) 2609000' },
          ].map(({ icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
              <div className="border border-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {icon}
              </div>
              <span>{text}</span>
            </div>
          ))}

          <a href="/login" className="font-semibold hover:underline whitespace-nowrap">
            LOGIN
          </a>
        </div>
      </div>
    </div>
  );
}
