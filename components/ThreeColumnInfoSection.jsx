'use client';

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const columns = [
  {
    title: "Updates",
    items: [
      {
        label: "One Day Introductory workshop on Jewellery Design using CAD-CAM and 3-D Printing",
        href: "/workshop/jewellery-design",
      },
      {
        label: 'Link For Registration (Management Development Programme on "Future of Work, Workplace and Human")',
        href: "/registration/mdp-future-work",
      },
      {
        label: "New Guidelines for Online Examination System",
        href: "/updates/online-exam-guidelines",
      },
      {
        label: "Semester Revaluation Results Released",
        href: "/updates/revaluation-results",
      },
      {
        label: "Revised Academic Calendar 2024-25",
        href: "/updates/academic-calendar",
      },
    ],
    bgColor: "bg-gray-50",
  },
  {
    title: "Upcoming Events",
    items: [
      {
        label: "2022-23 बाबत",
        href: "/events/2022-23",
      },
      {
        label: "Call for Research Article for Journal of Shivaji University, Humanities & Social Science",
        href: "/events/journal-call",
      },
      {
        label: "Department of Education Programmes Admission Flyer",
        href: "/events/education-flyer",
      },
      {
        label: "National Conference on Climate Change",
        href: "/events/climate-conference",
      },
      {
        label: "Entrepreneurship Development Workshop",
        href: "/events/entrepreneurship-workshop",
      },
    ],
    bgColor: "bg-[#006fa7] text-white",
  },
  {
    title: "Achievements",
    items: [
      {
        label: "भूस्खलनप्रवण क्षेत्रातील जैवविविधतेच्या संशोधनासाठी...",
        href: "/achievements/biodiversity-research",
      },
      {
        label: "शिवाजी विद्यापीठात शिष्यवृत्तीविषयक कार्यशाळेत ४५०...",
        href: "/achievements/scholarship-workshop",
      },
      {
        label: "लोकशाही टिकवण्यासाठी प्राध्यापकांनी विद्यार्थ्यांना...",
        href: "/achievements/democracy-awareness",
      },
      {
        label: "University Wins National Green Campus Award",
        href: "/achievements/green-campus-award",
      },
      {
        label: "Student Team Secures 2nd Place in Hackathon",
        href: "/achievements/hackathon-2024",
      },
      {
        label: "Call for Research Article for Journal of Shivaji University, Humanities & Social Science",
        href: "/events/journal-call",
      },
    ],
    bgColor: "bg-gray-50",
  },
];


export default function ThreeColumnInfoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-16 py-8">
      {columns.map((col, idx) => {
        const controls = useAnimation();

        useEffect(() => {
          controls.start({
            y: ["-100%", "0%"],
            transition: {
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            },
          });
        }, [controls]);

        return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className={`${col.bgColor} rounded-lg shadow-md p-6 flex flex-col justify-between`}
          >
            <h2
              className={`text-xl font-bold mb-4 ${
                col.bgColor.includes("bg-[#006fa7]") ? "text-white" : "text-blue-600"
              }`}
            >
              {col.title}
            </h2>

            {/* Auto-scrolling list with hover to pause */}
            <div
              className="overflow-hidden h-32 mb-4 relative"
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  y: ["-100%", "0%"],
                  transition: {
                    duration: 10,
                    ease: "linear",
                    repeat: Infinity,
                  },
                })
              }
            >
              <motion.div
                className="flex flex-col space-y-3 absolute"
                animate={controls}
                initial={{ y: "0%" }}
              >
                {[...col.items, ...col.items].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className={`border-b pb-2 ${
      col.bgColor.includes("bg-[#006fa7]") ? "text-white hover:text-orange-400" : "text-blue-900 hover:text-orange-400"
    } text-sm leading-snug transition-colors duration-200`}
                  >
                     {item.label}
                  </Link>
                ))}
              </motion.div>
            </div>

            <button className="bg-orange-500 text-white py-2 px-6 rounded-full text-sm hover:bg-orange-600 transition">
              View More
            </button>
          </motion.div>
        );
      })}
    </div>
  );
}
