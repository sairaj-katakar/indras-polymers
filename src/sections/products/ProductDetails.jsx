"use client";

import { motion } from "motion/react";
import {
  Factory,
  Package,
  ShieldCheck,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const productDetails = [
  {
    name: "PP Homopolymer",
    subtitle: "Polypropylene",
    description:
      "A polypropylene material used in various manufacturing and industrial processing applications.",
    applications: ["Injection Moulding", "Household Products", "Industrial Components"],
    icon: Package,
  },
  {
    name: "PP Impact Copolymer",
    subtitle: "Polypropylene",
    description:
      "A polypropylene copolymer designed for applications where impact performance is an important consideration.",
    applications: ["Automotive Components", "Industrial Parts", "Consumer Products"],
    icon: ShieldCheck,
  },
  {
    name: "PP Random Copolymer",
    subtitle: "Polypropylene",
    description:
      "A polypropylene copolymer used in selected applications requiring suitable clarity and processing properties.",
    applications: ["Packaging", "Containers", "Consumer Applications"],
    icon: Layers,
  },
  {
    name: "HDPE",
    subtitle: "High Density Polyethylene",
    description:
      "A polyethylene material used across different industrial, packaging and product manufacturing applications.",
    applications: ["Containers", "Pipes", "Industrial Products"],
    icon: Factory,
  },
  {
    name: "LDPE",
    subtitle: "Low Density Polyethylene",
    description:
      "A flexible polyethylene material commonly considered for film and packaging-related applications.",
    applications: ["Flexible Films", "Packaging", "Plastic Bags"],
    icon: Package,
  },
  {
    name: "LLDPE",
    subtitle: "Linear Low Density Polyethylene",
    description:
      "A polyethylene material used in flexible film applications and selected manufacturing processes.",
    applications: ["Stretch Films", "Packaging Films", "Liners"],
    icon: Layers,
  },
];

export default function ProductDetails() {
  return (
    <section className="product-details-section" id="product-details">
      <div className="product-details-container">

        <motion.div
          className="product-details-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="product-details-label">
            <Factory size={16} />
            MATERIAL INFORMATION
          </span>

          <h2>
            Polymer Materials for
            <span> Industrial Needs</span>
          </h2>

          <p>
            Explore our polymer product range and discover some of
            the applications these materials may support.
          </p>
        </motion.div>

        <div className="product-details-grid">
          {productDetails.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.article
                className="product-detail-card"
                key={product.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                }}
              >
                <div className="product-detail-top">
                  <div className="product-detail-icon">
                    <Icon size={23} />
                  </div>

                  <span className="product-detail-number">
                    0{index + 1}
                  </span>
                </div>

                <span className="product-detail-subtitle">
                  {product.subtitle}
                </span>

                <h3>{product.name}</h3>

                <p className="product-detail-description">
                  {product.description}
                </p>

                <div className="product-detail-divider" />

                <h4>Potential Applications</h4>

                <ul>
                  {product.applications.map((application) => (
                    <li key={application}>
                      <span className="product-detail-dot" />
                      {application}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/get-a-quote?product=${encodeURIComponent(product.name)}`}
                  className="product-detail-link"
                >
                  Enquire About Product
                  <ArrowUpRight size={17} />
                </Link>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
