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
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section anchors on the homepage
  const navLinks = [
    { to: "#who-we-help", label: "Who we help" },
    { to: "#solutions",    label: "Platform" },
        { to: "#casestudy",   label: "Customer Stories" },
    { to: "#research",    label: "Research" },
        { to: "#faq",         label: "FAQ" },
    { to: "#contact",     label: "Contact" },
  ];

  // Smooth-scroll to section (only works on the homepage)
  const handleAnchorClick = (e, target) => {
    if (!isHome) return; // Let the browser handle it off-home
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
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
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <TumeloLogo />
        </Link>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.to}
              href={link.to}
              onClick={(e) => handleAnchorClick(e, link.to)}
              className="text-[13px] font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
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