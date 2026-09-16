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

const IconGlobe = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const IconZap = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconFile = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
);

const IconAlert = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" x2="12" y1="9" y2="13" />
    <line x1="12" x2="12.01" y1="17" y2="17" />
  </svg>
);

const IconLayers = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconCompare = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <rect x="3" y="3" width="7" height="18" />
    <rect x="14" y="3" width="7" height="18" />
    <path d="M3 9h7M14 9h7" />
  </svg>
);

const IconUpload = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
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

// --- HERO VISUAL: Live AI Research Report (ProxyBeacon product UI) ---
const HeroResearchReport = () => (
  <div className="relative w-full">
    <div className="absolute -inset-12 bg-[#2eb6b9] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>
    <div className="relative border border-gray-800/60 bg-[#0A0E17]/70 backdrop-blur-sm">

      {/* Header */}
      <div className="border-b border-gray-800/60 px-6 py-4 flex items-center justify-between bg-[#030509]/80">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#2eb6b9] animate-pulse"></div>
          <span className="text-[11px] font-mono text-gray-300 tracking-[0.2em] uppercase">Live · ProxyBeacon</span>
        </div>
        <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">Microsoft DEF 14A</span>
      </div>

      {/* Report Context */}
      <div className="border-b border-gray-800/60 px-6 py-5 bg-[#030509]/40">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-1">Custom report</div>
            <div className="text-white text-lg font-semibold tracking-tight">Executive Remuneration</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-1">Generated</div>
            <div className="text-[#2eb6b9] font-mono text-sm font-semibold">1 hr 40 min</div>
          </div>
        </div>
      </div>

      {/* Extracted data — sourced to the filing */}
      <div className="divide-y divide-gray-800/40">
        {[
          { label: "CEO total realised pay", value: "$48.2M", source: "p.42 §3" },
          { label: "Pay vs. TSR (3y)", value: "+184% / +22%", source: "p.43 §1" },
          { label: "Peer median (self-defined group)", value: "$22.1M", source: "p.45 §4" },
        ].map((row, i) => (
          <div key={i} className="px-6 py-5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300 font-light">{row.label}</span>
              <span className="text-[10px] font-mono text-gray-600 tracking-[0.15em] flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                {row.source}
              </span>
            </div>
            <span className="text-lg font-mono font-light text-white tracking-tight">{row.value}</span>
          </div>
        ))}
      </div>

      {/* Governance flag — matches their "alert triggered" pattern */}
      <div className="border-t border-gray-800/60 px-6 py-5 bg-[#2eb6b9]/[0.04]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-[10px] font-mono text-red-400 tracking-[0.25em] uppercase mb-2">● Flag triggered</div>
            <div className="text-sm text-white font-medium">Discretion applied exceeds threshold: $6.4M</div>
          </div>
          <span className="text-[10px] font-mono text-gray-600 tracking-[0.15em] shrink-0 mt-1">p.44 §2</span>
        </div>
      </div>

      {/* Rule output + rationale — matches their custom-policy screenshot */}
      <div className="border-t border-gray-800/60 px-6 py-5 bg-[#030509]/60">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">Rule output</div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase font-semibold">Fully sourced</span>
          </div>
        </div>
        <div className="flex items-baseline gap-3 mb-2">
          <span className="text-white text-sm font-semibold">VOTE AGAINST</span>
          <span className="text-[10px] font-mono text-gray-500 tracking-[0.15em] uppercase">per your policy</span>
        </div>
        <p className="text-[11px] text-gray-500 font-light leading-relaxed">
          Pay growth outpaces 3y TSR and discretion exceeds your defined threshold.
        </p>
      </div>
    </div>
  </div>
);


