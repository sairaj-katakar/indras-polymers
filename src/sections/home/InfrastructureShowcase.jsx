"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowRight,
  ArrowUpRight,
  Warehouse,
  Boxes,
  Truck,
  ShieldCheck,
  X,
  Maximize2,
  MapPin,
  Building2,
} from "lucide-react";

const infrastructureImages = [
  {
    src: "/images/infrastructure/warehouse-storage.jpg",
    title: "Organised Material Storage",
    category: "WAREHOUSE STORAGE",
    description:
      "Systematic storage arrangements designed to support efficient material management.",
  },
  {
    src: "/images/infrastructure/warehouse-interior.jpg",
    title: "Spacious Warehouse Facility",
    category: "WAREHOUSE FACILITY",
    description:
      "Well-planned warehouse space with organised storage and accessible movement areas.",
  },
  {
    src: "/images/infrastructure/material-handling.jpg",
    title: "Efficient Material Handling",
    category: "MATERIAL HANDLING",
    description:
      "Equipment-assisted material movement to support smooth warehouse operations.",
  },
  {
    src: "/images/infrastructure/warehouse-loading.jpg",
    title: "Dispatch & Logistics",
    category: "LOGISTICS",
    description:
      "Organised loading and dispatch operations to support customer supply requirements.",
  },
];

const infrastructureFeatures = [
  {
    icon: Warehouse,
    title: "Organised Warehousing",
    description:
      "Planned storage arrangements for systematic handling of polymer raw materials.",
  },
  {
    icon: Boxes,
    title: "Material Management",
    description:
      "Organised material placement to support accessibility and efficient operations.",
  },
  {
    icon: Truck,
    title: "Efficient Dispatch",
    description:
      "Coordinated material movement and dispatch for dependable customer service.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Operations",
    description:
      "A structured approach focused on quality, consistency and customer requirements.",
  },
];

