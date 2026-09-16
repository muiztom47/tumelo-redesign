import React from "react";
import { Link } from "react-router-dom";

const TumeloLogo = ({ className = "h-7" }) => (
  <svg className={className} viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="0" y="24" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="-0.05em" fontSize="26" fill="#ffffff">
      tume<tspan fill="#2EB6B9">lo</tspan>
    </text>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#030509] border-t border-gray-800/60 pt-24 pb-12">
      <div className="max-w-[90rem] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 lg:gap-8 mb-24">
          <div className="col-span-2 lg:col-span-2 pr-12">
            <TumeloLogo className="mb-8" />
            <p className="text-gray-500 font-light text-sm leading-relaxed mb-8 max-w-xs">
              Voting infrastructure for fund managers, institutional investors, and retail investors. Bristol &amp; New York.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs font-mono text-gray-600 uppercase tracking-widest hover:text-[#2EB6B9] transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Products</h4>
            <ul className="space-y-4">
              {["ProxySphere", "ProxyBeacon", "API Docs", "Security"].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Who we help</h4>
            <ul className="space-y-4">
              {["Fund Managers", "Institutional Investors", "Retail Investors", "Case Studies"].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4">
              {["About Us", "Careers", "Newsroom", "Contact"].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4">
              {["Privacy", "Terms", "Cookies", "Compliance"].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-400 hover:text-white text-sm font-light transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 font-mono text-[10px] uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Tumelo Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#2EB6B9] animate-pulse"></div>
            <span className="text-gray-500 font-mono text-[10px] uppercase tracking-widest">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Concept credit */}
        <div className="mt-8 pt-8 border-t border-gray-800/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
        
          <a
            href="https://www.seo-growup.com/?utm_source=tumelo-github&utm_medium=referral&utm_campaign=tumelo-case-study"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2EB6B9] transition-colors"
          >
          Concept redesign by GrowUp · Not affiliated with Tumelo Ltd.
          </a>
        </div>
      </div>
    </footer>
  );
}