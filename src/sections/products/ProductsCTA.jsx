
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  PackageCheck,
} from "lucide-react";

export default function ProductsCTA() {
  return (
    <section className="products-cta-section">
      <div className="products-cta-background" />
      <div className="products-cta-overlay" />

      <div className="products-cta-container">
        <motion.div
          className="products-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="products-cta-label">
            <PackageCheck size={17} />
            <span>LET'S WORK TOGETHER</span>
          </div>

          <h2>
            Looking for the Right
            <span> Polymer Material?</span>
          </h2>

          <p>
            Share your product requirements with us.
            Connect with our team to discuss suitable materials
            for your business needs.
          </p>

          <div className="products-cta-actions">
            <Link
              href="/get-a-quote"
              className="products-cta-primary"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="products-cta-secondary"
            >
              <MessageCircle size={18} />
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="products-cta-side"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="products-cta-circle">
            <PackageCheck size={55} strokeWidth={1.3} />
          </div>
          <span>INDRAS POLYMERS</span>
          <p>Let's discuss your requirements.</p>
        </motion.div>
      </div>
    </section>
  );
}
