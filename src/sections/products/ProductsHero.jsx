"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Package } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="products-hero-bg" />

      <div className="products-hero-overlay" />

      <div className="products-hero-container">
        <motion.div
          className="products-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="products-hero-tag">
            <Package size={16} />
            <span>OUR PRODUCT RANGE</span>
          </div>

          <h1>
            Quality Polymer
            <span> Solutions</span>
            <br />
            For Every Industry
          </h1>

          <p>
            Explore our range of polymer materials designed to support
            diverse industrial and manufacturing requirements.
          </p>

          <div className="products-hero-actions">
            <Link
              href="#product-categories"
              className="products-hero-primary-btn"
            >
              Explore Products
              <ArrowDown size={18} />
            </Link>

            <Link
              href="/get-a-quote"
              className="products-hero-secondary-btn"
            >
              Get a Quote
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="products-hero-side"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="products-hero-side-line" />
          <span>INDRAS POLYMERS</span>
          <p>
            Polymer materials for industrial applications.
          </p>
        </motion.div>
      </div>

      <div className="products-hero-bottom">
        <span>EXPLORE OUR MATERIALS</span>
        <div className="products-hero-bottom-line" />
        <span>01 / PRODUCTS</span>
      </div>
    </section>
  );
}
