
"use client";

import { motion } from "motion/react";
import {
  Warehouse,
  PackageCheck,
  Boxes,
  Truck,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    icon: Warehouse,
    title: "Warehouse Facilities",
    description:
      "Dedicated warehouse space to support polymer material storage and business operations.",
  },
  {
    icon: PackageCheck,
    title: "Material Storage",
    description:
      "Organized storage practices designed to help maintain material condition and accessibility.",
  },
  {
    icon: Boxes,
    title: "Inventory Handling",
    description:
      "Structured material handling processes to support product identification and movement.",
  },
  {
    icon: Truck,
    title: "Dispatch Support",
    description:
      "Organized dispatch coordination to support material movement and customer requirements.",
  },
];

export default function FacilityOverview() {
  return (
    <section
      className="facility-overview-section"
      id="facility-overview"
    >
      <div className="facility-overview-container">

        <motion.div
          className="facility-overview-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="facility-overview-label">
            <Warehouse size={16} />
            OUR FACILITIES
          </span>

          <h2>
            Infrastructure That
            <span> Supports Our Operations</span>
          </h2>

          <p>
            Our infrastructure section highlights the facilities
            and operational activities that support polymer material
            storage, handling and dispatch.
          </p>
        </motion.div>

        <div className="facility-overview-layout">

          <motion.div
            className="facility-overview-image"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/infrastructure/warehouse-interior.jpg"
              alt="Industrial warehouse interior"
              loading="lazy"
            />

            <div className="facility-image-caption">
              <Warehouse size={22} />
              <div>
                <strong>Industrial Facilities</strong>
                <span>Supporting daily operations</span>
              </div>
            </div>
          </motion.div>

          <div className="facility-overview-content">
            <motion.div
              className="facility-overview-intro"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3>
                Built Around Efficient
                <span> Material Operations</span>
              </h3>

              <p>
                From storage to dispatch, each operational activity
                plays an important role in supporting material
                availability and business requirements.
              </p>
            </motion.div>

            <div className="facility-overview-grid">
              {facilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="facility-overview-item"
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                    }}
                  >
                    <div className="facility-item-icon">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="facility-overview-link"
            >
              Discuss Your Requirements
              <ArrowUpRight size={17} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
