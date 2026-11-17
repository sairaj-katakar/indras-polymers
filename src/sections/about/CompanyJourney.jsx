"use client";

import { motion } from "motion/react";
import {
  Building2,
  Boxes,
  Warehouse,
  TrendingUp,
} from "lucide-react";

const milestones = [
  {
    year: "2000",
    title: "The Beginning",
    description:
      "Indras Polymers began its journey in the polymer raw material business.",
    icon: Building2,
    tag: "FOUNDATION",
  },
  {
    year: "Growth",
    title: "Expanding Product Portfolio",
    description:
      "Development of a diverse product offering across polypropylene and polyethylene materials.",
    icon: Boxes,
    tag: "PRODUCT RANGE",
  },
  {
    year: "Infrastructure",
    title: "Strengthening Operations",
    description:
      "Warehouse infrastructure supporting material storage, handling and distribution.",
    icon: Warehouse,
    tag: "CAPABILITIES",
  },
  {
    year: "Today",
    title: "Focused on Customer Needs",
    description:
      "Continuing to serve industrial requirements through product options and customer relationships.",
    icon: TrendingUp,
    tag: "OUR APPROACH",
  },
];

export default function CompanyJourney() {
  return (
    <section className="journey-section">

      <div className="journey-container">

        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="about-label">
            <span />
            OUR JOURNEY
          </span>

          <h2>
            A Journey Built on
            <span> Trust & Relationships.</span>
          </h2>

          <p>
            From our beginning in 2000 to our continuing
            work in polymer material supply, our journey
            reflects a focus on business relationships
            and industrial requirements.
          </p>
        </motion.div>

        <div className="journey-timeline">

          {milestones.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`journey-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                key={item.tag}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
              >

                <div className="journey-marker">
                  <Icon size={20} />
                </div>

                <div className="journey-card">

                  <span className="journey-tag">
                    {item.tag}
                  </span>

                  <span className="journey-year">
                    {item.year}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>

              </motion.article>
            );
          })}

        </div>

      </div>
    </section>
  );
}
