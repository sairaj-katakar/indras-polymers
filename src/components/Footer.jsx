import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Infrastructure", href: "/infrastructure" },
    { label: "Our Products", href: "/products" },
  ],
  explore: [
    { label: "PP Homopolymer", href: "/products" },
    { label: "PP Impact Copolymer", href: "/products" },
    { label: "PP Random Copolymer", href: "/products" },
    { label: "HDPE, LDPE & LLDPE", href: "/products" },
  ],
  support: [
    { label: "Request a Quote", href: "/get-a-quote" },
    { label: "Contact Us", href: "/contact" },
    { label: "Infrastructure", href: "/infrastructure" },
  ],
};

export default function Footer() {
  return (
    <footer className="site-footer">

      {/* FOOTER CTA */}
      <div className="footer-cta">
        <div className="footer-container footer-cta-inner">
          <div className="footer-cta-content">
            <span className="footer-eyebrow">
              YOUR TRUSTED POLYMER PARTNER
            </span>

            <h2>
              POWERING INDUSTRIES WITH
              <span> QUALITY POLYMER SOLUTIONS.</span>
            </h2>
          </div>

          <div className="footer-cta-actions">
            <Link href="/get-a-quote" className="footer-quote-btn">
              Get a Quote <ArrowRight size={17} />
            </Link>

            <Link href="/about" className="footer-learn-btn">
              Learn More <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-container footer-main">

        {/* COMPANY INFORMATION */}
        <div className="footer-company">
          
            <Link href="/" className="footer-brand" aria-label="Indras Polymers Home">
            <img
                src="/images/logo.svg"
                alt="Indras Polymers"
                className="footer-logo-image"
            />
            </Link>


          <p className="footer-description">
            Delivering quality polymer materials and dependable
            solutions to support diverse industrial requirements.
          </p>

          <div className="footer-contact-item">
            <MapPin size={18} />
            <span>Coimbatore, Tamil Nadu, India</span>
          </div>

          <a
            href="tel:+919003652225"
            className="footer-contact-item"
          >
            <Phone size={18} />
            <span>+91 9003652225</span>
          </a>

          <a
            href="mailto:indraspolymer@yahoo.com"
            className="footer-contact-item"
          >
            <Mail size={18} />
            <span>indraspolymer@yahoo.com</span>
          </a>
        </div>

        {/* COMPANY LINKS */}
        <div className="footer-column">
          <h3>COMPANY</h3>
          {footerLinks.company.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* EXPLORE LINKS */}
        <div className="footer-column">
          <h3>EXPLORE</h3>
          {footerLinks.explore.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* SUPPORT LINKS */}
        <div className="footer-column">
          <h3>QUICK ACCESS</h3>
          {footerLinks.support.map((link) => (
            <Link key={link.label} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-container footer-bottom-inner">

          <div className="footer-socials">
            <a href="mailto:indraspolymer@yahoo.com" aria-label="Email">
              <Mail size={17} />
            </a>
            <a href="tel:+919003652225" aria-label="Phone">
              <Phone size={17} />
            </a>
            <Link href="/contact" aria-label="Contact">
              <MapPin size={17} />
            </Link>
          </div>

            <p>
            © 2026 Indras Polymers. All Rights Reserved.
            </p>

          <Link href="/contact" className="footer-bottom-link">
            Contact Our Team <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
