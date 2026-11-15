
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowUpRight,
  Factory,
  ShieldCheck,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="about-cta-hero">

      <div className="about-cta-background" />
      <div className="about-cta-overlay" />

      <div className="about-cta-hero-container">

        <motion.div
          className="about-cta-hero-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-cta-meta">
            <span>INDRAS POLYMERS</span>

            <span className="about-cta-quality">
              <ShieldCheck size={14} />
              QUALITY & RELIABILITY
            </span>
          </div>

          <h2>
            RELIABLE POLYMER
            <br />
            <span>SOLUTIONS FOR</span>
            <br />
            YOUR BUSINESS
          </h2>

          <p>
            Discover dependable polymer solutions backed by
            quality, customer commitment, and strong industry
            partnerships. Let's build something better together.
          </p>

          <div className="about-cta-hero-buttons">
            <Link
              href="/get-a-quote"
              className="about-cta-primary"
            >
              GET A QUOTE
              <ArrowUpRight size={19} />
            </Link>

            <Link
              href="/products"
              className="about-cta-secondary"
            >
              EXPLORE PRODUCTS
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="about-cta-hero-side"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="about-cta-orbit">
            <div className="about-cta-factory-icon">
              <Factory size={65} strokeWidth={1.2} />
            </div>
          </div>

          <span className="about-cta-side-label">
            BUILT ON QUALITY
          </span>

          <span className="about-cta-side-caption">
            YOUR TRUSTED POLYMER PARTNER
          </span>
        </motion.div>

      </div>

      <div className="about-cta-bottom-line">
        <span>QUALITY</span>
        <span>RELIABILITY</span>
        <span>COMMITMENT</span>
        <span>PARTNERSHIP</span>
      </div>

    </section>
  );
}
