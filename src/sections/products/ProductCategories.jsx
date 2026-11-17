"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Package } from "lucide-react";

const productCategories = [
  {
    id: "pp-homopolymer",
    name: "PP Homopolymer",
    description:
      "Polypropylene homopolymer for a variety of industrial and manufacturing applications.",
    image: "/images/products/pp-homopolymer.jpg",
    tag: "POLYPROPYLENE",
  },
  {
    id: "pp-impact-copolymer",
    name: "PP Impact Copolymer",
    description:
      "Impact copolymer materials for applications requiring a balance of strength and impact resistance.",
    image: "/images/products/pp-impact-copolymer.png",
    tag: "POLYPROPYLENE",
  },
  {
    id: "pp-random-copolymer",
    name: "PP Random Copolymer",
    description:
      "Random copolymer grades used in various processing and manufacturing applications.",
    image: "/images/products/pp-random.jpg",
    tag: "POLYPROPYLENE",
  },
  {
    id: "hdpe",
    name: "HDPE",
    description:
      "High-density polyethylene used across different industrial and packaging applications.",
    image: "/images/products/hdpe.jpg",
    tag: "POLYETHYLENE",
  },
  {
    id: "ldpe",
    name: "LDPE",
    description:
      "Low-density polyethylene suitable for flexible plastic products and packaging applications.",
    image: "/images/products/ldpe.jpg",
    tag: "POLYETHYLENE",
  },
  {
    id: "lldpe",
    name: "LLDPE",
    description:
      "Linear low-density polyethylene used in films and a range of flexible packaging applications.",
    image: "/images/products/lldpe.jpg",
    tag: "POLYETHYLENE",
  },
];

export default function ProductCategories() {
  return (
    <section
      className="product-categories-section"
      id="product-categories"
    >
      <div className="product-categories-container">

        <motion.div
          className="product-categories-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="product-categories-tag">
            <Package size={15} />
            OUR PRODUCT RANGE
          </span>

          <h2>
            Explore Our <span>Products</span>
          </h2>

          <p>
            Discover our range of polymer materials designed to meet
            diverse industrial and manufacturing requirements.
          </p>
        </motion.div>

        <div className="product-categories-grid">
          {productCategories.map((product, index) => (
            <motion.article
              className="product-category-card"
              key={product.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="product-category-image">
                <img
                  src={product.image}
                  alt={`${product.name} polymer material`}
                  loading="lazy"
                />

                <span className="product-category-tag">
                  {product.tag}
                </span>
              </div>

              <div className="product-category-content">
                <h3>{product.name}</h3>

                <p>{product.description}</p>

                <Link
                  href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                  className="product-category-link"
                >
                  Enquire Now
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
