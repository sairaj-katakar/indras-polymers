
import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import ProductsShowcase from "@/sections/home/ProductsShowcase";
import InfrastructureShowcase from "@/sections/home/InfrastructureShowcase";

export default function Home() {
  return (
    <main>
      {/* 01 - Hero Section */}
      <HeroSection />

      {/* 02 - Company Introduction */}
      <AboutSection />

      {/* 03 - Why Choose Us */}
      <WhyChooseUs />

      {/* 04 - Products Showcase */}
      <ProductsShowcase />

      <InfrastructureShowcase />
    </main>
  );
}
