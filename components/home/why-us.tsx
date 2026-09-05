// components/home/why-us.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowUpRight, Sparkles, ShieldCheck } from "lucide-react";

interface ComparisonItem {
  num: string;
  category: string;
  standardWay: string;
  techprintoWay: string;
  techprintoHighlight: string;
}

const COMPARISONS: ComparisonItem[] = [
  {
    num: "01",
    category: "CODE OWNERSHIP & LICENSING",
    standardWay: "Agencies hold your codebase hostage on their servers or lock you into proprietary platforms with recurring maintenance traps.",
    techprintoWay: "Complete Git repository, database schemas, and CI/CD pipelines handed over to your organization on day one.",
    techprintoHighlight: "100% Client Ownership • Zero Vendor Lock-in",
  },
  {
    num: "02",
    category: "COMMUNICATION & SPEED",
    standardWay: "Layers of sales reps and non-technical account managers who relay messages slowly and misunderstand engineering requirements.",
    techprintoWay: "Direct access to lead engineers through dedicated Slack channels, weekly sprint demos, and live technical reviews.",
    techprintoHighlight: "Direct Engineer Line • Zero Communication Lag",
  },
  {
    num: "03",
    category: "ARCHITECTURE & PERFORMANCE",
    standardWay: "Heavy, bloated CMS templates and copy-pasted code that slow down, crash under load, and fail security audits.",
    techprintoWay: "Bespoke software engineered in Next.js, Flutter, and Node.js with edge caching and sub-second response times.",
    techprintoHighlight: "Built From Scratch • Sub-Second Load Speeds",
  },
  {
    num: "04",
    category: "PROJECT DELIVERY & PRICING",
    standardWay: "Vague timelines, scope creep, surprise hourly billing, and endless delays without working software to show.",
    techprintoWay: "Structured 1–2 week sprints, fixed deliverable milestones, and transparent demos before production rollout.",
    techprintoHighlight: "Fixed Sprint Scope • Predictable Milestones",
  },
];

export function WhyUs() {
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF8A00]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#FF8A00] font-semibold uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE ENGINEERING DIFFERENCE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Why Work With Us. <br />
            <span className="text-zinc-400 font-medium text-2xl sm:text-4xl lg:text-5xl">
              No generic templates. No middlemen.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-xs sm:text-sm text-zinc-400 leading-relaxed">
          How we compare against traditional agencies and freelance shops. Simple, transparent, and built around your business goals.
        </p>
      </div>

      {/* Comparison Table Header */}
      <div className="hidden lg:grid grid-cols-12 py-4 px-6 text-[11px] font-mono uppercase tracking-wider text-zinc-500 border-b border-white/10">
        <span className="col-span-1">No.</span>
        <span className="col-span-5 text-zinc-500">Typical Agency Approach</span>
        <span className="col-span-6 text-[#FF8A00] font-bold">The Techprinto Standard</span>
      </div>

      {/* Comparison Rows */}
      <div className="divide-y divide-white/[0.08] border-b border-white/[0.08]">
        {COMPARISONS.map((item, index) => {
          const isActive = activeRow === index;

          return (
            <div
              key={item.num}
              onMouseEnter={() => setActiveRow(index)}
              onMouseLeave={() => setActiveRow(null)}
              className={`py-8 px-4 sm:px-6 transition-colors duration-200 ${
                isActive ? "bg-white/[0.02]" : ""
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                
                {/* Number & Category */}
                <div className="lg:col-span-1 flex items-center gap-3">
                  <span className={`font-mono text-sm font-bold ${
                    isActive ? "text-[#FF8A00]" : "text-zinc-500"
                  }`}>
                    {item.num}
                  </span>
                  <span className="lg:hidden text-[11px] font-mono text-zinc-400 uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Left: The Flawed Standard */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-rose-400/90 font-semibold uppercase">
                    <X className="w-3.5 h-3.5" />
                    <span>Traditional Approach</span>
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.standardWay}
                  </p>
                </div>

                {/* Right: The Techprinto Way */}
                <div className="lg:col-span-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase">
                    <Check className="w-3.5 h-3.5" />
                    <span>Techprinto Engineering</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                    {item.techprintoWay}
                  </p>
                  
                  <div className="pt-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-[#FF8A00]">
                      <ShieldCheck className="w-3 h-3 text-[#FF8A00]" />
                      {item.techprintoHighlight}
                    </span>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Line */}
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div>
          <span>TRANSPARENT CONTRACTS</span>
          <span className="mx-2">•</span>
          <span>100% DIRECT SOURCE CODE DELIVERY</span>
        </div>

        <button
          onClick={openModal}
          className="text-white hover:text-[#FF8A00] transition-colors flex items-center gap-1.5 cursor-pointer font-bold self-start sm:self-auto"
        >
          <span>Discuss your project with an engineer</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}