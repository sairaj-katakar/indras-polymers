import InfrastructureHero from "@/sections/infrastructure/InfrastructureHero";
import FacilityOverview from "@/sections/infrastructure/FacilityOverview";
import WarehouseGallery from "@/sections/infrastructure/WarehouseGallery";
import StorageHandling from "@/sections/infrastructure/StorageHandling";
import InfrastructureCTA from "@/sections/infrastructure/InfrastructureCTA";

import Carousel from "@/components/Carousel";

const infrastructureSlides = [
  {
    id: "warehouse-main",
    src: "/images/infrastructure/warehouse-main.jpg",
    title: "Our Infrastructure",
    description: "Explore our infrastructure and facilities.",
  },
  {
    id: "warehouse-interior",
    src: "/images/infrastructure/warehouse-interior.jpg",
    title: "Warehouse Facilities",
    description: "Explore our warehouse environment.",
  },
  {
    id: "warehouse-storage",
    src: "/images/infrastructure/warehouse-storage.jpg",
    title: "Material Storage",
    description: "Explore our material storage facilities.",
  },
  {
    id: "material-handling",
    src: "/images/infrastructure/material-handling.jpg",
    title: "Material Handling",
    description: "Explore material handling arrangements.",
  },
  {
    id: "warehouse-loading",
    src: "/images/infrastructure/warehouse-loading.jpg",
    title: "Loading & Dispatch",
    description: "Explore loading and dispatch facilities.",
  },
];

export default function InfrastructurePage() {
  return (
    <main>
      
      <InfrastructureHero />

      <FacilityOverview />

      <section className="infrastructure-carousel-section">
        <div className="infrastructure-carousel-container">

          <div className="infrastructure-carousel-heading">
            <span>OUR FACILITIES</span>
            <h2>Explore Our Infrastructure</h2>
            <p>
              Take a closer look at our warehouse,
              storage and material handling facilities.
            </p>
          </div>

          <Carousel
            items={infrastructureSlides}
            autoPlay={true}
            interval={4000}
            showArrows={true}
            showDots={true}
            showPlayPause={false}
            loop={true}
            aspectRatio="16 / 4"
          />

        </div>
      </section>

      <WarehouseGallery />

      <StorageHandling />

      <InfrastructureCTA />
    </main>
  );
}
