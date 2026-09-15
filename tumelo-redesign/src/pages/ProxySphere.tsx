import React, { useState, useEffect, useRef } from "react";

// ============================================================================
// 1. PREMIUM VISUAL COMPONENTS (The "Aha!" Moments)
// ============================================================================

const IconArrow = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconGlobe = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

// --- VISUAL 1: The Pooled Fund Problem vs. Solution ---
const VisualPooledFund = ({ mode = "legacy" }) => {
  const isLegacy = mode === "legacy";
  return (
    <div className="w-full h-64 relative bg-[#0A0E17] border border-gray-800/60 overflow-hidden flex items-center justify-center">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(#1F2937 1px, transparent 1px), linear-gradient(90deg, #1F2937 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      {/* Left: The Fund */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className={`w-16 h-16 border ${isLegacy ? 'border-gray-600' : 'border-[#00C2A8]'} flex items-center justify-center bg-[#030509] z-10`}>
          <span className="text-[10px] font-mono text-gray-400">FUND</span>
        </div>
        <span className="text-[9px] font-mono text-gray-500 mt-2">$100M AUM</span>
      </div>

      {/* Center: The Routing */}
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-32">
        {isLegacy ? (
          // Legacy: One rigid path
          <svg className="w-full h-32" viewBox="0 0 100 100">
            <path d="M0 50 L100 50" stroke="#4B5563" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="4" fill="#4B5563" />
            <text x="50" y="40" fill="#4B5563" fontSize="8" fontFamily="monospace" textAnchor="middle">SINGLE POLICY</text>
          </svg>
        ) : (
          // Modern: Split paths
          <svg className="w-full h-32" viewBox="0 0 100 100">
            <path d="M0 50 L30 50" stroke="#00C2A8" strokeWidth="2" />
            <path d="M30 50 L60 25 L100 25" stroke="#00C2A8" strokeWidth="1.5" fill="none" />
            <path d="M30 50 L60 50 L100 50" stroke="#00C2A8" strokeWidth="1.5" fill="none" />
            <path d="M30 50 L60 75 L100 75" stroke="#00C2A8" strokeWidth="1.5" fill="none" />
            <circle cx="30" cy="50" r="3" fill="#00C2A8" />
            <text x="65" y="22" fill="#00C2A8" fontSize="7" fontFamily="monospace">CLIMATE</text>
            <text x="65" y="47" fill="#00C2A8" fontSize="7" fontFamily="monospace">DEFAULT</text>
            <text x="65" y="72" fill="#00C2A8" fontSize="7" fontFamily="monospace">CUSTOM</text>
          </svg>
        )}
      </div>

      {/* Right: Investors */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${isLegacy ? 'bg-gray-600' : 'bg-[#00C2A8]'}`}></div>
            <div className="w-20 h-4 bg-gray-800/50 border border-gray-700/50"></div>
          </div>
        ))}
      </div>
      
      {/* Labels */}
      <div className="absolute bottom-4 left-8 text-[9px] font-mono text-gray-500">
        {isLegacy ? 'LEGACY: SINGLE HOUSE POLICY' : 'PROXYSPHERE: PROPORTIONAL ROUTING'}
      </div>
    </div>
  );
};

// --- VISUAL 2: The "No Vote Unvoted" Flow ---
const VisualNoVoteUnvoted = () => (
  <div className="w-full h-64 relative bg-[#0A0E17] border border-gray-800/60 p-6 flex flex-col justify-center">
    <div className="text-[10px] font-mono text-gray-500 mb-6 uppercase tracking-widest">Execution Flow</div>
    <div className="flex items-center justify-between relative z-10">
      {[
        { step: "01", label: "Investor Choice", active: false },
        { step: "02", label: "Engine Routing", active: false },
        { step: "03", label: "Default Fallback", active: true },
        { step: "04", label: "Cast Vote", active: false }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center relative z-10 w-1/4">
          <div className={`w-10 h-10 border ${item.active ? 'border-[#00C2A8] bg-[#00C2A8]/10 text-[#00C2A8]' : 'border-gray-700 text-gray-500'} flex items-center justify-center font-mono text-xs mb-3 transition-colors`}>
            {item.step}
          </div>
          <span className={`text-[9px] font-mono text-center ${item.active ? 'text-[#00C2A8]' : 'text-gray-500'}`}>{item.label}</span>
        </div>
      ))}
    </div>
    {/* Connecting Line */}
    <div className="absolute top-1/2 left-6 right-6 h-[1px] bg-gray-800 -translate-y-1/2 z-0"></div>
    <div className="absolute top-1/2 left-[45%] right-[30%] h-[1px] bg-[#00C2A8] -translate-y-1/2 z-0"></div>
    <div className="mt-6 text-center text-[9px] font-mono text-gray-600">
      <span className="text-[#00C2A8]">■</span> DEFAULT PATH ACTIVATED
    </div>
  </div>
);

// --- VISUAL 3: Thematic Filtering ---
const VisualThematicFilter = () => (
  <div className="w-full h-64 bg-[#0A0E17] border border-gray-800/60 p-6 flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Resolution Filter</span>
      <span className="text-[10px] font-mono text-[#00C2A8]">CLIMATE MANDATE</span>
    </div>
    
    <div className="flex-1 space-y-3">
      {[
        { name: "Executive Compensation", sector: "Governance", visible: false },
        { name: "Climate Action Plan", sector: "Environment", visible: true },
        { name: "Board Diversity", sector: "Social", visible: false },
        { name: "Carbon Emissions Report", sector: "Environment", visible: true },
        { name: "Auditor Ratification", sector: "Governance", visible: false },
      ].map((item, i) => (
        <div key={i} className={`flex items-center justify-between p-3 border ${item.visible ? 'border-[#00C2A8]/30 bg-[#00C2A8]/5' : 'border-gray-800/40 bg-gray-900/20 opacity-30'} transition-all`}>
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${item.visible ? 'bg-[#00C2A8]' : 'bg-gray-700'}`}></div>
            <span className={`text-xs font-mono ${item.visible ? 'text-white' : 'text-gray-500'}`}>{item.name}</span>
          </div>
          <span className="text-[9px] font-mono text-gray-600">{item.sector}</span>
        </div>
      ))}
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-800/60 flex justify-between text-[9px] font-mono">
      <span className="text-gray-500">SHOWING 2 OF 5</span>
      <span className="text-[#00C2A8]">FILTERED BY POLICY</span>
    </div>
  </div>
);

