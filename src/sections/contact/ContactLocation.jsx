"use client";

import { motion } from "motion/react";
import { MapPin, Navigation, Map } from "lucide-react";

const address =
  "63, Shanmuga Nagar, Sri Nagar Extension, Coimbatore - 641001, Tamil Nadu, India";

const mapQuery = encodeURIComponent(address);

export default function ContactLocation() {
  return (
    <section className="contact-location-section" id="contact-location">
      <div className="contact-location-container">

        <motion.div
          className="contact-location-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="contact-location-tag">
            <Map size={15} />
            FIND OUR LOCATION
          </span>

          <h2>
            Visit <span>Indras Polymers</span>
          </h2>

          <p>
            We welcome your enquiries and business discussions.
            Find our location and connect with our team.
          </p>
        </motion.div>

        <motion.div
          className="contact-location-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="contact-location-details">
            <div className="location-icon">
              <MapPin size={25} />
            </div>

            <span className="location-label">OUR ADDRESS</span>

            <h3>Indras Polymers</h3>

            <p className="location-address">
              63, Shanmuga Nagar,<br />
              Sri Nagar Extension,<br />
              Coimbatore - 641001,<br />
              Tamil Nadu, India.
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="location-directions-btn"
            >
              Get Directions
              <Navigation size={17} />
            </a>
          </div>

          <div className="contact-location-map">
            <iframe
              title="Indras Polymers Location Map"
              src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
