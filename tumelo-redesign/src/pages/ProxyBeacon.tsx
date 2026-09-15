import React, { useState, useEffect } from "react";

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

// --- VISUAL 1: The AI Research Pipeline ---
const VisualResearchPipeline = () => (
  <div className="w-full h-80 relative bg-[#0A0E17] border border-gray-800/60 p-6 flex flex-col justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1F2937 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    
    <div className="text-[10px] font-mono text-gray-500 mb-8 uppercase tracking-widest relative z-10">Research Generation Pipeline</div>
    
    <div className="flex items-center justify-between relative z-10 px-4">
      {/* Step 1: Raw Documents */}
      <div className="flex flex-col items-center w-1/4">
        <div className="w-12 h-16 border border-gray-600 bg-[#030509] flex items-center justify-center mb-3 relative">
          <IconFile className="w-5 h-5 text-gray-500" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-[#00C2A8] rounded-full flex items-center justify-center text-[8px] text-[#030509] font-bold">8</div>
        </div>
        <span className="text-[9px] font-mono text-gray-500 text-center leading-tight">RAW<br/>DISCLOSURES</span>
      </div>
      
      {/* Arrow */}
      <div className="w-8 h-[1px] bg-gray-700 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-gray-700 rotate-45"></div></div>
      
      {/* Step 2: AI Extraction */}
      <div className="flex flex-col items-center w-1/4">
        <div className="w-12 h-12 border border-[#00C2A8] bg-[#00C2A8]/10 flex items-center justify-center mb-3 relative">
          <IconZap className="w-5 h-5 text-[#00C2A8]" />
          <div className="absolute -inset-1 border border-[#00C2A8]/30 rounded-full animate-ping"></div>
        </div>
        <span className="text-[9px] font-mono text-[#00C2A8] text-center leading-tight">AI EXTRACTION<br/>& STRUCTURING</span>
      </div>
      
      {/* Arrow */}
      <div className="w-8 h-[1px] bg-gray-700 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-gray-700 rotate-45"></div></div>
      
      {/* Step 3: Policy Application */}
      <div className="flex flex-col items-center w-1/4">
        <div className="w-12 h-12 border border-gray-600 bg-[#030509] flex items-center justify-center mb-3">
          <IconShield className="w-5 h-5 text-gray-400" />
        </div>
        <span className="text-[9px] font-mono text-gray-500 text-center leading-tight">YOUR POLICY<br/>APPLIED</span>
      </div>
      
      {/* Arrow */}
      <div className="w-8 h-[1px] bg-gray-700 relative"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-r border-gray-700 rotate-45"></div></div>
      
      {/* Step 4: Output */}
      <div className="flex flex-col items-center w-1/4">
        <div className="w-12 h-12 border border-[#00C2A8] bg-[#00C2A8]/5 flex items-center justify-center mb-3">
          <IconCheck className="w-5 h-5 text-[#00C2A8]" />
        </div>
        <span className="text-[9px] font-mono text-[#00C2A8] text-center leading-tight">ACTIONABLE<br/>REPORT</span>
      </div>
    </div>
    
    <div className="mt-8 pt-4 border-t border-gray-800/60 flex justify-between text-[9px] font-mono relative z-10">
      <span className="text-gray-600">INPUT: 8 DOCUMENTS</span>
      <span className="text-[#00C2A8]">OUTPUT: 1 REPORT · 0 HALLUCINATIONS</span>
    </div>
  </div>
);

// --- VISUAL 2: Custom Governance Flags (The "Red Flag" UI) ---
const VisualGovernanceFlags = () => (
  <div className="w-full h-80 bg-[#0A0E17] border border-gray-800/60 p-6 flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Governance Flags</span>
      <span className="text-[10px] font-mono text-red-400 bg-red-400/10 px-2 py-1 border border-red-400/20">3 TRIGGERED</span>
    </div>
    
    <div className="flex-1 space-y-3 overflow-hidden">
      {[
        { rule: "Director overboarding > 4 boards", status: "triggered", detail: "J. Smith (5 boards)" },
        { rule: "Pay plan discretion > 10%", status: "triggered", detail: "CEO Bonus Plan" },
        { rule: "Climate targets not measurable", status: "triggered", detail: "Scope 3 Reporting" },
        { rule: "Auditor tenure > 10 years", status: "clear", detail: "Deloitte (7 yrs)" },
        { rule: "Board independence < 75%", status: "clear", detail: "82% Independent" },
      ].map((item, i) => (
        <div key={i} className={`flex items-center justify-between p-3 border ${item.status === 'triggered' ? 'border-red-500/30 bg-red-500/5' : 'border-gray-800/40 bg-gray-900/20 opacity-40'} transition-all`}>
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${item.status === 'triggered' ? 'bg-red-500' : 'bg-gray-700'}`}></div>
            <span className={`text-xs font-mono ${item.status === 'triggered' ? 'text-white' : 'text-gray-500'}`}>{item.rule}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-mono text-gray-600">{item.detail}</span>
            {item.status === 'triggered' && <span className="text-[9px] font-mono text-red-400 font-bold">FLAG</span>}
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-800/60 flex justify-between text-[9px] font-mono">
      <span className="text-gray-500">MONITORING: MICROSOFT CORP</span>
      <span className="text-[#00C2A8]">LIVE DISCLOSURE FEED</span>
    </div>
  </div>
);

// --- VISUAL 3: Natural Language Rule Builder ---
const VisualRuleBuilder = () => (
  <div className="w-full h-80 bg-[#0A0E17] border border-gray-800/60 p-6 flex flex-col relative overflow-hidden">
    <div className="text-[10px] font-mono text-gray-500 mb-6 uppercase tracking-widest">Natural Language Rule Builder</div>
    
    <div className="flex-1 flex flex-col justify-center items-center">
      <div className="w-full max-w-sm bg-[#030509] border border-gray-700 p-4 mb-6 relative">
        <div className="absolute -top-2 left-4 bg-[#0A0E17] px-2 text-[9px] font-mono text-gray-500">INPUT</div>
        <p className="text-sm text-white font-mono leading-relaxed">
          "Alert me if director overboarding exceeds <span className="text-[#00C2A8] underline decoration-[#00C2A8]/50">4 boards</span>"
        </p>
      </div>
      
      <div className="flex items-center gap-4 text-gray-600 mb-6">
        <div className="w-12 h-[1px] bg-gray-700"></div>
        <IconArrow className="w-4 h-4 text-[#00C2A8]" />
        <div className="w-12 h-[1px] bg-gray-700"></div>
      </div>
      
      <div className="w-full max-w-sm bg-[#030509] border border-[#00C2A8]/30 p-4 relative">
        <div className="absolute -top-2 left-4 bg-[#0A0E17] px-2 text-[9px] font-mono text-[#00C2A8]">GENERATED RULE OUTPUT</div>
        <div className="space-y-2">
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-gray-500">CONDITION:</span>
            <span className="text-[#00C2A8]">COUNT(BOARDS) &gt; 4</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-gray-500">ACTION:</span>
            <span className="text-white">FLAG_FOR_REVIEW</span>
          </div>
          <div className="flex justify-between text-[10px] font-mono">
            <span className="text-gray-500">SCOPE:</span>
            <span className="text-white">ALL_DIRECTORS</span>
          </div>
        </div>
      </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-800/60 flex justify-between text-[9px] font-mono">
      <span className="text-gray-500">NO CODE REQUIRED</span>
      <span className="text-[#00C2A8]">BACKTESTABLE</span>
    </div>
  </div>
);

// --- VISUAL 4: Audit Trail / Source Traceability ---
const VisualAuditTrail = () => (
  <div className="w-full h-80 bg-[#0A0E17] border border-gray-800/60 p-6 flex flex-col">
    <div className="flex justify-between items-center mb-6">
      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Audit Trail</span>
      <span className="text-[10px] font-mono text-[#00C2A8]">100% TRACEABLE</span>
    </div>
    
    <div className="flex-1 space-y-4">
      {[
        { label: "Conclusion", value: "VOTE AGAINST", source: "Policy Rule 4.2", type: "output" },
        { label: "Rule Applied", value: "Excessive Discretion", source: "Internal Policy", type: "rule" },
        { label: "Extracted Data", value: "Bonus Cap: N/A", source: "Page 42, Para 3", type: "data" },
        { label: "Source Document", value: "Microsoft DEF 14A", source: "SEC Filing", type: "source" },
      ].map((item, i) => (
        <div key={i} className="flex items-start gap-4 relative">
          {i < 3 && <div className="absolute left-[7px] top-6 w-[1px] h-6 bg-gray-800"></div>}
          <div className={`w-3 h-3 rounded-full border-2 ${item.type === 'output' ? 'border-[#00C2A8] bg-[#00C2A8]' : 'border-gray-700 bg-[#0A0E17]'} mt-1 z-10`}></div>
          <div className="flex-1 flex justify-between items-center">
            <div>
              <div className="text-xs font-mono text-gray-400 mb-0.5">{item.label}</div>
              <div className={`text-sm font-medium ${item.type === 'output' ? 'text-[#00C2A8]' : 'text-white'}`}>{item.value}</div>
            </div>
            <div className="text-[9px] font-mono text-gray-500 bg-gray-900/50 px-2 py-1 border border-gray-800">{item.source}</div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-800/60 text-center text-[9px] font-mono text-gray-500">
      EVERY OUTPUT LINKS TO THE EXACT PAGE AND PARAGRAPH IN THE SOURCE FILING
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
        <span className="text-[10px] font-mono tracking-[0.2em] text-[#00C2A8] uppercase">Product · ProxyBeacon</span>
      </div>
      
      <h1 className="text-5xl md:text-7xl font-serif text-white leading-[1.05] tracking-tight mb-8 max-w-4xl">
        AI-powered <br/><span className="text-gray-500 italic">proxy research.</span>
      </h1>
      
      <p className="text-xl text-gray-400 font-light leading-relaxed max-w-2xl mb-12">
        Generate your own proxy research in-house. Get custom reports, governance flags, and rule outputs within hours of a meeting being announced — fully sourced and auditable.
      </p>

      <div className="flex flex-wrap gap-4 mb-12">
        <a href="#demo" className="px-8 py-4 bg-[#00C2A8] text-[#030509] text-[10px] font-bold uppercase tracking-widest hover:bg-white transition-colors">
          Book a Demo
        </a>
        <a href="#how-it-works" className="px-8 py-4 border border-gray-700 text-white text-[10px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors">
          See How It Works
        </a>
      </div>
      
      <div className="flex items-center gap-6 text-[10px] font-mono text-gray-500">
        <div className="flex items-center gap-2"><IconShield className="w-4 h-4" /> ISO 27001 ACCREDITED</div>
        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
        <div>TRUSTED BY 6 OF THE TOP 10 US ASSET MANAGERS</div>
      </div>
    </div>
  </section>
);

const CoreThesis = () => (
  <section className="py-24 bg-[#05080F] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16 grid lg:grid-cols-2 gap-20">
      <div>
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">01 // The Paradigm</h2>
        <h3 className="text-3xl font-bold text-white mb-6">Why stewardship teams are bringing proxy research in-house.</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6 font-light">
          The proxy voting landscape is shifting. For years, stewardship teams have relied on a small number of proxy advisors to provide the research and recommendations behind voting decisions. That model is increasingly under pressure.
        </p>
        <p className="text-sm text-white leading-relaxed font-light border-l border-[#00C2A8] pl-4 mb-6">
          Large institutional investors may vote on thousands of meetings in a single proxy season. Traditional research can arrive late, making decisions reactive rather than considered. Regulators and clients increasingly expect voting decisions to reflect a firm’s own policies and analysis.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          All of this creates a clear need: tools that help stewardship teams produce their own research quickly and consistently, with full auditability, without having to build the entire process themselves.
        </p>
      </div>

      <div className="bg-[#030509] border border-gray-800/60 p-8 flex flex-col justify-between">
        <div className="text-[10px] font-mono text-gray-500 tracking-widest uppercase mb-8">The Scale Challenge</div>
        <div className="space-y-6">
          {[
            { value: "5,000+", label: "Meetings per proxy season" },
            { value: "48 hrs", label: "Typical research turnaround" },
            { value: "100%", label: "Requires auditability" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-between border-b border-gray-800/60 pb-4 last:border-0 last:pb-0">
              <span className="text-2xl font-mono text-[#00C2A8]">{stat.value}</span>
              <span className="text-[10px] font-mono text-gray-500 text-right">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800/60">
          <VisualResearchPipeline />
        </div>
      </div>
    </div>
  </section>
);

const FeatureDeepDive = () => (
  <section id="how-it-works" className="py-24 bg-[#030509] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <div className="mb-16 max-w-2xl">
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">02 // Capabilities</h2>
        <h3 className="text-3xl font-bold text-white mb-6">In-house proxy research, powered by AI.</h3>
        <p className="text-sm text-gray-400 font-light">ProxyBeacon enables stewardship teams to generate their own structured, fully sourced proxy research — aligned to the firm's own policies, priorities, and reporting requirements.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {[
          { id: "01", title: "Custom Research Reports, Fast", desc: "Save hours per meeting cycle. Define your own criteria and flags, and receive customised reports within hours of meetings being announced. Generate reports on board quality, executive remuneration, shareholder proposals, and audit risks.", visual: <VisualResearchPipeline /> },
          { id: "02", title: "Automated Governance Flagging", desc: "No more manual scanning of proxy materials. Flag your key governance thresholds and get notified when they're triggered. ProxyBeacon monitors disclosures and notifies you immediately when your conditions are met.", visual: <VisualGovernanceFlags /> },
          { id: "03", title: "Custom Voting Policies", desc: "Take full control of your voting decisions. Define rules intuitively using natural language, apply flexible policies by market, sector, or theme, and backtest them for accuracy and effectiveness.", visual: <VisualRuleBuilder /> },
          { id: "04", title: "Full Audit Trail", desc: "Every output is traceable to the source. Every answer in a ProxyBeacon report links directly back to the underlying source document; the specific page, paragraph, or data point in the filing.", visual: <VisualAuditTrail /> }
        ].map((cap, i) => (
          <div key={i} className="border border-gray-800/60 bg-[#0A0E17] p-8 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] font-mono text-[#00C2A8] tracking-widest">FEATURE // {cap.id}</span>
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

const TrustSection = () => (
  <section className="py-24 bg-[#05080F] border-b border-gray-800/60 relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00C2A8]/5 rounded-full blur-[120px]"></div>
    <div className="max-w-[90rem] mx-auto px-8 md:px-16 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-4">03 // Trust & Accuracy</h2>
        <h3 className="text-3xl font-bold text-white mb-6">Why our AI can be trusted for proxy research.</h3>
        <p className="text-sm text-gray-400 font-light max-w-2xl mx-auto">
          Voting decisions carry fiduciary weight. Any tool that supports them needs to meet high standards of accuracy, transparency, and accountability.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800/60 border border-gray-800/60">
        {[
          { icon: <IconZap className="w-5 h-5" />, title: "Extracts, Doesn't Judge", desc: "AI reads proxy statements and structures data against your templates. Judgement remains with you — your policies, your priorities." },
          { icon: <IconShield className="w-5 h-5" />, title: "Deterministic Rules", desc: "Rule outputs are applied as explicit conditions. If a company triggers one, the output is consistent and predictable. No ambiguity." },
          { icon: <IconFile className="w-5 h-5" />, title: "Traceable to Source", desc: "Every answer links directly back to the specific page, paragraph, or data point in the filing. Auditors can trace the full chain." },
          { icon: <IconCheck className="w-5 h-5" />, title: "Hallucination Prevention", desc: "The system surfaces information that exists in the source material. Where information is absent, it flags it rather than filling the gap." }
        ].map((item, i) => (
          <div key={i} className="bg-[#030509] p-8 hover:bg-[#0A0E17] transition-colors group">
            <div className="w-10 h-10 border border-gray-700 text-[#00C2A8] flex items-center justify-center mb-6 group-hover:border-[#00C2A8] transition-colors">
              {item.icon}
            </div>
            <h4 className="text-base font-bold text-white mb-3">{item.title}</h4>
            <p className="text-xs text-gray-400 font-light leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const StakeholderMatrix = () => (
  <section className="py-24 bg-[#030509] border-b border-gray-800/60">
    <div className="max-w-[90rem] mx-auto px-8 md:px-16">
      <h2 className="text-[11px] font-mono text-gray-500 tracking-[0.2em] uppercase mb-12 text-center">04 // Who Uses ProxyBeacon</h2>
      
      <div className="grid md:grid-cols-3 gap-x-12 gap-y-16">
        {[
          {
            title: "Stewardship Teams",
            desc: "You're responsible for voting across thousands of meetings each proxy season, applying policies consistently and producing defensible rationales.",
            benefits: ["Generate research at scale while maintaining consistency", "Apply your firm's policies directly", "Produce clear, auditable rationales", "Reduce time spent on manual document review"]
          },
          {
            title: "Asset Owners & Trustees",
            desc: "You need visibility into how votes are being cast on your behalf — and increasingly, the ability to ensure they reflect your own stewardship priorities.",
            benefits: ["Access structured research to understand decisions", "Define and apply your own governance priorities", "Challenge or validate manager decisions", "Strengthen accountability through transparent outputs"]
          },
          {
            title: "Firms Reducing Advisor Reliance",
            desc: "Whether moving away from external proxy advisory services or supplementing them, the challenge is building internal capability without operational burden.",
            benefits: ["Generate structured research using your own frameworks", "Maintain consistency across large volumes", "Reduce dependency on standardised recommendations", "Build internal capability without a proprietary platform"]
          }
        ].map((stakeholder, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-4 top-0 w-[1px] h-full bg-gray-800/60 hidden md:block"></div>
            <h3 className="text-xl font-bold text-white mb-3">{stakeholder.title}</h3>
            <p className="text-sm text-gray-400 font-light mb-6 min-h-[80px]">{stakeholder.desc}</p>
            <ul className="space-y-3">
              {stakeholder.benefits.map((b, idx) => (
                <li key={idx} className="text-xs text-[#00C2A8] font-mono tracking-wide flex items-start gap-2">
                  <IconArrow className="w-3 h-3 mt-0.5 flex-shrink-0" /> <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactTerminal = () => (
  <section id="demo" className="py-24 bg-[#030509]">
    <div className="max-w-3xl mx-auto px-8 md:px-16 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">See ProxyBeacon on a company you care about.</h2>
      <p className="text-gray-400 text-sm font-light mb-12">Book a 30-minute demo and we'll build a live report and flag set around your priorities.</p>
      
      <form className="space-y-6 text-left max-w-lg mx-auto">
        <div>
          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Business Email</label>
          <input type="email" className="w-full bg-[#0A0E17] border border-gray-800 text-white p-4 focus:border-[#00C2A8] focus:outline-none transition-colors" placeholder="email@institution.com" />
        </div>
        <div>
          <label className="block text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">Message / Priorities (Optional)</label>
          <textarea rows="4" className="w-full bg-[#0A0E17] border border-gray-800 text-white p-4 focus:border-[#00C2A8] focus:outline-none transition-colors" placeholder="e.g. Executive compensation, climate targets..."></textarea>
        </div>
        <button className="w-full bg-[#00C2A8] text-[#030509] text-[11px] font-bold uppercase tracking-[0.2em] py-5 hover:bg-white transition-all">
          Book a Demo
        </button>
        <p className="text-center text-[10px] text-gray-600">ISO 27001 Information Security Management Systems Accredited.</p>
      </form>
    </div>
  </section>
);

// ============================================================================
// 3. MAIN EXPORT
// ============================================================================

export default function ProxyBeacon() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030509] font-sans selection:bg-[#00C2A8] selection:text-[#030509]">
      <Navbar />
      <main>
        <ResearchHero />
        <CoreThesis />
        <FeatureDeepDive />
        <TrustSection />
        <StakeholderMatrix />
        <ContactTerminal />
      </main>
      <footer className="py-12 bg-[#030509] border-t border-gray-800/60 text-center">
        <div className="max-w-[90rem] mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-bold text-white">tumelo</div>
          <p className="text-[10px] font-mono text-gray-600">Voting technology for fund managers, institutional investors and retail investors.</p>
          <p className="text-[10px] font-mono text-gray-600">ISO 27001 accredited. © 2026 Tumelo.</p>
        </div>
      </footer>
    </div>
  );
}