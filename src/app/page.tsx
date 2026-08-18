import type { Metadata } from "next";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  title: "Renora Jewels — Fine Diamond Jewellery | renorajewels.in",
  description:
    "Renora Jewels — India's trusted destination for certified diamond rings, necklaces, earrings, bangles & custom jewellery. Shop timeless designs at renorajewels.in.",
  alternates: { canonical: "https://www.renorajewels.in" },
  openGraph: {
    title: "Renora Jewels — Fine Diamond Jewellery",
    description:
      "Certified diamond rings, necklaces, earrings, bangles & bespoke custom jewellery. Exceptional craftsmanship at renorajewels.in.",
    url: "https://www.renorajewels.in",
  },
};
import ShopByCategory from "@/components/home/ShopByCategory";
import BestSellers from "@/components/home/BestSellers";
import CustomDesign from "@/components/home/CustomDesign";
import Features from "@/components/home/Features";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <ShopByCategory />
      <BestSellers />
      <CustomDesign />
      <Features />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </>
  );
}
