"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

import {
  ShieldCheck,
  Layers3,
  Truck,
  Headset,
  ChevronLeft,
  ChevronRight,
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const touchStart = useRef(null);

  const maxIndex = Math.max(0, reasons.length - visibleCount);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 600) {
        setVisibleCount(1);
      } else if (window.innerWidth <= 900) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();

    window.addEventListener("resize", updateVisibleCount);

    return () => {
      window.removeEventListener("resize", updateVisibleCount);
    };
  }, []);

  useEffect(() => {
    setCurrentIndex((previous) => Math.min(previous, maxIndex));
  }, [maxIndex]);

  // Automatic sliding
  useEffect(() => {
    if (maxIndex === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((previous) =>
        previous >= maxIndex ? 0 : previous + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((previous) =>
      previous >= maxIndex ? 0 : previous + 1
    );
  };

  const previousSlide = () => {
    setCurrentIndex((previous) =>
      previous <= 0 ? maxIndex : previous - 1
    );
  };

  const handleTouchStart = (event) => {
    touchStart.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart.current - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextSlide();
      } else {
        previousSlide();
      }
    }

    touchStart.current = null;
  };

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

        {/* Why Choose Us Carousel */}
        <div className="why-carousel-wrapper">

          <div
            className="why-carousel-viewport"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="why-carousel-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / visibleCount)
                }%)`,
              }}
            >
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <div
                    className="why-carousel-slide"
                    key={reason.number}
                  >
                    <motion.article
                      className="why-card"
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{ y: -6 }}
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
                  </div>
                );
              })}
            </div>
          </div>

          {/* Carousel Controls */}
          {maxIndex > 0 && (
            <div className="why-carousel-controls">

              <button
                type="button"
                className="why-carousel-arrow"
                onClick={previousSlide}
                aria-label="Previous reasons"
              >
                <ChevronLeft size={21} />
              </button>

              <div className="why-carousel-dots">
                {Array.from({ length: maxIndex + 1 }).map(
                  (_, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`why-carousel-dot ${
                        currentIndex === index ? "active" : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  )
                )}
              </div>

              <button
                type="button"
                className="why-carousel-arrow"
                onClick={nextSlide}
                aria-label="Next reasons"
              >
                <ChevronRight size={21} />
              </button>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
