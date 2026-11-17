"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Infrastructure", href: "/infrastructure" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const closeMenu = () => setMenuOpen(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close mobile menu with Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="site-header">

      {/* TOP CONTACT BAR */}
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <a href="mailto:indraspolymer@yahoo.com">
              <Mail size={14} />
              <span>indraspolymer@yahoo.com</span>
            </a>

            <a href="tel:+919003652225">
              <Phone size={14} />
              <span>+91 9003652225</span>
            </a>

            <div className="topbar-location">
              <MapPin size={14} />
              <span>Coimbatore, Tamil Nadu</span>
            </div>
          </div>

          <span className="topbar-tagline">
            Quality. Trust. Performance.
          </span>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <motion.div
        className="navbar"
        initial={{ y: -25, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container navbar-inner">

          {/* BRAND LOGO */}
          
          <Link
            href="/"
            className="brand-logo"
            onClick={closeMenu}
            aria-label="Indras Polymers Home"
          >
            <img
              src="/images/logo.svg"
              alt="Indras Polymers"
              className="navbar-logo-image"
            />
          </Link>


          {/* DESKTOP NAVIGATION */}
          <nav className="desktop-nav" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${active ? "active" : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {link.name}

                  {active && (
                    <motion.span
                      className="nav-indicator"
                      layoutId="nav-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP QUOTE BUTTON */}
          <Link
            href="/get-a-quote"
            className="navbar-cta"
          >
            <span>Get a Quote</span>
            <ArrowUpRight size={17} />
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={menuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                transition={{ duration: 0.18 }}
              >
                {menuOpen ? <X size={25} /> : <Menu size={25} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="mobile-navigation"
              className="mobile-nav"
              aria-label="Mobile navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="container mobile-nav-inner">
                {navLinks.map((link, index) => {
                  const active = isActive(link.href);

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ x: -15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`mobile-nav-link ${
                          active ? "active" : ""
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        <span>{link.name}</span>
                        <ArrowUpRight size={17} />
                      </Link>
                    </motion.div>
                  );
                })}

                <Link
                  href="/get-a-quote"
                  className="mobile-quote-btn"
                  onClick={closeMenu}
                >
                  Get a Quote
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}