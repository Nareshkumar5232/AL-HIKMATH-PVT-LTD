import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
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
  title: "AL HIKMATH ENTERPRISES PVT LTD | Premium Electrical & Electronics",
  description:
    "Shop premium electrical and electronics appliances at AL HIKMATH ENTERPRISES PVT LTD — Chennai's trusted tech destination. 500+ products, 50+ brands.",
};

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CategorySection />
      <FeaturedProducts />
      <WhyChooseUs />
      <TrustedBrands />
      <Testimonials />
      <CTABanner />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
