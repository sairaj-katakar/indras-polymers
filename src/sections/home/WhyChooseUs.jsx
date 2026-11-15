
"use client";

import { motion } from "motion/react";

import {
  ShieldCheck,
  Layers3,
  Truck,
  Headset,
  ArrowUpRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Consistent Quality",
    description:
      "Focus on reliable polymer materials and consistent product requirements for industrial applications.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Diverse Product Range",
    description:
      "Access PP, HDPE, LDPE and other polymer material options for different manufacturing needs.",
  },
  {
    icon: Truck,
    number: "03",
    title: "Dependable Supply",
    description:
      "Organised warehousing and a customer-focused approach to material availability and delivery.",
  },
  {
    icon: Headset,
    number: "04",
    title: "Customer Support",
    description:
      "Responsive assistance to help customers identify suitable materials for their requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">

        <motion.div
          className="why-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-eyebrow">
            <span />
            WHY CHOOSE INDRAS POLYMERS
          </div>

          <h2>
            Why Industries
            <span> Choose Us?</span>
          </h2>

          <p>
            Building dependable business relationships
            through quality materials, product variety
            and customer-focused service.
          </p>
        </motion.div>

        <div className="why-grid">

          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <motion.article
                className="why-card"
                key={reason.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -8 }}
              >

                <div className="why-card-top">
                  <div className="why-icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="why-number">
                    {reason.number}
                  </span>
                </div>

                <h3>{reason.title}</h3>

                <p>{reason.description}</p>

                <div className="why-card-line" />

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
