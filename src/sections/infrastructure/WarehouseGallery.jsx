"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Images,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Warehouse Facility",
    category: "Warehouse",
    image: "/images/infrastructure/warehouse-main.jpg",
  },
  {
    id: 2,
    title: "Material Storage",
    category: "Storage",
    image: "/images/infrastructure/warehouse-storage.jpg",
  },
  {
    id: 3,
    title: "Warehouse Interior",
    category: "Warehouse",
    image: "/images/infrastructure/warehouse-interior.jpg",
  },
  {
    id: 4,
    title: "Material Handling",
    category: "Operations",
    image: "/images/infrastructure/material-handling.jpg",
  },
  {
    id: 5,
    title: "Loading & Dispatch",
    category: "Operations",
    image: "/images/infrastructure/warehouse-loading.jpg",
  },
];

const categories = [
  "All",
  "Warehouse",
  "Storage",
  "Operations",
];

export default function WarehouseGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (item) => item.category === activeCategory
        );

  const currentIndex = selectedImage
    ? galleryImages.findIndex(
        (item) => item.id === selectedImage.id
      )
    : -1;

  const showPrevious = () => {
    const previousIndex =
      (currentIndex - 1 + galleryImages.length) %
      galleryImages.length;

    setSelectedImage(galleryImages[previousIndex]);
  };

  const showNext = () => {
    const nextIndex =
      (currentIndex + 1) % galleryImages.length;

    setSelectedImage(galleryImages[nextIndex]);
  };

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section
      className="warehouse-gallery-section"
      id="warehouse-gallery"
    >
      <div className="warehouse-gallery-container">

        <motion.div
          className="warehouse-gallery-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="warehouse-gallery-label">
            <Images size={16} />
            INFRASTRUCTURE GALLERY
          </span>

          <h2>
            Explore Our <span>Facilities</span>
          </h2>

          <p>
            A closer look at the infrastructure, storage spaces
            and material handling activities that support our
            operations.
          </p>
        </motion.div>

        <div className="warehouse-gallery-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={`warehouse-filter-btn ${
                activeCategory === category ? "active" : ""
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="warehouse-gallery-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((item, index) => (
              <motion.button
                type="button"
                layout
                key={item.id}
                className={`warehouse-gallery-card ${
                  activeCategory === "All" && index === 0
                    ? "warehouse-gallery-featured"
                    : ""
                }`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                onClick={() => setSelectedImage(item)}
                aria-label={`View ${item.title}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />

                <div className="warehouse-gallery-overlay">
                  <div>
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </div>

                  <div className="warehouse-gallery-arrow">
                    <ArrowUpRight size={22} />
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="warehouse-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label="Infrastructure image preview"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              className="warehouse-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <X size={25} />
            </button>

            <button
              type="button"
              className="warehouse-lightbox-prev"
              onClick={(e) => {
                e.stopPropagation();
                showPrevious();
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={27} />
            </button>

            <motion.div
              key={selectedImage.id}
              className="warehouse-lightbox-content"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
              />
              <p>{selectedImage.title}</p>
            </motion.div>

            <button
              type="button"
              className="warehouse-lightbox-next"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next image"
            >
              <ChevronRight size={27} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
