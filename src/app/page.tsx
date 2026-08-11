import Hero from "@/components/home/Hero";
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
