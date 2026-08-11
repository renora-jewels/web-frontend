import Link from "next/link";
import Image from "next/image";

export default function Hero() {

  return (
    <section className="relative w-full overflow-hidden min-h-130 flex items-center">
      {/* Full-width background image */}
      <Image
        src="/home/home-hero-banner.png"
        alt="Renora Jewels — Timeless Elegance"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Gradient overlay — strong on left so text stays readable, fades to transparent right */}
      <div className="absolute inset-0 bg-linear-to-r from-[#F5EDE0]/95 via-[#F5EDE0]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-20">
        <div className="max-w-lg">
          <h1 className="font-serif text-4xl sm:text-5xl xl:text-[58px] font-bold leading-[1.1]">
            <span className="block text-[#1a1a1a]">TIMELESS</span>
            <span className="block text-[#1a1a1a]">ELEGANCE,</span>
            <span className="block text-[#7B3030]">CRAFTED TO SHINE</span>
          </h1>
          <p className="mt-5 text-[#666] text-sm leading-relaxed max-w-70">
            Exquisite diamonds. Exceptional craftsmanship.
            <br />
            Made for your most precious moments.
          </p>
          <div className="mt-8 flex items-center gap-4 flex-wrap">
            <Link
              href="/collections"
              className="bg-[#7B3030] text-white text-[10px] tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-[#5e2424] transition-colors"
            >
              SHOP COLLECTION
            </Link>
            <Link
              href="/custom"
              className="border border-[#7B3030] text-[#7B3030] text-[10px] tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-[#7B3030] hover:text-white transition-colors"
            >
              CUSTOM DESIGN
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
