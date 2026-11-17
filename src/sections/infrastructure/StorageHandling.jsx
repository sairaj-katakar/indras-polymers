"use client";

import { motion } from "motion/react";
import {
  Boxes,
  PackageCheck,
  ClipboardList,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const handlingSteps = [
  {
    number: "01",
    icon: PackageCheck,
    title: "Material Receiving",
    description:
      "Incoming polymer materials are received and organized for further handling.",
  },
  {
    number: "02",
    icon: Boxes,
    title: "Organized Storage",
    description:
      "Materials are arranged in designated storage areas to support accessibility.",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Inventory Coordination",
    description:
      "Material details and stock movement can be coordinated through organized processes.",
  },
  {
    number: "04",
    icon: Truck,
    title: "Dispatch Preparation",
    description:
      "Materials are prepared and coordinated for dispatch according to customer requirements.",
  },
];

const features = [
  "Organized material handling",
  "Structured storage practices",
  "Inventory coordination",
  "Dispatch preparation",
];

export default function StorageHandling() {
  return (
    <section className="storage-handling-section" id="storage-handling">
      <div className="storage-handling-container">

        <motion.div
          className="storage-handling-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="storage-handling-label">
            <Boxes size={16} />
            STORAGE & MATERIAL HANDLING
          </span>

          <h2>
            Organized Operations.
            <span> Efficient Handling.</span>
          </h2>

          <p>
            Explore the key stages involved in managing polymer
            materials, from receiving and storage to dispatch preparation.
          </p>
        </motion.div>

        <div className="storage-handling-layout">

          <motion.div
            className="storage-handling-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/infrastructure/material-handling.jpg"
              alt="Industrial material handling"
              loading="lazy"
            />

            <div className="storage-visual-overlay">
              <span>INDUSTRIAL OPERATIONS</span>
              <h3>
                Supporting Every Stage
                of Material Movement
              </h3>
            </div>
          </motion.div>

          <div className="storage-handling-content">

            <div className="storage-handling-intro">
              <span>OUR APPROACH</span>

              <h3>
                From Material Receiving
                to <strong>Dispatch</strong>
              </h3>

              <p>
                A structured approach to material handling helps
                support organized operations and customer requirements.
              </p>
            </div>

            <div className="storage-handling-steps">
              {handlingSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    className="storage-step"
                    key={step.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                  >
                    <div className="storage-step-number">
                      {step.number}
                    </div>

                    <div className="storage-step-icon">
                      <Icon size={21} />
                    </div>

                    <div className="storage-step-text">
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="storage-handling-features">
              {features.map((feature) => (
                <div className="storage-feature" key={feature}>
                  <CheckCircle2 size={17} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="storage-handling-link"
            >
              Discuss Your Requirements
              <ArrowRight size={17} />
            </Link>

          </div>
        </div>
      </div>
    </section>
  );
}