export default function InfrastructureShowcase() {
  const [activeImage, setActiveImage] = useState(null);

  // Close image preview using Escape key
  useEffect(() => {
    if (!activeImage) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveImage(null);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [activeImage]);

  return (
    <main className="infra-section" id="infrastructure">

      {/* =================================
          SECTION HERO
      ================================== */}

      <section className="infra-hero">

        <Image
          src="/images/infrastructure/warehouse-main.jpg"
          alt="Indras Polymers warehouse facility"
          fill
          priority
          sizes="100vw"
          className="infra-hero-image"
        />

        <div className="infra-hero-overlay" />

        <div className="infra-container infra-hero-content">

          <span className="infra-eyebrow">
            <span className="infra-eyebrow-line" />
            OUR INFRASTRUCTURE
          </span>

          <h1>
            Infrastructure
            <span> Built for Reliable Supply.</span>
          </h1>

          <p>
            Organised storage. Efficient material handling.
            Dependable polymer raw material supply.
            Discover the infrastructure that supports
            our customer-focused operations.
          </p>

          <div className="infra-hero-actions">

            <a href="#infra-overview" className="infra-primary-btn">
              Explore Our Facility
              <ArrowRight size={18} />
            </a>

            <Link href="/get-a-quote" className="infra-outline-btn">
              Get a Quote
              <ArrowUpRight size={18} />
            </Link>

          </div>

          <div className="infra-hero-bottom">
            <div>
              <Building2 size={19} />
              <span>Established in 2000</span>
            </div>

            <div>
              <Warehouse size={19} />
              <span>Organised Storage Facility</span>
            </div>

            <div>
              <Truck size={19} />
              <span>Material Distribution</span>
            </div>
          </div>

        </div>

        <div className="infra-hero-tag">
          <span />
          QUALITY. TRUST. PERFORMANCE.
        </div>

      </section>

      {/* =================================
          INFRASTRUCTURE OVERVIEW
      ================================== */}

      <section className="infra-overview" id="infra-overview">

        <div className="infra-container infra-overview-grid">

          <div className="infra-overview-visual">

            <div className="infra-main-photo">
              <Image
                src="/images/infrastructure/warehouse-interior.jpg"
                alt="Spacious warehouse interior"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="infra-floating-photo">
              <Image
                src="/images/infrastructure/warehouse-storage.jpg"
                alt="Polymer raw material storage"
                fill
                sizes="220px"
              />
            </div>

            <div className="infra-experience-card">
              <span>25+</span>
              <div>
                <strong>Years of Experience</strong>
                <small>Since 2000</small>
              </div>
            </div>

            <div className="infra-visual-decoration" />

          </div>

          <div className="infra-overview-content">

            <span className="infra-section-label">
              <span />
              BUILT FOR INDUSTRIAL NEEDS
            </span>

            <h2>
              A Strong Foundation for
              <span> Reliable Material Supply.</span>
            </h2>

            <p className="infra-overview-description">
              At Indras Polymers, our warehouse infrastructure
              plays an important role in supporting our polymer
              raw material distribution operations.
            </p>

            <p className="infra-overview-description">
              Our facility is planned to support systematic
              storage, organised material movement and
              efficient handling of bulk requirements.
              We focus on understanding customer needs and
              maintaining dependable supply relationships.
            </p>

            <div className="infra-feature-list">

              {infrastructureFeatures.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div className="infra-feature" key={feature.title}>

                    <div className="infra-feature-icon">
                      <Icon size={21} />
                    </div>

                    <div className="infra-feature-content">
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>

                  </div>
                );
              })}

            </div>

            <Link
              href="/about"
              className="infra-text-link"
            >
              Discover Our Company
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>

      </section>

      {/* =================================
          INFRASTRUCTURE STATISTICS
      ================================== */}

      <section className="infra-stats">

        <div className="infra-container infra-stats-grid">

          <div className="infra-stat">
            <Building2 size={25} />
            <strong>2000</strong>
            <span>Established</span>
          </div>

          <div className="infra-stat">
            <Warehouse size={25} />
            <strong>20,000</strong>
            <span>Sq. Ft. Facility</span>
          </div>

          <div className="infra-stat">
            <Boxes size={25} />
            <strong>4+</strong>
            <span>Product Families</span>
          </div>

          <div className="infra-stat">
            <MapPin size={25} />
            <strong>Pan India</strong>
            <span>Supply Reach</span>
          </div>

        </div>

      </section>

      {/* =================================
          INFRASTRUCTURE GALLERY
      ================================== */}

      <section className="infra-gallery-section">

        <div className="infra-container">

          <div className="infra-gallery-heading">

            <div>
              <span className="infra-section-label">
                <span />
                INSIDE OUR FACILITY
              </span>

              <h2>
                Our Infrastructure,
                <span> In Focus.</span>
              </h2>

              <p>
                Explore the facilities and operational
                arrangements supporting our business.
              </p>
            </div>

            <div className="infra-gallery-counter">
              <strong>04</strong>
              <span>FACILITY HIGHLIGHTS</span>
            </div>

          </div>

          <div className="infra-gallery-grid">

            {infrastructureImages.map((item, index) => (
              <button
                type="button"
                className={`infra-gallery-card infra-gallery-card-${index + 1}`}
                key={item.title}
                onClick={() => setActiveImage(item)}
                aria-label={`View ${item.title}`}
              >

                <div className="infra-gallery-image">

                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 992px) 50vw, 50vw"
                  />

                  <div className="infra-gallery-overlay" />

                  <span className="infra-gallery-category">
                    {item.category}
                  </span>

                  <span className="infra-gallery-zoom">
                    <Maximize2 size={19} />
                  </span>

                  <div className="infra-gallery-info">
                    <small>0{index + 1} / FACILITY</small>
                    <h3>{item.title}</h3>
                    <p>Explore facility <ArrowUpRight size={14} /></p>
                  </div>

                </div>

              </button>
            ))}

          </div>

        </div>

      </section>

      {/* =================================
          INFRASTRUCTURE CTA
      ================================== */}

      <section className="infra-cta">

        <div className="infra-container infra-cta-content">

          <div className="infra-cta-icon">
            <Warehouse size={30} />
          </div>

          <div className="infra-cta-text">
            <span>LET'S BUILD A RELIABLE PARTNERSHIP</span>

            <h2>
              Looking for a Dependable
              Polymer Material Partner?
            </h2>

            <p>
              Connect with our team to discuss your
              material requirements and business needs.
            </p>
          </div>

          <Link href="/get-a-quote" className="infra-cta-button">
            Request a Quote
            <ArrowRight size={18} />
          </Link>

        </div>

      </section>

      {/* =================================
          IMAGE LIGHTBOX
      ================================== */}

      {activeImage && (
        <div
          className="infra-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >

          <button
            type="button"
            className="infra-lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image preview"
          >
            <X size={25} />
          </button>

          <div
            className="infra-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="infra-lightbox-image">
              <Image
                src={activeImage.src}
                alt={activeImage.title}
                fill
                sizes="90vw"
              />
            </div>

            <div className="infra-lightbox-caption">
              <span>{activeImage.category}</span>
              <h3>{activeImage.title}</h3>
              <p>{activeImage.description}</p>
            </div>

          </div>

        </div>
      )}

    </main>
  );
}
