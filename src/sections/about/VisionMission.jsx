"use client";

import { motion } from "motion/react";
import {
  Target,
  Eye,
  ShieldCheck,
  Award,
  Lightbulb,
  Users,
  Handshake,
  TrendingUp,
} from "lucide-react";

const values = [
  { icon: Award, title: "Quality" },
  { icon: ShieldCheck, title: "Reliability" },
  { icon: Lightbulb, title: "Innovation" },
  { icon: Users, title: "Customer Focus" },
  { icon: Handshake, title: "Integrity" },
  { icon: TrendingUp, title: "Growth" },
];

export default function VisionMission() {
  return (
    <section className="vm-section" id="vision-mission">
      <div className="vm-hero">

        <div className="vm-background" />

        <div className="vm-content">

          <motion.div
            className="vm-intro"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="vm-eyebrow">
              OUR COMMITMENT. YOUR FUTURE.
            </span>

            <span className="vm-red-line" />

            <h2>
              Mission &<br />
              <span>Vision</span>
            </h2>

            <span className="vm-blue-line" />

            <p>
              Guided by quality, innovation, and customer trust,
              we strive to deliver dependable polymer solutions
              and build lasting partnerships for a better future.
            </p>
          </motion.div>

          <div className="vm-cards">

            <motion.article
              className="vm-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div className="vm-round-icon">
                <Target size={47} strokeWidth={1.7} />
              </div>

              <div className="vm-card-content">
                <h3>OUR MISSION</h3>
                <span className="vm-card-line" />

                <p>
                  To deliver quality polymer products with
                  consistency and reliability, meeting customer
                  requirements through responsible business
                  practices and dedicated service.
                </p>
              </div>
            </motion.article>

            <motion.article
              className="vm-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="vm-round-icon">
                <Eye size={47} strokeWidth={1.7} />
              </div>

              <div className="vm-card-content">
                <h3>OUR VISION</h3>
                <span className="vm-card-line" />

                <p>
                  To become a trusted and recognized name in the
                  polymer industry by building strong partnerships,
                  maintaining high standards, and continuously
                  growing through innovation.
                </p>
              </div>
            </motion.article>

          </div>
        </div>

        <div className="vm-values">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                className="vm-value"
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Icon size={35} strokeWidth={1.7} />
                <span>{item.title}</span>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
