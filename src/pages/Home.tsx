import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

// ==========================================
// 1. PREMIUM VISUAL ICONS
// ==========================================
const IconArrowRight = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconShield = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconFile = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconZap = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6M23 11h-6" />
  </svg>
);

const IconGlobe = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);


// ==========================================
// SCROLL REVEAL WRAPPER
// ==========================================
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};


 
// ==========================================
// 2. ELITE SVG VISUALIZATIONS
// ==========================================
const TumeloLogo = ({ className = "h-7" }) => (
  <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="-0.05em" fontSize="26" fill="#ffffff">
      tume<tspan fill="#2EB6B9">lo</tspan>
    </text>
  </svg>
);

// The central "Network Graph" - represents Pass-Through Voting routing
const NetworkGraph = () => (
  <svg className="w-full h-full opacity-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g className="animate-pulse" style={{ animationDuration: '4s' }}>
      <circle cx="200" cy="200" r="150" stroke="#2EB6B9" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3"/>
      <circle cx="200" cy="200" r="100" stroke="#2EB6B9" strokeWidth="1" opacity="0.2"/>
      <circle cx="200" cy="200" r="8" fill="#2EB6B9" />
      <circle cx="200" cy="200" r="24" stroke="#2EB6B9" strokeWidth="1" opacity="0.5"/>
      <path d="M200 200 L120 120" stroke="url(#gradient-line)" strokeWidth="1.5"/>
      <circle cx="120" cy="120" r="4" fill="#fff"/>
      <path d="M200 200 L300 150" stroke="url(#gradient-line)" strokeWidth="1.5"/>
      <circle cx="300" cy="150" r="4" fill="#fff"/>
      <path d="M200 200 L250 300" stroke="url(#gradient-line)" strokeWidth="1.5"/>
      <circle cx="250" cy="300" r="4" fill="#fff"/>
      <path d="M200 200 L100 250" stroke="url(#gradient-line)" strokeWidth="1.5"/>
      <circle cx="100" cy="250" r="6" fill="#2EB6B9" opacity="0.6"/>
    </g>
    <defs>
      <linearGradient id="gradient-line" x1="200" y1="200" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#2EB6B9" />
        <stop offset="1" stopColor="transparent" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

// The AI Lens - represents ProxyBeacon scanning documents
const AILens = () => (
  <svg className="w-full h-full opacity-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="80" width="300" height="2" fill="#2EB6B9" className="animate-[bounce_3s_infinite]" />
    <rect x="80" y="100" width="240" height="8" rx="4" fill="#374151" opacity="0.5"/>
    <rect x="80" y="130" width="180" height="8" rx="4" fill="#374151" opacity="0.5"/>
    <rect x="80" y="160" width="200" height="8" rx="4" fill="#2EB6B9" opacity="0.8"/>
    <rect x="80" y="190" width="220" height="8" rx="4" fill="#374151" opacity="0.5"/>
    <rect x="80" y="220" width="150" height="8" rx="4" fill="#374151" opacity="0.5"/>
    <rect x="70" y="150" width="220" height="28" stroke="#2EB6B9" strokeWidth="1" strokeDasharray="4 4" fill="transparent"/>
    <rect x="40" y="40" width="320" height="320" stroke="#1F2937" strokeWidth="1" fill="transparent"/>
    <path d="M40 60 L40 40 L60 40" stroke="#2EB6B9" strokeWidth="2" fill="transparent"/>
    <path d="M360 60 L360 40 L340 40" stroke="#2EB6B9" strokeWidth="2" fill="transparent"/>
    <path d="M40 340 L40 360 L60 360" stroke="#2EB6B9" strokeWidth="2" fill="transparent"/>
    <path d="M360 340 L360 360 L340 360" stroke="#2EB6B9" strokeWidth="2" fill="transparent"/>
  </svg>
);

const QuoteMark = ({ className = "w-10 h-10" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8.001L24 8.001L24 18L14.017 18ZM0 18L0 10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 5.996 5.789 5.996 8.001L9.983 8.001L9.983 18L0 18Z" />
  </svg>
);

// ==========================================
// 3. HOME PAGE SECTIONS
// ==========================================

// --- SECTION 1: HERO (Now with clear outcome statement) ---
const HeroTerminal = () => (
  <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#030509]">
    <style>{`
      @keyframes heroFadeUp {
        from { opacity: 0; transform: translateY(24px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .hero-anim {
        opacity: 0;
        animation: heroFadeUp 0.9s ease-out forwards;
      }
    `}</style>
    <div className="absolute inset-0 z-0 pointer-events-none">
      {/* Atmospheric teal glow - top right */}
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,194,168,0.10)_0,transparent_50%)] blur-[120px]"></div>
      {/* Secondary depth glow - bottom left */}
      <div className="absolute bottom-[-30%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,194,168,0.04)_0,transparent_60%)] blur-[120px]"></div>
      {/* Soft vignette for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030509_90%)]"></div>
      {/* Bottom hairline separator */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
    </div>

    <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-16 w-full grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
      <div className="max-w-3xl">
        <div className="flex items-center gap-4 mb-8 hero-anim" style={{ animationDelay: "0ms" }}>
          <div className="w-12 h-[1px] bg-[#2EB6B9]"></div>
          <span className="text-[11px] font-mono tracking-[0.2em] text-[#2EB6B9] uppercase">
           Pass-Through Voting Technology · Since 2018
          </span>
        </div>

<h1 className="text-5xl md:text-7xl lg:text-[4.7rem] font-bold text-white leading-[1.05] tracking-tighter mb-8 hero-anim" style={{ animationDelay: "120ms" }}>
  Give every investor{" "}
  <span className="text-[#2eb6b9]">
    more control
  </span>{" "}
  over fund votes.
</h1>

        <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12 border-l border-gray-800 pl-6 hero-anim" style={{ animationDelay: "240ms" }}>
        Tumelo gives investors in pooled funds a way to influence how their share of the fund’s votes is cast. They can follow a policy, vote on resolutions, or leave voting with the fund manager.
        </p>

            <div className="flex flex-col sm:flex-row gap-6 hero-anim" style={{ animationDelay: "360ms" }}>
          <a href="#solutions" className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#2EB6B9] text-[#030509] text-sm font-bold uppercase tracking-widest transition-all hover:bg-white">
            <span className="whitespace-nowrap">See How It Works</span>
            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </a>
      <a
  href="https://www.tumelo.com/demo"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-gray-700 text-sm font-bold uppercase tracking-widest transition-all hover:border-[#2EB6B9] hover:text-[#2EB6B9]"
>
  <span className="whitespace-nowrap">Book a Demo</span>
</a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-widest hero-anim" style={{ animationDelay: "480ms" }}>
          <div className="flex items-center gap-2"><IconShield className="w-4 h-4" /> ISO 27001</div>
          <div className="flex items-center gap-2"><IconGlobe className="w-4 h-4" /> UK · US · EU</div>
        </div>
      </div>
      {/* Live Pass-Through Routing Visual */}
      <div className="relative hidden lg:block w-full hero-anim" style={{ animationDelay: "300ms" }}>
        {/* Glow behind panel */}
        <div className="absolute -inset-12 bg-[#2eb6b9] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative border border-gray-800/60 bg-[#0A0E17]/70 backdrop-blur-sm">
          {/* Header */}
          <div className="border-b border-gray-800/60 px-8 py-5 flex items-center justify-between bg-[#030509]/80">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2eb6b9] animate-pulse"></div>
              <span className="text-[11px] font-mono text-gray-300 tracking-[0.2em] uppercase">
                Live · ProxySphere
              </span>
            </div>
            <span className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase">
              AGM 2026-Q1
            </span>
          </div>

          {/* The Fund */}
          <div className="p-8 border-b border-gray-800/60">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-2">
                  Pooled Fund
                </div>
                <div className="text-white text-xl font-semibold tracking-tight">
                  Global Equity Index Fund
                </div>
              </div>
              <div className="text-right">
                <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-2">
                  AUM
                </div>
                <div className="text-white font-mono text-xl">£2.4B</div>
              </div>
            </div>

            {/* The Shares */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-800/60 bg-[#030509] p-5">
                <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-2">
                  Apple Inc.
                </div>
                <div className="text-white font-mono text-lg">
                  1,284,000 <span className="text-gray-500 text-xs">shares</span>
                </div>
              </div>
              <div className="border border-gray-800/60 bg-[#030509] p-5">
                <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-2">
                  Microsoft Corp.
                </div>
                <div className="text-white font-mono text-lg">
                  982,000 <span className="text-gray-500 text-xs">shares</span>
                </div>
              </div>
            </div>
          </div>

          {/* The Routing */}
          <div className="p-8 border-b border-gray-800/60">
            <div className="flex items-center justify-between mb-7">
              <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
                Routing
              </div>
              <div className="text-[11px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase font-semibold">
                2,000+ Investors
              </div>
            </div>

            <div className="space-y-5">
              {[
                { pct: "42%", label: "Climate-aligned policy", color: "bg-[#2eb6b9]", width: "42%" },
                { pct: "31%", label: "House default policy",  color: "bg-gray-500", width: "31%" },
                { pct: "18%", label: "Voted individually",    color: "bg-gray-600", width: "18%" },
                { pct: "9%",  label: "Custom ESG mandate",    color: "bg-gray-700", width: "9%" },
              ].map((row, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-200 font-light">{row.label}</span>
                    <span className="text-sm font-mono text-white">{row.pct}</span>
                  </div>
                  <div className="h-[4px] bg-gray-900 w-full">
                    <div className={`h-full ${row.color}`} style={{ width: row.width }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* The Result */}
          <div className="p-8 bg-[#030509]/60">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-2">
                  Reconciled Vote
                </div>
<div className="text-white text-base font-medium tracking-tight">
  Apple Inc. <span className="inline-block w-1" /> Say on Climate
</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#2eb6b9] animate-pulse"></div>
                <span className="text-[11px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase font-semibold">
                  Executed
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono tracking-wider">
              <span className="text-white">FOR: 68.4%</span>
              <span className="text-gray-700">·</span>
              <span className="text-gray-400">AGAINST: 31.6%</span>
              <span className="text-gray-700">·</span>
              <span className="text-[#2eb6b9] font-semibold">100% AUDITABLE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- SECTION 2: TRUST BAR ---
const InstitutionalTrust = () => {
  const partners = ["Legal & General", "Fidelity", "Glass Lewis", "PIRC", "Penfold", "Cushon"];
  return (
    <section className="py-12 border-y border-gray-800/60 bg-[#05080F]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        <p className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.2em] whitespace-nowrap">
          Trusted by Tier 1 Institutions
        </p>
        <div className="flex w-full justify-between items-center overflow-hidden">
          {partners.map((partner, i) => (
            <div key={i} className="text-lg md:text-xl font-serif text-gray-600 hover:text-white transition-all duration-500 cursor-default px-4 hover:scale-105">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- SECTION 3: WHO WE HELP (Self-identification) ---
const WhoWeHelp = () => {
  const audiences = [
    {
      label: "For Fund Managers",
      headline: "Give investors voting choice without changing operations.",
      description: "Let investors follow voting policies or make their own choices, while your team retains control over unallocated votes and works with its existing proxy infrastructure.",
      stat: "10x",
      statLabel: "Faster research cycles",
      accent: true,
    },
    {
      label: "For Institutional Investors",
      headline: "Apply your voting policy across pooled investments.",
      description: "Give your stewardship team visibility into how votes are being cast and the ability to express your organisation’s policy across the funds it invests in.",
      stat: "100%",
      statLabel: "Auditable voting record",
      accent: false,
    },
    {
      label: "For Retail Investors",
      headline: "Have a say in the companies held through your fund.",
      description: "Choose how your voting entitlement is used on eligible resolutions, without giving up the diversification and structure of pooled investing.",
      stat: "0",
      statLabel: "Silent abstentions",
      accent: false,
    },
  ];

  return (
    <section id="who-we-help" className="py-40 bg-[#030509] border-t border-gray-800/60 relative">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">

     {/* Header Block */}
<Reveal>
<div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
          <div className="max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
                Who we help
              </span>
            </div>
    <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
  One voting platform for{" "}
  <span className="text-[#2eb6b9]">everyone involved in fund ownership.</span>
</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
  Tumelo gives fund managers, institutional investors, and individual investors a way to participate in the voting decisions attached to pooled funds.
</p>
          </div>

          {/* Right-side meta label */}
          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">
              Select your role
            </span>
            <div className="w-32 h-[1px] bg-gray-800"></div>
          </div>
          </div>
        </Reveal>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-3 gap-px bg-gray-800/40 border border-gray-800/40">
          {audiences.map((audience, i) => {
            const index = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className={`group relative p-10 lg:p-14 flex flex-col justify-between transition-all duration-700 ${
                  audience.accent
                    ? "bg-[#0A0E17]"
                    : "bg-[#030509] hover:bg-[#0A0E17]"
                }`}
              >
                {/* Ambient glow on the accent card */}
                {audience.accent && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#2eb6b9] opacity-[0.08] blur-[100px] rounded-full"></div>
                  </div>
                )}

                {/* Top hairline (accent card only) */}
                {audience.accent && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2eb6b9] via-[#2eb6b9]/40 to-transparent"></div>
                )}

                {/* Hover top rule for non-accent cards */}
                {!audience.accent && (
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
                )}

                {/* Content */}
                <div className="relative">
                  {/* Index number */}
                  <div className={`flex items-center gap-3 mb-10 transition-colors duration-500 ${
                    audience.accent ? "text-[#2eb6b9]" : "text-gray-700 group-hover:text-[#2eb6b9]"
                  }`}>
                    <span className="text-[10px] font-mono tracking-[0.25em]">{index}</span>
                    <div className="w-6 h-[1px] bg-current"></div>
                  </div>

                  {/* Label */}
                  <div className={`text-[10px] font-mono tracking-[0.25em] uppercase mb-6 transition-colors duration-500 ${
                    audience.accent ? "text-[#2eb6b9]" : "text-gray-500 group-hover:text-[#2eb6b9]"
                  }`}>
                    {audience.label}
                  </div>

                  {/* Headline */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                    {audience.headline}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-12">
                    {audience.description}
                  </p>
                </div>

                {/* Footer metric */}
                <div className="relative flex items-end justify-between border-t border-gray-800/60 pt-8">
                  <div>
                    <div className={`text-5xl font-light tracking-tighter mb-2 transition-colors duration-500 ${
                      audience.accent ? "text-[#2eb6b9]" : "text-white group-hover:text-[#2eb6b9]"
                    }`}>
                      {audience.stat}
                    </div>
                    <div className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.2em]">
                      {audience.statLabel}
                    </div>
                  </div>

                  {/* Arrow circle */}
                  <div className={`w-10 h-10 border flex items-center justify-center transition-all duration-500 ${
                    audience.accent
                      ? "border-[#2eb6b9]/40 group-hover:border-[#2eb6b9] group-hover:bg-[#2eb6b9]/10"
                      : "border-gray-800 group-hover:border-[#2eb6b9] group-hover:bg-[#2eb6b9]/10"
                  }`}>
                    <IconArrowRight className={`w-4 h-4 transition-colors duration-500 ${
                      audience.accent ? "text-[#2eb6b9]" : "text-gray-600 group-hover:text-[#2eb6b9]"
                    }`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom meta strip */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-800/40">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
              Same register · Same audit trail · Same infrastructure
            </span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
            <span>UK</span>
            <span className="text-gray-800">·</span>
            <span>US</span>
            <span className="text-gray-800">·</span>
            <span>EU</span>
          </div>
        </div>

      </div>
    </section>
  );
};


// --- SECTION 4: THE PROBLEM (Visualized, not jargon) ---
const TheParadigmShift = () => (
  <section className="py-40 bg-[#05080F] border-t border-gray-800/60 relative">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">

        {/* LEFT: Narrative */}
        <div>
          <div className="sticky top-32">
          <Reveal>
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
                The Problem
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
              The old way is{" "}
              <span className="text-[#2eb6b9]">manual, blind, and slow.</span>
            </h2>

            <p className="text-lg text-gray-400 font-light leading-relaxed mb-10">
              Stewardship teams today manage thousands of meetings a season on spreadsheets, PDFs, and gut feel. Votes arrive late. Decisions get made reactively. And the underlying investor never sees how their money voted.
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-[1px] bg-gray-800"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-gray-500 uppercase whitespace-nowrap">
                The Tumelo Paradigm
              </span>
              <div className="flex-1 h-[1px] bg-gray-800"></div>
            </div>

            {/* Paradigm List */}
            <ul className="space-y-5">
              {[
                "One definitive register of ownership.",
                "Zero manual intervention required.",
                "100% cryptographic audit trail.",
              ].map((item, i) => (
                <li key={i} className="group flex items-start gap-5">
                  <span className="shrink-0 mt-1 w-6 h-6 border border-[#2eb6b9]/30 group-hover:border-[#2eb6b9] flex items-center justify-center transition-colors duration-500">
                    <span className="text-[9px] font-mono text-[#2eb6b9]">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="text-white font-light leading-relaxed pt-0.5">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          </div>
        </div>

        {/* RIGHT: Metrics */}
        <Reveal delay={150}>
        <div className="grid sm:grid-cols-2 gap-px bg-gray-800/40">
          {[
            { stat: "£2bn+", label: "Pension assets already routed through Tumelo via LGIM" },
            { stat: "100%",  label: "Resolutions covered across the markets where funds invest" },
            { stat: "0",     label: "Shares left unvoted under active investor voting policies" },
            { stat: "10x",   label: "Faster proxy research and exception handling for stewardship teams" },
          ].map((metric, i) => (
            <div
              key={i}
              className="group relative bg-[#030509] hover:bg-[#0A0E17] p-10 lg:p-12 transition-all duration-500"
            >
              {/* Top hairline on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2eb6b9] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>

              {/* Index number */}
              <div className="text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase mb-8 transition-colors duration-500">
                Metric {String(i + 1).padStart(2, "0")}
              </div>

              {/* Stat */}
              <div className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tighter group-hover:text-[#2eb6b9] transition-colors duration-500">
                {metric.stat}
              </div>

              {/* Hairline */}
              <div className="w-8 h-[1px] bg-gray-700 group-hover:w-16 group-hover:bg-[#2eb6b9] mb-5 transition-all duration-500"></div>

              {/* Label */}
              <div className="text-sm text-gray-400 group-hover:text-gray-300 leading-relaxed font-light transition-colors duration-500">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        </Reveal>

      </div>
    </div>
  </section>
);

// --- SECTION 5: PRODUCT ARCHITECTURE (With "Voting engine / Research engine" labels) ---
const ProductArchitecture = () => {
  const products = [
    {
      engine: "The Voting Engine",
      name: "ProxySphere",
      tagline: "Pass-through voting",
      description:
        "Gives every underlying investor in a pooled fund a direct route to vote their own shares, or delegate to a policy. No spreadsheet required.",
      visual: <NetworkGraph />,
      stats: [
        { value: "£300bn+", label: "AUM on platform" },
        { value: "100%",   label: "Audit coverage" },
        { value: "0",      label: "Manual reconciliations" },
      ],
      features: [
        "Institutional and retail in one fund.",
        "Investors pick a policy or vote individually.",
        "Un-voted shares default to a stated policy.",
      ],
      cta: { label: "Explore ProxySphere", href: "/proxysphere" },
    },
    {
      engine: "The Research Engine",
      name: "ProxyBeacon",
      tagline: "AI-driven proxy research",
      description:
        "Reads every resolution before a meeting, applies your stewardship policy consistently, and flags only the ones that need a human decision.",
      visual: <AILens />,
      stats: [
        { value: "Same-day", label: "Research turnaround" },
        { value: "100%",   label: "Source-traceable" },
    { value: "Hours", label: "Saved per meeting" },
      ],
      features: [
        "Reads filings and resolution text automatically.",
        "Applies your custom policy the same way every time.",
        "Flags exceptions before the meeting, not after.",
      ],
      cta: { label: "Explore ProxyBeacon", href: "/proxybeacon" },
    },
  ];

  return (
    
        <section id="solutions" className="py-40 bg-[#030509] border-t border-gray-800/60 relative">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">

        {/* Header */}
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
                Platform
              </span>
            </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
  Two products for the{" "}
  <br className="hidden md:block" />
  <span className="text-[#2eb6b9]">two sides of voting.</span>
</h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
            Tumelo combines pass-through voting for pooled funds with AI-assisted proxy research, covering both the execution of investor voting instructions and the research behind institutional voting decisions.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">
              Built for institutional scale
            </span>
            <div className="w-40 h-[1px] bg-gray-800"></div>
          </div>
        </div>
        </Reveal>

        {/* Products — side-by-side with vertical divider */}
        <div className="relative">

          {/* Center divider line (desktop only) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-transparent via-gray-800 to-transparent pointer-events-none z-10"></div>

          {/* Center badge (desktop only) */}
          <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 items-center justify-center">
            <div className="w-10 h-10 border border-gray-800 bg-[#030509] flex items-center justify-center">
              <span className="text-[10px] font-mono text-[#2eb6b9] tracking-widest">+</span>
            </div>
          </div>

          <Reveal delay={150}>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Product 01 — ProxySphere */}
            <div className="relative group">
              {/* Visual block */}
              <div className="relative h-72 bg-[#030509] border border-gray-800/60 overflow-hidden mb-px">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <NetworkGraph />
                </div>
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
                  <span className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.25em] uppercase">
                    The Voting Engine
                  </span>
                </div>
                <div className="absolute top-6 right-6 text-[10px] font-mono text-gray-700 tracking-[0.25em] uppercase">
                  / 01
                </div>
              </div>

              {/* Content block */}
              <div className="relative bg-[#0A0E17] border border-gray-800/60 p-10 lg:p-12">
                <h3 className="text-4xl font-bold text-white tracking-tighter leading-none mb-4">
                  ProxySphere
                </h3>
                <p className="text-[11px] font-mono text-[#2eb6b9] tracking-[0.25em] uppercase mb-8">
                  Pass-through voting
                </p>

                <p className="text-sm text-gray-400 font-light leading-relaxed mb-10">
     ProxySphere connects investors in pooled funds to the voting rights attached to their investments. They can follow a voting policy, make individual choices, or delegate their voting power back to the fund manager.
                </p>

                {/* Stat strip */}
                <div className="grid grid-cols-3 gap-px bg-gray-800/40 border border-gray-800/40 mb-10">
                  {[
                    { value: "2,000+", label: "Investors/fund" },
                    { value: "100%",   label: "Audit" },
                 { value: "0", label: "Manual recon" },
                  ].map((stat, j) => (
                    <div key={j} className="bg-[#030509] p-4">
                      <div className="text-xl font-light text-white tracking-tighter mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[9px] font-mono text-gray-500 tracking-[0.15em] uppercase leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature rows */}
                <div className="space-y-0 mb-10">
                  {[
                    "Institutional and retail in one fund.",
                    "Investors pick a policy or vote individually.",
                    "Un-voted shares default to a stated policy.",
                  ].map((feature, j) => (
                    <div key={j} className="flex items-start gap-4 py-4 border-b border-gray-800/40 last:border-0">
                      <span className="shrink-0 text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] mt-1">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-gray-300 font-light leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              <a
  href="/proxysphere"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-white hover:text-[#2eb6b9] transition-colors group/cta"
>
  <span>Explore ProxySphere</span>
  <span className="w-8 h-[1px] bg-gray-700 group-hover/cta:bg-[#2eb6b9] group-hover/cta:w-12 transition-all duration-500"></span>
  <IconArrowRight className="w-3 h-3" />
</a>
              </div>
            </div>

            {/* Product 02 — ProxyBeacon */}
            <div className="relative group">
              {/* Visual block */}
              <div className="relative h-72 bg-[#030509] border border-gray-800/60 overflow-hidden mb-px">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <AILens />
                </div>
                <div className="absolute top-6 left-6 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
                  <span className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.25em] uppercase">
                    The Research Engine
                  </span>
                </div>
                <div className="absolute top-6 right-6 text-[10px] font-mono text-gray-700 tracking-[0.25em] uppercase">
                  / 02
                </div>
              </div>

              {/* Content block */}
              <div className="relative bg-[#0A0E17] border border-gray-800/60 p-10 lg:p-12">
                <h3 className="text-4xl font-bold text-white tracking-tighter leading-none mb-4">
                  ProxyBeacon
                </h3>
                <p className="text-[11px] font-mono text-[#2eb6b9] tracking-[0.25em] uppercase mb-8">
                  AI-driven proxy research
                </p>

                <p className="text-sm text-gray-400 font-light leading-relaxed mb-10">
ProxyBeacon reviews meeting materials and resolutions, applies your stewardship policy and highlights exceptions so your team can focus its time on decisions that need judgement.
                </p>

                {/* Stat strip */}
                <div className="grid grid-cols-3 gap-px bg-gray-800/40 border border-gray-800/40 mb-10">
                {[
  { value: "Same-day", label: "Turnaround" },
  { value: "100%",     label: "Traceable" },
  { value: "Hours",    label: "Saved/meeting" },
                  ].map((stat, j) => (
                    <div key={j} className="bg-[#030509] p-4">
                      <div className="text-xl font-light text-white tracking-tighter mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[9px] font-mono text-gray-500 tracking-[0.15em] uppercase leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature rows */}
                <div className="space-y-0 mb-10">
                  {[
                    "Reads filings and resolution text automatically.",
                    "Applies your custom policy the same way every time.",
                    "Flags exceptions before the meeting, not after.",
                  ].map((feature, j) => (
                    <div key={j} className="flex items-start gap-4 py-4 border-b border-gray-800/40 last:border-0">
                      <span className="shrink-0 text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] mt-1">
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-gray-300 font-light leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

            <a
  href="/proxybeacon"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-white hover:text-[#2eb6b9] transition-colors group/cta"
>
  <span>Explore ProxyBeacon</span>
  <span className="w-8 h-[1px] bg-gray-700 group-hover/cta:bg-[#2eb6b9] group-hover/cta:w-12 transition-all duration-500"></span>
  <IconArrowRight className="w-3 h-3" />
</a>
              </div>
            </div>

          </div>
        </Reveal>
        </div>

        {/* Closing thesis */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-24 pt-10 border-t border-gray-800/40">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
              One register · One audit trail · One deployment
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
            <span>ISO 27001</span>
            <span className="text-gray-800">·</span>
            <span>SOC 2 Type II</span>
            <span className="text-gray-800">·</span>
            <span>AES-256</span>
          </div>
        </div>

      </div>
    </section>
  );
};


// --- SECTION 6: CASE STUDY (KEEPING YOUR PREMIUM VERSION) ---
const EditorialCaseStudy = () => (
  <section id="casestudy" className="bg-[#05080F] py-40 border-t border-gray-800/60 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2EB6B9] opacity-[0.03] skew-x-12 transform translate-x-32 pointer-events-none"></div>
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <QuoteMark className="text-[#2EB6B9] mb-8 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.3] mb-12">
            “Tumelo is an extremely agile, collaborative, and results-focused team. They are a pleasure to work with.”
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-16 h-[1px] bg-gray-700"></div>
            <div>
              <p className="text-white font-bold tracking-wide uppercase text-sm mb-1">Stuart Murphy</p>
              <p className="text-gray-500 text-xs font-mono tracking-widest">HEAD OF CLIENT PLATFORMS, LGIM</p>
            </div>
          </div>
        </div>

        <div className="relative p-10 md:p-14 border border-gray-800 bg-[#030509] shadow-2xl z-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2EB6B9] to-transparent"></div>
          <div className="flex justify-between items-start mb-12">
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase border border-gray-700 px-3 py-1">Case Study</span>
            <span className="text-2xl font-serif text-white opacity-40">LGIM</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
            Rolling out pass-through voting for a £2bn pension fund.
          </h3>
          <p className="text-gray-400 font-light leading-relaxed mb-10">
            Discover how Legal & General Investment Management (LGIM) used Tumelo’s infrastructure to give their underlying pension contributors unprecedented visibility and control.
          </p>
          <a
            href="https://25524212.hs-sites-eu1.com/hubfs/LGIM%20announcement/Tumelo%20powers%20LGIMs%20pass-through%20voting%20offering.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between w-full border border-gray-700 p-6 hover:border-[#2EB6B9] transition-colors bg-[#0A0E17]"
          >
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Download Report</span>
              <span className="text-gray-500 font-mono text-[10px]">PDF / 2.4 MB</span>
            </div>
            <IconArrowRight className="text-gray-500 group-hover:text-[#2EB6B9] transition-colors w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
);


// --- SECTION 8: FAQ (Objection handling) ---

const FAQ = () => {
  const faqs = [
    {
      q: "How is Tumelo different from a proxy advisor?",
      a: "Proxy advisors give you a recommendation. Tumelo gives you the infrastructure to apply your own policy consistently across every meeting, with a full audit trail. You can run ProxyBeacon alongside your advisor or replace them entirely.",
    },
   {
    q: "Can we trust AI with fiduciary decisions?",
    a: "The AI extracts and structures information. It does not make voting decisions. Your policies determine every output, and every conclusion links back to the exact page and paragraph in the source filing so your team can verify it in seconds.",
  },
    {
      q: "How long does implementation take?",
      a: "Most implementations take 6–8 weeks. Tumelo supports data mapping, policy configuration, system integration, and investor onboarding as part of the implementation process.",
    },
    {
      q: "Can institutional and retail investors use Tumelo?",
      a: "Yes. ProxySphere supports both institutional and retail investors within the same pooled fund. Investors can follow an available voting policy, make individual voting choices, or leave their voting with the fund manager.",
    },
    {
    q: "What happens if an investor doesn’t vote?",
    a: "Un-voted shares default automatically to a stated house policy. You define the default. Tumelo executes it, and the outcome is recorded in the audit trail. No vote goes unrecorded.",
  },
    {
      q: "Which markets does Tumelo support?",
      a: "Tumelo supports voting across the UK, EU, and US markets, with coverage expanding into additional markets. Specific resolution and market coverage depends on the fund and its underlying holdings.",
    },
    {
      q: "How is our data protected?",
      a: "Tumelo maintains ISO 27001 certification and uses AES-256 encryption for data at rest and TLS 1.2 or higher for data in transit. Tumelo also conducts external penetration testing at least annually and maintains ongoing security monitoring.",
    },
    {
      q: "How is Tumelo priced?",
      a: "Pricing depends on factors such as assets routed through Tumelo and voting or meeting volume. Institutional deployments are typically structured as an annual licence. Contact the team for pricing based on your requirements.",
    },
  ];




  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-40 bg-[#030509] border-t border-gray-800/60 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[60vw] h-[400px] bg-[#2eb6b9] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left: Title Block */}
          <div>
            <div className="sticky top-32">
            <Reveal>

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
                  Frequently Asked
                </span>
              </div>

              {/* Headline */}
         <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
  Questions about <br />
  <span className="text-[#2eb6b9]">implementing Tumelo.</span>
</h2>

              {/* Sub-headline */}
              <p className="text-base text-gray-400 font-light leading-relaxed mb-10 max-w-md">
              Clear answers on implementation, investor voting, proxy research, security, coverage, and pricing.
              </p>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-[1px] bg-gray-800"></div>
                <span className="text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase whitespace-nowrap">
                Want to know more?
                </span>
                <div className="flex-1 h-[1px] bg-gray-800"></div>
              </div>

              {/* CTA */}
              <a
             href="https://www.tumelo.com/contact"
  target="_blank"
  rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#2eb6b9] hover:text-white transition-colors group/cta"
              >
                <span>Talk to our team</span>
                <span className="w-8 h-[1px] bg-[#2eb6b9] group-hover/cta:bg-white group-hover/cta:w-12 transition-all duration-500"></span>
                <IconArrowRight className="w-3 h-3" />
              </a>

            </Reveal>
            </div>
          </div>

          {/* Right: FAQ List */}
          <Reveal delay={150}>
          <div className="border-t border-gray-800/40">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-b border-gray-800/40 group/item"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start gap-6 py-7 text-left group"
                  >
                    {/* Index number */}
                    <span
                      className={`shrink-0 text-[10px] font-mono tracking-[0.25em] mt-2 transition-colors duration-500 ${
                        isOpen ? "text-[#2eb6b9]" : "text-gray-700 group-hover:text-[#2eb6b9]"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-lg md:text-xl font-medium tracking-tight transition-colors duration-500 ${
                        isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Plus / Close indicator */}
                    <span
                      className={`shrink-0 mt-1 w-6 h-6 flex items-center justify-center border transition-all duration-500 ${
                        isOpen
                          ? "border-[#2eb6b9] bg-[#2eb6b9]/10 text-[#2eb6b9] rotate-45"
                          : "border-gray-800 text-gray-500 group-hover:border-[#2eb6b9] group-hover:text-[#2eb6b9]"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-8 pl-12 pr-12">
                      <div className="w-8 h-[1px] bg-[#2eb6b9] mb-6"></div>
                      <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </Reveal>

        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-16 pt-8 border-t border-gray-800/40">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
              Median response time · Under 24 hours
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
            <span>UK</span>
            <span className="text-gray-800">·</span>
            <span>US</span>
            <span className="text-gray-800">·</span>
            <span>EU</span>
          </div>
        </div>

      </div>
    </section>
  );
};


// --- SECTION 7: SECURITY SPECS ---
const SecuritySpecs = () => {
  const specs = [
  {
    title: "ISO 27001",
    subtitle: "Information Security",
    desc: "Tumelo maintains ISO 27001 certification for its information security management system.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "AES-256",
    subtitle: "Encryption at Rest",
    desc: "Data stored within Tumelo is protected using AES-256 encryption.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    title: "TLS 1.2+",
    subtitle: "Encryption in Transit",
    desc: "Data transmitted between systems is protected using TLS 1.2 or higher.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M12 2 4 5v6c0 5.25 3.4 9.45 8 11 4.6-1.55 8-5.75 8-11V5l-8-3z" />
        <path d="M8.5 12 11 14.5 15.5 10" />
      </svg>
    ),
  },
  {
    title: "External Testing",
    subtitle: "Independent Security Testing",
    desc: "Tumelo conducts external penetration testing at least annually through independent security specialists.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4L15 11l-2-2 1.7-1.7z" />
        <path d="m17 4 3 3" />
      </svg>
    ),
  },
];

  return (
    <section className="py-32 bg-[#0A0E17] border-y border-gray-800/60 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[300px] bg-[#2eb6b9] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[90rem] mx-auto px-8 md:px-16">

        {/* Header */}
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
                Enterprise Security
              </span>
            </div>
         <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.05] mb-6">
  <span className="text-[#2eb6b9]">Security controls</span>{" "}
  for institutional investment firms.
</h2>
            <p className="text-base text-gray-400 font-light leading-relaxed max-w-2xl">
             Tumelo uses established security controls across data storage, system access and data transmission, supported by ISO 27001 certification, independent penetration testing and continuous security monitoring.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">
              Infra Protocols
            </span>
            <div className="w-40 h-[1px] bg-gray-800"></div>
          </div>
        </div>
        </Reveal>

        {/* Specs Grid */}
        <Reveal delay={150}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800/40 border border-gray-800/40">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="group relative bg-[#030509] hover:bg-[#0A0E17] p-8 lg:p-10 transition-all duration-500"
            >
              {/* Top hairline on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>

              {/* Icon */}
              <div className="w-10 h-10 mb-8 text-[#2eb6b9] flex items-center justify-center">
                <div className="w-10 h-10">
                  {spec.icon}
                </div>
              </div>

              {/* Index */}
              <div className="text-[9px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase mb-3 transition-colors duration-500">
                Certification / {String(i + 1).padStart(2, "0")}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                {spec.title}
              </h3>

              {/* Subtitle */}
              <p className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase mb-6">
                {spec.subtitle}
              </p>

              {/* Divider */}
              <div className="w-8 h-[1px] bg-gray-800 mb-6"></div>

              {/* Description */}
              <p className="text-[13px] text-gray-400 font-light leading-relaxed">
                {spec.desc}
              </p>
            </div>
          ))}
        </div>
        </Reveal>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10 pt-8 border-t border-gray-800/40">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
              Annual third-party audits · Continuous monitoring
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
            <span>UK</span>
            <span className="text-gray-800">·</span>
            <span>US</span>
            <span className="text-gray-800">·</span>
            <span>EU</span>
          </div>
        </div>

      </div>
    </section>
  );
};


// --- SECTION 8: PRESS COVERAGE ---
const PressCoverage = () => {
const press = [
  {
    pub: "The Times",
    date: "2024",
    quote: "Named an \"innovative player\" in shareholder voting.",
    author: "James Kirkup",
    role: "Director, Social Market Foundation",
    desc: "Examines the growing demand for greater investor influence over fund voting.",
    url: "https://www.tumelo.com/press/tumelo-named-an-innovative-player-in-shareholder-voting-by-the-times?hsLang=en",
  },
  {
    pub: "Forbes",
    date: "2024",
    quote: "The emergence and direction of shareholder empowerment.",
    author: "Georgia Stewart",
    role: "CEO, Tumelo",
    desc: "Explores why investor voting is changing, and where shareholder empowerment is heading.",
    url: "https://www.tumelo.com/press/tumelo-in-forbes-tumelos-timing-is-good?hsLang=en",
  },
  {
    pub: "Bloomberg",
    date: "2025",
    quote: "At the forefront of a movement to bridge the gap.",
    author: "Matthew Brooker",
    role: "Opinion Editor, Bloomberg",
    desc: "Looks at how Tumelo connects investors with the companies held through their funds.",
    url: "https://www.tumelo.com/press/tumelo-featured-in-bloomberg-and-washington-post-on-investor-voting?hsLang=en",
  },
];

  return (
    <section id="research" className="py-40 bg-[#030509] border-t border-gray-800/60 relative">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">

        {/* Header */}
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
                Tumelo in the Press
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
              Covered by the <br />
              <span className="text-[#2eb6b9]">institutional press.</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
    Independent coverage of Tumelo’s work connecting investors to fund voting, and the wider shift towards greater shareholder participation.
            </p>
          </div>

          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">
              Selected coverage
            </span>
            <div className="w-40 h-[1px] bg-gray-800"></div>
          </div>
        </div>
        </Reveal>

        {/* Press Grid */}
        <Reveal delay={150}>
        <div className="grid md:grid-cols-3 gap-px bg-gray-800/40 border border-gray-800/40">
          {press.map((item, i) => (
          <a
  key={i}
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative bg-[#030509] hover:bg-[#0A0E17] p-10 lg:p-12 transition-all duration-500 flex flex-col"
>
              {/* Top hairline on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>

              {/* Publication header */}
              <div className="flex items-start justify-between mb-12">
                <div>
                  <div className="text-[9px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase mb-3 transition-colors duration-500">
                    Publication / {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-3xl font-serif text-white tracking-tight leading-none">
                    {item.pub}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-gray-700 tracking-widest">
                  {item.date}
                </span>
              </div>

              {/* Citation rule */}
              <div className="w-8 h-[1px] bg-[#2eb6b9] mb-6"></div>

              {/* Quote */}
              <p className="text-xl font-serif text-gray-200 leading-[1.35] mb-8 flex-grow">
                &ldquo;{item.quote}&rdquo;
              </p>

              {/* Attribution */}
              <div className="mb-10">
                <div className="text-[10px] font-mono text-white tracking-[0.15em] uppercase mb-1">
                  {item.author}
                </div>
                <div className="text-[10px] font-mono text-gray-600 tracking-[0.15em] uppercase leading-relaxed">
                  {item.role}
                </div>
              </div>

              {/* Description */}
              <p className="text-[13px] text-gray-400 font-light leading-relaxed mb-10">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="mt-auto pt-6 border-t border-gray-800/40 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-500 group-hover:text-[#2eb6b9] transition-colors duration-500">
                  Read Publication
                </span>
                <IconArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#2eb6b9] group-hover:translate-x-1 transition-all duration-500" />
              </div>
            </a>
          ))}
        </div>
        </Reveal>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10 pt-8 border-t border-gray-800/40">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
              For press enquiries, contact media@tumelo.com
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
            <span>UK</span>
            <span className="text-gray-800">·</span>
            <span>US</span>
            <span className="text-gray-800">·</span>
            <span>EU</span>
          </div>
        </div>

      </div>
    </section>
  );
};
// --- SECTION 9: RESEARCH & INSIGHTS ---
const ResearchAndInsights = () => {
 const insights = [
  {
    type: "Case Study",
    category: "Field Report",
    title: "Landmark partnership enables £2bn Camden Pension Fund to customise stewardship.",
    read: "8 min read",
    date: "Q1 2025",
    url: "https://www.tumelo.com/insights/tumelo-powers-new-landmark-pass-through-voting-solution-for-2bn-camden-pension-fund?hsLang=en",
  },
  {
    type: "Roundtable",
    category: "Discussion",
    title: "The role of client-directed voting in modern institutional stewardship.",
    read: "12 min read",
    date: "Q4 2024",
    url: "https://www.tumelo.com/roundtable-the-role-of-client-directed-voting-in-stewardship?hsLang=en",
  },
  {
    type: "White Paper",
    category: "Research",
    title: "Industry experts explore the emergence of pass-through voting and its future.",
    read: "24 min read",
    date: "Q3 2024",
    url: "https://www.tumelo.com/a-deep-dive-into-pass-through-voting?hsLang=en",
  },
];

  return (
    <section className="py-40 bg-[#05080F] border-t border-gray-800/60 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-[#2eb6b9] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[90rem] mx-auto px-8 md:px-16">

        {/* Header */}
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
                Research & Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
              Proprietary <br />
              <span className="text-[#2eb6b9]">intelligence.</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
              Original research, case studies, and strategic analyses produced by the Tumelo team and our institutional partners.
            </p>
          </div>

          {/* Right-side CTA */}
          <div className="hidden lg:flex flex-col items-end gap-4 pb-2">
           <a
  href="https://www.tumelo.com/insights"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#2eb6b9] hover:text-white transition-colors group/all"
>
              <span>View All Insights</span>
              <span className="w-8 h-[1px] bg-[#2eb6b9] group-hover/all:bg-white group-hover/all:w-12 transition-all duration-500"></span>
              <IconArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
        </Reveal>

        {/* Insights Grid */}
        <Reveal delay={150}>
        <div className="grid md:grid-cols-3 gap-px bg-gray-800/40 border border-gray-800/40">
          {insights.map((item, i) => (
           <a
  key={i}
  href={item.url}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative bg-[#05080F] hover:bg-[#0A0E17] p-10 lg:p-12 transition-all duration-500 flex flex-col min-h-[440px]"
>
              {/* Top hairline on hover */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>

              {/* Header row: Index + Category stamp */}
              <div className="flex items-start justify-between mb-12">
                <div className="text-[9px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase transition-colors duration-500">
                  Report / {String(i + 1).padStart(2, "0")}
                </div>
                <div className="text-[9px] font-mono text-gray-600 tracking-[0.25em] uppercase border border-gray-800/60 px-2.5 py-1 group-hover:border-[#2eb6b9]/40 group-hover:text-[#2eb6b9] transition-colors duration-500">
                  {item.type}
                </div>
              </div>

              {/* Category + Date */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase">
                  {item.category}
                </span>
                <span className="text-gray-800">·</span>
                <span className="text-[10px] font-mono text-gray-600 tracking-[0.2em] uppercase">
                  {item.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-[1.25] mb-10 group-hover:text-[#2eb6b9] transition-colors duration-500 flex-grow">
                {item.title}
              </h3>

              {/* Meta footer */}
              <div className="mt-auto pt-6 border-t border-gray-800/40 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">
                    {item.read}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-gray-500 group-hover:text-[#2eb6b9] transition-colors duration-500">
                    Read Report
                  </span>
                  <IconArrowRight className="w-4 h-4 text-gray-600 group-hover:text-[#2eb6b9] group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </div>
            </a>
          ))}
        </div>
        </Reveal>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10 pt-8 border-t border-gray-800/40">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
              Published quarterly · Peer-reviewed where applicable
            </span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
            <span>UK</span>
            <span className="text-gray-800">·</span>
            <span>US</span>
            <span className="text-gray-800">·</span>
            <span>EU</span>
          </div>
        </div>

      </div>
    </section>
  );
};


// --- SECTION 10: FINAL CTA ---
const CTASection = () => (
  <section id="contact" className="py-48 bg-[#030509] relative overflow-hidden">
    {/* Ambient teal glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-[#2eb6b9] opacity-[0.05] blur-[140px] rounded-full pointer-events-none"></div>

    {/* Grid texture */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

    {/* Vignette */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030509_85%)] pointer-events-none"></div>

    <Reveal>
    <div className="relative max-w-5xl mx-auto px-8 md:px-16 text-center">

      {/* Eyebrow */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
         Explore Investor Voting With Tumelo
        </span>
        <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
      </div>

      {/* Headline */}
<h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1.02] mb-10">
  Give investors a direct <br />
  <span className="text-[#2eb6b9]">role in fund voting.</span>
</h2>

      {/* Sub-headline */}
      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
     Talk to our team about your fund structure, voting process, and investor requirements, and see where Tumelo can fit.
     
      </p>

    {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
  <a
    href="https://www.tumelo.com/contact"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#2eb6b9] text-[#030509] text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-white"
  >
    <span>Contact Sales</span>
    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
  </a>
  <a
    href="https://www.tumelo.com/demo"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-gray-700 text-white text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:border-white hover:bg-white/5"
  >
    <span>Book a Demo</span>
    <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
  </a>
</div>

      {/* Divider */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-16 h-[1px] bg-gray-800"></div>
        <span className="text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
          Trusted by
        </span>
        <div className="w-16 h-[1px] bg-gray-800"></div>
      </div>

      {/* Trust Bar */}
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-16">
        {["Legal & General", "Fidelity", "Glass Lewis", "PIRC", "Penfold", "Cushon"].map((name, i) => (
          <span
            key={i}
            className="text-base md:text-lg font-serif text-gray-600 hover:text-white transition-colors duration-500 cursor-default"
          >
            {name}
          </span>
        ))}
      </div>

   {/* Bottom compliance strip */}
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></span>
          ISO 27001
        </span>
        <span className="text-gray-800">·</span>
        <span>AES-256</span>
        <span className="text-gray-800">·</span>
        <span>TLS 1.2+</span>
        <span className="text-gray-800">·</span>
        <span>UK</span>
        <span className="text-gray-800">·</span>
        <span>US</span>
        <span className="text-gray-800">·</span>
        <span>EU</span>
      </div>
    </div>
    </Reveal>
  </section>
);

// ==========================================
// 4. MAIN PAGE EXPORT
// ==========================================
export default function Home() {
  useEffect(() => {
    // If the URL has a hash, scroll to that section instead of the top
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Wait for the DOM to paint before scrolling
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030509] font-sans selection:bg-[#2EB6B9] selection:text-[#030509] relative">
      {/* Film grain overlay for premium print texture */}
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Nav />

      <main>
        <HeroTerminal />
        <InstitutionalTrust />
        <WhoWeHelp />
        <TheParadigmShift />
        <ProductArchitecture />
        <EditorialCaseStudy />
        <SecuritySpecs />
        <PressCoverage />
        <ResearchAndInsights />
        <FAQ />
        <CTASection />
      </main>

    </div>
  );
}