// components/home/process-timeline.tsx
"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Layers,
  Palette,
  Terminal,
  ShieldCheck,
  Rocket,
  Activity,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface PipelineStage {
  num: string;
  title: string;
  tagline: string;
  desc: string;
  icon: React.ElementType;
  accent: string;
  deliverables: string[];
  metrics: { label: string; val: string };
}

const STAGES: PipelineStage[] = [
  {
    num: "01",
    title: "DISCOVER",
    tagline: "Scope & Feasibility Audit",
    desc: "We analyze business constraints, user journeys, data structures, and operational bottlenecks before writing a single line of code.",
    icon: Compass,
    accent: "#FF8A00",
    deliverables: ["Scope Definition", "Stakeholder Brief", "Feasibility RFC"],
    metrics: { label: "AUDIT TIME", val: "3–5 Days" },
  },
  {
    num: "02",
    title: "PLAN",
    tagline: "System Architecture Blueprint",
    desc: "Designing scalable database schemas, microservice boundaries, API specs, and a milestone roadmap with fixed deliverables.",
    icon: Layers,
    accent: "#FF5E3A",
    deliverables: ["Database Schema", "Architecture Blueprint", "Sprint Roadmap"],
    metrics: { label: "SPEC CLARITY", val: "100% Locked" },
  },
  {
    num: "03",
    title: "DESIGN",
    tagline: "Design System & Interactive Prototype",
    desc: "Crafting intuitive UX flows, high-fidelity interfaces, component design systems, and responsive layouts tested for conversions.",
    icon: Palette,
    accent: "#FF2D8D",
    deliverables: ["Figma Design System", "Interactive Flows", "Asset Library"],
    metrics: { label: "FIDELITY", val: "Pixel Perfect" },
  },
  {
    num: "04",
    title: "DEVELOP",
    tagline: "Full-Stack Agile Engineering",
    desc: "Clean, maintainable code written in 1–2 week sprints. Continuous code reviews, automated CI pipelines, and direct engineer access.",
    icon: Terminal,
    accent: "#7C3AED",
    deliverables: ["Weekly Sprint Demos", "Modular Codebase", "API Integration"],
    metrics: { label: "SPRINTS", val: "1–2 Wk Cadence" },
  },
  {
    num: "05",
    title: "TEST",
    tagline: "Quality Assurance & Vulnerability Scan",
    desc: "End-to-end integration tests, load testing, cross-browser compatibility, and deep security scans to eliminate edge-case failures.",
    icon: ShieldCheck,
    accent: "#1677FF",
    deliverables: ["Integration Tests", "Security Audit", "Performance Benchmarks"],
    metrics: { label: "COVERAGE", val: "Zero-Defect Goal" },
  },
  {
    num: "06",
    title: "DEPLOY",
    tagline: "Zero-Downtime Production Launch",
    desc: "Automated edge deployment, DNS configuration, CDN routing, SSL certification, and automated rollback configurations.",
    icon: Rocket,
    accent: "#00C2FF",
    deliverables: ["Cloud Provisioning", "DNS & SSL Setup", "Rollback Protocol"],
    metrics: { label: "DOWNTIME", val: "0.00 Seconds" },
  },
  {
    num: "07",
    title: "SCALE",
    tagline: "Telemetry & Architecture Evolution",
    desc: "Real-time performance monitoring, automated database indexing, server elasticity, and continuous iterative improvements.",
    icon: Activity,
    accent: "#18C946",
    deliverables: ["Telemetry Dashboard", "Auto-Scaling Setup", "Feature Backlog"],
    metrics: { label: "SLA TARGET", val: "99.98% Uptime" },
  },
];

