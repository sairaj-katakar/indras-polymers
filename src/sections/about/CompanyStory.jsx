
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Boxes, Warehouse } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Established in 2000",
    description: "Building long-term relationships in the polymer industry.",
  },
  {
    icon: Boxes,
    title: "Diverse Product Range",
    description: "Polypropylene and polyethylene raw material solutions.",
  },
  {
    icon: Warehouse,
    title: "Organised Infrastructure",
    description: "Warehouse facilities supporting material storage and handling.",
  },
];

export default function CompanyStory() {
  return (
    <section className="about-story">
      <div className="about-story-container">

        <div className="about-story-visual">
          <div className="about-story-image">
            <Image
              src="/images/infrastructure/warehouse-interior.jpg"
              alt="Industrial warehouse facility"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="about-story-badge">
            <span>2000</span>
            <div>
              <strong>Our Beginning</strong>
              <small>Established in India</small>
            </div>
          </div>

          <div className="about-story-image-tag">
            <Boxes size={20} />
            Polymer Material Solutions
          </div>
        </div>

        <div className="about-story-content">

          <span className="about-label">
            <span />
            ABOUT INDRAS POLYMERS
          </span>

          <h2>
            Building Trust Through
            <span> Quality & Reliability.</span>
          </h2>

          <p>
            Established in 2000, Indras Polymers is a
            polymer raw material supplier serving diverse
            industrial requirements across India.
          </p>

          <p>
            We offer a range of polypropylene and
            polyethylene materials, focusing on dependable
            supply, quality products and long-term
            customer relationships.
          </p>

          <div className="about-story-highlights">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="about-story-highlight" key={item.title}>
                  <div className="about-story-icon">
                    <Icon size={21} />
                  </div>

                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/infrastructure" className="about-story-link">
            Explore Our Infrastructure
            <ArrowUpRight size={17} />
          </Link>

        </div>
      </div>
    </section>
  );
}
