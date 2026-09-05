// components/home/hero.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export function Hero() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <section className="relative min-h-screen bg-[#07090E] text-white flex flex-col justify-between pt-36 pb-12 px-6 md:px-12 overflow-hidden select-none">
      
      {/* 1. Multi-Layer Architectural Glass Prism Walls (The Software House Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-0">
        {/* Ambient Chromatic Glows */}
        <div className="absolute -top-20 left-[10%] w-[550px] h-[450px] bg-[#FF8A00]/12 rounded-full blur-[140px]" />
        <div className="absolute -top-10 left-[40%] w-[500px] h-[450px] bg-[#7C3AED]/12 rounded-full blur-[160px]" />
        <div className="absolute -top-20 right-[5%] w-[650px] h-[500px] bg-[#1677FF]/18 rounded-full blur-[170px]" />

        {/* Dynamic Overlapping Glass Slat Panels (Angled Facets) */}
        <div className="absolute -top-32 -left-16 right-0 h-[720px] flex gap-3 md:gap-5 -skew-y-6 opacity-70 md:opacity-85">
          {/* Group 1: Warm Amber / Sunset Orange (Left) */}
          <div className="w-20 md:w-28 h-[85%] rounded-2xl bg-gradient-to-b from-[#FF8A00]/30 via-[#FF8A00]/10 to-transparent border-t border-l border-white/20 backdrop-blur-md shadow-[0_8px_32px_rgba(255,138,0,0.15)]" />
          <div className="w-20 md:w-28 h-[105%] rounded-2xl bg-gradient-to-b from-[#FFA133]/25 via-[#FF5E3A]/10 to-transparent border-t border-l border-white/20 backdrop-blur-md mt-6 shadow-[0_8px_32px_rgba(255,94,58,0.15)]" />
          <div className="w-20 md:w-28 h-[95%] rounded-2xl bg-gradient-to-b from-[#FF5E3A]/30 via-[#FF2D8D]/10 to-transparent border-t border-l border-white/20 backdrop-blur-md -mt-4" />
          
          {/* Group 2: Lavender / Royal Violet (Center Left) */}
          <div className="w-20 md:w-28 h-[115%] rounded-2xl bg-gradient-to-b from-[#C084FC]/25 via-[#7C3AED]/15 to-transparent border-t border-l border-white/20 backdrop-blur-md mt-8 shadow-[0_8px_32px_rgba(124,58,237,0.15)]" />
          <div className="w-20 md:w-28 h-[100%] rounded-2xl bg-gradient-to-b from-[#7C3AED]/35 via-[#6366F1]/15 to-transparent border-t border-l border-white/20 backdrop-blur-md" />
          <div className="w-20 md:w-28 h-[120%] rounded-2xl bg-gradient-to-b from-[#818CF8]/25 via-[#4F46E5]/15 to-transparent border-t border-l border-white/20 backdrop-blur-md mt-4" />

          {/* Group 3: Electric Tech Blue (Center Right) */}
          <div className="w-20 md:w-28 h-[90%] rounded-2xl bg-gradient-to-b from-[#38BDF8]/30 via-[#1677FF]/20 to-transparent border-t border-l border-white/20 backdrop-blur-md -mt-6 shadow-[0_8px_32px_rgba(22,119,255,0.2)]" />
          <div className="w-20 md:w-28 h-[125%] rounded-2xl bg-gradient-to-b from-[#1677FF]/40 via-[#0284C7]/15 to-transparent border-t border-l border-white/20 backdrop-blur-md mt-10" />
          <div className="w-20 md:w-28 h-[105%] rounded-2xl bg-gradient-to-b from-[#2563EB]/35 via-[#0EA5E9]/15 to-transparent border-t border-l border-white/20 backdrop-blur-md" />

          {/* Group 4: Ice Cyan / Crystal Blue (Right) */}
          <div className="w-20 md:w-28 h-[115%] rounded-2xl bg-gradient-to-b from-[#00C2FF]/30 via-[#06B6D4]/10 to-transparent border-t border-l border-white/20 backdrop-blur-md mt-6 shadow-[0_8px_32px_rgba(0,194,255,0.2)]" />
          <div className="w-20 md:w-28 h-[95%] rounded-2xl bg-gradient-to-b from-[#38BDF8]/35 via-transparent to-transparent border-t border-l border-white/20 backdrop-blur-md -mt-2" />
          <div className="w-20 md:w-28 h-[110%] rounded-2xl bg-gradient-to-b from-[#67E8F9]/20 via-transparent to-transparent border-t border-l border-white/15 backdrop-blur-md mt-8" />
        </div>

        {/* Smooth Vignette Fade to Solid Background */}
        <div className="absolute bottom-0 inset-x-0 h-80 bg-gradient-to-t from-[#07090E] via-[#07090E]/90 to-transparent" />
      </div>

      {/* 2. Top Pill Status Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#11141D]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono tracking-wider text-zinc-300 uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-[#18C946] animate-pulse" />
          <span>Available for New Projects • Engineering Studio</span>
        </motion.div>
      </div>

      {/* 3. Hero Editorial Typography (Clean, Unified, Architectural) */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold tracking-[-0.035em] text-white leading-[1.04] max-w-5xl"
        >
          Turning ideas into{" "}
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-300">
            technology
          </span>{" "}
          and digital reality.
        </motion.h1>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={openModal}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-white text-zinc-950 font-bold text-sm hover:bg-zinc-200 active:scale-95 transition-all shadow-[0_8px_30px_rgba(255,255,255,0.15)] cursor-pointer"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#services"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm backdrop-blur-md transition-all"
          >
            <Code2 className="w-4 h-4 text-zinc-400" />
            <span>Explore Capabilities</span>
          </a>
        </motion.div>
      </div>

      {/* 4. Bottom Studio Metrics & Spec Line */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          
          <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-[#8E95A5]">
            <p className="max-w-xs leading-relaxed text-zinc-300 font-normal">
              Transform business requirements and bold visions into production-grade software.
            </p>
            
            <div className="hidden sm:flex w-8 h-8 rounded-full bg-white/[0.04] border border-white/10 items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5 text-zinc-400" />
            </div>

            <p className="max-w-xs leading-relaxed font-normal">
              Full-cycle development from high-converting websites to custom ERPs, CRMs, and mobile apps.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end items-center gap-3">
            <div className="text-left md:text-right">
              <div className="flex items-center md:justify-end gap-1.5 text-xs font-semibold text-white">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A00]" />
                <span>Next.js • Flutter • Custom SaaS</span>
              </div>
              <p className="text-[11px] text-zinc-500 mt-0.5">
                Modern architecture & engineering standards
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}