// --- CAPABILITY VISUAL 1: Research Pipeline ---
const VisualResearchPipeline = () => (
  <div className="w-full min-h-72 relative bg-[#030509] border border-gray-800/60">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col">
      <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-8">Research pipeline</div>

      <div className="flex-1 space-y-4">
        {[
          { step: "01", label: "Ingest filings", detail: "DEF 14A · 10-K · 8-K", status: "complete" },
          { step: "02", label: "Extract & structure", detail: "AI · templates applied", status: "complete" },
          { step: "03", label: "Apply your policy", detail: "Custom rules · conditions", status: "active" },
          { step: "04", label: "Generate report", detail: "Sourced · auditable", status: "pending" },
        ].map((row, i) => (
          <div key={i} className={`flex items-center justify-between p-3 border ${
            row.status === "active" ? "border-[#2eb6b9]/40 bg-[#2eb6b9]/5" :
            row.status === "complete" ? "border-gray-800/40 bg-gray-900/20" :
            "border-gray-800/40 opacity-40"
          }`}>
            <div className="flex items-center gap-3">
              <span className={`text-[10px] font-mono tracking-[0.2em] ${
                row.status === "active" ? "text-[#2eb6b9]" : "text-gray-600"
              }`}>{row.step}</span>
              <span className={`text-xs font-medium ${row.status === "active" ? "text-white" : "text-gray-400"}`}>
                {row.label}
              </span>
            </div>
            <span className="text-[9px] font-mono text-gray-600 tracking-[0.1em] uppercase">{row.detail}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-800/60 flex justify-between text-[9px] font-mono text-gray-500 tracking-[0.2em] uppercase">
        <span>Input: 8 documents</span>
        <span className="text-[#2eb6b9]">Output: 1 sourced report</span>
      </div>
    </div>
  </div>
);

// --- CAPABILITY VISUAL 2: Governance Flags ---
const VisualGovernanceFlags = () => (
  <div className="w-full min-h-72 relative bg-[#030509] border border-gray-800/60">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">Governance flags</span>
        <span className="text-[10px] font-mono text-red-400 bg-red-400/10 px-2 py-1 border border-red-400/20 tracking-[0.15em] uppercase">3 triggered</span>
      </div>

      <div className="flex-1 space-y-3">
        {[
          { rule: "Director overboarding > 4 boards", detail: "J. Smith (5)", status: "triggered" },
          { rule: "Pay plan discretion > 10%", detail: "CEO bonus", status: "triggered" },
          { rule: "Climate targets not measurable", detail: "Scope 3", status: "triggered" },
          { rule: "Auditor tenure > 10 years", detail: "Deloitte (7y)", status: "clear" },
          { rule: "Board independence < 75%", detail: "82%", status: "clear" },
        ].map((item, i) => (
          <div key={i} className={`flex items-center justify-between p-3 border ${
            item.status === "triggered" ? "border-red-500/30 bg-red-500/5" : "border-gray-800/40 opacity-40"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-1.5 h-1.5 rounded-full ${
                item.status === "triggered" ? "bg-red-500" : "bg-gray-700"
              }`}></div>
              <span className={`text-xs font-mono ${
                item.status === "triggered" ? "text-white" : "text-gray-500"
              }`}>{item.rule}</span>
            </div>
            <span className="text-[9px] font-mono text-gray-600 tracking-[0.1em]">{item.detail}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800/60 flex justify-between text-[9px] font-mono tracking-[0.2em] uppercase">
        <span className="text-gray-500">Monitoring: 42 companies</span>
        <span className="text-[#2eb6b9]">Live feed</span>
      </div>
    </div>
  </div>
);

// --- CAPABILITY VISUAL 3: Natural Language Rule Builder ---
const VisualRuleBuilder = () => (
  <div className="w-full min-h-72 relative bg-[#030509] border border-gray-800/60">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col justify-center">
      <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-6">Rule builder</div>

      {/* Input */}
      <div className="w-full bg-[#0A0E17] border border-gray-700 p-4 mb-5 relative">
        <div className="absolute -top-2 left-3 bg-[#030509] px-2 text-[9px] font-mono text-gray-500 tracking-[0.2em] uppercase">Input</div>
        <p className="text-sm text-white font-mono leading-relaxed">
          “Alert me if director overboarding exceeds <span className="text-[#2eb6b9] underline decoration-[#2eb6b9]/50">4 boards</span>”
        </p>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center gap-3 mb-5">
        <div className="w-12 h-[1px] bg-gray-700"></div>
        <IconArrowRight className="w-4 h-4 text-[#2eb6b9]" />
        <div className="w-12 h-[1px] bg-gray-700"></div>
      </div>

      {/* Output */}
      <div className="w-full bg-[#0A0E17] border border-[#2eb6b9]/30 p-4 relative">
        <div className="absolute -top-2 left-3 bg-[#030509] px-2 text-[9px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase">Generated rule</div>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-gray-500 tracking-[0.15em] uppercase">Condition</span>
            <span className="text-[#2eb6b9]">COUNT(BOARDS) &gt; 4</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-gray-500 tracking-[0.15em] uppercase">Action</span>
            <span className="text-white">FLAG_FOR_REVIEW</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-gray-500 tracking-[0.15em] uppercase">Scope</span>
            <span className="text-white">ALL_DIRECTORS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- CAPABILITY VISUAL 4: Audit Trail ---
const VisualAuditTrail = () => (
  <div className="w-full min-h-72 relative bg-[#030509] border border-gray-800/60">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">Audit trail</span>
        <span className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase">100% traceable</span>
      </div>

      <div className="flex-1 space-y-4">
        {[
          { label: "Conclusion", value: "VOTE AGAINST", source: "Policy 4.2", highlight: true },
          { label: "Rule applied", value: "Excessive Discretion", source: "Internal", highlight: false },
          { label: "Extracted data", value: "Bonus Cap: N/A", source: "p.42 §3", highlight: false },
          { label: "Source document", value: "Microsoft DEF 14A", source: "SEC", highlight: false },
        ].map((item, i) => (
          <div key={i} className={`flex items-start gap-4 relative ${i === 3 ? "pb-2" : ""}`}>
            {i < 3 && <div className="absolute left-[7px] top-6 w-[1px] h-7 bg-gray-800"></div>}
            <div className={`shrink-0 w-3 h-3 rounded-full border-2 mt-1 z-10 ${
              item.highlight ? "border-[#2eb6b9] bg-[#2eb6b9]" : "border-gray-700 bg-[#030509]"
            }`}></div>
            <div className="flex-1 flex justify-between items-center">
              <div>
                <div className="text-[10px] font-mono text-gray-500 tracking-[0.15em] uppercase mb-1">{item.label}</div>
                <div className={`text-sm font-medium ${item.highlight ? "text-[#2eb6b9]" : "text-white"}`}>{item.value}</div>
              </div>
              <span className="text-[9px] font-mono text-gray-600 bg-gray-900/50 px-2 py-1 border border-gray-800 tracking-[0.1em]">
                {item.source}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800/60 text-[9px] font-mono text-gray-600 tracking-[0.15em] uppercase text-center">
        Source → data → rule → conclusion
      </div>
    </div>
  </div>
);

// ==========================================
// 3. PAGE SECTIONS
// ==========================================

// --- HERO ---
const ProxyBeaconHero = () => (
  <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#030509] border-b border-gray-800/60">
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
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,182,185,0.10)_0,transparent_50%)] blur-[120px]"></div>
      <div className="absolute bottom-[-30%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,182,185,0.04)_0,transparent_60%)] blur-[120px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030509_90%)]"></div>
    </div>

    <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-16 w-full grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-8 hero-anim" style={{ animationDelay: "0ms" }}>
          <div className="w-12 h-[1px] bg-[#2eb6b9]"></div>
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">The Research Engine</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.02] tracking-tighter mb-8 hero-anim" style={{ animationDelay: "120ms" }}>
          ProxyBeacon
        </h1>

        <p className="text-xl md:text-2xl text-white font-light leading-[1.5] mb-6 max-w-xl">
          ProxyBeacon helps stewardship teams generate structured proxy research, governance flags, and policy outputs from company filings within hours.
        </p>

        <p className="text-base text-gray-400 font-light leading-relaxed max-w-xl mb-12 border-l border-gray-800 pl-6">
          Every result is sourced to the underlying disclosure, so your team can review the evidence behind each decision.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 hero-anim" style={{ animationDelay: "400ms" }}>
      <a   href="https://www.tumelo.com/demo"
  target="_blank"
  rel="noopener noreferrer" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2eb6b9] text-[#030509] text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-white whitespace-nowrap">
            <span>Book a Demo</span>
            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </a>
          <a href="#how-it-works" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-gray-700 text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:border-[#2eb6b9] hover:text-[#2eb6b9] whitespace-nowrap">
            See How It Works
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-[0.25em] hero-anim" style={{ animationDelay: "480ms" }}>
          <div className="flex items-center gap-2"><IconShield className="w-4 h-4" /> ISO 27001</div>
          <div className="flex items-center gap-2"><IconGlobe className="w-4 h-4" /> UK · US · EU</div>
        </div>
      </div>

      <div className="relative hidden lg:block w-full hero-anim" style={{ animationDelay: "300ms" }}>
        <HeroResearchReport />
      </div>
    </div>
  </section>
);

// --- CORE CAPABILITIES ---
const CoreCapabilities = () => {
  const capabilities = [
    {
      num: "01",
      title: "Custom research reports",
      description: "Define your own research criteria and receive fully sourced reports within hours of a meeting being announced. Cover board quality, remuneration, shareholder proposals, audit risk, and other areas relevant to your policy.",
      icon: <IconFile />,
    },
    {
      num: "02",
      title: "Automated governance flags",
      description: "Set the governance thresholds that matter to your team. ProxyBeacon monitors disclosures and flags relevant issues when your criteria are met.",
      icon: <IconAlert />,
    },
    {
      num: "03",
      title: "Custom voting policies",
      description: "Create rules in natural language, apply them across markets and sectors, and test them against historical outcomes before putting them into use.",
      icon: <IconLayers />,
    },
    {
      num: "04",
      title: "Peer-comparison reporting",
      description: "Build defined peer groups and compare companies across metrics such as executive compensation and TSR, with sources attached to the analysis.",
      icon: <IconCompare />,
    },
  ];

  return (
    <section className="py-40 bg-[#05080F] border-t border-gray-800/60">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Core Capabilities</span>
            </div>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
  Everything you need to research{" "}
  <span className="text-[#2eb6b9]">and assess proxy votes.</span>
</h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
              ProxyBeacon gives your team control over how proxy research is produced and assessed. Generate research from company filings, flag issues against your thresholds, apply voting rules, and create consistent peer comparisons.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Product surface</span>
            <div className="w-40 h-[1px] bg-gray-800"></div>
          </div>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid lg:grid-cols-2 gap-px bg-gray-800/40 border border-gray-800/40">
          {capabilities.map((cap, i) => (
            <div key={i} className="group relative bg-[#030509] hover:bg-[#0A0E17] p-10 lg:p-12 transition-all duration-500">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>

              <div className="flex items-start justify-between mb-10">
                <div className="text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase transition-colors">
                  Feature / {cap.num}
                </div>
                <div className="w-10 h-10 text-[#2eb6b9]">
                  {cap.icon}
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4">{cap.title}</h3>
              <div className="w-8 h-[1px] bg-gray-700 group-hover:w-16 group-hover:bg-[#2eb6b9] mb-6 transition-all duration-500"></div>
              <p className="text-base text-gray-400 font-light leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

// --- HOW IT WORKS (deep dive) ---
const HowItWorks = () => (
  <section id="how-it-works" className="py-40 bg-[#030509] border-t border-gray-800/60">
   
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">How it works</span>
            </div>

        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
  A structured workflow from{" "}
  <span className="text-[#2eb6b9]">company disclosure to voting analysis.</span>
</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
     ProxyBeacon takes the information published by companies and turns it into structured research for stewardship teams. It extracts the relevant data, applies your policies, identifies exceptions, and preserves the source behind every output.
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Four stages</span>
          <div className="w-40 h-[1px] bg-gray-800"></div>
        </div>
      </div>
      </Reveal>

      <Reveal delay={150}>
      <div className="space-y-px bg-gray-800/40 border border-gray-800/40">
        {[
          {
            num: "01",
            title: "Ingest and extract",
            description: "ProxyBeacon reads DEF 14As, 10-Ks, 8-Ks, annual reports, and other company disclosures. Extracts relevant data and structures it against your research templates.",
            visual: <VisualResearchPipeline />,
          },
          {
            num: "02",
            title: "Apply your policy",
            description: "Rule outputs are applied as explicit conditions. If a company triggers one, the output is consistent and predictable. No ambiguity about why the system reached a conclusion.",
            visual: <VisualRuleBuilder />,
          },
          {
            num: "03",
            title: "Identify exceptions",
            description: "Set governance thresholds for issues such as director overboarding, executive pay, climate targets, and auditor tenure. ProxyBeacon identifies exceptions across the companies you monitor.",
            visual: <VisualGovernanceFlags />,
          },
          {
            num: "04",
            title: "Verify every conclusion",
            description: "Trace each finding back to the underlying filing, including the specific page, paragraph, or data point used to produce it.",
            visual: <VisualAuditTrail />,
          },
        ].map((step, i) => (
          <div key={i} className="bg-[#030509]">
            <div className="grid lg:grid-cols-[1fr_1.1fr] gap-px bg-gray-800/40">
              <div className="bg-[#030509] p-10 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] font-mono text-gray-700 tracking-[0.25em] uppercase mb-8">
                    Stage / {step.num}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">{step.title}</h3>
                  <div className="w-8 h-[1px] bg-gray-700 mb-6"></div>
                  <p className="text-base text-gray-400 font-light leading-relaxed">{step.description}</p>
                </div>
              </div>
              <div className="bg-[#030509] p-10 lg:p-14 flex items-center justify-center">
                {step.visual}
              </div>
            </div>
          </div>
        ))}
      </div>
      </Reveal>
    </div>
  </section>
);

// --- WHY IT MATTERS ---
const WhyItMatters = () => (
  <section className="py-40 bg-[#05080F] border-t border-gray-800/60">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">The Challenge</span>
            </div>

     <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
  Proxy research is harder to manage{" "}
  <span className="text-[#2eb6b9]">at institutional scale.</span>
</h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-4xl">
       Large stewardship teams face thousands of meetings, short decision windows, and increasing expectations to demonstrate how voting decisions were reached. Standardised research can leave teams with less time to assess the issues that matter to their own policies.
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Three drivers</span>
          <div className="w-40 h-[1px] bg-gray-800"></div>
        </div>
      </div>
      </Reveal>

      <Reveal delay={150}>
      <div className="grid lg:grid-cols-3 gap-px bg-gray-800/40 border border-gray-800/40">
        {[
          {
            num: "01",
            title: "Scale",
            stat: "5,000+",
            statLabel: "Meetings per season",
            description: "Large institutional investors may need to assess thousands of meetings in a single proxy season. Each requires research, policy application, and a clear rationale for the final decision.",
          },
          {
            num: "02",
            title: "Timing",
            stat: "48 hrs",
            statLabel: "Before decisions must be made",
            description: "Research needs to arrive early enough for stewardship teams to review it and make considered decisions. Late research compresses the time available for analysis and engagement.",
          },
          {
            num: "03",
            title: "Expectations",
            stat: "2026",
            statLabel: "UK Stewardship Code",
            description: "Investors and regulators increasingly expect firms to demonstrate how voting decisions reflect their own stewardship policies, analysis, and judgement.",
          },
        ].map((driver, i) => (
          <div key={i} className="group relative bg-[#030509] hover:bg-[#0A0E17] p-10 lg:p-12 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
            <div className="text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase mb-8 transition-colors">
              Driver / {driver.num}
            </div>
            <div className="text-5xl font-light text-white tracking-tighter mb-3">{driver.stat}</div>
            <div className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase mb-8">{driver.statLabel}</div>
            <div className="w-8 h-[1px] bg-gray-700 group-hover:w-16 group-hover:bg-[#2eb6b9] mb-6 transition-all duration-500"></div>
            <h3 className="text-lg font-bold text-white tracking-tight mb-4">{driver.title}</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed">{driver.description}</p>
          </div>
        ))}
      </div>
      </Reveal>

      <Reveal delay={150}>
      <div className="mt-16 p-10 lg:p-12 border border-gray-800/40 bg-[#030509]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.25em] uppercase mb-4">The outcome</div>
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
              Research tools built for institutional stewardship.
            </h3>
            <p className="text-base text-gray-400 font-light leading-relaxed">
Give your team a faster way to produce its own research, apply its policies, and review the evidence behind each conclusion without building the entire workflow internally.
            </p>
          </div>
       <a
  href="https://www.tumelo.com/demo"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#2eb6b9] hover:text-white transition-colors whitespace-nowrap"
>
  <span>Book a demo</span>
  <span className="w-8 h-[1px] bg-[#2eb6b9] group-hover:bg-white group-hover:w-12 transition-all duration-500"></span>
  <IconArrowRight className="w-3 h-3" />
</a>
        </div>
      </div>
      </Reveal>
    </div>
  </section>
);

// --- TRUST SECTION ---
const TrustSection = () => (
  <section className="py-40 bg-[#030509] border-t border-gray-800/60 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2eb6b9] opacity-[0.04] blur-[120px] rounded-full"></div>

    <div className="relative max-w-[90rem] mx-auto px-8 md:px-16">
      <Reveal>
      <div className="max-w-3xl mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Trust & Accuracy</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
          Can AI be trusted <br />
          <span className="text-[#2eb6b9]">with fiduciary weight?</span>
        </h2>
        <p className="text-lg text-gray-400 font-light leading-relaxed max-w-3xl">
Not on its own. ProxyBeacon uses AI for the parts of proxy research it is suited to: reading, extracting, structuring, and flagging information. Your policies determine the rules, your team reviews the evidence, and every output remains traceable to its source.
        </p>
      </div>
      </Reveal>

      <Reveal delay={150}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800/40 border border-gray-800/40">
        {[
          { num: "01", icon: <IconZap />, title: "Extracts, doesn’t judge", desc: "AI reads company filings and structures the relevant information against your research criteria. Your team retains judgement over how that evidence is interpreted and applied." },
          { num: "02", icon: <IconShield />, title: "Rules stay explicit", desc: "Your rules are applied as defined conditions, producing consistent outputs when the same criteria are met. There is no hidden decision-making layer." },
          { num: "03", icon: <IconFile />, title: "Every output is sourced", desc: "Each result links back to the relevant page, paragraph, or data point in the filing, so your team can verify the evidence behind it." },
          { num: "04", icon: <IconCheck />, title: "Hallucination prevention", desc: "When information is missing or ambiguous in the source material, ProxyBeacon flags it rather than filling the gap with an unsupported answer." },
        ].map((item, i) => (
          <div key={i} className="group relative bg-[#030509] hover:bg-[#0A0E17] p-10 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>

            <div className="flex items-start justify-between mb-8">
              <div className="text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase transition-colors">
                Principle / {item.num}
              </div>
              <div className="w-10 h-10 text-[#2eb6b9] flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            <h4 className="text-lg font-bold text-white tracking-tight mb-4">{item.title}</h4>
            <div className="w-8 h-[1px] bg-gray-700 group-hover:w-16 group-hover:bg-[#2eb6b9] mb-5 transition-all duration-500"></div>
            <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
          </div>
            ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};

// --- WHO BENEFITS ---
const WhoBenefits = () => {
  const audiences = [
    {
      label: "For Stewardship Teams",
      headline: "Produce research faster.",
      description: "Research thousands of meetings, apply your firm's policies, and give every voting decision a clear evidence trail.",
      benefits: [
        "Generate research at scale while maintaining consistency",
        "Apply your firm's policies directly",
        "Produce clear, auditable rationales for every decision",
        "Reduce time on manual document review",
      ],
      accent: true,
    },
    {
      label: "For Asset Owners & Trustees",
      headline: "See how votes are decided.",
      description: "Get greater visibility into the research behind voting decisions and assess whether they reflect your stewardship priorities.",
      benefits: [
        "Access structured research to understand decisions",
        "Define and apply your own governance priorities",
        "Challenge or validate manager decisions with evidence",
        "Strengthen accountability through transparent outputs",
      ],
      accent: false,
    },
    {
      label: "For Firms Reducing Advisor Reliance",
      headline: "Build internal capability.",
      description: "Produce proxy research around your own frameworks, whether you are reducing reliance on external advisors or supplementing their recommendations.",
      benefits: [
        "Generate structured research using your own frameworks",
        "Maintain consistency across large volumes",
        "Reduce dependency on standardised recommendations",
        "Build internal capability without a proprietary platform",
      ],
      accent: false,
    },
  ];

  return (
    <section className="py-40 bg-[#05080F] border-t border-gray-800/60 relative">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <Reveal>
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Who benefits</span>
            </div>
           
           
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
  Built for {" "}
  <span className="text-[#2eb6b9]">every role in stewardship.</span>
</h2>

            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-2xl">
              ProxyBeacon gives stewardship teams, asset owners, and investment firms more control over how proxy research is produced, reviewed, and applied.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Select your role</span>
            <div className="w-40 h-[1px] bg-gray-800"></div>
          </div>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid md:grid-cols-3 gap-px bg-gray-800/40 border border-gray-800/40">
          {audiences.map((audience, i) => (
            <div
              key={i}
              className={`group relative p-10 lg:p-14 flex flex-col justify-between transition-all duration-700 ${
                audience.accent ? "bg-[#0A0E17]" : "bg-[#030509] hover:bg-[#0A0E17]"
              }`}
            >
              {audience.accent && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#2eb6b9] opacity-[0.08] blur-[100px] rounded-full"></div>
                </div>
              )}
              {audience.accent && (
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#2eb6b9] via-[#2eb6b9]/40 to-transparent"></div>
              )}
              {!audience.accent && (
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
              )}

              <div className="relative">
                <div className={`flex items-center gap-3 mb-10 transition-colors duration-500 ${
                  audience.accent ? "text-[#2eb6b9]" : "text-gray-700 group-hover:text-[#2eb6b9]"
                }`}>
                  <span className="text-[10px] font-mono tracking-[0.25em]">{String(i + 1).padStart(2, "0")}</span>
                  <div className="w-6 h-[1px] bg-current"></div>
                </div>

                <div className={`text-[10px] font-mono tracking-[0.25em] uppercase mb-6 transition-colors duration-500 ${
                  audience.accent ? "text-[#2eb6b9]" : "text-gray-500 group-hover:text-[#2eb6b9]"
                }`}>
                  {audience.label}
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-[1.15] mb-6">
                  {audience.headline}
                </h3>

                <p className="text-sm text-gray-400 font-light leading-relaxed mb-10">
                  {audience.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {audience.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="shrink-0 mt-1 text-[#2eb6b9]">
                        <IconCheck className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-sm text-gray-300 font-light leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex items-end justify-between border-t border-gray-800/60 pt-8">
           <a
  href="https://www.tumelo.com/contact?hsLang=en"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-white hover:text-[#2eb6b9] transition-colors group/cta"
>
  <span>Speak to team</span>
  <span className="w-8 h-[1px] bg-gray-700 group-hover/cta:bg-[#2eb6b9] group-hover/cta:w-12 transition-all duration-500"></span>
  <IconArrowRight className="w-3 h-3" />
</a>
              </div>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
};



// --- CASE STUDY ---
const CaseStudy = () => (
  <section className="bg-[#05080F] py-40 border-t border-gray-800/60 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2eb6b9] opacity-[0.03] skew-x-12 transform translate-x-32 pointer-events-none"></div>
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <Reveal>
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Client story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.3] mb-12">
            “Tumelo is an extremely agile, collaborative, and results-focused team. They are a pleasure to work with.”
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-16 h-[1px] bg-gray-700"></div>
            <div>
              <p className="text-white font-bold tracking-wide uppercase text-sm mb-1">Stuart Murphy</p>
              <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase">Head of Client Platforms, LGIM</p>
            </div>
          </div>
        </div>

        <div className="relative p-10 md:p-14 border border-gray-800 bg-[#030509] shadow-2xl z-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2eb6b9] to-transparent"></div>
          <div className="flex justify-between items-start mb-12">
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase border border-gray-700 px-3 py-1">Case Study</span>
            <span className="text-2xl font-serif text-white opacity-40">LGIM</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
            Rolling out pass-through voting for a £2bn pension fund.
          </h3>
          <p className="text-gray-400 font-light leading-relaxed mb-10">
            Discover how Legal & General Investment Management (LGIM) used Tumelo's infrastructure to give their underlying pension contributors unprecedented visibility and control.
          </p>
          <a
            href="https://25524212.hs-sites-eu1.com/hubfs/LGIM%20announcement/Tumelo%20powers%20LGIMs%20pass-through%20voting%20offering.pdf"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between w-full border border-gray-700 p-6 hover:border-[#2eb6b9] transition-colors bg-[#0A0E17]"
          >
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Download Report</span>
              <span className="text-gray-500 font-mono text-[10px]">PDF / 2.4 MB</span>
            </div>
            <IconArrowRight className="text-gray-500 group-hover:text-[#2eb6b9] transition-colors w-6 h-6" />
          </a>
        </div>
      </div>
      </Reveal>
    </div>
  </section>
);

// --- FAQ ---

const FAQ = () => {
  const faqs = [
    {
      q: "What is ProxyBeacon?",
      a: "ProxyBeacon is Tumelo’s AI platform for proxy voting research. It turns company filings into structured, fully sourced research, governance flags, and policy outputs based on your firm's own criteria.",
    },
    {
      q: "How does ProxyBeacon differ from using a proxy advisor?",
      a: "A proxy advisor provides research and recommendations based on its own methodology. ProxyBeacon lets your team define the research criteria, policies, and rules used to assess each meeting. Every output is linked to the underlying source.",
    },
    {
      q: "How does AI work? Can I trust the outputs?",
      a: "ProxyBeacon uses AI to extract and structure information from company filings. It does not make the voting decision. Your rules determine the output, and every result is linked to its source. Missing or ambiguous information is flagged.",
    },
    {
      q: "Can I use ProxyBeacon alongside my existing proxy advisor?",
      a: "Yes. ProxyBeacon can be used alongside your existing proxy advisor. Your team can compare third-party recommendations with research generated using your own policies and criteria.",
    },
    {
      q: "How quickly does ProxyBeacon generate reports?",
      a: "ProxyBeacon can generate structured, fully sourced research within hours of a meeting being announced. This gives your team more time to review the research before making a voting decision.",
    },
    {
      q: "Can I build and back-test my own voting policies?",
      a: "Yes. You can define voting policies in natural language, apply them by market, sector, or theme, and back-test them against historical data. Policies can also be updated as your requirements change.",
    },
    {
      q: "Is ProxyBeacon available outside the UK?",
      a: "Yes. ProxyBeacon supports company filings across global markets and can be used by stewardship teams covering international equity portfolios.",
    },
    {
      q: "How does ProxyBeacon relate to ProxySphere?",
      a: "ProxyBeacon handles proxy research and analysis. ProxySphere handles voting in pooled funds through pass-through voting. They can work together, with ProxyBeacon supporting the research and ProxySphere supporting vote execution.",
    },
  ];


  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-40 bg-[#030509] border-t border-gray-800/60 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[60vw] h-[400px] bg-[#2eb6b9] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          <div>
            <div className="sticky top-32">
            <Reveal>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">FAQ</span>
              </div>
         <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
  Questions about{" "}
  <span className="text-[#2eb6b9]">ProxyBeacon.</span>
</h2>
              <p className="text-base text-gray-400 font-light leading-relaxed mb-10 max-w-md">
           Find out how ProxyBeacon generates research, applies your policies, works alongside existing advisors, and supports stewardship teams across markets.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-[1px] bg-gray-800"></div>
                <span className="text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase whitespace-nowrap">Want to know more?</span>
                <div className="flex-1 h-[1px] bg-gray-800"></div>
              </div>
           <a
  href="https://www.tumelo.com/contact?hsLang=en"
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

          <Reveal delay={150}>
          <div className="border-t border-gray-800/40">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="border-b border-gray-800/40">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start gap-6 py-7 text-left group"
                  >
                    <span className={`shrink-0 text-[10px] font-mono tracking-[0.25em] mt-2 transition-colors duration-500 ${
                      isOpen ? "text-[#2eb6b9]" : "text-gray-700 group-hover:text-[#2eb6b9]"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className={`flex-1 text-lg md:text-xl font-medium tracking-tight transition-colors duration-500 ${
                      isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
                    }`}>
                      {faq.q}
                    </span>
                    <span className={`shrink-0 mt-1 w-6 h-6 flex items-center justify-center border transition-all duration-500 ${
                      isOpen
                        ? "border-[#2eb6b9] bg-[#2eb6b9]/10 text-[#2eb6b9] rotate-45"
                        : "border-gray-800 text-gray-500 group-hover:border-[#2eb6b9] group-hover:text-[#2eb6b9]"
                    }`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pb-8 pl-12 pr-12">
                      <div className="w-8 h-[1px] bg-[#2eb6b9] mb-6"></div>
                      <p className="text-sm md:text-base text-gray-400 font-light leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </Reveal>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-16 pt-8 border-t border-gray-800/40">
          <div className="flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">Median response time · Under 24 hours</span>
          </div>
          <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
            <span>UK</span><span className="text-gray-800">·</span><span>US</span><span className="text-gray-800">·</span><span>EU</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- FINAL CTA ---
const CTASection = () => (
  <section id="contact" className="py-48 bg-[#030509] relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[500px] bg-[#2eb6b9] opacity-[0.05] blur-[140px] rounded-full pointer-events-none"></div>
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030509_85%)] pointer-events-none"></div>

    <Reveal>
    <div className="relative max-w-5xl mx-auto px-8 md:px-16 text-center">
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Explore ProxyBeacon</span>
        <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
      </div>

    <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1.02] mb-10">
  Put ProxyBeacon to work{" "}
  <span className="text-[#2eb6b9]">on your research.</span>
</h2>

      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-4xl mx-auto mb-16">
Talk to our team about your research criteria, voting policies, and current workflow. We’ll show you how ProxyBeacon can support the work your stewardship team already does.
      </p>

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

      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-16 h-[1px] bg-gray-800"></div>
        <span className="text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">Trusted by</span>
        <div className="w-16 h-[1px] bg-gray-800"></div>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-16">
        {["Legal & General", "Fidelity", "Glass Lewis", "PIRC", "Penfold", "Cushon"].map((name, i) => (
          <span key={i} className="text-base md:text-lg font-serif text-gray-600 hover:text-white transition-colors duration-500 cursor-default">
            {name}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></span>
          ISO 27001
        </span>
        <span className="text-gray-800">·</span><span>SOC 2 Type II</span>
        <span className="text-gray-800">·</span><span>AES-256</span>
        <span className="text-gray-800">·</span><span>UK</span>
        <span className="text-gray-800">·</span><span>US</span>
        <span className="text-gray-800">·</span><span>EU</span>
      </div>
    </div>
    </Reveal>
  </section>
);


// ==========================================
// 4. MAIN PAGE EXPORT
// ==========================================
export default function ProxyBeacon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030509] font-sans selection:bg-[#2eb6b9] selection:text-[#030509] relative">
      <div
        className="pointer-events-none fixed inset-0 z-[100] opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <Nav />

      <main>
        <ProxyBeaconHero />
        <CoreCapabilities />
        <HowItWorks />
        <WhyItMatters />
        <TrustSection />
        <WhoBenefits />
        <CaseStudy />
        <FAQ />
        <CTASection />
      </main>


    </div>
  );
}