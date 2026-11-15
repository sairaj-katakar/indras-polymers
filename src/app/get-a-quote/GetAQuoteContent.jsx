
"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import {
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  Mail,
  Phone,
  Package,
  ShieldCheck,
} from "lucide-react";

const products = [
  "PP Homopolymer",
  "PP Impact Copolymer",
  "PP Random Copolymer",
  "HDPE",
  "LDPE",
  "LLDPE",
];

export default function GetAQuoteContent() {
  const searchParams = useSearchParams();

  // Read product name from URL
  const requestedProduct = searchParams.get("product") || "";

  // Only allow products from our actual catalogue
  const selectedProduct = products.includes(requestedProduct)
    ? requestedProduct
    : "";

  return (
    <main className="quote-page">

      {/* PAGE HERO */}
      <section className="quote-banner">
        <div className="container">
          <div className="quote-banner-content">

            <span>INDRAS POLYMERS</span>

            <h1>Let's Discuss Your Requirements</h1>

            <p>
              Tell us what polymer materials you need.
              Our team will help you with your enquiry.
            </p>

            <Link href="/#products-showcase" className="quote-back-link">
              <ArrowLeft size={16} />
              Explore Products
            </Link>

          </div>
        </div>
      </section>

      {/* QUOTE CONTENT */}
      <section className="quote-content-section">
        <div className="container quote-layout">

          {/* LEFT INFORMATION */}
          <aside className="quote-info">

            <span className="section-eyebrow">
              <span />
              GET IN TOUCH
            </span>

            <h2>
              Looking for the
              <span> Right Polymer?</span>
            </h2>

            <p>
              Share your material requirements with us.
              We focus on providing suitable polymer
              raw material options for your business.
            </p>

            <div className="quote-info-item">
              <div><Phone size={21} /></div>
              <section>
                <strong>Call Us</strong>
                <p>+91 9003652225</p>
              </section>
            </div>

            <div className="quote-info-item">
              <div><Mail size={21} /></div>
              <section>
                <strong>Email Us</strong>
                <p>indraspolymer@yahoo.com</p>
              </section>
            </div>

            <div className="quote-info-item">
              <div><Package size={21} /></div>
              <section>
                <strong>Our Product Range</strong>
                <p>PP, HDPE, LDPE and other polymer grades</p>
              </section>
            </div>

            <div className="quote-trust">
              <ShieldCheck size={20} />
              <span>Quality. Trust. Performance.</span>
            </div>

          </aside>

          {/* QUOTE FORM */}
          <div className="quote-form-wrapper">

            <div className="quote-form-heading">

              <div className="quote-form-icon">
                <ClipboardList size={25} />
              </div>

              <div>
                <h2>Request a Quote</h2>
                <p>Fill in your details below</p>
              </div>

            </div>

            <form
              className="quote-form"
              action="mailto:indraspolymer@yahoo.com"
              method="post"
              encType="text/plain"
            >

              <div className="quote-field-row">

                <div className="quote-field">
                  <label htmlFor="quote-name">
                    Full Name *
                  </label>

                  <input
                    id="quote-name"
                    name="Name"
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="quote-email">
                    Email Address *
                  </label>

                  <input
                    id="quote-email"
                    name="Email"
                    type="email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                  />
                </div>

              </div>

              <div className="quote-field-row">

                <div className="quote-field">
                  <label htmlFor="quote-phone">
                    Phone Number *
                  </label>

                  <input
                    id="quote-phone"
                    name="Phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                  />
                </div>

                <div className="quote-field">
                  <label htmlFor="quote-company">
                    Company Name
                  </label>

                  <input
                    id="quote-company"
                    name="Company"
                    type="text"
                    placeholder="Enter company name"
                    autoComplete="organization"
                  />
                </div>

              </div>

              <div className="quote-field">

                <label htmlFor="quote-product">
                  Interested Product *
                </label>

                <select
                  id="quote-product"
                  name="Product"
                  defaultValue={selectedProduct}
                  required
                >
                  <option value="" disabled>
                    Select a polymer product
                  </option>

                  {products.map((product) => (
                    <option key={product} value={product}>
                      {product}
                    </option>
                  ))}

                </select>

              </div>

              <div className="quote-field">

                <label htmlFor="quote-quantity">
                  Required Quantity
                </label>

                <input
                  id="quote-quantity"
                  name="Quantity"
                  type="text"
                  placeholder="Example: 5 Metric Tonnes"
                />

              </div>

              <div className="quote-field">

                <label htmlFor="quote-message">
                  Additional Requirements
                </label>

                <textarea
                  id="quote-message"
                  name="Message"
                  rows={4}
                  placeholder="Tell us about your material requirements..."
                />

              </div>

              <button
                type="submit"
                className="quote-submit"
              >
                Submit Enquiry
                <ArrowRight size={19} />
              </button>

              <p className="quote-form-note">
                * Required fields. Submission uses your
                device's configured email application.
              </p>

            </form>

          </div>

        </div>
      </section>

    </main>
  );
}
