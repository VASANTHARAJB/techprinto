// components/home/architecture-configurator.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Layers,
  Database,
  Shield,
  Zap,
  Check,
  ArrowRight,
  Terminal,
  Activity,
  Sliders,
} from "lucide-react";

interface PlatformOption {
  id: string;
  name: string;
  desc: string;
  icon: React.ElementType;
}

const PLATFORMS: PlatformOption[] = [
  { id: "web", name: "Modern Web App", desc: "Next.js 15, SSR, Edge CDN", icon: Layers },
  { id: "mobile", name: "Cross-Platform Mobile", desc: "Flutter iOS & Android", icon: Cpu },
  { id: "erp", name: "Enterprise ERP / CRM", desc: "Automated Workflows & SQL", icon: Database },
  { id: "saas", name: "Custom SaaS Engine", desc: "Multi-Tenant Cloud Arch", icon: Zap },
];

const SCALES = [
  { id: "mvp", label: "MVP / Validation", volume: "< 10K Users", cadence: "3–4 Sprints" },
  { id: "growth", label: "Growth / High Traffic", volume: "10K–100K Users", cadence: "6–8 Sprints" },
  { id: "enterprise", label: "Enterprise Scale", volume: "1M+ Transactions", cadence: "10–12 Sprints" },
];

const MODULES = [
  "Role-Based Access (RBAC)",
  "Payment Webhooks & Billing",
  "Automated WhatsApp / Email Alerts",
  "Real-Time Analytics & Telemetry",
  "Biometrics & SSO Authentication",
  "Encrypted Audit Trails",
];

export function ArchitectureConfigurator() {
  const [selectedPlatform, setSelectedPlatform] = useState("web");
  const [selectedScale, setSelectedScale] = useState("growth");
  const [selectedModules, setSelectedModules] = useState<string[]>([
    "Role-Based Access (RBAC)",
    "Payment Webhooks & Billing",
    "Real-Time Analytics & Telemetry",
  ]);

  const toggleModule = (mod: string) => {
    if (selectedModules.includes(mod)) {
      setSelectedModules(selectedModules.filter((m) => m !== mod));
    } else {
      setSelectedModules([...selectedModules, mod]);
    }
  };

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  const currentScale = SCALES.find((s) => s.id === selectedScale) || SCALES[1];

  return (
    <section className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-[#00C2FF]/5 rounded-full blur-[180px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="mb-16 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase mb-4">
          <Sliders className="w-3.5 h-3.5" />
          <span>INTERACTIVE ARCHITECTURE SANDBOX</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-[-0.03em] leading-[1.05]">
          Configure Your <br />
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            System Topology.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-zinc-400 leading-relaxed">
          Select target parameters below to simulate technical scope, estimated sprint velocity, and production deliverables in real time.
        </p>
      </div>

      {/* The Interactive Sandbox Console */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN: Interactive Toggles */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* 1. Choose Platform */}
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
              01 // SELECT CORE PLATFORM
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PLATFORMS.map((plat) => {
                const isSelected = selectedPlatform === plat.id;
                const Icon = plat.icon;

                return (
                  <div
                    key={plat.id}
                    onClick={() => setSelectedPlatform(plat.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-white/[0.06] border-[#00C2FF] shadow-[0_0_20px_rgba(0,194,255,0.15)]"
                        : "bg-[#0A0C12] border-white/10 hover:border-white/20 hover:bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        isSelected ? "bg-[#00C2FF]/20 text-[#00C2FF]" : "bg-white/5 text-zinc-400"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-[#00C2FF] bg-[#00C2FF]" : "border-white/20"
                      }`}>
                        {isSelected && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
                      </div>
                    </div>
                    <div className="font-bold text-white text-sm">{plat.name}</div>
                    <div className="text-xs text-zinc-500 font-mono mt-0.5">{plat.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. Choose Scale Tier */}
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
              02 // OPERATIONAL SCALE TIER
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {SCALES.map((scale) => {
                const isSelected = selectedScale === scale.id;

                return (
                  <div
                    key={scale.id}
                    onClick={() => setSelectedScale(scale.id)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                      isSelected
                        ? "bg-white/[0.06] border-[#FF8A00] shadow-[0_0_20px_rgba(255,138,0,0.15)]"
                        : "bg-[#0A0C12] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-zinc-400">{scale.volume}</span>
                      <div className={`w-3 h-3 rounded-full ${isSelected ? "bg-[#FF8A00]" : "bg-white/10"}`} />
                    </div>
                    <div className="font-bold text-white text-sm">{scale.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. Choose Architectural Modules */}
          <div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block mb-4">
              03 // ATTACH ENTERPRISE MODULES
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {MODULES.map((mod) => {
                const isChecked = selectedModules.includes(mod);

                return (
                  <div
                    key={mod}
                    onClick={() => toggleModule(mod)}
                    className={`px-3.5 py-2.5 rounded-xl border text-xs font-mono cursor-pointer flex items-center justify-between transition-all ${
                      isChecked
                        ? "bg-white/[0.05] border-white/30 text-white"
                        : "bg-[#0A0C12] border-white/5 text-zinc-500 hover:text-zinc-300"
                    }`}
                  >
                    <span>{mod}</span>
                    <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ml-2 ${
                      isChecked ? "bg-white text-black" : "border border-white/20"
                    }`}>
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Live Synthesizer Output Terminal */}
        <div className="lg:col-span-5 sticky top-28">
          <div className="p-7 sm:p-8 rounded-3xl bg-[#06080C] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.9)] space-y-6">
            
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#00C2FF]" />
                <span className="text-xs font-mono text-zinc-400">topology.matrix</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                SIMULATION ACTIVE
              </span>
            </div>

            {/* Calculated Specs Display */}
            <div className="space-y-4 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-500">SELECTED ENGINE</span>
                <span className="text-white font-bold uppercase">
                  {PLATFORMS.find((p) => p.id === selectedPlatform)?.name}
                </span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-500">TRAFFIC PROFILE</span>
                <span className="text-[#00C2FF] font-bold">{currentScale.volume}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-500">ESTIMATED VELOCITY</span>
                <span className="text-[#FF8A00] font-bold">{currentScale.cadence}</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-500">CONNECTED MODULES</span>
                <span className="text-white font-bold">{selectedModules.length} Active Services</span>
              </div>

              <div className="flex justify-between py-2 border-b border-white/5">
                <span className="text-zinc-500">CODEBASE OWNERSHIP</span>
                <span className="text-emerald-400 font-bold">100% Direct Transfer</span>
              </div>
            </div>

            {/* Micro Live Graph Preview */}
            <div className="p-4 rounded-2xl bg-[#090B10] border border-white/5 space-y-2">
              <div className="flex justify-between text-[10px] font-mono text-zinc-500">
                <span>DEPLOYMENT STATUS</span>
                <span className="text-zinc-300">AUTO-SCALING ENABLED</span>
              </div>
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00C2FF] via-[#7C3AED] to-[#FF8A00]"
                  animate={{ width: `${Math.min(100, 30 + selectedModules.length * 12)}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Direct Transmit Action */}
            <button
              onClick={openModal}
              className="w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-[0_8px_30px_rgba(255,255,255,0.15)]"
            >
              <span>Transmit Scope To Engineers</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] font-mono text-zinc-500 text-center">
              * Non-binding estimation. Direct review with lead architect within 24 hours.
            </p>

          </div>
        </div>

      </div>

    </section>
  );
}