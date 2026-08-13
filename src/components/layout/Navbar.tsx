"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Heart,
  ShoppingBag,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "COLLECTIONS", href: "/collections", dropdown: true },
  { label: "CUSTOM JEWELRY", href: "/custom" },
  { label: "ABOUT US", href: "/about" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-20 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image
            src="/logo/logo.png"
            alt="Renora Jewels"
            width={110}
            height={55}
            className="h-14 w-auto mix-blend-multiply"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map(({ label, href, dropdown }) => (
            <Link
              key={label}
              href={href}
              className={`flex items-center gap-0.5 text-[10px] tracking-[0.18em] font-semibold transition-colors hover:text-[#7B3030] ${
                label === "HOME" ? "text-[#7B3030]" : "text-[#3a3a3a]"
              }`}
            >
              {label}
              {dropdown && <ChevronDown size={11} />}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4 shrink-0">
          <button onClick={() => router.push("/contact")} className="hidden sm:block text-[#3a3a3a] hover:text-[#7B3030] transition-colors">
            <Heart size={17} strokeWidth={1.5} />
          </button>
          <button onClick={() => router.push("/contact")} className="relative text-[#3a3a3a] hover:text-[#7B3030] transition-colors">
            <ShoppingBag size={17} strokeWidth={1.5} />
            <span className="absolute -top-2 -right-2 bg-[#7B3030] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
              0
            </span>
          </button>
          <button
            className="lg:hidden text-[#3a3a3a]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-5 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[11px] tracking-[0.18em] font-semibold text-[#3a3a3a] hover:text-[#7B3030]"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
