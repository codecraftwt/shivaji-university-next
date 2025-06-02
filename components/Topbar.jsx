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
        {/* Left Orange Block with Slant */}
        <div className="relative bg-[#f58220] text-white flex items-center gap-3 px-4 pr-[247px]">
          <span className="font-semibold">Follow us:-</span>
          {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
            <div
              key={index}
              className="border border-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-white hover:text-[#f58220] transition"
            >
              <Icon size={14} />
            </div>
          ))}
        </div>

        {/* Slanted Divider */}
        <div className="absolute left-[calc(100%/3.5)] top-0 h-full w-12 bg-[#2196f3] transform skew-x-[36deg] origin-left z-10" />

        {/* Right Blue Section */}
        <div className="flex-1 bg-[#2196f3] flex items-center justify-end gap-6 px-4 z-0">
          {/* Language Dropdown */}
          <select className="bg-transparent border border-white px-2 py-1 rounded text-white text-xs outline-none">
            <option>Select Language</option>
            <option value="en">English</option>
            <option value="mr">मराठी</option>
          </select>

          {/* Navigation Items */}
          {[
            { icon: <FaAngleDoubleDown />, text: 'To Content' },
            { icon: <FaAngleDoubleDown />, text: 'To Navigation' },
            { icon: <FaRegFileAlt />, text: 'Screen Reader' },
            { icon: <FaPhone />, text: '(0231) 2609000' },
          ].map(({ icon, text }, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="border border-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                {icon}
              </div>
              <span>{text}</span>
            </div>
          ))}

          {/* Login */}
          <a href="/login" className="font-semibold hover:underline">
            LOGIN
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      {/* <div className="h-1 bg-cyan-400 w-full" /> */}
    </div>
  );
}