// --- VISUAL 4: Unified Architecture (Institutional + Retail) ---
const VisualUnifiedArchitecture = () => (
  <div className="w-full h-64 bg-[#0A0E17] border border-gray-800/60 p-6 flex flex-col justify-center items-center relative overflow-hidden">
    {/* Background Grid */}
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1F2937 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    
    {/* Top Layer: The Fund */}
    <div className="w-48 h-12 bg-[#030509] border border-[#00C2A8] flex items-center justify-center z-10 mb-8">
      <span className="text-[10px] font-mono text-[#00C2A8]">SINGLE POOLED FUND</span>
    </div>
    
    {/* Split Lines */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-24">
      <svg className="w-full h-full" viewBox="0 0 200 100">
        <path d="M100 0 L100 40" stroke="#00C2A8" strokeWidth="1.5" />
        <path d="M100 40 L40 80" stroke="#00C2A8" strokeWidth="1.5" />
        <path d="M100 40 L160 80" stroke="#00C2A8" strokeWidth="1.5" />
        <circle cx="40" cy="80" r="3" fill="#00C2A8" />
        <circle cx="160" cy="80" r="3" fill="#00C2A8" />
      </svg>
    </div>
    
    {/* Bottom Layer: Investors */}
    <div className="flex gap-16 w-full justify-center z-10 mt-16">
      <div className="flex flex-col items-center">
        <div className="w-24 h-10 bg-[#030509] border border-gray-700 flex items-center justify-center mb-2">
          <span className="text-[9px] font-mono text-gray-400">INSTITUTIONAL</span>
        </div>
        <span className="text-[8px] font-mono text-gray-600">MANDATE A</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-10 bg-[#030509] border border-gray-700 flex items-center justify-center mb-2">
          <span className="text-[9px] font-mono text-gray-400">RETAIL</span>
        </div>
        <span className="text-[8px] font-mono text-gray-600">PLATFORM B</span>
      </div>
    </div>
    
    <div className="absolute bottom-4 left-6 text-[9px] font-mono text-gray-500">
      NO BIFURCATED SYSTEMS REQUIRED
    </div>
  </div>
);

// ============================================================================
// 2. MAIN COMPONENTS
// ============================================================================

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030509]/90 backdrop-blur-xl border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16 h-20 flex items-center justify-between">
      <div className="flex items-center gap-16">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight text-white">tumelo</a>
        <div className="hidden lg:flex items-center gap-10 text-[11px] font-mono tracking-widest text-gray-400 uppercase">
          <a href="#" className="hover:text-white transition-colors">Who we help</a>
          <a href="#" className="hover:text-white transition-colors">Products</a>
          <a href="#" className="hover:text-white transition-colors">Resources</a>
          <a href="#" className="hover:text-white transition-colors">About us</a>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-6">
        <a href="#" className="text-[11px] font-mono tracking-widest text-gray-400 hover:text-white transition-colors uppercase">Log in</a>
        <a href="#" className="bg-white text-black px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest hover:bg-[#00C2A8] hover:text-white transition-colors">Contact</a>
      </div>
    </div>
  </nav>
);

