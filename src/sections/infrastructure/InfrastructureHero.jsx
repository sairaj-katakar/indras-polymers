"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Warehouse,
} from "lucide-react";

export default function InfrastructureHero() {
  return (
    <section className="infrastructure-hero">
      <div className="infrastructure-hero-bg" />
      <div className="infrastructure-hero-overlay" />

      <div className="infrastructure-hero-container">
        <motion.div
          className="infrastructure-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="infrastructure-hero-tag">
            <Warehouse size={17} />
            <span>OUR INFRASTRUCTURE</span>
          </div>

          <h1>
            Built for Quality.
            <span> Designed for Efficiency.</span>
          </h1>

          <p>
            Explore the facilities and infrastructure that support
            our polymer material storage and business operations.
          </p>

          <div className="infrastructure-hero-actions">
            <Link
              href="#facility-overview"
              className="infrastructure-primary-btn"
            >
              Explore Facilities
              <ArrowDown size={18} />
            </Link>

            <Link
              href="/contact"
              className="infrastructure-secondary-btn"
            >
              Contact Us
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="infrastructure-hero-side"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="infrastructure-side-icon">
            <Warehouse size={34} />
          </div>

          <span>INDUSTRIAL FACILITIES</span>

          <p>
            Supporting polymer storage and material operations.
          </p>
        </motion.div>
      </div>

      <div className="infrastructure-hero-bottom">
        <span>OUR FACILITIES</span>
        <div />
        <span>INDRAS POLYMERS</span>
      </div>
    </section>
  );
}
