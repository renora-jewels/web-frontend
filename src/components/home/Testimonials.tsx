import SectionHeading from "@/components/ui/SectionHeading";

const reviews = [
  {
    stars: 5,
    text: "The ring is absolutely stunning! Excellent craftsmanship and fast delivery.",
    author: "Sophia M.",
  },
  {
    stars: 5,
    text: "Exactly what I envisioned. The team at Renora Jewels made it perfect!",
    author: "James L.",
  },
  {
    stars: 5,
    text: "Beautiful packaging and amazing quality. Highly recommended!",
    author: "Emily R.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeading title="WHAT OUR CUSTOMERS SAY" className="mb-10" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reviews.map(({ stars, text, author }) => (
            <div
              key={author}
              className="border border-gray-100 bg-[#FAFAFA] p-8 flex flex-col items-center text-center gap-4"
            >
              <div className="flex gap-0.5 text-[#D4A017]">
                {Array.from({ length: stars }).map((_, i) => (
                  <span key={i} className="text-lg leading-none">★</span>
                ))}
              </div>
              <p className="text-[#555] text-sm leading-relaxed italic">
                &ldquo;{text}&rdquo;
              </p>
              <span className="text-[11px] tracking-[0.15em] font-semibold text-[#1a1a1a]">
                — {author}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
