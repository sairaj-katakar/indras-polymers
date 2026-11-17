import ProductsHero from "@/sections/products/ProductsHero";
import ProductCategories from "@/sections/products/ProductCategories";
import ProductDetails from "@/sections/products/ProductDetails";
import ProductsCTA from "@/sections/products/ProductsCTA";

import Carousel from "@/components/Carousel";

const productSlides = [
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
    description: "High-density polyethylene materials.",
    href: "/get-a-quote?product=HDPE",
  },
  {
    id: "ldpe",
    src: "/images/products/ldpe.jpg",
    title: "LDPE",
    description: "Low-density polyethylene materials.",
    href: "/get-a-quote?product=LDPE",
  },
  {
    id: "lldpe",
    src: "/images/products/lldpe.jpg",
    title: "LLDPE",
    description: "Linear low-density polyethylene materials.",
    href: "/get-a-quote?product=LLDPE",
  },
];

export default function ProductsPage() {
  return (
    <main>
     
      <ProductsHero />

      <section className="products-carousel-section">
        <div className="products-carousel-container">

          <div className="products-carousel-heading">
            <span>EXPLORE OUR MATERIALS</span>
            <h2>Discover Our Polymer Range</h2>
            <p>
              Explore our range of polypropylene and polyethylene
              materials for industrial applications.
            </p>
          </div>

          <Carousel
            items={productSlides}
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

      <ProductCategories />

      <ProductDetails />

      <ProductsCTA />
    </main>
  );
}
