
"use client";

import { motion } from "motion/react";
import {
  Compass,
  Users,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Clear Direction",
    description:
      "We believe in having a clear purpose and direction that guides our business decisions and future growth.",
    icon: Compass,
  },
  {
    number: "02",
    title: "People First",
    description:
      "We value our employees, customers, and business partners, building relationships based on mutual respect.",
    icon: Users,
  },
  {
    number: "03",
    title: "Accountability",
    description:
      "We take responsibility for our commitments and focus on delivering dependable products and services.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Continuous Improvement",
    description:
      "We encourage learning, new ideas, and better ways of working to meet changing industry needs.",
    icon: Lightbulb,
  },
  {
    number: "05",
    title: "Strong Partnerships",
    description:
      "We believe long-term success comes from trust, transparent communication, and collaboration.",
    icon: HeartHandshake,
  },
];

export default function LeadershipPrinciples() {
  return (
    <section className="leadership-section" id="leadership-principles">
      <div className="leadership-container">

        <motion.div
          className="leadership-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="leadership-eyebrow">
            HOW WE LEAD
          </span>

          <h2>
            Principles That <span>Guide Us</span>
          </h2>

          <p>
            Our approach to leadership is built on responsibility,
            collaboration, continuous improvement, and lasting trust.
          </p>
        </motion.div>

        <div className="leadership-list">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="leadership-item"
                key={item.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="leadership-number">
                  {item.number}
                </div>

                <div className="leadership-icon">
                  <Icon size={27} strokeWidth={1.8} />
                </div>

                <div className="leadership-text">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <span className="leadership-indicator">
                  →
                </span>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="leadership-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="leadership-bottom-line" />
          <p>
            Building trust through every decision and every relationship.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
