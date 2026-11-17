"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowUpRight,
  ArrowRight,
  Layers3,
  Package,
  Filter,
} from "lucide-react";

const products = [
  {
    id: 1,
    name: "PP Homopolymer",
    shortName: "PP-H",
    category: "Polypropylene",
    description:
      "Polypropylene homopolymer grades for a variety of industrial and manufacturing applications.",
    image: "/images/products/pp-homopolymer.jpg",
  },
  {
    id: 2,
    name: "PP Impact Copolymer",
    shortName: "PP-ICP",
    category: "Polypropylene",
    description:
      "Impact copolymer material options for industrial applications requiring specific performance characteristics.",
    image: "/images/products/pp-impact.jpg",
  },
  {
    id: 3,
    name: "PP Random Copolymer",
    shortName: "PP-RCP",
    category: "Polypropylene",
    description:
      "Random copolymer grades for diverse plastic processing and manufacturing requirements.",
    image: "/images/products/pp-random.jpg",
  },
  {
    id: 4,
    name: "High-Density Polyethylene",
    shortName: "HDPE",
    category: "Polyethylene",
    description:
      "HDPE raw material options for different industrial and commercial applications.",
    image: "/images/products/hdpe.jpg",
  },
  {
    id: 5,
    name: "Low-Density Polyethylene",
    shortName: "LDPE",
    category: "Polyethylene",
    description:
      "LDPE material options for flexible plastic processing and manufacturing needs.",
    image: "/images/products/ldpe.jpg",
  },
  {
    id: 6,
    name: "Linear Low-Density Polyethylene",
    shortName: "LLDPE",
    category: "Polyethylene",
    description:
      "LLDPE grades for diverse film and plastic processing applications.",
    image: "/images/products/lldpe.jpg",
  },
];

const categories = [
  "All Products",
  "Polypropylene",
  "Polyethylene",
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
    },
  },
};

export default function ProductsShowcase() {
  const [activeCategory, setActiveCategory] =
    useState("All Products");

  const filteredProducts =
    activeCategory === "All Products"
      ? products
      : products.filter(
          (product) =>
            product.category === activeCategory
        );

  return (
    <section
      className="products-showcase"
      id="products-showcase"
    >
      <div className="container">

        {/* SECTION HEADING */}
        <motion.div
          className="products-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span />
            OUR PRODUCT RANGE
          </div>

          <div className="products-heading-content">
            <div>
              <h2>
                Quality Materials.
                <span> Industrial Solutions.</span>
              </h2>

              <p>
                Explore our range of polypropylene and
                polyethylene raw materials for diverse
                manufacturing requirements.
              </p>
            </div>

            <div className="products-heading-icon">
              <Layers3 size={42} />
            </div>
          </div>
        </motion.div>

        {/* CATEGORY FILTERS */}
        <div className="products-toolbar">

          <div className="products-filter-label">
            <Filter size={17} />
            <span>Explore by category</span>
          </div>

          <div
            className="products-filters"
            role="group"
            aria-label="Filter products by category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`product-filter ${
                  activeCategory === category
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setActiveCategory(category)
                }
                aria-pressed={
                  activeCategory === category
                }
              >
                {category}
              </button>
            ))}
          </div>

        </div>

        {/* PRODUCT GRID */}
        <motion.div
          className="products-grid"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.article
                className="product-card"
                key={product.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  y: 15,
                  transition: { duration: 0.2 },
                }}
              >

                {/* PRODUCT IMAGE */}
                <div className="product-image-wrapper">

                  <img
                    src={product.image}
                    alt={`${product.name} polymer resin material`}
                    loading="lazy"
                  />

                  <span className="product-category-tag">
                    {product.category}
                  </span>

                  <div className="product-image-overlay">
                    <span>
                      <Package size={17} />
                      {product.shortName}
                    </span>
                  </div>

                </div>

                {/* PRODUCT DETAILS */}
                <div className="product-card-content">

                  <div className="product-card-meta">
                    <span>PRODUCT {String(product.id).padStart(2, "0")}</span>
                    <span className="product-short-name">
                      {product.shortName}
                    </span>
                  </div>

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <Link
                    href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                    className="product-quote-link"
                  >
                    Enquire About Product
                    <ArrowUpRight size={18} />
                  </Link>

                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BOTTOM CTA */}
        <motion.div
          className="products-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <div className="products-bottom-icon">
            <Package size={25} />
          </div>

          <div className="products-bottom-content">
            <h3>Looking for a specific polymer grade?</h3>
            <p>
              Contact our team to discuss your material
              requirements and product availability.
            </p>
          </div>

          <Link
            href="/get-a-quote"
            className="products-bottom-button"
          >
            Request a Quote
            <ArrowRight size={18} />
          </Link>

        </motion.div>

      </div>
    </section>
  );
}
