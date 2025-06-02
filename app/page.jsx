'use client';

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroSection from '@/components/HeroSection';
import DepartmentAndTeamSection from '@/components/DepartmentAndTeamSection';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import ThreeColumnInfoSection from '@/components/ThreeColumnInfoSection';
export default function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     {loading ? (
          // Loading screen with only the logo centered
          <div className="flex items-center justify-center min-h-screen bg-white z-50 absolute top-0 left-0 right-0">
            <img
              src="https://www.unishivaji.ac.in/images/uni_logo.png"
              alt="Shivaji University Logo"
              className="w-60 h-auto animate-pulse"
            />
          </div>
        ) : (
          <>
            <HeroSection />
            <DepartmentAndTeamSection />
            <AnnouncementBanner />
            <ThreeColumnInfoSection/>
          </>
        )}
    </>
  );
}
