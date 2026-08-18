import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Jewellery Journal — Guides, Trends & Diamond Education",
  description:
    "Read the Renora Jewels journal for expert guides on choosing diamond rings, jewellery care tips, metal comparisons, the 4 Cs of diamonds, and custom jewellery ideas.",
  alternates: { canonical: "https://www.renorajewels.in/blog" },
  openGraph: {
    title: "Jewellery Journal — Renora Jewels",
    description:
      "Expert guides, trends and diamond education from Renora Jewels. Learn about engagement rings, the 4 Cs, gold vs platinum & more.",
    url: "https://www.renorajewels.in/blog",
  },
};

const posts = [
  {
    id: 1,
    title: "How to Choose the Perfect Engagement Ring",
    excerpt: "From cut to clarity, here's everything you need to know to find the ring that speaks to your love story.",
    date: "July 20, 2026",
    category: "GUIDES",
    img: "/blog/blog-post-1.jpg",
  },
  {
    id: 2,
    title: "The Timeless Appeal of Diamond Studs",
    excerpt: "Diamond studs are a wardrobe staple. Discover why they remain one of our best-selling pieces year after year.",
    date: "July 14, 2026",
    category: "TRENDS",
    img: "/blog/blog-post-2.jpg",
  },
  {
    id: 3,
    title: "Gold vs. Platinum: Which Metal Is Right for You?",
    excerpt: "Both are beautiful, but they differ in durability, maintenance and price. We break it all down for you.",
    date: "July 8, 2026",
    category: "EDUCATION",
    img: "/blog/blog-post-3.jpg",
  },
  {
    id: 4,
    title: "Custom Jewelry: Why It Makes the Perfect Gift",
    excerpt: "A bespoke piece carries meaning that off-the-shelf jewelry simply cannot match. Here's how to get started.",
    date: "June 30, 2026",
    category: "CUSTOM",
    img: "/blog/blog-post-4.jpg",
  },
  {
    id: 5,
    title: "Caring for Your Fine Jewelry at Home",
    excerpt: "Simple daily habits and safe storage tips to keep your diamonds and metals looking their absolute best.",
    date: "June 22, 2026",
    category: "CARE",
    img: "/blog/blog-post-5.jpg",
  },
  {
    id: 6,
    title: "The 4 Cs of Diamonds Explained Simply",
    excerpt: "Cut, color, clarity, carat — demystified in plain language so you can shop with total confidence.",
    date: "June 15, 2026",
    category: "EDUCATION",
    img: "/blog/blog-post-6.jpg",
  },
];

export default function BlogPage() {
  return (
    <>
      <div className="bg-white py-14 text-center border-b border-gray-100">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-widest text-[#1a1a1a]">
          JOURNAL
        </h1>
        <nav className="flex items-center justify-center gap-2 mt-4 text-[12px] text-[#999]">
          <Link href="/" className="hover:text-[#7B3030] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#7B3030]">Blog</span>
        </nav>
      </div>

      <section className="bg-[#FAF8F5] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="LATEST STORIES" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white group flex flex-col overflow-hidden border border-gray-100">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={post.img}
                    alt={post.title}
                    width={600}
                    height={375}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.2em] font-bold text-[#7B3030] border border-[#7B3030] px-2 py-0.5">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-[#aaa]">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-[17px] font-bold text-[#1a1a1a] leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-[12px] text-[#777] leading-relaxed flex-1">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="text-[10px] tracking-[0.2em] font-semibold text-[#7B3030] hover:underline mt-1"
                  >
                    READ MORE →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
