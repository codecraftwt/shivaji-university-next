'use client';

import Marquee from 'react-fast-marquee';

export default function AnnouncementBanner() {
  return (
    <section className="relative h-40 md:h-48 w-full overflow-hidden">
      {/* Background Image */}
       <img
        src="https://www.unishivaji.ac.in/uploads/home_photos/Shivaji-University-Kolhapur.jpg"
        alt="Banner Background"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-16 text-white">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          Announcements
        </h1>

        {/* Scrolling Marquee Text */}
        <Marquee
          gradient={false}
          speed={50}
          pauseOnHover={true}
          className="text-sm md:text-base"
        >
          Shivaji University, Kolhapur is introducing the fully Online M.B.A.
          Programme from Academic Year 2023-24 (July-August, 2024 Session).
          Admissions started.
          <a
            href="https://umsshivaji.digivarsity.com/Web/CheckListForm.aspx?Offline=1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline mx-2"
          >
            Click here for admissions
          </a>
          and for more details visit:
          <a
            href="https://online.unishivaji.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 underline ml-2"
          >
            online.unishivaji.ac.in                                               
          </a>
          <span className='ml-[900px]'></span>
        </Marquee>
      </div>
    </section>
  );
}
