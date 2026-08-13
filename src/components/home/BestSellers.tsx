"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ShoppingCart } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const products = [
  { id: 1, name: "Classic Solitaire Ring",     price: "$1,250.00", img: "/home/home-bestsellers-1.png" },
  { id: 2, name: "Rose Gold Diamond Necklace", price: "$1,450.00", img: "/home/home-bestsellers-2.webp" },
  { id: 3, name: "Tennis Bracelet",            price: "$2,670.00", img: "/home/home-bestsellers-3.webp" },
  { id: 4, name: "Halo Diamond Ring",          price: "$1,850.00", img: "/home/home-bestsellers-4.webp" },
];

function ProductCard({ name, price, img }: { name: string; price: string; img: string }) {
  const [wished, setWished] = useState(false);
  const router = useRouter();

  return (
    <div className="group flex flex-col bg-white border border-gray-100">
      <div className="relative aspect-square overflow-hidden bg-[#F9F6F2]">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={() => { setWished(!wished); router.push("/contact"); }}
          className="absolute top-3 right-3 p-1 transition-colors"
        >
          <Heart
            size={17}
            strokeWidth={1.5}
            fill={wished ? "#7B3030" : "none"}
            stroke={wished ? "#7B3030" : "#aaa"}
          />
        </button>
      </div>
      <div className="flex flex-col items-center py-4 px-3 text-center gap-1">
        <h3 className="text-[13px] font-medium text-[#1a1a1a]">{name}</h3>
        <p className="text-[13px] text-[#555]">{price}</p>
        <button
          onClick={() => router.push("/contact")}
          className="mt-2 border border-[#ccc] text-[9px] tracking-[0.2em] px-5 py-2 flex items-center gap-2 text-[#3a3a3a] hover:border-[#7B3030] hover:text-[#7B3030] transition-colors font-semibold"
        >
          ADD TO CART <ShoppingCart size={11} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default function BestSellers() {
  return (
    <section className="bg-[#FAF8F5] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative flex items-start justify-center mb-10">
          <SectionHeading title="BEST SELLERS" />
          <Link
            href="/collections"
            className="absolute right-0 top-1 text-[10px] tracking-[0.18em] text-[#3a3a3a] hover:text-[#7B3030] font-semibold hidden sm:flex items-center gap-1"
          >
            VIEW ALL →
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} name={p.name} price={p.price} img={p.img} />
          ))}
        </div>
      </div>
    </section>
  );
}
