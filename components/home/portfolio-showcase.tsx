// components/home/portfolio-showcase.tsx
"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Cpu } from "lucide-react";
import { PORTFOLIO_CONCEPTS, type PortfolioConcept } from "@/lib/data";

export function PortfolioShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth hover intent buffer (prevents jerky jumping when cursor moves quickly)
  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(index);
    }, 70); // 70ms micro-buffer gives buttery smoothness without lag
  };

  const handleMouseLeaveRow = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <section id="portfolio" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* 1. Header: Pure Editorial Typography */}
      <div className="mb-20">
        <div className="flex items-center gap-3 text-xs font-mono text-[#00C2FF] uppercase tracking-widest mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
          <span>TECHNICAL SPECIFICATIONS & ARCHITECTURES</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[1.05]">
          Engineering Index.
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Production systems and custom architectures. Hover your cursor over any entry to inspect its architecture, specifications, and operational metrics.
        </p>
      </div>

      {/* 2. Full-Width Technical Spec Table */}
      <div className="w-full border-t border-white/15">
        
        {/* Table Column Labels */}
        <div className="hidden md:grid grid-cols-12 py-4 text-[11px] font-mono text-zinc-500 uppercase tracking-wider border-b border-white/10">
          <span className="col-span-1">No.</span>
          <span className="col-span-4">Platform / System</span>
          <span className="col-span-3">Architecture Type</span>
          <span className="col-span-3">Core Stack</span>
          <span className="col-span-1 text-right">Status</span>
        </div>

        {/* Table Rows */}
        {PORTFOLIO_CONCEPTS.map((project: PortfolioConcept, index: number) => {
          const isHovered = hoveredIndex === index;
          const num = String(index + 1).padStart(2, "0");

          return (
            <div
              key={project.title}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeaveRow}
              onClick={() => setHoveredIndex(index)}
              className={`relative border-b border-white/10 transition-colors duration-300 cursor-pointer ${
                isHovered ? "bg-white/[0.025]" : "hover:bg-white/[0.01]"
              }`}
            >
              {/* Glowing Smooth Left Accent Line */}
              {isHovered && (
                <motion.div
                  layoutId="hoverSpecIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute left-0 inset-y-0 w-1 bg-gradient-to-b from-[#FF8A00] to-[#FF5E3A]"
                />
              )}

              {/* Main Row */}
              <div className="py-6 sm:py-7 grid grid-cols-1 md:grid-cols-12 items-center gap-4 px-3 sm:px-4">
                
                {/* 1. Index No. */}
                <div className="col-span-1 font-mono text-sm sm:text-base text-zinc-500 flex items-center gap-3">
                  <span className={`transition-colors duration-300 ${isHovered ? "text-[#FF8A00] font-bold" : ""}`}>
                    {num}
                  </span>
                  <span className="md:hidden text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                    {project.tag}
                  </span>
                </div>

                {/* 2. Platform / System Name */}
                <div className="col-span-4">
                  <h3 className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                    isHovered ? "text-white" : "text-zinc-400"
                  }`}>
                    {project.title}
                  </h3>
                  <span className="md:hidden text-xs text-zinc-400 mt-1 block">
                    {project.category}
                  </span>
                </div>

                {/* 3. Architecture Category */}
                <div className="hidden md:flex col-span-3 items-center gap-2 text-sm text-zinc-400 font-mono">
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                    isHovered ? "bg-[#FF8A00]" : "bg-white/20"
                  }`} />
                  <span className={`transition-colors duration-300 ${isHovered ? "text-zinc-200" : ""}`}>
                    {project.category}
                  </span>
                </div>

                {/* 4. Core Stack Inline Pills */}
                <div className="hidden md:flex col-span-3 items-center gap-1.5 flex-wrap">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded border transition-colors duration-300 ${
                        isHovered
                          ? "bg-white/[0.08] text-white border-white/15"
                          : "bg-white/[0.03] text-zinc-400 border-white/5"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 5. Smooth Rotating Arrow */}
                <div className="col-span-1 flex items-center justify-end gap-2">
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                    isHovered
                      ? "bg-white text-black border-white rotate-45"
                      : "border-white/10 text-zinc-500 rotate-0"
                  }`}>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Expandable Engineering Drawer with Luxurious Smooth Physics */}
              <AnimatePresence initial={false}>
                {isHovered && (
                  <motion.div
                    key="drawer"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      height: { duration: 0.48, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.32, delay: 0.08, ease: "easeOut" },
                    }}
                    className="overflow-hidden bg-[#05060A]"
                  >
                    <div className="py-8 px-4 sm:px-8 border-t border-dashed border-white/10">
                      
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Scope & Description */}
                        <div className="lg:col-span-6 space-y-4">
                          <span className="text-[10px] font-mono tracking-widest text-[#FF8A00] uppercase font-semibold block">
                            ARCHITECTURAL SCOPE & DELIVERABLES
                          </span>
                          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                            {project.desc}
                          </p>

                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.tech.map((t) => (
                              <span
                                key={t}
                                className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-zinc-200 border border-white/10"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Engineering Specs Data Table */}
                        <div className="lg:col-span-4 font-mono text-xs space-y-3">
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span className="text-zinc-500">TAG</span>
                            <span className="text-white">{project.tag}</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span className="text-zinc-500">STATUS</span>
                            <span className="text-emerald-400 flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Production Ready
                            </span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-white/5">
                            <span className="text-zinc-500">ARCHITECTURE</span>
                            <span className="text-zinc-300 flex items-center gap-1.5">
                              <Cpu className="w-3.5 h-3.5 text-[#00C2FF]" /> Microservices & Edge
                            </span>
                          </div>
                        </div>

                        {/* Action */}
                        <div className="lg:col-span-2 flex lg:justify-end items-center">
                          <button
                            onClick={openModal}
                            className="w-full lg:w-auto px-5 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
                          >
                            <span>Deploy Similar</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          );
        })}

      </div>

      {/* 3. Bottom Minimalist Summary */}
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
        <div>
          <span>TOTAL ARCHITECTURES: 06</span>
          <span className="mx-3">•</span>
          <span>ENTERPRISE SPECIFICATION</span>
        </div>
        <button
          onClick={openModal}
          className="text-[#FF8A00] hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <span>Need a customized proprietary system? Talk to an engineer</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
}