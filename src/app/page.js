import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import WhyChooseUs from "@/sections/home/WhyChooseUs";
import ProductsShowcase from "@/sections/home/ProductsShowcase";
import InfrastructureShowcase from "@/sections/home/InfrastructureShowcase";

import Carousel from "@/components/Carousel";

const featuredProducts = [
  {
    id: "pp-homopolymer",
    src: "/images/products/pp-homopolymer.jpg",
    title: "PP Homopolymer",
    description: "Explore polypropylene homopolymer materials.",
    href: "/get-a-quote?product=PP%20Homopolymer",
  },
  {
    id: "pp-impact-copolymer",
    src: "/images/products/pp-impact-copolymer.png",
    title: "PP Impact Copolymer",
    description: "Explore impact copolymer material solutions.",
    href: "/get-a-quote?product=PP%20Impact%20Copolymer",
  },
  {
    id: "pp-random-copolymer",
    src: "/images/products/pp-random.jpg",
    title: "PP Random Copolymer",
    description: "Explore random copolymer materials.",
    href: "/get-a-quote?product=PP%20Random%20Copolymer",
  },
  {
    id: "hdpe",
    src: "/images/products/hdpe.jpg",
    title: "HDPE",
    description: "Explore high-density polyethylene materials.",
    href: "/get-a-quote?product=HDPE",
  },
  {
    id: "ldpe",
    src: "/images/products/ldpe.jpg",
    title: "LDPE",
    description: "Explore low-density polyethylene materials.",
    href: "/get-a-quote?product=LDPE",
  },
  {
    id: "lldpe",
    src: "/images/products/lldpe.jpg",
    title: "LLDPE",
    description: "Explore linear low-density polyethylene materials.",
    href: "/get-a-quote?product=LLDPE",
  },
];

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

      {/* 05 - Featured Products Carousel */}
      <section className="home-featured-carousel">
        <div className="home-featured-container">
          <div className="home-featured-heading">
            <span>OUR PRODUCT RANGE</span>
            <h2>Explore Our Featured Products</h2>
            <p>
              Discover polymer materials for diverse industrial
              requirements.
            </p>
          </div>

          <Carousel
            items={featuredProducts}
            autoPlay={true}
            interval={4000}
            showArrows={true}
            showDots={true}
            showPlayPause={false}
            loop={true}
            aspectRatio="16 / 4"
          />
        </div>
      </section>

      {/* 06 - Infrastructure Showcase */}
      <InfrastructureShowcase />
    </main>
  );
}
