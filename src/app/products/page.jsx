
import ProductsHero from "@/sections/products/ProductsHero";
import ProductCategories from "@/sections/products/ProductCategories";
import ProductDetails from "@/sections/products/ProductDetails";
import ProductsCTA from "@/sections/products/ProductsCTA";

export default function ProductsPage() {
  return (
    <main>
      <ProductsHero />
      <ProductCategories />
      <ProductDetails />
      <ProductsCTA />
    </main>
  );
}
