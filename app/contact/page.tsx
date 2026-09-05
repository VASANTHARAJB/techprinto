// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/footer";
import {
  Sparkles,
  ArrowRight,
  Terminal,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Send,
  Calendar,
  Lock,
  FileCode,
} from "lucide-react";

const DISCIPLINE_OPTIONS = [
  "Website / Web App (Next.js)",
  "Custom Software / ERP",
  "Mobile Application (Flutter)",
  "Cloud VPS & DevOps",
  "AI Agents & Automation",
  "Architecture Audit",
];

const TIMELINE_OPTIONS = [
  "Immediate (< 2 weeks)",
  "Within 1 month",
  "Flexible / Planning",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    discipline: DISCIPLINE_OPTIONS[0],
    timeline: TIMELINE_OPTIONS[1],
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulated technical dispatch (wire to /api/contact or external webhook)
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <main className="w-full bg-[#050608] text-white min-h-screen selection:bg-[#FF8A00] selection:text-white pt-24 font-sans">
      
      {/* ================= 1. HERO & TELEMETRY ================= */}
      <section className="relative pt-12 pb-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08] overflow-hidden">
        
        {/* Ambient Radial Flare */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[350px] bg-gradient-to-r from-[#FF8A00]/10 via-[#7C3AED]/10 to-[#00C2FF]/10 rounded-full blur-[190px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>DISPATCH AN ARCHITECTURAL INQUIRY // DIRECT LINE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Let&apos;s Architect Your <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Next Digital Product.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
            Direct collaboration with senior engineers. No non-technical account intermediaries. Every conversation starts with an actionable review of your technical bottlenecks, target latency SLAs, and deployment scope.
          </p>
        </div>
      </section>

      {/* ================= 2. MAIN SPLIT CONTACT WORKSPACE ================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Inquiry Dispatch Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.9)] relative overflow-hidden">
              
              <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-[#FF8A00] via-[#7C3AED] to-[#00C2FF]" />

              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-8">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-zinc-300 flex items-center gap-2">
                  <FileCode className="w-4 h-4 text-[#FF8A00]" />
                  <span>PROJECT SCOPE ESTIMATOR</span>
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  RESPONSE &lt; 24 HRS
                </span>
              </div>

              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Dispatched Successfully</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
                    A senior engineer will review your project parameters and reply with preliminary architecture estimates within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-zinc-300 hover:text-white"
                  >
                    Submit Another Scope
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#06080E] border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#00C2FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#06080E] border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#00C2FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 00000 00000"
                        className="w-full bg-[#06080E] border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#00C2FF] transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                        Company / Project Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Systems"
                        className="w-full bg-[#06080E] border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#00C2FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Primary Discipline */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Target Discipline *
                    </label>
                    <select
                      value={formData.discipline}
                      onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                      className="w-full bg-[#06080E] border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-white focus:outline-none focus:border-[#00C2FF] transition-colors"
                    >
                      {DISCIPLINE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#06080E] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Expected Timeline
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {TIMELINE_OPTIONS.map((t) => {
                        const isSelected = formData.timeline === t;
                        return (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setFormData({ ...formData, timeline: t })}
                            className={`px-3 py-2.5 rounded-xl text-[11px] font-mono transition-colors cursor-pointer border text-center ${
                              isSelected
                                ? "bg-white text-black font-bold border-white"
                                : "bg-[#06080E] border-white/10 text-zinc-400 hover:text-white"
                            }`}
                          >
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Problem / Architecture Description */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                      Technical Scope & Problem Statement *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the operational friction, target user concurrency, and specific integrations needed (e.g. payment gateway, biometric clocks, or Next.js edge caching)..."
                      className="w-full bg-[#06080E] border border-white/10 rounded-xl p-4 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#00C2FF] transition-colors resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] hover:brightness-110 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-[0_4px_25px_rgba(255,138,0,0.35)] cursor-pointer disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span>Dispatching Payload...</span>
                    ) : (
                      <>
                        <span>Submit Architecture Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3 h-3 text-emerald-400" />
                      Strict NDA Protected
                    </span>
                    <span>100% Zero Spam Pledge</span>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Direct Comms & Assurances (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Channels Box */}
            <div className="p-8 rounded-3xl bg-[#090C14] border border-white/15 shadow-xl space-y-6">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">
                DIRECT STUDIO COMMS
              </span>

              <div className="space-y-4">
                <a
                  href="mailto:contact@technprinto.com"
                  className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 flex items-center gap-4 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#00C2FF]/10 border border-[#00C2FF]/20 flex items-center justify-center text-[#00C2FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">ELECTRONIC DISPATCH</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#00C2FF] transition-colors">
                      contact@technprinto.com
                    </div>
                  </div>
                </a>

                <a
                  href="tel:+910000000000"
                  className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 flex items-center gap-4 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF8A00]/10 border border-[#FF8A00]/20 flex items-center justify-center text-[#FF8A00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">DIRECT VOICE LINE</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#FF8A00] transition-colors">
                      +91 (Studio Engineering)
                    </div>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/20 flex items-center justify-center text-[#7C3AED]">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-500">STUDIO WORKING HOURS</div>
                    <div className="text-sm font-bold text-white">
                      09:00 - 18:00 IST (Mon - Fri)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="p-8 rounded-3xl bg-[#090C14] border border-white/15 space-y-4">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                COMMUNICATION STANDARDS
              </span>

              <ul className="space-y-3 font-mono text-xs text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Sub-24-hour turnaround on technical feasibility reviews.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Direct consultation with lead developers, not sales reps.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Preliminary milestone estimations before contractual lock.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ================= 3. FOOTER ================= */}
      <Footer />

    </main>
  );
}