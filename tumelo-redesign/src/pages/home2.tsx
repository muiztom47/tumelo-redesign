import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav"; // <- ADD THIS (adjust path if needed)

// ==========================================
// 1. BRAND & THEME TOKENS
// ==========================================
const THEME = {
  bgBase: "bg-[#030509]", // Ultra-deep space black/blue
  bgSurface: "bg-[#0A0E17]",
  border: "border-gray-800/60",
  textPrimary: "text-gray-100",
  textSecondary: "text-gray-400",
  accent: "text-[#00C2A8]",
  accentBg: "bg-[#00C2A8]",
  glow: "shadow-[0_0_30px_-5px_rgba(0,194,168,0.3)]",
};



const PressCoverage = () => {
  const press = [
    {
      pub: "The Times",
      quote: "Named an \"innovative player\" in shareholder voting.",
      desc: "James Kirkup, director of the Social Market Foundation, highlights the growing demand among retail investors for a say in their investments.",
      link: "#"
    },
    {
      pub: "Forbes",
      quote: "The emergence and direction of shareholder empowerment.",
      desc: "CEO Georgia Stewart discusses the origins of Tumelo, our core purpose, and the future of institutional proxy voting.",
      link: "#"
    },
    {
      pub: "Bloomberg",
      quote: "At the forefront of a movement to bridge the gap.",
      desc: "Bloomberg Opinion Editor Matthew Brooker analyzes Tumelo's role in connecting ultimate shareholders with the companies they collectively own.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-[#05080F] border-t border-gray-800/60">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-8 h-[1px] bg-[#00C2A8]"></div>
          <h2 className="text-[11px] font-mono tracking-[0.2em] text-[#00C2A8] uppercase">Tumelo in the Press</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {press.map((item, i) => (
            <div key={i} className="group border-t border-gray-800/60 pt-6">
              <h3 className="text-2xl font-serif text-white mb-5 group-hover:text-[#00C2A8] transition-colors">{item.pub}</h3>
              <p className="text-lg text-gray-200 font-light leading-snug mb-4 tracking-tight">"{item.quote}"</p>
              <p className="text-[13px] text-gray-500 font-light leading-relaxed mb-8">{item.desc}</p>
              <a href={item.link} className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-semibold text-gray-400 hover:text-white transition-colors">
                Read Publication <PremiumVisuals.ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ResearchAndInsights = () => {
  const insights = [
    {
      type: "Case Study",
      title: "Landmark partnership enables £2bn Camden Pension Fund to customise stewardship.",
      link: "#"
    },
    {
      type: "Roundtable",
      title: "The role of client-directed voting in modern institutional stewardship.",
      link: "#"
    },
    {
      type: "White Paper",
      title: "Industry experts explore the emergence of pass-through voting and its future.",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-[#030509] border-t border-gray-800/60 relative">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter mb-2">Research & Insights</h2>
            <p className="text-xs font-mono text-gray-500 tracking-widest uppercase">Proprietary Intelligence</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-[#00C2A8] hover:text-white transition-colors pb-2 md:pb-0">
            View All Insights <PremiumVisuals.ArrowRight />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((item, i) => (
            <a key={i} href={item.link} className="group block p-8 border border-gray-800/60 bg-[#0A0E17]/40 hover:bg-[#0A0E17] hover:border-gray-600 transition-all duration-300 flex flex-col h-full">
              <div className="text-[9px] font-mono text-gray-400 tracking-[0.2em] uppercase mb-6 border border-gray-700/50 inline-block px-2 py-1 bg-[#030509] w-fit">
                {item.type}
              </div>
              <h3 className="text-[17px] text-gray-300 font-light leading-relaxed mb-12 group-hover:text-white transition-colors flex-grow">
                {item.title}
              </h3>
              <div className="flex items-center justify-between border-t border-gray-800/60 pt-5 mt-auto">
                <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 group-hover:text-[#00C2A8] transition-colors">Read Report</span>
                <PremiumVisuals.ArrowRight className="text-gray-600 group-hover:text-[#00C2A8] transition-colors w-4 h-4" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};



// ==========================================
// 2. ELITE SVG VISUALIZATIONS & ICONS
// ==========================================
const PremiumVisuals = {
  // A complex, animated network graph representing Pass-Through Voting
  NetworkGraph: () => (
    <svg className="w-full h-full opacity-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g className="animate-pulse" style={{ animationDuration: '4s' }}>
        <circle cx="200" cy="200" r="150" stroke="#00C2A8" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3"/>
        <circle cx="200" cy="200" r="100" stroke="#00C2A8" strokeWidth="1" opacity="0.2"/>
        
        {/* Core Node */}
        <circle cx="200" cy="200" r="8" fill="#00C2A8" className="shadow-[0_0_15px_#00C2A8]"/>
        <circle cx="200" cy="200" r="24" stroke="#00C2A8" strokeWidth="1" opacity="0.5"/>
        
        {/* Connections & Satellites */}
        <path d="M200 200 L120 120" stroke="url(#gradient-line)" strokeWidth="1.5"/>
        <circle cx="120" cy="120" r="4" fill="#fff"/>
        
        <path d="M200 200 L300 150" stroke="url(#gradient-line)" strokeWidth="1.5"/>
        <circle cx="300" cy="150" r="4" fill="#fff"/>
        
        <path d="M200 200 L250 300" stroke="url(#gradient-line)" strokeWidth="1.5"/>
        <circle cx="250" cy="300" r="4" fill="#fff"/>
        
        <path d="M200 200 L100 250" stroke="url(#gradient-line)" strokeWidth="1.5"/>
        <circle cx="100" cy="250" r="6" fill="#00C2A8" opacity="0.6"/>
      </g>
      <defs>
        <linearGradient id="gradient-line" x1="200" y1="200" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C2A8" />
          <stop offset="1" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),

  // Abstract document analysis visual for ProxyBeacon
  AILens: () => (
    <svg className="w-full h-full opacity-80" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Scanning Laser Line */}
      <rect x="50" y="80" width="300" height="2" fill="#00C2A8" className="animate-[bounce_3s_infinite] shadow-[0_0_10px_#00C2A8]"/>
      
      {/* Abstract Text Blocks */}
      <rect x="80" y="100" width="240" height="8" rx="4" fill="#374151" opacity="0.5"/>
      <rect x="80" y="130" width="180" height="8" rx="4" fill="#374151" opacity="0.5"/>
      <rect x="80" y="160" width="200" height="8" rx="4" fill="#00C2A8" opacity="0.8"/>
      <rect x="80" y="190" width="220" height="8" rx="4" fill="#374151" opacity="0.5"/>
      <rect x="80" y="220" width="150" height="8" rx="4" fill="#374151" opacity="0.5"/>
      
      {/* Focus Box */}
      <rect x="70" y="150" width="220" height="28" stroke="#00C2A8" strokeWidth="1" strokeDasharray="4 4" fill="transparent"/>
      
      {/* Frame */}
      <rect x="40" y="40" width="320" height="320" stroke="#1F2937" strokeWidth="1" fill="transparent"/>
      <path d="M40 60 L40 40 L60 40" stroke="#00C2A8" strokeWidth="2" fill="transparent"/>
      <path d="M360 60 L360 40 L340 40" stroke="#00C2A8" strokeWidth="2" fill="transparent"/>
      <path d="M40 340 L40 360 L60 360" stroke="#00C2A8" strokeWidth="2" fill="transparent"/>
      <path d="M360 340 L360 360 L340 360" stroke="#00C2A8" strokeWidth="2" fill="transparent"/>
    </svg>
  ),

  TumeloLogo: ({ className = "h-7" }) => (
    <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="-0.05em" fontSize="26" fill="#ffffff">
        tume<tspan fill="#00C2A8">lo</tspan>
      </text>
    </svg>
  ),
  ArrowRight: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  ),
  QuoteMark: ({ className = "w-10 h-10" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8.001L24 8.001L24 18L14.017 18ZM0 18L0 10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 5.996 5.789 5.996 8.001L9.983 8.001L9.983 18L0 18Z" />
    </svg>
  ),
};

// ==========================================
// 3. ARCHITECTURAL COMPONENTS
// ==========================================

 

const HeroTerminal = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#030509]">
      {/* Abstract Architectural Background (Ref: image_7779fc.jpg) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        {/* Deep atmospheric glow */}
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(0,194,168,0.08)_0,transparent_50%)] blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-8 md:px-16 w-full grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">
        {/* Typography & Positioning */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-[#00C2A8]"></div>
            <span className="text-[11px] font-mono tracking-[0.2em] text-[#00C2A8] uppercase">Institutional Infrastructure</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.05] tracking-tighter mb-8">
            Architecting the future of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              proxy voting.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12 border-l border-gray-800 pl-6">
            Engineered for ambitious stewardship teams. We deliver uncompromising scale, automation, and cryptographic transparency to shareholder voting and proxy research.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#solutions" className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#00C2A8] text-[#030509] text-sm font-bold uppercase tracking-widest transition-all hover:bg-white">
              Deploy Infrastructure
              <PremiumVisuals.ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#architecture" className="flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-white border border-gray-700 text-sm font-bold uppercase tracking-widest transition-all hover:border-[#00C2A8] hover:text-[#00C2A8]">
              View Technical Specs
            </a>
          </div>
        </div>

        {/* High-Fidelity Technical Visual (Replaces standard SaaS illustration) */}
        <div className="relative hidden lg:block h-[600px] w-full border border-gray-800/60 bg-[#0A0E17]/50 backdrop-blur-sm p-1">
          <div className="absolute top-0 left-0 w-full h-8 border-b border-gray-800/60 flex items-center px-4 justify-between bg-[#030509]/80">
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
              <div className="w-2 h-2 rounded-full bg-gray-700"></div>
            </div>
            <div className="text-[10px] font-mono text-gray-500 tracking-widest">TMLO_SYS_V2.4</div>
          </div>
          
          <div className="mt-8 p-6 h-full flex flex-col justify-between">
            <div>
              <div className="text-[10px] font-mono text-[#00C2A8] tracking-widest mb-2">LIVE DATA STREAM</div>
              <div className="text-3xl font-light text-white tracking-tight mb-8">2,491,003 <span className="text-gray-500 text-lg">Shares Processing</span></div>
              
              {/* Simulated Data Rows */}
              <div className="space-y-3">
                {[
                  { ticker: "AAPL", action: "Policy Execution", status: "VERIFIED", color: "text-[#00C2A8]" },
                  { ticker: "MSFT", action: "Pass-Through Sync", status: "PENDING", color: "text-yellow-500" },
                  { ticker: "GOOGL", action: "Exception Flagged", status: "REVIEW REQ", color: "text-red-400" }
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-3 border-b border-gray-800/50">
                    <div className="flex gap-6 items-center">
                      <span className="font-mono text-sm text-gray-300 w-16">{row.ticker}</span>
                      <span className="text-sm text-gray-500">{row.action}</span>
                    </div>
                    <span className={`text-[10px] font-mono uppercase tracking-widest ${row.color}`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Embedded Network Graphic */}
            <div className="h-48 w-full border border-gray-800/40 relative overflow-hidden bg-[#030509]/30 mt-auto flex items-center justify-center">
               <PremiumVisuals.NetworkGraph />
               <div className="absolute bottom-3 right-3 text-[9px] font-mono text-gray-600">NODE_MAP_ACTIVE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

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
            <div key={i} className="text-lg md:text-xl font-serif text-gray-600 hover:text-white transition-colors duration-500 cursor-default px-4">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TheParadigmShift = () => {
  return (
    <section className="py-32 bg-[#030509] relative">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-32">
          
          <div>
            <div className="sticky top-32">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter leading-tight mb-6">
                The legacy system <br/>is broken.
              </h2>
              <p className="text-lg text-gray-400 font-light mb-8">
                Every share your fund holds carries a vote and a fiduciary duty. Yet, constrained by outdated spreadsheets and fragmented data, the majority of these votes go unread and un-leveraged.
              </p>
              <div className="w-full h-[1px] bg-gray-800 mb-8"></div>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">
                The Tumelo Paradigm:
              </p>
              <ul className="mt-6 space-y-4">
                {[
                  "One definitive register of ownership.",
                  "Zero manual intervention required.",
                  "100% cryptographic audit trail."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white">
                    <div className="w-1.5 h-1.5 bg-[#00C2A8] rounded-full"></div>
                    <span className="font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Large scale data points instead of standard feature boxes */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              { stat: "£2bn+", label: "Pension assets routed successfully via LGIM", delay: "0" },
              { stat: "100%", label: "Resolution coverage across global markets", delay: "100" },
              { stat: "0", label: "Shares left un-voted under active policies", delay: "200" },
              { stat: "10x", label: "Faster proxy research & exception handling", delay: "300" }
            ].map((metric, i) => (
              <div key={i} className="p-10 border border-gray-800/60 bg-[#0A0E17]/40 backdrop-blur hover:bg-[#0A0E17] hover:border-gray-700 transition-all duration-500">
                <div className="text-5xl lg:text-6xl font-light text-white mb-4 tracking-tighter">
                  {metric.stat}
                </div>
                <div className="text-sm text-gray-400 leading-relaxed font-light">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

const ProductArchitecture = () => {
  return (
    <section id="solutions" className="py-32 bg-[#05080F] border-t border-gray-800/60">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="mb-24 md:flex justify-between items-end">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">Product Architecture</h2>
            <p className="text-xl text-gray-400 font-light">Two monolithic engines designed to handle the scale of global asset management seamlessly.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* ProxySphere Card */}
          <div className="group border border-gray-800/60 bg-[#030509] overflow-hidden flex flex-col">
            <div className="h-64 border-b border-gray-800/60 bg-[#0A0E17] relative flex items-center justify-center p-8 overflow-hidden">
              <PremiumVisuals.NetworkGraph />
              <div className="absolute top-6 left-6 text-[10px] font-mono text-[#00C2A8] tracking-[0.2em] border border-[#00C2A8]/30 px-3 py-1 bg-[#00C2A8]/10">INFRASTRUCTURE</div>
            </div>
            <div className="p-10 lg:p-12 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight mb-2">ProxySphere</h3>
                <p className="text-sm font-mono text-gray-500 tracking-widest mb-8">PASS-THROUGH VOTING</p>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Provides every underlying investor in a pooled fund the exact route to vote their own shares, or seamlessly delegate to a policy. Engineered to eliminate operational friction and spreadsheet dependency.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex gap-4 text-sm text-gray-300 font-light border-b border-gray-800/50 pb-4">
                    <span className="text-[#00C2A8] font-mono">01</span> Institutional and retail synthesis in singular funds.
                  </li>
                  <li className="flex gap-4 text-sm text-gray-300 font-light border-b border-gray-800/50 pb-4">
                    <span className="text-[#00C2A8] font-mono">02</span> Policy-agnostic thematic resolution filtering.
                  </li>
                  <li className="flex gap-4 text-sm text-gray-300 font-light pb-4">
                    <span className="text-[#00C2A8] font-mono">03</span> Automated default-to-policy for un-voted shares.
                  </li>
                </ul>
              </div>
              <Link to="/proxysphere" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest font-semibold text-white group-hover:text-[#00C2A8] transition-colors w-fit">
                Explore ProxySphere <PremiumVisuals.ArrowRight />
              </Link>
            </div>
          </div>

          {/* ProxyBeacon Card */}
          <div className="group border border-gray-800/60 bg-[#030509] overflow-hidden flex flex-col">
            <div className="h-64 border-b border-gray-800/60 bg-[#0A0E17] relative flex items-center justify-center p-8 overflow-hidden">
              <PremiumVisuals.AILens />
              <div className="absolute top-6 left-6 text-[10px] font-mono text-[#00C2A8] tracking-[0.2em] border border-[#00C2A8]/30 px-3 py-1 bg-[#00C2A8]/10">ARTIFICIAL INTELLIGENCE</div>
            </div>
            <div className="p-10 lg:p-12 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold text-white tracking-tight mb-2">ProxyBeacon</h3>
                <p className="text-sm font-mono text-gray-500 tracking-widest mb-8">AI-DRIVEN PROXY RESEARCH</p>
                <p className="text-gray-400 font-light leading-relaxed mb-8">
                  Ingests resolution filings globally, strictly applies your proprietary stewardship policy across the board, and flags the exact edge-cases requiring human fiduciary intervention.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex gap-4 text-sm text-gray-300 font-light border-b border-gray-800/50 pb-4">
                    <span className="text-[#00C2A8] font-mono">01</span> Real-time aggregation of issuer filings.
                  </li>
                  <li className="flex gap-4 text-sm text-gray-300 font-light border-b border-gray-800/50 pb-4">
                    <span className="text-[#00C2A8] font-mono">02</span> 100% consistent stewardship policy application.
                  </li>
                  <li className="flex gap-4 text-sm text-gray-300 font-light pb-4">
                    <span className="text-[#00C2A8] font-mono">03</span> Pre-meeting risk and exception surfacing.
                  </li>
                </ul>
              </div>
              <Link to="/fund-managers" className="inline-flex items-center gap-2 text-[13px] uppercase tracking-widest font-semibold text-white group-hover:text-[#00C2A8] transition-colors w-fit">
                Explore ProxyBeacon <PremiumVisuals.ArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const EditorialCaseStudy = () => {
  return (
    <section className="bg-[#030509] py-32 border-t border-gray-800/60 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#00C2A8] opacity-[0.03] skew-x-12 transform translate-x-32 pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Editorial Quote Layout */}
          <div className="relative z-10">
            <PremiumVisuals.QuoteMark className="text-[#00C2A8] mb-8 opacity-80" />
            <h2 className="text-3xl md:text-5xl font-serif text-white leading-[1.3] mb-12">
              "Tumelo is an extremely agile, collaborative, and results-focused team. They are a pleasure to work with."
            </h2>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-[1px] bg-gray-700"></div>
              <div>
                <p className="text-white font-bold tracking-wide uppercase text-sm mb-1">Stuart Murphy</p>
                <p className="text-gray-500 text-xs font-mono tracking-widest">HEAD OF CLIENT PLATFORMS, LGIM</p>
              </div>
            </div>
          </div>

          {/* High-End Feature Box (Whitepaper Style) */}
          <div className="relative p-10 md:p-14 border border-gray-800 bg-[#0A0E17] shadow-2xl z-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00C2A8] to-transparent"></div>
            <div className="flex justify-between items-start mb-12">
              <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase border border-gray-700 px-3 py-1">Case Study</span>
              <span className="text-2xl font-serif text-white opacity-40">LGIM</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-6">
              Rolling out pass-through voting for a £2bn pension fund.
            </h3>
            <p className="text-gray-400 font-light leading-relaxed mb-10">
              Discover how Legal & General Investment Management (LGIM) utilized Tumelo's proxy infrastructure to deliver unprecedented transparency and voting autonomy to their underlying pension contributors.
            </p>
            
            <a 
              href="https://25524212.hs-sites-eu1.com/hubfs/LGIM%20announcement/Tumelo%20powers%20LGIMs%20pass-through%20voting%20offering.pdf"
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center justify-between w-full border border-gray-700 p-6 hover:border-[#00C2A8] transition-colors bg-[#030509]"
            >
              <div className="flex flex-col">
                <span className="text-white font-semibold text-sm uppercase tracking-wider mb-1">Download Report</span>
                <span className="text-gray-500 font-mono text-[10px]">PDF / 2.4 MB</span>
              </div>
              <PremiumVisuals.ArrowRight className="text-gray-500 group-hover:text-[#00C2A8] transition-colors w-6 h-6" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

const SecuritySpecs = () => {
  const specs = [
    { title: "ISO 27001", desc: "Certified Information Security Management" },
    { title: "SOC 2 TYPE II", desc: "Audited organizational and technical controls" },
    { title: "AES-256", desc: "Military-grade data encryption at rest" },
    { title: "TLS 1.3", desc: "Cryptographic protocol for data in transit" }
  ];

  return (
    <section className="py-20 border-y border-gray-800/60 bg-[#0A0E17]">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="shrink-0">
          <h2 className="text-white font-bold tracking-tight text-2xl mb-2">Enterprise Security</h2>
          <p className="text-gray-500 text-sm font-mono tracking-widest">INFRASTRUCTURE PROTOCOLS</p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 w-full md:pl-16 md:border-l border-gray-800/60">
          {specs.map((spec, i) => (
            <div key={i}>
              <div className="text-[#00C2A8] font-mono text-sm font-bold mb-2 tracking-widest">{spec.title}</div>
              <div className="text-gray-400 text-[13px] font-light leading-relaxed">{spec.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-40 bg-[#030509] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-[#00C2A8] opacity-[0.04] blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-tight mb-8">
          Initiate deployment.
        </h2>
        <p className="text-xl text-gray-400 font-light mb-12">
          Join the vanguard of asset managers modernizing their stewardship operations. 
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link to="/contact" className="px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-[#00C2A8] hover:text-white transition-all duration-300">
            Contact Enterprise Sales
          </Link>
          <Link to="/documentation" className="px-10 py-5 bg-transparent border border-gray-700 text-white font-bold uppercase tracking-widest text-sm hover:border-white transition-all duration-300">
            Read Documentation
          </Link>
        </div>
      </div>
    </section>
  );
};

const EliteFooter = () => {
  return (
    <footer className="bg-[#030509] border-t border-gray-800/60 pt-24 pb-12">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">
          
          <div className="col-span-2 lg:col-span-2 pr-12">
            <PremiumVisuals.TumeloLogo className="mb-8" />
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 max-w-xs">
              Providing algorithmic voting infrastructure and AI-driven proxy research to global institutional asset managers.
            </p>
            <div className="flex gap-4">
              {['LinkedIn', 'Twitter'].map(social => (
                <a key={social} href="#" className="text-xs font-mono text-gray-600 uppercase tracking-widest hover:text-[#00C2A8] transition-colors">
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Infrastructure</h4>
            <ul className="space-y-4">
              {["ProxySphere", "ProxyBeacon", "API Docs", "Security Overview"].map(link => (
                <li key={link}><Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Solutions</h4>
            <ul className="space-y-4">
              {["Fund Managers", "Pension Schemes", "Retail Platforms", "Case Studies"].map(link => (
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
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"].map(link => (
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
            <div className="w-2 h-2 rounded-full bg-[#00C2A8] animate-pulse"></div>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ==========================================
// 4. MAIN PAGE EXPORT
// ==========================================

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030509] font-sans selection:bg-[#00C2A8] selection:text-[#030509]">
     <Nav /> 
      <main>
        <HeroTerminal />
        <InstitutionalTrust />
        <TheParadigmShift />
        <ProductArchitecture />
        <EditorialCaseStudy />
        <SecuritySpecs />
        
        {/* NEW ADDITIONS */}
        <PressCoverage />
        <ResearchAndInsights />
        
        <CTASection />
      </main>
      <EliteFooter />
    </div>
  );
}