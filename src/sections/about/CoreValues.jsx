
"use client";

import { motion } from "motion/react";
import {
  Award,
  ShieldCheck,
  Lightbulb,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";

const coreValues = [
  {
    number: "01",
    title: "Quality",
    description:
      "We focus on delivering polymer products that meet quality expectations and customer requirements.",
    icon: Award,
  },
  {
    number: "02",
    title: "Reliability",
    description:
      "We believe in consistent service, dependable supply, and building trust through every interaction.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Innovation",
    description:
      "We embrace new ideas and continuously explore better ways to serve the evolving polymer industry.",
    icon: Lightbulb,
  },
  {
    number: "04",
    title: "Customer Focus",
    description:
      "We understand customer needs and work towards providing suitable and dependable solutions.",
    icon: Users,
  },
  {
    number: "05",
    title: "Integrity",
    description:
      "We value honesty, transparency, and ethical practices in every business relationship.",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Growth",
    description:
      "We believe in continuous improvement, strong partnerships, and sustainable business growth.",
    icon: TrendingUp,
  },
];

export default function CoreValues() {
  return (
    <section className="core-values-section" id="core-values">
      <div className="core-values-container">

        <motion.div
          className="core-values-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="core-values-eyebrow">
            WHAT DEFINES US
          </span>

          <h2>
            The Values Behind <span>Our Work</span>
          </h2>

          <p>
            Our values guide our decisions, shape our relationships,
            and influence the way we serve our customers and partners.
          </p>
        </motion.div>

        <div className="core-values-grid">
          {coreValues.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                className="core-value-card"
                key={value.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="core-value-top">
                  <span className="core-value-number">
                    {value.number}
                  </span>

                  <div className="core-value-icon">
                    <Icon size={29} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>

                <span className="core-value-bottom-line" />
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
