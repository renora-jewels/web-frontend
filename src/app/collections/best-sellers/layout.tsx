import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Sellers — Top Diamond Jewellery Picks",
  description:
    "Shop Renora Jewels' best-selling diamond jewellery — top-rated rings, necklaces, earrings & more. Certified diamonds, exceptional craftsmanship at renorajewels.in.",
  alternates: { canonical: "https://www.renorajewels.in/collections/best-sellers" },
  openGraph: {
    title: "Best Sellers — Renora Jewels",
    description:
      "Our most-loved diamond jewellery pieces — top-rated rings, necklaces, earrings and more from Renora Jewels.",
    url: "https://www.renorajewels.in/collections/best-sellers",
  },
};

export default function BestSellersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
