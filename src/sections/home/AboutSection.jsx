
"use client";

import Link from "next/link";
import { motion } from "motion/react";

import {
  ArrowUpRight,
  CalendarDays,
  Warehouse,
  PackageCheck,
  Truck,
  MapPin,
} from "lucide-react";

const highlights = [
  {
    icon: CalendarDays,
    value: "2000",
    label: "Established",
  },
  {
    icon: Warehouse,
    value: "20,000",
    label: "Sq. Ft. Facility",
  },
  {
    icon: PackageCheck,
    value: "4+",
    label: "Product Families",
  },
  {
    icon: MapPin,
    value: "Pan India",
    label: "Supply Reach",
  },
];

const strengths = [
  {
    icon: PackageCheck,
    title: "Quality Materials",
    description:
      "A range of polymer raw materials for diverse industrial requirements.",
  },
  {
    icon: Warehouse,
    title: "Organised Infrastructure",
    description:
      "Warehouse facilities designed for systematic material storage and handling.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    description:
      "Focused on dependable material availability and customer requirements.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65 },
  },
};

export default function AboutSection() {
  return (
    <section
      className="about-section"
      id="home-intro"
    >
      <div className="container">

        <div className="about-grid">

          {/* IMAGE AREA */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <div className="about-image-decoration" />

            <div className="about-main-image">
              <img
                src="/images/about/warehouse.jpg"
                alt="Indras Polymers warehouse and storage facility"
                loading="lazy"
              />
            </div>

            <div className="about-floating-image">
              <img
                src="/images/about/polymer-products.jpg"
                alt="Polymer raw material granules"
                loading="lazy"
              />
            </div>

            <div className="about-experience-badge">
              <div className="about-badge-icon">
                <CalendarDays size={27} />
              </div>

              <div>
                <strong>Established</strong>
                <span>Since 2000</span>
              </div>
            </div>

          </motion.div>

          {/* CONTENT AREA */}
          <motion.div
            className="about-content"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.13 },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >

            <motion.div
              className="section-eyebrow"
              variants={reveal}
            >
              <span />
              ABOUT INDRAS POLYMERS
            </motion.div>

            <motion.h2 variants={reveal}>
              A Trusted Partner in
              <span> Polymer Raw Materials</span>
            </motion.h2>

            <motion.p
              className="about-description"
              variants={reveal}
            >
              Established in 2000, Indras Polymers is a
              polymer raw materials supplier serving diverse
              industrial requirements. We offer a range of
              materials including PP, HDPE, LDPE and other
              polymer grades, with a focus on quality,
              dependable supply and long-term customer
              relationships.
            </motion.p>

            <motion.div
              className="about-strengths"
              variants={reveal}
            >
              {strengths.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="about-strength"
                    key={item.title}
                  >
                    <div className="about-strength-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div
              className="about-stats"
              variants={reveal}
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    className="about-stat"
                    key={item.label}
                  >
                    <Icon size={22} />
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={reveal}>
              <Link
                href="/about"
                className="about-button"
              >
                Know More About Us
                <ArrowUpRight size={18} />
              </Link>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
