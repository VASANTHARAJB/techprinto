// components/home/intro.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Palette,
  Cpu,
  TrendingUp,
  Radio,
  Layers,
  Terminal,
  Activity,
  ArrowUpRight,
} from "lucide-react";

export function Intro() {
  return (
    <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      {/* Background Ambient Radial Lights */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-[#FF8A00]/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#1677FF]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="max-w-3xl mb-20">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#FF8A00] font-semibold uppercase mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00] animate-ping" />
          PRODUCT LIFECYCLE
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08]"
        >
          Technology Built Around <br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Your Ideas.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-base sm:text-lg text-[#8E95A5] leading-relaxed"
        >
          Every business has unique operational realities and ambitious milestones. We guide ideas through a proven four-stage engineering lifecycle to create dependable, high-yield digital products.
        </motion.p>
      </div>

      {/* 4 Rich Visual Animated Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* ================= CARD 1: IDEA ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#0F121A] to-[#0A0C11] border border-white/[0.08] hover:border-[#FF8A00]/40 p-6 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF8A00]/10 rounded-full blur-2xl group-hover:bg-[#FF8A00]/20 transition-all pointer-events-none" />

          <div>
            {/* Header Badge */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-black font-mono text-zinc-600 group-hover:text-white transition-colors">
                01
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#171B26] border border-white/10 flex items-center justify-center text-[#FF8A00] shadow-inner">
                <Lightbulb className="w-5 h-5" />
              </div>
            </div>

            {/* Visual Micro-Canvas: Radar / Idea Node Map */}
            <div className="relative h-44 rounded-2xl bg-[#07090E] border border-white/5 p-4 mb-6 flex items-center justify-center overflow-hidden">
              {/* Radar Rings */}
              <div className="absolute w-32 h-32 rounded-full border border-[#FF8A00]/20 animate-ping opacity-25" />
              <div className="absolute w-24 h-24 rounded-full border border-white/10" />
              <div className="absolute w-12 h-12 rounded-full border border-white/15" />

              {/* Center Glowing Hub */}
              <div className="relative z-10 w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF8A00] to-[#FF5E3A] flex items-center justify-center text-white shadow-[0_0_16px_rgba(255,138,0,0.5)]">
                <Radio className="w-4 h-4" />
              </div>

              {/* Orbiting Idea Nodes */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-28 h-28 pointer-events-none"
              >
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_8px_#FFF]" />
                <span className="absolute bottom-1 left-4 w-2 h-2 rounded-full bg-[#FF8A00] shadow-[0_0_6px_#FF8A00]" />
                <span className="absolute top-8 right-0 w-2 h-2 rounded-full bg-[#FF5E3A]" />
              </motion.div>

              <span className="absolute bottom-2 left-3 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                DISCOVERY & SCOPE
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
              IDEA
            </h3>
            <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
              Understand the core vision, target users, business metrics, and functional feasibility before writing code.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>PHASE ONE</span>
            <span className="w-2 h-2 rounded-full bg-[#FF8A00]" />
          </div>
        </motion.div>

        {/* ================= CARD 2: DESIGN ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#0F121A] to-[#0A0C11] border border-white/[0.08] hover:border-[#FF2D8D]/40 p-6 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF2D8D]/10 rounded-full blur-2xl group-hover:bg-[#FF2D8D]/20 transition-all pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-black font-mono text-zinc-600 group-hover:text-white transition-colors">
                02
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#171B26] border border-white/10 flex items-center justify-center text-[#FF2D8D] shadow-inner">
                <Palette className="w-5 h-5" />
              </div>
            </div>

            {/* Visual Micro-Canvas: Figma / UI Wireframe Deck */}
            <div className="relative h-44 rounded-2xl bg-[#07090E] border border-white/5 p-4 mb-6 flex flex-col justify-between overflow-hidden">
              {/* Wireframe Mockup */}
              <div className="w-full space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#FF2D8D]/70" />
                    <span className="w-2 h-2 rounded-full bg-zinc-700" />
                    <span className="w-2 h-2 rounded-full bg-zinc-700" />
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600">UI / UX</span>
                </div>

                <div className="h-10 rounded-xl bg-white/[0.03] border border-white/10 p-2 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#FF2D8D]/20 border border-[#FF2D8D]/40 flex items-center justify-center">
                    <Layers className="w-3 h-3 text-[#FF2D8D]" />
                  </div>
                  <div className="space-y-1">
                    <div className="w-16 h-1.5 bg-zinc-400 rounded-full" />
                    <div className="w-10 h-1 bg-zinc-600 rounded-full" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 rounded-lg bg-white/[0.02] border border-white/5" />
                  <div className="h-8 rounded-lg bg-white/[0.02] border border-white/5" />
                </div>
              </div>

              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                DESIGN SYSTEM
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
              DESIGN
            </h3>
            <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
              Transform ideas into intuitive journeys, design systems, interactive prototypes, and accessible user interfaces.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>PHASE TWO</span>
            <span className="w-2 h-2 rounded-full bg-[#FF2D8D]" />
          </div>
        </motion.div>

        {/* ================= CARD 3: ENGINEERING ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#0F121A] to-[#0A0C11] border border-white/[0.08] hover:border-[#1677FF]/40 p-6 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#1677FF]/10 rounded-full blur-2xl group-hover:bg-[#1677FF]/20 transition-all pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-black font-mono text-zinc-600 group-hover:text-white transition-colors">
                03
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#171B26] border border-white/10 flex items-center justify-center text-[#1677FF] shadow-inner">
                <Cpu className="w-5 h-5" />
              </div>
            </div>

            {/* Visual Micro-Canvas: Code Terminal / Architecture */}
            <div className="relative h-44 rounded-2xl bg-[#07090E] border border-white/5 p-3 mb-6 flex flex-col justify-between font-mono text-[10px] overflow-hidden">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-zinc-600 pb-1 border-b border-white/5">
                  <div className="flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-[#1677FF]" />
                    <span>build.ts</span>
                  </div>
                  <span className="text-[#18C946] text-[9px]">200 OK</span>
                </div>

                <p className="text-zinc-500">
                  <span className="text-[#1677FF]">import</span> &#123; Engine &#125; <span className="text-[#1677FF]">from</span> &apos;tech&apos;;
                </p>
                <p className="text-zinc-400">
                  <span className="text-[#FF8A00]">const</span> app = <span className="text-[#00C2FF]">deploy</span>(&#123;
                </p>
                <p className="pl-3 text-zinc-500">scale: <span className="text-[#18C946]">&apos;auto&apos;</span>,</p>
                <p className="pl-3 text-zinc-500">cache: <span className="text-[#1677FF]">true</span></p>
                <p className="text-zinc-400">&#125;);</p>
              </div>

              <div className="flex items-center justify-between pt-1 border-t border-white/5">
                <span className="text-[9px] text-zinc-500">STATUS</span>
                <span className="text-[#00C2FF] font-semibold text-[9px] animate-pulse">DEPLOYED</span>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
              ENGINEERING
            </h3>
            <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
              Build resilient, secure, and maintainable software using modern web, mobile, and backend architectures.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>PHASE THREE</span>
            <span className="w-2 h-2 rounded-full bg-[#1677FF]" />
          </div>
        </motion.div>

        {/* ================= CARD 4: GROWTH ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -8 }}
          className="group relative rounded-3xl bg-gradient-to-b from-[#0F121A] to-[#0A0C11] border border-white/[0.08] hover:border-[#00C2FF]/40 p-6 flex flex-col justify-between shadow-2xl overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00C2FF]/10 rounded-full blur-2xl group-hover:bg-[#00C2FF]/20 transition-all pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-black font-mono text-zinc-600 group-hover:text-white transition-colors">
                04
              </span>
              <div className="w-10 h-10 rounded-xl bg-[#171B26] border border-white/10 flex items-center justify-center text-[#00C2FF] shadow-inner">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            {/* Visual Micro-Canvas: Live Dynamic Upward Analytics Graph */}
            <div className="relative h-44 rounded-2xl bg-[#07090E] border border-white/5 p-4 mb-6 flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#00C2FF]" />
                  <span className="text-[10px] font-mono text-zinc-400">METRICS</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#18C946] bg-[#18C946]/10 px-2 py-0.5 rounded-full border border-[#18C946]/20">
                  +240%
                </span>
              </div>

              {/* Upward Curved SVG Sparkline */}
              <div className="relative h-16 w-full flex items-end">
                <svg className="w-full h-16 overflow-visible" viewBox="0 0 100 40">
                  <defs>
                    <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#00C2FF" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#00C2FF" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 35 Q 25 32, 50 18 T 100 4 L 100 40 L 0 40 Z"
                    fill="url(#growthGrad)"
                  />
                  <path
                    d="M0 35 Q 25 32, 50 18 T 100 4"
                    fill="none"
                    stroke="#00C2FF"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                SCALE & EVOLUTION
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-white tracking-tight mb-2">
              GROWTH
            </h3>
            <p className="text-xs sm:text-sm text-[#8E95A5] leading-relaxed">
              Iterate, monitor telemetry, optimize performance, and scale technical infrastructure as business volume expands.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span>PHASE FOUR</span>
            <span className="w-2 h-2 rounded-full bg-[#00C2FF]" />
          </div>
        </motion.div>

      </div>

    </section>
  );
}   