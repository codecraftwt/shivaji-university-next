'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaAngleDoubleRight } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-4 sm:px-6 lg:px-16 text-sm">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="text-center md:text-left">
          <img
            src="https://university.walstarfinance.com/wp-content/uploads/2024/10/shivaji-university-2-min.png"
            alt="Shivaji University Logo"
            className="w-28 mx-auto md:mx-0 mb-4"
          />
          <p>
            Shivaji University, Kolhapur, is a premier educational institution offering a wide range of academic programs and research initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-orange-500 font-bold text-lg mb-2">Quick Link</h3>
          <ul className="space-y-1">
            {['Home', 'About Us', 'Academics', 'Research', 'Governance', 'Contact'].map((link, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 hover:text-orange-400 cursor-pointer transition-colors"
              >
                <FaAngleDoubleRight className="text-orange-400" /> {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Location Info */}
        <div>
          <h3 className="text-orange-500 font-bold text-lg mb-2">Location</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1" />
              <span>Shivaji University, Vidyanagar, Kolhapur – 416004, Maharashtra, India.</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone /> <span>(0231) 2609000</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>mail.unishivaji.ac.in</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-orange-400 my-6"></div>

      {/* Bottom Links */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          ['Quick Links', 'Placement Cell', 'Students\' Council Election', 'Madhyamvidhya / Media Spectrum', 'Special Cell', 'शिवसंदेश', 'Compiled online literature on Chhatrapati Shivaji Maharaj'],
          ['Intranet', 'Online Receipt Portal', 'University Publications', 'विद्यापीठ गीत', 'अभिवादन स्वातंत्र्यसैनिकांना मालिका (एपीएसनिहाय यादी)', 'SUK in Media', 'Photo Gallery'],
          ['Grievance Redressal', 'Avishkar', 'Other Tenders / Quotations', 'विद्यापीठ गीत सिगटोन', 'MILLET The Natures Crop (A Compilation Book)', 'शिव-वार्ता', 'Right to Information'],
          ['Recruitments', 'Mobile Apps', 'Archive', 'Anti Ragging Information', 'शिव-वाणी', 'Coffee Table Book', 'Coffee Table Books–Birds']
        ].map((group, colIndex) => (
          <ul key={colIndex} className="space-y-1">
            {group.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 hover:text-orange-400 cursor-pointer transition-colors"
              >
                <FaAngleDoubleRight className="mt-1 text-orange-400" />
                {item}
              </li>
            ))}
          </ul>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t border-gray-600 py-4 text-xs md:text-sm flex flex-col md:flex-row justify-between items-center px-2 sm:px-4">
        <p className="text-center md:text-left mb-2 md:mb-0">
          Copyright © Shivaji University Kolhapur 2024. All rights reserved.
        </p>
        <p className="text-center md:text-right">
          Design & Developed by{' '}
          <a
            href="https://walstarmedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 hover:underline transition-colors"
          >
            Walstar Media LLP
          </a>
        </p>
      </div>
    </footer>
  );
}
