"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, MessageCircle } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-background" />
      <div className="contact-hero-overlay" />

      <div className="contact-hero-container">
        <motion.div
          className="contact-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-hero-eyebrow">
            <span>INDRAS POLYMERS</span>
            <span className="contact-hero-badge">
              <MessageCircle size={14} />
              WE ARE HERE TO HELP
            </span>
          </div>

          <span className="contact-hero-line" />

          <h1>
            Let's Start a
            <br />
            <span>Conversation.</span>
          </h1>

          <p>
            Have a product enquiry or need assistance?
            Get in touch with our team. We would be happy
            to understand your requirements and help you
            find the right polymer solutions.
          </p>

          <div className="contact-hero-actions">
            <Link
              href="#contact-information"
              className="contact-hero-primary"
            >
              CONTACT OUR TEAM
              <ArrowDown size={18} />
            </Link>

            <Link
              href="#contact-form"
              className="contact-hero-secondary"
            >
              SEND AN ENQUIRY
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="contact-hero-side"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="contact-hero-side-icon">
            <MessageCircle size={48} strokeWidth={1.4} />
          </div>

          <span>LET'S CONNECT</span>
          <p>
            Your requirements.
            <br />
            Our commitment.
          </p>
        </motion.div>
      </div>

      <div className="contact-hero-bottom">
        <span>GET IN TOUCH WITH US</span>
        <span>WE LOOK FORWARD TO HEARING FROM YOU ↓</span>
      </div>
    </section>
  );
}
