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

const IconUsers = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <path d="M20 8v6M23 11h-6" />
  </svg>
);

const IconSplit = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M16 3h5v5M4 20 21 3M21 16v5h-5M15 15l6 6M4 4l5 5" />
  </svg>
);

const IconBell = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const IconLayers = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

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

// --- HERO VISUAL: Live Resolution List (ProxySphere product UI) ---
const HeroResolutionList = () => (
  <div className="relative w-full">
    <div className="absolute -inset-12 bg-[#2eb6b9] opacity-[0.07] blur-[100px] rounded-full pointer-events-none"></div>
    <div className="relative border border-gray-800/60 bg-[#0A0E17]/70 backdrop-blur-sm">

      {/* App Header */}
      <div className="border-b border-gray-800/60 px-6 py-4 flex items-center justify-between bg-[#030509]/80">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-[#2eb6b9] animate-pulse"></div>
          <span className="text-[11px] font-mono text-gray-300 tracking-[0.2em] uppercase">Live · ProxySphere</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">Portfolio · 42 meetings</span>
        </div>
      </div>

      {/* Fund Context */}
      <div className="border-b border-gray-800/60 px-6 py-5 bg-[#030509]/40">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-1">Current meeting</div>
            <div className="text-white text-lg font-semibold tracking-tight">Apple Inc. · Annual General Meeting</div>
          </div>
          <div className="text-right">
            <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-1">Deadline</div>
            <div className="text-[#2eb6b9] font-mono text-sm font-semibold">3 days left</div>
          </div>
        </div>
      </div>

      {/* Resolutions List */}
      <div className="divide-y divide-gray-800/40">
        {[
          {
            num: "01",
            title: "Elect Director — A. Levinson",
            category: "Governance",
            recommendation: "FOR",
            vote: "In line with policy",
            status: "policy",
          },
          {
            num: "02",
            title: "Advisory Vote on Executive Compensation",
            category: "Remuneration",
            recommendation: "AGAINST",
            vote: "Override — voted manually",
            status: "override",
          },
          {
            num: "03",
            title: "Approve Climate Transition Plan",
            category: "Environment",
            recommendation: "FOR",
            vote: "In line with policy",
            status: "policy",
          },
          {
            num: "04",
            title: "Ratify Independent Auditor",
            category: "Audit",
            recommendation: "FOR",
            vote: "Pending review",
            status: "pending",
          },
        ].map((row, i) => (
          <div key={i} className="group px-6 py-5 hover:bg-[#0A0E17] transition-colors">
            <div className="flex items-start gap-5">
              <span className="shrink-0 text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.2em] mt-1 transition-colors">
                {row.num}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-sm text-white font-medium tracking-tight mb-2">
                  {row.title}
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-gray-600 tracking-[0.15em] uppercase">
                  <span>{row.category}</span>
                  <span className="text-gray-800">·</span>
                  <span>Policy Rec: <span className={row.recommendation === "FOR" ? "text-[#2eb6b9]" : "text-red-400"}>{row.recommendation}</span></span>
                </div>
              </div>
              <div className="shrink-0 text-right">
                <div className={`text-[10px] font-mono tracking-[0.15em] uppercase mb-1 ${
                  row.status === "policy" ? "text-gray-400" :
                  row.status === "override" ? "text-[#2eb6b9]" :
                  "text-yellow-500"
                }`}>
                  {row.status === "policy" ? "✓ Aligned" :
                   row.status === "override" ? "● Override" :
                   "◐ Pending"}
                </div>
                <div className="text-[10px] font-mono text-gray-600 tracking-tight">
                  {row.vote}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Summary */}
      <div className="border-t border-gray-800/60 px-6 py-4 bg-[#030509]/60">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.15em]">
          <span className="text-gray-500">4 of 12 resolutions</span>
          <span className="text-[#2eb6b9]">Submit vote →</span>
        </div>
      </div>
    </div>
  </div>
);

// --- CAPABILITY VISUAL 1: Resolution Split ---
const VisualResolutionSplit = () => (
  <div className="w-full h-72 relative bg-[#030509] border border-gray-800/60 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col">
      <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-6">Resolution #2 · Executive Pay</div>

      {/* One resolution, many investors */}
      <div className="flex-1 flex flex-col justify-center gap-4">
        {[
          { label: "Climate policy mandates", vote: "AGAINST", width: "42%", color: "bg-[#2eb6b9]" },
          { label: "House default policy", vote: "FOR", width: "31%", color: "bg-gray-500" },
          { label: "Manual overrides", vote: "AGAINST", width: "18%", color: "bg-gray-600" },
          { label: "Unvoted — house default", vote: "FOR", width: "9%", color: "bg-gray-700" },
        ].map((row, i) => (
          <div key={i}>
            <div className="flex justify-between items-baseline mb-2">
              <span className="text-xs text-gray-300 font-light">{row.label}</span>
              <span className={`text-xs font-mono font-semibold ${
                row.vote === "FOR" ? "text-[#2eb6b9]" : "text-red-400"
              }`}>{row.vote}</span>
            </div>
            <div className="h-[3px] bg-gray-900 w-full">
              <div className={`h-full ${row.color}`} style={{ width: row.width }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-800/60 flex justify-between text-[9px] font-mono text-gray-500 tracking-[0.2em] uppercase">
        <span>One resolution</span>
        <span className="text-[#2eb6b9]">Multiple outcomes</span>
      </div>
    </div>
  </div>
);

// --- CAPABILITY VISUAL 2: Policy Agnostic Ingestion ---
const VisualPolicyAgnostic = () => (
  <div className="w-full h-72 relative bg-[#030509] border border-gray-800/60 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col">
      <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-8">Inbound policy sources</div>

      {/* Sources */}
      <div className="space-y-3 flex-1">
        {[
          { name: "Proxy Advisor A", method: "API", status: "active" },
          { name: "Proxy Advisor B", method: "SFTP", status: "active" },
          { name: "Internal Custom Policy", method: "Manual", status: "active" },
          { name: "Segregated Mandate Policy", method: "API", status: "active" },
        ].map((source, i) => (
          <div key={i} className="flex items-center justify-between p-3 border border-[#2eb6b9]/20 bg-[#2eb6b9]/5">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
              <span className="text-xs text-white font-mono">{source.name}</span>
            </div>
            <span className="text-[9px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase">{source.method}</span>
          </div>
        ))}
      </div>

      {/* Single output */}
      <div className="mt-6 pt-6 border-t border-gray-800/60">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">Consolidated output</span>
          <span className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase font-semibold">→ ProxySphere</span>
        </div>
      </div>
    </div>
  </div>
);

// --- CAPABILITY VISUAL 3: No Vote Unvoted ---
const VisualNoVoteUnvoted = () => (
  <div className="w-full h-72 relative bg-[#030509] border border-gray-800/60 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col justify-center">
      <div className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase mb-8">Fallback pipeline</div>

      {/* Flow */}
      <div className="space-y-5">
        {[
          { label: "Investor votes", value: "4,281 cast", status: "executed" },
          { label: "Investor silent", value: "819 pending", status: "fallback" },
          { label: "House default applied", value: "819 → House Policy", status: "executed" },
        ].map((row, i) => (
          <div key={i} className={`flex items-center justify-between p-3 border ${
            row.status === "fallback" ? "border-yellow-500/30 bg-yellow-500/5" : "border-[#2eb6b9]/30 bg-[#2eb6b9]/5"
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-1.5 h-1.5 rounded-full ${
                row.status === "fallback" ? "bg-yellow-500" : "bg-[#2eb6b9]"
              }`}></div>
              <span className="text-xs text-white font-mono">{row.label}</span>
            </div>
            <span className="text-[10px] font-mono text-gray-400">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800/60 flex justify-between text-[9px] font-mono tracking-[0.2em] uppercase">
        <span className="text-gray-500">Total capital voted</span>
        <span className="text-[#2eb6b9] font-semibold">100%</span>
      </div>
    </div>
  </div>
);

// --- CAPABILITY VISUAL 4: Unified Architecture ---
const VisualUnifiedArchitecture = () => (
  <div className="w-full h-72 relative bg-[#030509] border border-gray-800/60 overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>

    <div className="relative p-8 h-full flex flex-col items-center justify-center">
      {/* Single fund */}
      <div className="w-56 h-12 bg-[#0A0E17] border border-[#2eb6b9] flex items-center justify-center z-10 mb-8">
        <span className="text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] uppercase">One Pooled Fund</span>
      </div>

      {/* Split */}
      <div className="w-64 h-16 relative">
        <svg className="w-full h-full" viewBox="0 0 200 60">
          <path d="M100 0 L100 20 L40 40 L40 60" stroke="#2eb6b9" strokeWidth="1.5" fill="none" />
          <path d="M100 0 L100 20 L160 40 L160 60" stroke="#2eb6b9" strokeWidth="1.5" fill="none" />
          <circle cx="40" cy="60" r="3" fill="#2eb6b9" />
          <circle cx="160" cy="60" r="3" fill="#2eb6b9" />
        </svg>
      </div>

      {/* Two investor classes */}
      <div className="flex gap-16 mt-4">
        {[
          { label: "Institutional", sub: "Mandate A" },
          { label: "Retail", sub: "Platform B" },
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="w-28 h-11 bg-[#0A0E17] border border-gray-700 flex items-center justify-center mb-2">
              <span className="text-[9px] font-mono text-gray-400 tracking-[0.15em] uppercase">{item.label}</span>
            </div>
            <span className="text-[8px] font-mono text-gray-600 uppercase tracking-[0.15em]">{item.sub}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-6 text-[9px] font-mono text-gray-500 uppercase tracking-[0.2em]">
        No bifurcated systems
      </div>
    </div>
  </div>
);

// ==========================================
// 3. PAGE SECTIONS
// ==========================================

// --- HERO ---
const ProxySphereHero = () => (
  <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#030509] border-b border-gray-800/60">
    <div className="absolute inset-0 z-0 pointer-events-none">
      <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,182,185,0.10)_0,transparent_50%)] blur-[120px]"></div>
      <div className="absolute bottom-[-30%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(46,182,185,0.04)_0,transparent_60%)] blur-[120px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030509_90%)]"></div>
    </div>

    <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-16 w-full grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center">
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-[1px] bg-[#2eb6b9]"></div>
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">
            The Voting Engine
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.02] tracking-tighter mb-8">
          ProxySphere
        </h1>

        <p className="text-xl md:text-2xl text-white font-light leading-[1.5] mb-6 max-w-xl">
          Every investor in your fund gets a direct, proportional vote on every resolution — without your operations team touching a spreadsheet.
        </p>

        <p className="text-base text-gray-400 font-light leading-relaxed max-w-xl mb-12 border-l border-gray-800 pl-6">
          Built specifically for pass-through voting in pooled funds and ETFs. Institutional and retail investors, in one vehicle, with one audit trail.
        </p>

        <div className="flex flex-col sm:flex-row gap-5">
          <a href="#contact" className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2eb6b9] text-[#030509] text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:bg-white whitespace-nowrap">
            <span>Book a Demo</span>
            <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 shrink-0" />
          </a>
          <a href="#how-it-works" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-gray-700 text-[11px] font-bold uppercase tracking-[0.25em] transition-all hover:border-[#2eb6b9] hover:text-[#2eb6b9] whitespace-nowrap">
            See How It Works
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-8 text-[10px] font-mono text-gray-500 uppercase tracking-[0.25em]">
          <div className="flex items-center gap-2"><IconShield className="w-4 h-4" /> ISO 27001</div>
          <div className="flex items-center gap-2"><IconGlobe className="w-4 h-4" /> UK · US · EU</div>
        </div>
      </div>

      <div className="relative hidden lg:block w-full">
        <HeroResolutionList />
      </div>
    </div>
  </section>
);

// --- THE PRODUCT CAPABILITY GRID (Front and center, right after hero) ---
const CoreCapabilities = () => {
  const capabilities = [
    {
      num: "01",
      title: "Full voting flexibility",
      description: "Investors choose a policy, vote resolution by resolution, or override their policy on individual proposals. All three coexist in the same fund.",
      icon: <IconSplit />,
    },
    {
      num: "02",
      title: "Policy agnostic",
      description: "Ingest recommendations from any advisor, your own internal mandate, or a client's bespoke policy — via API or SFTP. One consolidated output.",
      icon: <IconLayers />,
    },
    {
      num: "03",
      title: "No vote goes un-voted",
      description: "If an investor is silent, their vote stays with the fund manager and defaults to house policy. 100% of capital is always voted.",
      icon: <IconShield />,
    },
    {
      num: "04",
      title: "Retail + institutional",
      description: "Synthesises institutional mandates and retail platforms in one pooled vehicle. No segregation, no bifurcated systems.",
      icon: <IconUsers />,
    },
  ];

  return (
    <section className="py-40 bg-[#05080F] border-t border-gray-800/60">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Core Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
              Four capabilities. <br />
              <span className="text-[#2eb6b9]">One engine.</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
              Built to handle the operational reality of pooled fund voting at institutional scale — from policy ingestion to vote reconciliation.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Product surface</span>
            <div className="w-40 h-[1px] bg-gray-800"></div>
          </div>
        </div>

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
              <p className="text-base text-gray-400 font-light leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- HOW IT WORKS (Deep dive) ---
const HowItWorks = () => (
  <section id="how-it-works" className="py-40 bg-[#030509] border-t border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">How it works</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
            From holdings <br />
            <span className="text-[#2eb6b9]">to votes cast.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
            A linear pipeline. Every step auditable. Every investor accounted for.
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Four stages</span>
          <div className="w-40 h-[1px] bg-gray-800"></div>
        </div>
      </div>

      {/* 4 capabilities with visuals */}
      <div className="space-y-px bg-gray-800/40 border border-gray-800/40">
        {[
          {
            num: "01",
            title: "Investor entitlements calculated",
            description: "Each investor in the fund is identified and their voting entitlement is calculated from their holdings — across custodians, platforms, nominees, and nested structures.",
            visual: <VisualUnifiedArchitecture />,
          },
          {
            num: "02",
            title: "Policies ingested and applied",
            description: "ProxySphere ingests voting recommendations from any advisor, applies institutional mandates to pooled holdings, and routes bespoke policies to the right investors.",
            visual: <VisualPolicyAgnostic />,
          },
          {
            num: "03",
            title: "Votes split and executed",
            description: "The fund's total vote is divided proportionally. Different investors can hold different positions on the same resolution — all reconciled into a single, auditable record.",
            visual: <VisualResolutionSplit />,
          },
          {
            num: "04",
            title: "Nothing goes un-voted",
            description: "If an investor doesn't vote, their share defaults to the manager's house policy. 100% of the fund's capital is always exercised, with zero silent abstentions.",
            visual: <VisualNoVoteUnvoted />,
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
    </div>
  </section>
);

// --- WHY IT MATTERS ---
const WhyItMatters = () => (
  <section className="py-40 bg-[#05080F] border-t border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">The Stakes</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
            Why this matters <br />
            <span className="text-[#2eb6b9]">right now.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
            Two forces converging. Concentration of voting power, and regulatory momentum.
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Two drivers</span>
          <div className="w-40 h-[1px] bg-gray-800"></div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-px bg-gray-800/40 border border-gray-800/40">
        <div className="group relative bg-[#030509] hover:bg-[#0A0E17] p-10 lg:p-14 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
          <div className="text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase mb-8 transition-colors">Driver 01</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">Concentration of voting power</h3>
          <p className="text-base text-gray-400 font-light leading-relaxed mb-10">
            Index investing has concentrated voting power in a few hands. Trillions in passive assets cast votes on behalf of millions with no direct say.
          </p>
          <div className="grid grid-cols-2 gap-px bg-gray-800/40 border border-gray-800/40">
            <div className="bg-[#030509] p-5">
              <div className="text-2xl font-light text-white tracking-tighter mb-1">$12T+</div>
              <div className="text-[9px] font-mono text-gray-500 tracking-[0.15em] uppercase leading-tight">Passive AUM globally</div>
            </div>
            <div className="bg-[#030509] p-5">
              <div className="text-2xl font-light text-white tracking-tighter mb-1">3</div>
              <div className="text-[9px] font-mono text-gray-500 tracking-[0.15em] uppercase leading-tight">Firms control most votes</div>
            </div>
          </div>
        </div>

        <div className="group relative bg-[#030509] hover:bg-[#0A0E17] p-10 lg:p-14 transition-all duration-500">
          <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
          <div className="text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase mb-8 transition-colors">Driver 02</div>
          <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">Regulatory momentum</h3>
          <p className="text-base text-gray-400 font-light leading-relaxed mb-10">
            UK, EU, and US regulators are converging on the same conclusion: underlying investors deserve a say.
          </p>
          <div className="space-y-4">
            {[
              { region: "UK", detail: "Stewardship Code 2026 · Digitisation Taskforce" },
              { region: "EU", detail: "SRD II · Shareholder engagement frameworks" },
              { region: "US", detail: "INDEX Act · SEC Investor Advisory Committee" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 pb-4 border-b border-gray-800/40 last:border-0 last:pb-0">
                <span className="shrink-0 text-[10px] font-mono text-[#2eb6b9] tracking-[0.2em] w-8 pt-1">{item.region}</span>
                <span className="text-sm text-gray-300 font-light leading-relaxed">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- WHO BENEFITS ---
const WhoBenefits = () => {
  const audiences = [
    {
      label: "For Asset Managers",
      headline: "Retain control. Reduce risk.",
      description: "Differentiate your fund range, meet compliance, prevent AUM bleed — without building infrastructure.",
      benefits: [
        "Offer clients a direct say in how shares are voted",
        "Differentiate your fund range with voting as a feature",
        "Meet regulatory expectations around transparency",
        "Reduce risk of client attrition",
        "Retain full control of fund management",
      ],
      accent: true,
    },
    {
      label: "For Pension Trustees",
      headline: "Demonstrate active stewardship.",
      description: "Ensure votes reflect your scheme's priorities. Give members a tangible connection to their pension.",
      benefits: [
        "Demonstrate active stewardship to members",
        "Ensure votes reflect scheme priorities",
        "Meet UK Stewardship Code 2026 expectations",
        "Give members a tangible connection",
        "Hold managers accountable with data",
      ],
      accent: false,
    },
    {
      label: "For Retail Investors",
      headline: "A real say in what you own.",
      description: "Extend fundamental shareholder rights to the individual layer — without sacrificing diversification.",
      benefits: [
        "Vote granularly on climate, pay, governance",
        "Maintain passive investment strategies",
        "Full transparency into voting records",
        "No change to how you invest",
        "Access without minimum thresholds",
      ],
      accent: false,
    },
  ];

  return (
    <section className="py-40 bg-[#030509] border-t border-gray-800/60 relative">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Who benefits</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
              Three audiences. <br />
              <span className="text-[#2eb6b9]">One infrastructure.</span>
            </h2>
            <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
              ProxySphere sits between the fund and the shareholder. Here is what that means for each side of the table.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Select your role</span>
            <div className="w-40 h-[1px] bg-gray-800"></div>
          </div>
        </div>

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
                <Link
                  to="#contact"
                  className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-white hover:text-[#2eb6b9] transition-colors group/cta"
                >
                  <span>Speak to team</span>
                  <span className="w-8 h-[1px] bg-gray-700 group-hover/cta:bg-[#2eb6b9] group-hover/cta:w-12 transition-all duration-500"></span>
                  <IconArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- ADOPTION ---
const Adoption = () => (
  <section className="py-40 bg-[#05080F] border-t border-gray-800/60 relative overflow-hidden">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[400px] bg-[#2eb6b9] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

    <div className="relative max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-end mb-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Adoption</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.05] mb-8">
            Already live at <br />
            <span className="text-[#2eb6b9]">institutional scale.</span>
          </h2>
          <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
            Pass-through voting adoption has accelerated rapidly since 2022. Many of the world's largest asset managers now offer it.
          </p>
        </div>
        <div className="hidden lg:flex flex-col items-end gap-3 pb-2">
          <span className="text-[10px] font-mono tracking-[0.25em] text-gray-600 uppercase">Since 2022</span>
          <div className="w-40 h-[1px] bg-gray-800"></div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-gray-800/40 border border-gray-800/40">
        {[
          { name: "LGIM", year: "2023", detail: "Launched pass-through voting to clients" },
          { name: "BlackRock", year: "2023", detail: "Voting Choice — largest by AUM" },
          { name: "Vanguard", year: "2024", detail: "Investor Choice piloted across funds" },
          { name: "State Street", year: "2024", detail: "Proxy Voting Choice expanded to EU" },
          { name: "SEI", year: "2025", detail: "Vote Choice program launched" },
        ].map((firm, i) => (
          <div key={i} className="group relative bg-[#030509] hover:bg-[#0A0E17] p-8 transition-all duration-500">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#2eb6b9] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out"></div>
            <div className="text-[10px] font-mono text-gray-700 group-hover:text-[#2eb6b9] tracking-[0.25em] uppercase mb-6 transition-colors">
              {firm.year}
            </div>
            <div className="text-xl font-serif text-white tracking-tight mb-4">{firm.name}</div>
            <div className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#2eb6b9] mb-5 transition-colors"></div>
            <p className="text-[13px] text-gray-400 font-light leading-relaxed">{firm.detail}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-10 pt-8 border-t border-gray-800/40">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-[#2eb6b9]"></div>
          <span className="text-[10px] font-mono text-gray-500 tracking-[0.25em] uppercase">
            ProxySphere powers independent pass-through voting across UK · EU · US
          </span>
        </div>
      </div>
    </div>
  </section>
);

// --- CASE STUDY ---
const CaseStudy = () => (
  <section className="bg-[#030509] py-40 border-t border-gray-800/60 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-1/3 h-full bg-[#2eb6b9] opacity-[0.03] skew-x-12 transform translate-x-32 pointer-events-none"></div>
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Client story</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.3] mb-12">
            "Tumelo is an extremely agile, collaborative, and results-focused team. They are a pleasure to work with."
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-16 h-[1px] bg-gray-700"></div>
            <div>
              <p className="text-white font-bold tracking-wide uppercase text-sm mb-1">Stuart Murphy</p>
              <p className="text-gray-500 text-xs font-mono tracking-[0.2em] uppercase">Head of Client Platforms, LGIM</p>
            </div>
          </div>
        </div>

        <div className="relative p-10 md:p-14 border border-gray-800 bg-[#0A0E17] shadow-2xl z-10">
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
            className="group flex items-center justify-between w-full border border-gray-700 p-6 hover:border-[#2eb6b9] transition-colors bg-[#030509]"
          >
            <div className="flex flex-col">
              <span className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Download Report</span>
              <span className="text-gray-500 font-mono text-[10px]">PDF / 2.4 MB</span>
            </div>
            <IconArrowRight className="text-gray-500 group-hover:text-[#2eb6b9] transition-colors w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- FAQ ---
const FAQ = () => {
  const faqs = [
    {
      q: "What's the difference between pass-through voting and expression of wish?",
      a: "Pass-through voting is binding — the investor's preference is executed as an actual vote at the AGM, reducing the manager's vote accordingly. Expression of wish is advisory — the investor indicates a preference but the manager retains final discretion.",
    },
    {
      q: "Can investors in the same fund vote differently?",
      a: "Yes. That's the whole point. ProxySphere splits the fund's vote proportionally. Different investors can apply different policies to their own share of the vote, and all positions coexist within a single pooled vehicle.",
    },
    {
      q: "What happens if an investor doesn't vote?",
      a: "Nothing is lost. Un-voted shares default to the manager's stated house policy. The fund always votes 100% of its capital. No silent abstentions.",
    },
    {
      q: "Does ProxySphere work for retail investors too?",
      a: "Yes. ProxySphere is the only engine designed to synthesise institutional mandates and retail platforms within the same pooled fund. No bifurcated systems required.",
    },
    {
      q: "Can we use our existing voting policy?",
      a: "Yes. ProxySphere is policy-agnostic. We ingest voting recommendations from any provider via API or SFTP — or apply your own custom policy across the pooled fund.",
    },
    {
      q: "How long does implementation take?",
      a: "Most institutions go live in 6–8 weeks. We handle custodial data mapping, policy ingestion, and investor onboarding. Your operations team doesn't need to build anything.",
    },
    {
      q: "How is our data protected?",
      a: "ISO 27001 certified. SOC 2 Type II audited. AES-256 encryption at rest, TLS 1.3 in transit. Full cryptographic auditability from source to conclusion.",
    },
    {
      q: "Which jurisdictions do you support?",
      a: "We're live across the UK, EU, and US markets. Resolution coverage spans all major indices. We're actively expanding into APAC.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-40 bg-[#05080F] border-t border-gray-800/60 relative overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[60vw] h-[400px] bg-[#2eb6b9] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">
          <div>
            <div className="sticky top-32">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-[1.1] mb-8">
                Everything a <br />
                <span className="text-[#2eb6b9]">stewardship lead asks.</span>
              </h2>
              <p className="text-base text-gray-400 font-light leading-relaxed mb-10 max-w-md">
                The questions we hear most from CFOs, Heads of Stewardship, and pension trustees evaluating ProxySphere.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex-1 h-[1px] bg-gray-800"></div>
                <span className="text-[10px] font-mono text-gray-600 tracking-[0.25em] uppercase whitespace-nowrap">Still unresolved?</span>
                <div className="flex-1 h-[1px] bg-gray-800"></div>
              </div>
              <a href="#contact" className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] font-semibold text-[#2eb6b9] hover:text-white transition-colors group/cta">
                <span>Talk to our team</span>
                <span className="w-8 h-[1px] bg-[#2eb6b9] group-hover/cta:bg-white group-hover/cta:w-12 transition-all duration-500"></span>
                <IconArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

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

    <div className="relative max-w-5xl mx-auto px-8 md:px-16 text-center">
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
        <span className="text-[10px] font-mono tracking-[0.25em] text-[#2eb6b9] uppercase">Initiate Deployment</span>
        <div className="w-8 h-[1px] bg-[#2eb6b9]"></div>
      </div>

      <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1.02] mb-10">
        Ready to deploy <br />
        <span className="text-[#2eb6b9]">ProxySphere?</span>
      </h2>

      <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto mb-16">
        Speak with our team to map pass-through voting to your fund structure. Live in 6–8 weeks.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-5 mb-20">
        <Link to="/contact" className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#2eb6b9] text-[#030509] text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:bg-white">
          <span>Contact Sales</span>
          <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <Link to="/documentation" className="group inline-flex items-center justify-center gap-4 px-10 py-5 bg-transparent border border-gray-700 text-white text-[11px] font-bold uppercase tracking-[0.25em] transition-all duration-300 hover:border-white hover:bg-white/5">
          <span>Read Documentation</span>
          <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
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
  </section>
);

// --- FOOTER ---
const EliteFooter = () => (
  <footer className="bg-[#030509] border-t border-gray-800/60 pt-24 pb-12">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">
        <div className="col-span-2 lg:col-span-2 pr-12">
          <TumeloLogo className="mb-8" />
          <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 max-w-xs">
            Voting infrastructure for fund managers, institutional investors, and retail investors. Bristol & New York.
          </p>
          <div className="flex gap-4">
            {["LinkedIn", "Twitter"].map(social => (
              <a key={social} href="#" className="text-xs font-mono text-gray-600 uppercase tracking-widest hover:text-[#2eb6b9] transition-colors">
                {social}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Products</h4>
          <ul className="space-y-4">
            {["ProxySphere", "ProxyBeacon", "API Docs", "Security"].map(link => (
              <li key={link}><Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Who we help</h4>
          <ul className="space-y-4">
            {["Fund Managers", "Institutional Investors", "Retail Investors", "Case Studies"].map(link => (
              <li key={link}><Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
          <ul className="space-y-4">
            {["About Us", "Careers", "Newsroom", "Contact"].map(link => (
              <li key={link}><Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
          <ul className="space-y-4">
            {["Privacy", "Terms", "Cookies", "Compliance"].map(link => (
              <li key={link}><Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">{link}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Tumelo Ltd. All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#2eb6b9] animate-pulse"></div>
          <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">All Systems Operational</span>
        </div>
      </div>
    </div>
  </footer>
);

// ==========================================
// 4. MAIN PAGE EXPORT
// ==========================================
export default function ProxySphere() {
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
        <ProxySphereHero />
        <CoreCapabilities />
        <HowItWorks />
        <WhyItMatters />
        <WhoBenefits />
        <Adoption />
        <CaseStudy />
        <FAQ />
        <CTASection />
      </main>

      <EliteFooter />
    </div>
  );
}