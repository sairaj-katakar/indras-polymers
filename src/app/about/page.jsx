import CoreValues from "@/sections/about/CoreValues";
import VisionMission from "@/sections/about/VisionMission";
import CompanyJourney from "@/sections/about/CompanyJourney";
import CompanyStory from "@/sections/about/CompanyStory";
import LeadershipPrinciples from "@/sections/about/LeadershipPrinciples";
import AboutCTA from "@/sections/about/AboutCTA";
import AboutHero from "@/sections/about/AboutHero";

import Carousel from "@/components/Carousel";

const companySlides = [
  {
    id: "warehouse-main",
    src: "/images/infrastructure/warehouse-main.jpg",
    title: "Our Infrastructure",
    description: "Explore our industrial infrastructure and facilities.",
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
    title: "Organized Storage",
    description: "Explore material storage arrangements.",
  },
  {
    id: "material-handling",
    src: "/images/infrastructure/material-handling.jpg",
    title: "Material Handling",
    description: "Explore material handling operations.",
  },
  {
    id: "warehouse-loading",
    src: "/images/infrastructure/warehouse-loading.jpg",
    title: "Loading & Dispatch",
    description: "Explore loading and dispatch facilities.",
  },
];

export default function About() {
  return (
    <main>
      
      <AboutHero />

      <CompanyStory />
      <section className="about-carousel-section">
        <div className="about-carousel-container">
          <div className="about-carousel-heading">
            <span>INSIDE INDRAS POLYMERS</span>
            <h2>Explore Our Facilities</h2>
            <p>
              Take a closer look at our infrastructure and
              material handling facilities.
            </p>
          </div>

          <Carousel
            items={companySlides}
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

      
      <CompanyJourney />
 
      <VisionMission />
 
      <CoreValues />
      
      <LeadershipPrinciples />

      <AboutCTA />
    </main>
  );
}
