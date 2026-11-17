"use client";

import { motion } from "motion/react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
} from "lucide-react";

const contactDetails = [
  {
    number: "01",
    title: "Our Address",
    description: "Visit us at our business location.",
    value: "Add your complete business address",
    icon: MapPin,
    link: null,
    action: "View Location",
  },
  {
    number: "02",
    title: "Call Us",
    description: "Speak with our team directly.",
    value: "+91 9003652225",
    icon: Phone,
    link: "tel:+919003652225",
    action: "Call Now",
  },
  {
    number: "03",
    title: "Email Us",
    description: "Send us your business enquiries.",
    value: "indraspolymer@yahoo.com",
    icon: Mail,
    link: "mailto:indraspolymer@yahoo.com",
    action: "Send Email",
  },
  {
    number: "04",
    title: "Working Hours",
    description: "Plan your visit during business hours.",
    value: "Add confirmed business hours",
    icon: Clock,
    link: null,
    action: "Business Hours",
  },
];

export default function ContactInfo() {
  return (
    <section className="contact-info-section" id="contact-information">
      <div className="contact-info-container">

        <motion.div
          className="contact-info-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="contact-info-eyebrow">
            GET IN TOUCH
          </span>

          <h2>
            We'd Love to <span>Hear From You</span>
          </h2>

          <p>
            Whether you have a product enquiry, business
            requirement, or general question, our team is
            ready to assist you.
          </p>
        </motion.div>

        <div className="contact-info-grid">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className="contact-info-card"
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <div className="contact-info-card-top">
                  <span className="contact-info-number">
                    {item.number}
                  </span>

                  <div className="contact-info-icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p className="contact-info-description">
                  {item.description}
                </p>

                <div className="contact-info-value">
                  {item.value}
                </div>

                {item.link ? (
                  <a
                    href={item.link}
                    className="contact-info-action"
                  >
                    {item.action}
                    <ArrowUpRight size={17} />
                  </a>
                ) : (
                  <span className="contact-info-action contact-info-inactive">
                    {item.action}
                  </span>
                )}
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
