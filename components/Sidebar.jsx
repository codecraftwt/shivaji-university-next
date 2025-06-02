"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar({ items }) {
  const pathname = usePathname();

  return (
    <div className="p-4 space-y-3 sticky top-[50px]">
      {items.map((link) => (
        <Link key={link.href} href={link.href}>
          <div
            className={`p-2 rounded-md border border-white hover:bg-[#f48221] transition ${
              pathname === link.href ? "bg-[#f48221]" : ""
            }`}
          >
            ➤ {link.label}
          </div>
        </Link>
      ))}
    </div>
  );
}