const ResearchHero = () => (
  <section className="relative pt-40 pb-24 border-b border-gray-800/60 bg-[#030509] overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00C2A8]/5 rounded-full blur-[120px] pointer-events-none"></div>
    
    <div className="max-w-[90rem] mx-auto px-8 md:px-16 relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-8 h-[1px] bg-[#00C2A8]"></div>
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00C2A8] uppercase">Intelligence · Comprehensive Guide</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-8 max-w-4xl">
        The complete framework for <br/><span className="text-gray-500 italic">pass-through voting.</span>
      </h1>
      
      <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12">
        Pass-through voting gives investors in pooled funds and ETFs a direct, proportional say in how their shares are voted at company AGMs. Here is the definitive architecture of how it works, the regulatory drivers, and its deployment at scale.
      </p>

      <div className="flex flex-wrap gap-4">
        <a href="#product" className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest hover:bg-[#00C2A8] hover:text-white transition-colors">
          View Infrastructure
        </a>
        <a href="#demo" className="px-8 py-4 border border-gray-700 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
          Download Whitepaper
        </a>
      </div>
      
      {/* Hero Stats Bar */}
      <div className="mt-16 pt-8 border-t border-gray-800/60 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { value: "$12T", label: "Passive AUM" },
          { value: "3", label: "Key Jurisdictions" },
          { value: "2026", label: "UK Code Deadline" },
          { value: "0", label: "Manual Spreadsheets" }
        ].map((stat, i) => (
          <div key={i}>
            <div className="text-2xl font-mono text-white mb-1">{stat.value}</div>
            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const CoreThesis = () => (
  <section className="py-24 bg-[#05080F] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16 grid lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">01 // The Paradigm</h2>
        <h3 className="text-3xl font-bold text-white mb-6">What is pass-through voting?</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
          When capital is deployed through a pooled fund, it is aggregated. Historically, the fund manager retains the legal ownership of those shares, fiduciary responsibility, and singular voting authority—casting votes uniformly across the entire pool.
        </p>
        <p className="text-sm text-white leading-relaxed font-light border-l border-[#00C2A8] pl-4">
          Pass-through voting restructures this dynamic. It algorithmically allocates voting rights back to the underlying beneficial owners in exact proportion to their holdings. An investor possessing 0.5% of a fund’s AUM influences precisely 0.5% of the aggregate vote.
        </p>
      </div>

      <div className="bg-[#030509] border border-gray-800/60 p-8 flex flex-col justify-between">
        <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-8">System Architecture: Proportional Split</div>
        <div className="h-32 w-full">
          <VisualPooledFund mode="modern" />
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800/60 flex justify-between text-[10px] font-mono text-gray-400">
          <span>STATUS: ACTIVE</span>
          <span className="text-[#00C2A8]">NO VOTE UNVOTED</span>
        </div>
      </div>
    </div>
  </section>
);

const TerminologyGrid = () => (
  <section className="py-24 bg-[#030509] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">02 // The Lexicon</h2>
        <h3 className="text-3xl font-bold text-white mb-6">Defining the terminology</h3>
        <p className="text-sm text-gray-400 font-light">Industry nomenclature describes distinct mechanical models for allocating voting influence. Understanding the technical divergence is critical for precise implementation.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800/60 border border-gray-800/60">
        {[
          { term: "Pass-Through Voting", desc: "The direct, proportional decentralization of voting rights. The ultimate investor's instruction is mathematically executed by the engine without manager override." },
          { term: "Expression of Wish", desc: "An advisory signal. The underlying investor indicates a preference, but the fund manager retains manual discretion over the final execution." },
          { term: "Voting Choice", desc: "A structured menu system. Investors select from a pre-defined array of institutional voting policies curated by the fund manager or proxy advisor." },
          { term: "Client-Directed Voting", desc: "The macro-regulatory umbrella term encompassing any framework designed to return voting agency to the beneficial owner." }
        ].map((item, i) => (
          <div key={i} className="bg-[#0A0E17] p-8 hover:bg-[#05080F] transition-colors group">
            <h4 className="text-[#00C2A8] font-mono text-[11px] tracking-widest uppercase mb-4">{item.term}</h4>
            <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
            <div className="mt-6 w-full h-[1px] bg-gray-800 group-hover:bg-[#00C2A8] transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const InfrastructureTopology = () => (
  <section className="py-24 bg-[#05080F] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">03 // Infrastructure Topology</h2>
        <h3 className="text-3xl font-bold text-white mb-6">How the engine operates.</h3>
        <p className="text-sm text-gray-400 font-light">ProxySphere is not a black box. It is a linear, auditable pipeline that transforms aggregate holdings into granular, investor-directed votes.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { step: "01", title: "Aggregate Holdings", desc: "The engine ingests fund data, perfectly mapping institutional mandates and retail platforms within a singular pooled vehicle without segregation." },
          { step: "02", title: "Apply Routing Logic", desc: "ProxySphere references individual investor preferences, passing the voting right directly to them or filtering proposals based on thematic policy." },
          { step: "03", title: "Reconcile & Execute", desc: "Votes are cryptographically tallied. Un-voted shares instantly trigger the House Default policy. Zero manual spreadsheets required." },
        ].map((item, i) => (
          <div key={i} className="relative border border-gray-800/60 bg-[#030509] p-8">
            <div className="text-4xl font-serif text-gray-800 mb-4">{item.step}</div>
            <h4 className="text-lg font-bold text-white mb-3">{item.title}</h4>
            <p className="text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
            {i < 2 && (
              <div className="hidden md:block absolute top-1/2 -right-4 text-gray-700">
                <IconArrow />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SystemCapabilities = () => (
  <section className="py-24 bg-[#030509] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="mb-16">
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">04 // System Capabilities</h2>
        <h3 className="text-3xl font-bold text-white mb-6">Engineered for complexity.</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {[
          { id: "01", title: "Agnostic Policy Routing", desc: "Investors are never locked into a singular house policy. Our engine allows them to select from the broadest global suite of voting policies, or intervene to vote resolution by resolution.", visual: <VisualThematicFilter /> },
          { id: "02", title: "Thematic Resolution Filtering", desc: "Eliminate AGM noise. If an investor's mandate strictly concerns climate or executive remuneration, ProxySphere filters the global agenda to surface only relevant resolutions.", visual: <VisualThematicFilter /> },
          { id: "03", title: "Unified Pooled Fund Architecture", desc: "Engineered specifically to synthesize institutional and retail investors within the exact same fund. Operations teams no longer need bifurcated systems for different investor classes.", visual: <VisualUnifiedArchitecture /> },
          { id: "04", title: "Zero-Latency Default Execution", desc: "No vote goes un-voted. Unallocated or ignored shares default immediately to a stated fallback policy, ensuring the fund’s voting record is devoid of silent, un-chosen abstentions.", visual: <VisualNoVoteUnvoted /> }
        ].map((cap, i) => (
          <div key={i} className="border border-gray-800/60 bg-[#0A0E17] p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-[#00C2A8] tracking-widest">CAPABILITY // {cap.id}</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-3">{cap.title}</h4>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-8 flex-1">{cap.desc}</p>
            <div className="mt-auto">
              {cap.visual}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ParadigmShift = () => (
  <section className="py-24 bg-[#05080F] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="text-center mb-16">
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">05 // Paradigm Shift</h2>
        <h3 className="text-3xl font-bold text-white mb-6">Legacy systems vs. ProxySphere</h3>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Legacy Column */}
        <div className="border border-gray-800/60 bg-[#030509] p-8">
          <div className="text-[10px] font-mono text-red-500 tracking-widest uppercase mb-8 border-b border-gray-800/60 pb-4">Legacy Infrastructure</div>
          <ul className="space-y-6">
            {[
              "A single, rigid house policy applied uniformly to every investor in the fund.",
              "Voting instructions reconciled manually via spreadsheets against holdings.",
              "Retail investors have zero visibility into how their specific shares were voted."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-4 h-4 border border-red-500/50 flex items-center justify-center mt-0.5">
                  <div className="w-1.5 h-[1px] bg-red-500"></div>
                </div>
                <span className="text-sm text-gray-400 font-light">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-gray-800/60">
            <VisualPooledFund mode="legacy" />
          </div>
        </div>

        {/* ProxySphere Column */}
        <div className="border border-[#00C2A8]/30 bg-[#030509] p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2A8]/5 rounded-full blur-2xl"></div>
          <div className="text-[10px] font-mono text-[#00C2A8] tracking-widest uppercase mb-8 border-b border-[#00C2A8]/30 pb-4 relative z-10">With ProxySphere</div>
          <ul className="space-y-6 relative z-10">
            {[
              "Each investor actively chooses a policy or votes resolution by resolution.",
              "Instructions perfectly reconcile against holdings via automated APIs.",
              "Every investor possesses cryptographic visibility into their exact voting record."
            ].map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="w-4 h-4 border border-[#00C2A8] flex items-center justify-center mt-0.5 text-[#00C2A8]">
                  <IconCheck className="w-3 h-3" />
                </div>
                <span className="text-sm text-white font-light">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-[#00C2A8]/30 relative z-10">
            <VisualPooledFund mode="modern" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactTerminal = () => (
  <section id="demo" className="py-24 bg-[#030509]">
    <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">Initialize Infrastructure</h2>
      <p className="text-gray-400 text-sm font-light mb-12">Speak with our architectural team to map pass-through voting to your fund structure.</p>
      
      <form className="space-y-6 text-left max-w-lg mx-auto">
        <div>
          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Corporate Email</label>
          <input type="email" className="w-full bg-[#0A0E17] border border-gray-800 text-white p-4 focus:border-[#00C2A8] focus:outline-none transition-colors" placeholder="email@institution.com" />
        </div>
        <div>
          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Deployment Requirements (Optional)</label>
          <textarea rows="4" className="w-full bg-[#0A0E17] border border-gray-800 text-white p-4 focus:border-[#00C2A8] focus:outline-none transition-colors" placeholder="Enter configuration details..."></textarea>
        </div>
        <button className="w-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] py-5 hover:bg-[#00C2A8] hover:text-white transition-all">
          Request Access
        </button>
        <p className="text-center text-[10px] text-gray-600">ISO 27001 Information Security Management Systems Accredited.</p>
      </form>
    </div>
  </section>
);

// ============================================================================
// 3. MAIN EXPORT
// ============================================================================

export default function PassThroughGuide() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030509] font-sans selection:bg-[#00C2A8] selection:text-[#030509]">
      <Navbar />
      <main>
        <ResearchHero />
        <CoreThesis />
        <TerminologyGrid />
        <InfrastructureTopology />
        <SystemCapabilities />
        <ParadigmShift />
        <ContactTerminal />
      </main>
      <footer className="py-12 bg-[#030509] border-t border-gray-800/60 text-center">
        <div className="max-w-[90rem] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold text-white">tumelo</div>
          <p className="text-[10px] font-mono text-gray-600">Voting infrastructure for fund managers, institutional investors and retail investors. Bristol & New York.</p>
          <p className="text-[10px] font-mono text-gray-600">ISO 27001 accredited. © 2026 Tumelo.</p>
        </div>
      </footer>
    </div>
  );
}