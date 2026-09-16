// src/components/Nav.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const TumeloLogo = ({ className = "h-7" }) => (
  <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="-0.05em" fontSize="26" fill="#ffffff">
      tume<tspan fill="#2EB6B9">lo</tspan>
    </text>
  </svg>
);

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view
  useEffect(() => {
    if (!isHome) return;

    const sections = ["who-we-help", "solutions", "casestudy", "research", "faq", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry most in view (highest intersectionRatio)
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  // Section anchors — prefixed with "/" when not on the homepage
  const prefix = isHome ? "" : "/";
  const navLinks = [
    { to: `${prefix}#who-we-help`, label: "Who we help" },
    { to: `${prefix}#solutions`,    label: "Platform" },
    { to: `${prefix}#casestudy`,   label: "Client Story" },
    { to: `${prefix}#research`,    label: "Research" },
    { to: `${prefix}#faq`,         label: "FAQ" },
    { to: `${prefix}#contact`,     label: "Contact" },
  ];

  const handleAnchorClick = (e, target) => {
    // Off-home: let react-router navigate to "/#section"
    if (!isHome) return;

    // On-home: smooth-scroll to the section
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      setActiveSection(target.replace("#", ""));
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-[#030509]/80 backdrop-blur-xl border-gray-800/80 py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[90rem] mx-auto px-8 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="hover:opacity-80 transition-opacity"
        >
          <TumeloLogo />
        </Link>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const sectionId = link.to.replace("#", "");
            const isActive = isHome && activeSection === sectionId;
            return (
              <a
                key={link.to}
                href={link.to}
                onClick={(e) => handleAnchorClick(e, link.to)}
                className={`text-[13px] font-medium uppercase tracking-widest transition-colors ${
                  isActive
                    ? "text-[#2EB6B9]"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Login */}
        <div className="flex items-center gap-6">
          <Link
            to="/login"
            className="relative group overflow-hidden px-6 py-2.5 bg-white text-black font-semibold text-[13px] uppercase tracking-widest flex items-center gap-2"
          >
            <span className="relative z-10 transition-colors group-hover:text-white">
              Login
            </span>
            <div className="absolute inset-0 bg-[#2EB6B9] transform translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 z-0"></div>
          </Link>
        </div>
      </div>
    </header>
  );
}