
"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Building2 } from "lucide-react";

export default function InfrastructureCTA() {
  return (
    <section className="infrastructure-cta">
      <div className="infrastructure-cta-bg" />

      <div className="infrastructure-cta-overlay" />

      <div className="infrastructure-cta-container">
        <motion.div
          className="infrastructure-cta-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="infrastructure-cta-label">
            <Building2 size={17} />
            <span>OUR INFRASTRUCTURE</span>
          </div>

          <h2>
            Looking for a
            <span> Reliable Polymer Partner?</span>
          </h2>

          <p>
            Connect with our team to discuss your polymer material
            requirements. We are ready to help you find the right
            solutions for your business.
          </p>

          <div className="infrastructure-cta-actions">
            <Link href="/get-a-quote" className="infrastructure-cta-primary">
              Request a Quote
              <ArrowRight size={19} />
            </Link>

            <Link href="/contact" className="infrastructure-cta-secondary">
              <MessageSquare size={18} />
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
