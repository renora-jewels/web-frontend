import Image from "next/image";
import Link from "next/link";
import { MessageCircle, PenLine, Gem, ShieldCheck, Truck, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  { Icon: MessageCircle, number: "1", title: "SHARE YOUR IDEA",    desc: "Share your inspiration, ideas, or reference images with us." },
  { Icon: PenLine,       number: "2", title: "DESIGN & APPROVE",   desc: "Our designers create a 3D model for your approval and feedback." },
  { Icon: Gem,           number: "3", title: "CRAFTED WITH CARE",  desc: "Our skilled artisans handcraft your jewelry with precision." },
  { Icon: ShieldCheck,   number: "4", title: "QUALITY CHECK",      desc: "Every piece undergoes strict quality inspection." },
  { Icon: Truck,         number: "5", title: "DELIVERED TO YOU",   desc: "We deliver your custom piece safely to your doorstep." },
];

const whyPoints = [
  "Unique designs tailored to your style",
  "Premium quality diamonds and metals",
  "Expert craftsmanship & attention to detail",
  "Personalized service from start to finish",
  "Made to celebrate your most precious moments",
];

const popularItems = [
  "Engagement Rings",
  "Wedding Bands",
  "Necklaces & Pendants",
  "Earrings",
  "Bracelets",
  "Men's Jewelry",
];

export default function CustomJewelryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative bg-[#FAF4EF] overflow-hidden min-h-80 flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/custom/custom-hero.jpg"
            alt="Custom Jewelry"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-16">
          <h1 className="font-serif text-5xl sm:text-6xl font-bold text-[#1a1a1a] leading-tight">
            CUSTOM JEWELRY
          </h1>
          <div className="h-px w-12 bg-[#7B3030] mt-3 mb-4" />
          <p className="text-[#7B3030] font-semibold text-base tracking-wide">
            Your Vision. Our Craftsmanship.
          </p>
          <p className="text-[#555] text-sm leading-relaxed mt-3 max-w-sm">
            Create a one-of-a-kind piece that reflects your style, your story,
            and your special moments.
          </p>
          <Link
            href="#consultation"
            className="mt-8 inline-flex items-center gap-2 border-2 border-[#7B3030] text-[#7B3030] text-[10px] tracking-[0.2em] font-semibold px-8 py-3.5 hover:bg-[#7B3030] hover:text-white transition-colors"
          >
            START YOUR DESIGN →
          </Link>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="HOW IT WORKS" className="mb-14" />
          <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map(({ Icon, number, title, desc }, i) => (
              <div key={title} className="relative flex flex-col items-center text-center gap-4">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-[-calc(50%-2.5rem)] border-t-2 border-dashed border-gray-200 z-0" />
                )}
                <div className="relative z-10 w-16 h-16 rounded-full border-2 border-[#F0E8E0] bg-[#FAF8F5] flex items-center justify-center">
                  <Icon size={22} strokeWidth={1.3} className="text-[#7B3030]" />
                </div>
                <div>
                  <p className="text-[11px] tracking-[0.15em] font-bold text-[#1a1a1a]">
                    {number}. {title}
                  </p>
                  <p className="text-[12px] text-[#777] leading-relaxed mt-1 max-w-45 mx-auto">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose + Image + Popular ── */}
      <section className="bg-[#FAF8F5] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div>
            <h3 className="font-serif text-xl font-bold tracking-widest text-[#1a1a1a] mb-2">
              WHY CHOOSE CUSTOM JEWELRY?
            </h3>
            <div className="h-px w-10 bg-[#7B3030] mb-6" />
            <ul className="flex flex-col gap-3">
              {whyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-[13px] text-[#555] leading-relaxed">
                  <CheckCircle size={15} strokeWidth={1.5} className="text-[#7B3030] mt-0.5 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-square overflow-hidden">
            <Image
              src="/custom/custom-center.jpg"
              alt="Custom Jewelry"
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold tracking-widest text-[#1a1a1a] mb-2">
              POPULAR CUSTOMIZATIONS
            </h3>
            <div className="h-px w-10 bg-[#7B3030] mb-6" />
            <ul className="flex flex-col gap-3">
              {popularItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-[13px] text-[#555]">
                  <span className="text-[#7B3030] text-xs">◆</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section id="consultation" className="bg-[#FAF4EF] border-y border-[#eeddd0] py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-full bg-white border border-[#e8ddd0] flex items-center justify-center shrink-0">
            <Gem size={24} strokeWidth={1.2} className="text-[#7B3030]" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h3 className="font-serif text-xl font-bold text-[#1a1a1a] tracking-wide">
              READY TO BRING YOUR DREAM JEWELRY TO LIFE?
            </h3>
            <p className="text-[#666] text-sm mt-1">
              Our experts are here to help you create something truly extraordinary.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 border-2 border-[#7B3030] text-[#7B3030] text-[10px] tracking-[0.2em] font-semibold px-8 py-3 hover:bg-[#7B3030] hover:text-white transition-colors whitespace-nowrap"
          >
            BOOK A CONSULTATION →
          </Link>
        </div>
      </section>
    </>
  );
}
