
"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Truck,
  Headset,
  Layers3,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Assured Quality",
    description: "Reliable & Consistent",
  },
  {
    icon: Boxes,
    title: "Wide Product Range",
    description: "PP, HDPE, LDPE & More",
  },
  {
    icon: Truck,
    title: "Timely Delivery",
    description: "Across India",
  },
  {
    icon: Headset,
    title: "Dedicated Support",
    description: "For Industrial Needs",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function HeroSection() {
  return (
    <section className="hero-section">

      {/* BACKGROUND DECORATION */}
      <div className="hero-overlay" />

      <div className="hero-container container">

        {/* MAIN CONTENT */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.div
            className="hero-eyebrow"
            variants={itemVariants}
          >
            <span className="hero-eyebrow-line" />
            <Layers3 size={17} />
            <span>POLYMER RAW MATERIAL SOLUTIONS</span>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={itemVariants}
          >
            Your Industrial Partner
            <br />
            for{" "}
            <span>Quality Polymers.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            Your trusted partner for high-quality polymer
            raw materials. We deliver reliable material
            solutions for diverse industrial applications
            across India.
          </motion.p>

          {/* ACTION BUTTONS */}
          <motion.div
            className="hero-actions"
            variants={itemVariants}
          >
            <Link
              href="/products"
              className="hero-btn hero-btn-primary"
            >
              Explore Products
              <ArrowUpRight size={20} />
            </Link>

            <Link
              href="/get-a-quote"
              className="hero-btn hero-btn-outline"
            >
              Get a Quote
              <ArrowRight size={19} />
            </Link>
          </motion.div>

          {/* FEATURES */}
          <motion.div
            className="hero-features"
            variants={itemVariants}
          >
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className="hero-feature"
                  key={feature.title}
                >
                  <div className="hero-feature-icon">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <div className="hero-feature-text">
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </motion.div>

        {/* FLOATING IMAGE LABEL */}
        <motion.div
          className="hero-image-label"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="hero-label-dot" />
          Premium Polymer Materials
        </motion.div>

      </div>

      {/* SCROLL INDICATOR */}
      <motion.a
        href="#home-intro"
        className="hero-scroll"
        aria-label="Scroll to next section"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span>SCROLL TO EXPLORE</span>
        <ArrowDown size={19} />
      </motion.a>

    </section>
  );
}
