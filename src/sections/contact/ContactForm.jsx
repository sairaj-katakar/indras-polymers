
"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Send,
  User,
  Mail,
  Phone,
  Package,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

const products = [
  "PP Homopolymer",
  "PP Impact Copolymer",
  "PP Random Copolymer",
  "HDPE",
  "LDPE",
  "LLDPE",
  "Other",
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `New Enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Product: ${formData.product}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href =
      `mailto:indraspolymer@yahoo.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section className="contact-form-section" id="contact-form">
      <div className="contact-form-container">

        <motion.div
          className="contact-form-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-form-tag">
            <MessageSquare size={15} />
            GET IN TOUCH
          </span>

          <h2>
            Send Us Your <span>Enquiry</span>
          </h2>

          <p>
            Have a question or looking for the right polymer material?
            Share your requirements with us. Our team will be happy to
            assist you.
          </p>
        </motion.div>

        <div className="contact-form-layout">

          <motion.div
            className="contact-form-sidebar"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="sidebar-small-title">
              LET'S CONNECT
            </span>

            <h3>
              Let's discuss your
              <span> requirements.</span>
            </h3>

            <p>
              Tell us what you are looking for. Submit your enquiry
              and get in touch with our team.
            </p>

            <div className="sidebar-feature">
              <div className="sidebar-feature-icon">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4>Product Enquiries</h4>
                <p>Share your polymer material requirements.</p>
              </div>
            </div>

            <div className="sidebar-feature">
              <div className="sidebar-feature-icon">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4>Business Support</h4>
                <p>Discuss your business and supply requirements.</p>
              </div>
            </div>

            <div className="sidebar-feature">
              <div className="sidebar-feature-icon">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h4>Quick Enquiry</h4>
                <p>Send your details through our enquiry form.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-form-card-heading">
              <div>
                <span>CONTACT FORM</span>
                <h3>Tell us about your needs</h3>
              </div>

              <div className="contact-form-send-icon">
                <Send size={22} />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="contact-form-grid">

                <div className="contact-field">
                  <label htmlFor="contact-name">Full Name *</label>
                  <div className="contact-input-wrap">
                    <User size={18} />
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email Address *</label>
                  <div className="contact-input-wrap">
                    <Mail size={18} />
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <div className="contact-input-wrap">
                    <Phone size={18} />
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      pattern="[0-9+() -]{7,20}"
                      title="Please enter a valid phone number"
                      required
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-product">Interested Product *</label>
                  <div className="contact-input-wrap">
                    <Package size={18} />
                    <select
                      id="contact-product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a product</option>
                      {products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-field contact-field-full">
                  <label htmlFor="contact-message">Your Message *</label>
                  <div className="contact-textarea-wrap">
                    <textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

              </div>

              <button type="submit" className="contact-submit-btn">
                Send Enquiry
                <Send size={17} />
              </button>

              {submitted && (
                <p className="contact-form-note">
                  Your email application should open with the enquiry
                  details. Please send the email to complete your enquiry.
                </p>
              )}

              <p className="contact-form-privacy">
                Your information will be used only to respond to your enquiry.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
