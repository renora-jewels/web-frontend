"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, SlidersHorizontal, LayoutGrid, List, ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categoryMeta: Record<string, { title: string; description: string }> = {
  rings:     { title: "RINGS",          description: "Timeless rings crafted for every occasion." },
  necklaces: { title: "NECKLACES",      description: "Elegant necklaces that tell your story." },
  earrings:  { title: "EARRINGS",       description: "Sparkling earrings for every look." },
  bracelets: { title: "BRACELETS",      description: "Delicate bracelets to adorn your wrist." },
  bangles:   { title: "BANGLES",        description: "Classic bangles with a modern touch." },
  pendants:  { title: "PENDANTS",       description: "Beautiful pendants, close to your heart." },
  chains:    { title: "CHAINS",         description: "Fine chains in gold, silver and platinum." },
  mens:      { title: "MEN'S JEWELRY",  description: "Bold pieces crafted for the modern man." },
};

const allProducts = [
  { id: 1, name: "Diamond Solitaire",      price: "$1,250", rating: 4.8, reviews: 134, img: "/collections/collections-product-1.jpg" },
  { id: 2, name: "Rose Gold Halo",         price: "$1,480", rating: 4.7, reviews: 98,  img: "/collections/collections-product-2.jpg" },
  { id: 3, name: "Classic Pavé Band",      price: "$980",   rating: 4.9, reviews: 210, img: "/collections/collections-product-3.jpg" },
  { id: 4, name: "Eternity Band",          price: "$2,150", rating: 4.6, reviews: 156, img: "/collections/collections-product-4.jpg" },
  { id: 5, name: "Vintage Cluster",        price: "$1,320", rating: 4.5, reviews: 75,  img: "/collections/collections-product-5.jpg" },
  { id: 6, name: "Three Stone Ring",       price: "$1,780", rating: 4.8, reviews: 112, img: "/collections/collections-product-6.jpg" },
  { id: 7, name: "Cushion Cut Halo",       price: "$1,590", rating: 4.7, reviews: 87,  img: "/collections/collections-product-7.jpg" },
  { id: 8, name: "Princess Cut Solitaire", price: "$1,350", rating: 4.9, reviews: 201, img: "/collections/collections-product-8.jpg" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`text-sm ${s <= Math.floor(rating) ? "text-[#D4A017]" : "text-gray-300"}`}>★</span>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: (typeof allProducts)[number] }) {
  const [wished, setWished] = useState(false);
  return (
    <div className="group bg-white flex flex-col">
      <div className="relative aspect-square overflow-hidden bg-[#F9F6F2]">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button onClick={() => setWished(!wished)} className="absolute top-3 right-3 p-1">
          <Heart size={17} strokeWidth={1.5} fill={wished ? "#7B3030" : "none"} stroke={wished ? "#7B3030" : "#aaa"} />
        </button>
      </div>
      <div className="py-4 px-2 flex flex-col gap-1">
        <h3 className="text-[13px] font-medium text-[#1a1a1a]">{product.name}</h3>
        <p className="text-[13px] text-[#555] font-semibold">{product.price}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <StarRating rating={product.rating} />
          <span className="text-[11px] text-[#999]">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex items-center gap-1 border border-gray-300 px-3 py-1.5 text-[11px] tracking-wider text-[#3a3a3a] hover:border-[#7B3030] transition-colors">
      {label} <ChevronDown size={12} />
    </button>
  );
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const [viewGrid, setViewGrid] = useState(true);
  const meta = categoryMeta[params.category] ?? { title: params.category.toUpperCase(), description: "" };

  return (
    <>
      <section className="bg-[#FAF8F5] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title={meta.title} className="mb-3" />
          <p className="text-center text-[#666] text-sm mt-2 mb-2">{meta.description}</p>
          <nav className="flex items-center justify-center gap-2 mb-10 text-[12px] text-[#999]">
            <Link href="/" className="hover:text-[#7B3030] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections" className="hover:text-[#7B3030] transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-[#7B3030]">{meta.title}</span>
          </nav>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 bg-white px-4 py-3 border border-gray-100">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="flex items-center gap-1.5 text-[11px] tracking-wider font-semibold text-[#1a1a1a]">
                <SlidersHorizontal size={14} strokeWidth={1.5} /> FILTER BY
              </span>
              <FilterDropdown label="METAL" />
              <FilterDropdown label="PRICE" />
              <FilterDropdown label="STONE" />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[11px] tracking-wider text-[#555] font-semibold">SORT BY:</span>
              <FilterDropdown label="POPULARITY" />
              <div className="flex items-center gap-1 ml-2">
                <button onClick={() => setViewGrid(true)} className={`p-1.5 border ${viewGrid ? "border-[#7B3030] text-[#7B3030]" : "border-gray-200 text-[#aaa]"}`}>
                  <LayoutGrid size={14} />
                </button>
                <button onClick={() => setViewGrid(false)} className={`p-1.5 border ${!viewGrid ? "border-[#7B3030] text-[#7B3030]" : "border-gray-200 text-[#aaa]"}`}>
                  <List size={14} />
                </button>
              </div>
            </div>
          </div>

          <div className={`grid gap-5 ${viewGrid ? "grid-cols-2 lg:grid-cols-4" : "grid-cols-1 sm:grid-cols-2"}`}>
            {allProducts.map((p) => (<ProductCard key={p.id} product={p} />))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
          {["FREE SHIPPING\nWORLDWIDE","CERTIFIED\nDIAMONDS","SECURE\nPAYMENTS","LIFETIME\nWARRANTY","EASY RETURNS\n30 DAYS"].map((label) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="text-[#7B3030] text-lg">◆</span>
              <span className="text-[10px] tracking-[0.12em] font-semibold text-[#1a1a1a] whitespace-pre-line leading-relaxed">{label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
