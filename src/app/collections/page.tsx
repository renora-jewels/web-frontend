import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Truck, Gem, Lock, Heart, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Jewellery Collections — Rings, Necklaces, Earrings & More",
  description:
    "Explore Renora Jewels' full collection of certified diamond jewellery — rings, necklaces, earrings, bracelets, bangles, pendants, chains & men's jewellery. Shop at renorajewels.in.",
  alternates: { canonical: "https://www.renorajewels.in/collections" },
  openGraph: {
    title: "Jewellery Collections — Renora Jewels",
    description:
      "Shop rings, necklaces, earrings, bangles, bracelets & custom jewellery from Renora Jewels — certified diamonds, timeless designs.",
    url: "https://www.renorajewels.in/collections",
  },
};

const categories = [
  { label: "RINGS",          href: "/collections/rings",    img: "/collections/collections-category-rings.jpg" },
  { label: "NECKLACES",     href: "/collections/necklaces", img: "/collections/collections-category-necklaces.jpg" },
  { label: "EARRINGS",      href: "/collections/earrings",  img: "/collections/collections-category-earrings.jpg" },
  { label: "BRACELETS",     href: "/collections/bracelets", img: "/collections/collections-category-bracelets.jpg" },
  { label: "BANGLES",       href: "/collections/bangles",   img: "/collections/collections-category-bangles.jpg" },
  { label: "PENDANTS",      href: "/collections/pendants",  img: "/collections/collections-category-pendants.jpg" },
  { label: "CHAINS",        href: "/collections/chains",    img: "/collections/collections-category-chains.jpg" },
  { label: "MEN'S JEWELRY", href: "/collections/mens",     img: "/collections/collections-category-mens.jpg" },
];

const features = [
  { Icon: Truck,      label: "FREE SHIPPING\nWORLDWIDE" },
  { Icon: Gem,        label: "CERTIFIED\nDIAMONDS" },
  { Icon: Lock,       label: "SECURE\nPAYMENTS" },
  { Icon: Heart,      label: "LIFETIME\nCARE" },
  { Icon: RotateCcw,  label: "EASY RETURNS\n30 DAYS" },
];

export default function CollectionsPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <section className="relative bg-[#FAF4EF] overflow-hidden flex items-center justify-center min-h-50">
        <div className="absolute left-0 top-0 h-full w-52 lg:w-72 overflow-hidden">
          <Image
            src="/collections/collections-hero-left.jpg"
            alt=""
            fill
            className="object-cover opacity-80"
          />
        </div>
        <div className="relative z-10 py-16 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-[0.15em] text-[#1a1a1a]">
            COLLECTIONS
          </h1>
          <nav className="flex items-center justify-center gap-2 mt-3 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#7B3030] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#7B3030]">Collections</span>
          </nav>
        </div>
        <div className="absolute right-0 top-0 h-full w-52 lg:w-72 overflow-hidden">
          <Image
            src="/collections/collections-hero-right.jpg"
            alt=""
            fill
            className="object-cover opacity-80"
          />
        </div>
      </section>

      {/* ── 8 Category Cards ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {categories.map(({ label, href, img }) => (
            <Link
              key={label}
              href={href}
              className="group flex flex-col bg-[#FAF8F5] overflow-hidden border border-gray-100"
            >
              <div className="w-full aspect-4/3 overflow-hidden">
                <Image
                  src={img}
                  alt={label}
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col items-center py-5 px-4 gap-3">
                <h3 className="font-serif text-[15px] font-bold tracking-[0.15em] text-[#1a1a1a]">
                  {label}
                </h3>
                <div className="flex items-center gap-1.5">
                  <div className="h-px w-6 bg-[#7B3030]" />
                  <span className="text-[#7B3030] text-[8px]">◆</span>
                  <div className="h-px w-6 bg-[#7B3030]" />
                </div>
                <span className="border border-[#3a3a3a] text-[9px] tracking-[0.2em] px-5 py-1.5 font-semibold group-hover:bg-[#7B3030] group-hover:border-[#7B3030] group-hover:text-white transition-colors">
                  SHOP NOW →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Custom Jewelry Banner ── */}
      <section className="bg-[#FAF4EF]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row min-h-90">
          <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-14">
            <h2 className="font-serif text-4xl font-bold text-[#1a1a1a]">CUSTOM JEWELRY</h2>
            <div className="h-px w-10 bg-[#7B3030] mt-3 mb-5" />
            <p className="text-[#333] font-semibold text-sm mb-2">Bring your dream design to life.</p>
            <p className="text-[#666] text-sm leading-relaxed max-w-xs">
              Our experts will craft a unique masterpiece just for you.
            </p>
            <Link
              href="/custom"
              className="mt-8 w-fit bg-[#7B3030] text-white text-[10px] tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-[#5e2424] transition-colors"
            >
              START CUSTOM DESIGN →
            </Link>
          </div>
          <div className="flex-1 overflow-hidden min-h-70">
            <Image
              src="/collections/collections-custom-banner.jpg"
              alt="Custom Design"
              width={720}
              height={380}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Features Strip ── */}
      <section className="border-t border-gray-200 bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {features.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <Icon size={26} strokeWidth={1.2} className="text-[#7B3030]" />
              <span className="text-[10px] tracking-[0.12em] font-semibold text-[#1a1a1a] whitespace-pre-line leading-relaxed">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
