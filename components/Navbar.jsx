'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaChevronDown, FaChevronRight, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    submenu: [
      // { label: 'Authorities and Bodies', href: '/about/authorities' },
      { label: 'Vision, Mission and Goals', href: '/about/vision' },
      { label: 'Hon’ble Chancellor', href: '/about/chancellor' },
      // { label: 'Hon’ble Vice Chancellor Desk', href: '/about/vc-desk' },
      { label: 'Former Vice Chancellors', href: '/about/former-vcs' },
    ],
  },
  {
    label: 'Academics',
    submenu: [
      {
        label: 'Programs',
        submenu: [
          { label: 'Undergraduate', href: '/academics/programs-offered' },
          { label: 'Postgraduate', href: '/academics/programs-offered' },
        ],
      },
      // { label: 'Calendar', href: '/academics/calendar' },
      // { label: 'Examinations', href: '/academics/exams' },
      { label: "Academic Home", href: "/academics/home" },
      { label: "V S Khandekar Memorial Museum", href: "/academics/vs-khandekar-museum" },
      { label: "List of programs offered on campus", href: "/academics/programs-offered" },
      { label: "Academic Departments", href: "/academics/departments" },
    ],
  },
  { label: 'Governance', href: '/governance' },
  { label: 'Admission', href: '/admission' },
  { label: 'Students', href: '/students' },
  { label: 'Research', href: '/research' },
  { label: 'Quick Links', href: '/quick-links' },
  { label: 'Incubation Center', href: '/incubation' },
  { label: 'International Affairs Cell', href: '/international' },
  { label: 'NEP2020@SUK', href: '/nep2020' },
  {
    label: 'Disclosure',
    submenu: [
      { label: 'RTI', href: '/disclosure/rti' },
      { label: 'Audit Reports', href: '/disclosure/audit' },
    ],
  },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [nestedHovered, setNestedHovered] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen((prev) => !prev);

  return (
    <nav className="bg-[#2196f3] text-white text-sm font-semibold uppercase sticky top-0 z-50 shadow">
      <div className="flex items-center justify-start [@media(min-width:1025px)]:justify-center max-w-8xl mx-auto px-4 py-2">
        <div className="hidden [@media(min-width:1025px)]:flex flex-wrap gap-1 items-center">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
              onMouseEnter={() => setHovered(item.label)}
              onMouseLeave={() => {
                setHovered(null);
                setNestedHovered(null);
              }}
            >
              <div className="flex items-center gap-1 px-1 py-2 hover:text-orange-400 transition cursor-pointer">
                {item.href && !item.submenu ? (
                  <Link href={item.href}>{item.label}</Link>
                ) : (
                  <>
                    <span>{item.label}</span>
                    {item.submenu && <FaChevronDown className="text-xs" />}
                  </>
                )}
              </div>

              {/* First-level dropdown */}
              {item.submenu && hovered === item.label && (
                <div className="absolute top-full left-0 bg-sky-700 text-white shadow-md rounded-sm w-auto min-w-max z-20 py-2">
                  {item.submenu.map((subItem) => (
                    <div
                      key={subItem.label}
                      className="relative group"
                      onMouseEnter={() =>
                        subItem.submenu && setNestedHovered(subItem.label)
                      }
                      onMouseLeave={() =>
                        subItem.submenu && setNestedHovered(null)
                      }
                    >
                      <div className="flex items-center justify-between capitalize px-4 py-2 hover:bg-orange-500 hover:text-white transition">
                        {subItem.href && !subItem.submenu ? (
                          <Link href={subItem.href}>{subItem.label}</Link>
                        ) : (
                          <>
                            <span>{subItem.label}</span>
                            <FaChevronRight className="text-xs" />
                          </>
                        )}
                      </div>

                      {/* Nested dropdown */}
                      {subItem.submenu && nestedHovered === subItem.label && (
                        <div className="absolute top-0 left-full bg-sky-600 capitalize shadow-md rounded-sm w-auto min-w-max z-30 py-2">
                          {subItem.submenu.map((deepItem) => (
                            <Link
                              key={deepItem.label}
                              href={deepItem.href}
                              className="block px-4 py-2 hover:bg-orange-400 hover:text-white"
                            >
                              {deepItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="[@media(min-width:1025px)]:hidden">
          <button onClick={toggleMobile} className="text-white">
            {mobileOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>
      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="[@media(min-width:1025px)]:hidden bg-blue-700 px-4 py-2 space-y-2">
          {navItems.map((item) => {
            const isOpen = hovered === item.label;
            return (
              <div key={item.label}>
                <div
                  onClick={() =>
                    setHovered((prev) => (prev === item.label ? null : item.label))
                  }
                  className="flex justify-between items-center py-2 border-b border-blue-400 cursor-pointer text-white"
                >
                  {item.href && !item.submenu ? (
                    <Link href={item.href}>{item.label}</Link>
                  ) : (
                    <>
                      <span>{item.label}</span>
                      {item.submenu && <FaChevronDown className="text-xs" />}
                    </>
                  )}
                </div>

                {/* First-level submenu */}
                {item.submenu && isOpen && (
                  <div className="pl-4 space-y-1 text-white">
                    {item.submenu.map((subItem) => {
                      const isSubOpen = nestedHovered === subItem.label;

                      return (
                        <div key={subItem.label}>
                          <div
                            onClick={() =>
                              setNestedHovered((prev) =>
                                prev === subItem.label ? null : subItem.label
                              )
                            }
                            className="flex justify-between items-center py-1 cursor-pointer"
                          >
                            {subItem.href && !subItem.submenu ? (
                              <Link href={subItem.href}>{subItem.label}</Link>
                            ) : (
                              <>
                                <span>{subItem.label}</span>
                                {subItem.submenu && <FaChevronRight className="text-xs" />}
                              </>
                            )}
                          </div>

                          {/* Second-level submenu */}
                          {subItem.submenu && isSubOpen && (
                            <div className="pl-6 space-y-1">
                              {subItem.submenu.map((deepItem) => (
                                <Link
                                  key={deepItem.label}
                                  href={deepItem.href}
                                  className="block py-1 text-sm text-white hover:text-yellow-300"
                                >
                                  {deepItem.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </nav>
  );
}
