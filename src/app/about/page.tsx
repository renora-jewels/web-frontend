import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Leaf, Gem, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Renora Jewels — Our Story & Craftsmanship",
  description:
    "Learn about Renora Jewels — our story, values, and commitment to expert craftsmanship, ethical diamond sourcing, and timeless fine jewellery at renorajewels.in.",
  alternates: { canonical: "https://www.renorajewels.in/about" },
  openGraph: {
    title: "About Renora Jewels — Our Story & Craftsmanship",
    description:
      "Expert craftsmanship. Ethical sourcing. Certified diamonds. Discover the story behind Renora Jewels.",
    url: "https://www.renorajewels.in/about",
  },
};

const values = [
  { Icon: Scissors,   label: "EXPERT\nCRAFTSMANSHIP" },
  { Icon: Leaf,       label: "ETHICAL\nSOURCING" },
  { Icon: Gem,        label: "CERTIFIED\nDIAMONDS" },
  { Icon: ShieldCheck, label: "SATISFACTION\nGUARANTEE" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Page Header ── */}
      <div className="bg-white py-14 text-center border-b border-gray-100">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-widest text-[#1a1a1a]">
          ABOUT US
        </h1>
        <nav className="flex items-center justify-center gap-2 mt-4 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#7B3030] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#7B3030]">About Us</span>
        </nav>
      </div>

      {/* ── About Renora Jewels ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl font-bold tracking-widest text-[#1a1a1a] mb-6">
              ABOUT RENORA JEWELS
            </h2>
            <p className="text-[#555] text-sm leading-relaxed mb-4">
              At Renora Jewels, we believe every piece of jewelry tells a story.
              Our mission is to create timeless designs with exceptional quality and
              unmatched craftsmanship.
            </p>
            <p className="text-[#555] text-sm leading-relaxed">
              From the finest diamonds to delicate details, we ensure every piece
              is made to celebrate life&apos;s most precious moments.
            </p>
          </div>
          <div className="aspect-4/3 overflow-hidden">
            <Image
              src="/about/about-craftsmanship.jpg"
              alt="Jewelry Craftsmanship"
              width={720}
              height={540}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Values Strip ── */}
      <section className="border-y border-gray-200 bg-[#FAF8F5] py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-gray-200">
          {values.map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3 px-6 py-4">
              <Icon size={26} strokeWidth={1.2} className="text-[#1a1a1a]" />
              <span className="text-[10px] tracking-[0.15em] font-bold text-[#1a1a1a] whitespace-pre-line leading-relaxed">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 aspect-4/3 overflow-hidden">
            <Image
              src="/about/about-story.jpg"
              alt="Our Story"
              width={720}
              height={540}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-serif text-3xl font-bold tracking-widest text-[#1a1a1a] mb-6">
              OUR STORY
            </h2>
            <p className="text-[#555] text-sm leading-relaxed">
              Founded with a passion for elegance and perfection, Renora Jewels has
              grown into a trusted name in fine jewelry. We combine modern innovation
              with timeless techniques to bring you pieces that last forever.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
