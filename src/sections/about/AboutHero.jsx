
"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

export default function AboutHero() {
  return (
    <section className="about-hero">

      <div className="about-hero-background" />
      <div className="about-hero-overlay" />

      <div className="about-hero-container">

        <motion.div
          className="about-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-hero-meta">
            <span>INDRAS POLYMERS</span>

            <span className="about-hero-badge">
              <ShieldCheck size={15} />
              QUALITY & TRUST
            </span>
          </div>

          <span className="about-hero-line" />

          <h1>
            Building Trust.
            <br />
            <span>Delivering Quality.</span>
            <br />
            Shaping The Future.
          </h1>

          <p>
            Discover Indras Polymers — our journey, values, and
            commitment to delivering dependable polymer solutions
            and building lasting business relationships.
          </p>

          <div className="about-hero-actions">
            <Link
              href="#company-story"
              className="about-hero-primary"
            >
              DISCOVER OUR STORY
              <ArrowDown size={18} />
            </Link>

            <Link
              href="/get-a-quote"
              className="about-hero-secondary"
            >
              GET A QUOTE
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="about-hero-side"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
        >
          <div className="about-hero-side-line" />
          <span>OUR JOURNEY</span>
          <p>
            Driven by quality.
            <br />
            Focused on trust.
          </p>
        </motion.div>

      </div>

      <div className="about-hero-bottom">
        <span>ABOUT OUR COMPANY</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>

    </section>
  );
}