export function ProcessTimeline() {
  const [activeStage, setActiveStage] = useState(0);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth hover intent buffer (eliminates fast jumping & jitter)
  const handleStageHover = (index: number) => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveStage(index);
    }, 75); // 75ms micro-buffer ensures fluid gliding
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
  };

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <section id="process" className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#FF8A00]/5 via-[#7C3AED]/5 to-[#00C2FF]/5 rounded-full blur-[170px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KINETIC PIPELINE • 7-STAGE EXECUTION</span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-[-0.03em] leading-[1.05]">
            How We Ship.
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed">
          Glide across the monolithic slats below to inspect how raw requirements evolve into resilient, production-grade systems.
        </p>
      </div>

      {/* ================= BUTTERY SMOOTH ARCHITECTURAL LOUVER DECK ================= */}
      <div
        onMouseLeave={handleMouseLeave}
        className="flex flex-col md:flex-row h-auto md:h-[500px] gap-2 md:gap-3 w-full select-none"
      >
        {STAGES.map((stage, index) => {
          const isActive = activeStage === index;
          const Icon = stage.icon;

          return (
            <motion.div
              key={stage.num}
              layout
              onMouseEnter={() => handleStageHover(index)}
              onClick={() => setActiveStage(index)}
              transition={{
                layout: {
                  type: "spring",
                  stiffness: 140,
                  damping: 24,
                  mass: 0.85,
                },
              }}
              style={{
                borderColor: isActive ? `${stage.accent}45` : "rgba(255,255,255,0.07)",
              }}
              className={`relative rounded-2xl md:rounded-3xl border overflow-hidden cursor-pointer flex flex-col justify-between p-5 md:p-7 min-h-[140px] md:min-h-full transition-colors duration-500 ${
                isActive
                  ? "flex-[5] lg:flex-[6] bg-[#0B0E17] shadow-[0_20px_60px_rgba(0,0,0,0.85)]"
                  : "flex-1 bg-[#07090E]/90 hover:bg-[#0E121B]"
              }`}
            >
              {/* Top Accent Line with Soft Glow */}
              <div
                className="absolute top-0 inset-x-0 h-1 transition-all duration-500"
                style={{
                  backgroundColor: stage.accent,
                  opacity: isActive ? 1 : 0.25,
                }}
              />

              {/* Ambient Radial Flare for Active Slit */}
              {isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.18 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -top-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
                  style={{ backgroundColor: stage.accent }}
                />
              )}

              {/* Top Bar / Icon */}
              <div className="flex items-center justify-between z-10">
                <span
                  className="font-mono text-sm sm:text-base font-black transition-colors duration-300"
                  style={{ color: isActive ? stage.accent : "#52525B" }}
                >
                  {stage.num}
                </span>

                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 border"
                  style={{
                    backgroundColor: isActive ? `${stage.accent}15` : "rgba(255,255,255,0.03)",
                    borderColor: isActive ? `${stage.accent}30` : "rgba(255,255,255,0.08)",
                    color: isActive ? stage.accent : "#71717A",
                  }}
                >
                  <Icon className="w-4 h-4" />
                </div>
              </div>

              {/* INACTIVE STATE: Monospace Spine Vertical Typography */}
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="hidden md:flex flex-col items-center justify-center my-auto z-10"
                >
                  <span className="font-mono text-xs font-bold tracking-widest text-zinc-500 uppercase [writing-mode:vertical-rl] rotate-180 py-4 group-hover:text-zinc-300">
                    {stage.title}
                  </span>
                </motion.div>
              )}

              {/* ACTIVE STATE: Silky Smooth Staggered Content */}
              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={`active-content-${stage.num}`}
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -6, filter: "blur(4px)" }}
                    transition={{
                      duration: 0.4,
                      delay: 0.12, // Waits slightly until the spring expansion finishes
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="my-auto py-4 z-10 space-y-4"
                  >
                    <div>
                      <span
                        className="text-[10px] font-mono font-bold tracking-widest uppercase block mb-1"
                        style={{ color: stage.accent }}
                      >
                        {stage.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                        {stage.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed max-w-lg font-normal">
                      {stage.desc}
                    </p>

                    {/* Deliverable Tags */}
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {stage.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-200"
                        >
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Specs Footer */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono z-10">
                {isActive ? (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500">{stage.metrics.label}:</span>
                      <span className="text-white font-bold">{stage.metrics.val}</span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline cursor-pointer"
                      style={{ color: stage.accent }}
                    >
                      <span>Engage Phase</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </>
                ) : (
                  <span className="text-zinc-600 uppercase text-[10px]">
                    STAGE {stage.num}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}