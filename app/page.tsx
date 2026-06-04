import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import CategorySection from "@/components/home/CategorySection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TrustedBrands from "@/components/home/TrustedBrands";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import NewsletterSection from "@/components/home/NewsletterSection";

export const metadata: Metadata = {
  title: "AL HIKMATH ENTERPRISES PVT LTD | Electronics, Computers & IT Products",
  description:
    "Shop electronics, computers, IT accessories, networking products, and technology solutions at AL HIKMATH ENTERPRISES PVT LTD — Chennai's trusted technology destination. 500+ products, 50+ brands.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <TrustedBrands />
      <Testimonials />
      <CTABanner />
      <NewsletterSection />
    </>
  );
}
