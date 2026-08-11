import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  { label: "RINGS",          href: "/collections/rings",    img: "/home/home-category-rings.png" },
  { label: "NECKLACES",     href: "/collections/necklaces", img: "/home/home-category-necklaces.png" },
  { label: "BRACELETS",     href: "/collections/bracelets", img: "/home/home-category-bracelets.png" },
  { label: "EARRINGS",      href: "/collections/earrings",  img: "/home/home-category-earrings.png" },
  { label: "CUSTOM JEWELRY", href: "/custom",               img: "/home/home-category-custom.png" },
];

export default function ShopByCategory() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="SHOP BY CATEGORY" className="mb-10" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {categories.map(({ label, href, img }) => (
            <Link key={label} href={href} className="group flex flex-col items-center">
              <div className="w-full aspect-square overflow-hidden bg-[#F5EDE0]">
                <Image
                  src={img}
                  alt={label}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <span className="mt-3 text-[10px] tracking-[0.2em] font-semibold text-[#1a1a1a] group-hover:text-[#7B3030] transition-colors">
                {label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
