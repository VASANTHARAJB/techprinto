// app/about/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Footer } from "@/components/layout/footer";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Code2,
  Cpu,
  Layers,
  GitBranch,
  Lock,
  Zap,
  CheckCircle2,
  Activity,
  HeartHandshake,
  Check,
  Copy,
} from "lucide-react";

// ================= TECH LOGO SVGS =================
function NextjsLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="90" fill="black" />
      <path
        d="M149.508 157.438L69.147 54H54V125.979H66.9836V69.3831L139.999 164.845C143.333 162.614 146.509 160.138 149.508 157.438Z"
        fill="white"
      />
      <rect x="115" y="54" width="13" height="72" fill="white" />
    </svg>
  );
}

function TypeScriptLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 128 128">
      <path fill="#3178C6" d="M0 0h128v128H0z" />
      <path
        fill="#FFF"
        d="M58.5 76.8h11.2V99H46.4V76.8h11.2V41.3H41.6V30.5h33.8v10.8H58.5v35.5zm44.2-12.7c-3.2-1.7-6.5-2.6-9.9-2.6-3.8 0-6.1 1.6-6.1 4.3 0 2.5 1.8 3.8 6.4 5.3l3.6 1.2c8.2 2.7 12.2 6.9 12.2 13.9 0 9.8-7.6 15.6-20.2 15.6-6.4 0-12.5-1.5-17.7-4.3l3.2-9.6c4.6 2.5 9.7 3.9 14.2 3.9 4.8 0 7.3-1.8 7.3-4.6 0-2.8-2-4-7-5.7l-3.3-1.1c-7.8-2.6-11.8-6.9-11.8-13.6 0-9.4 7.4-15.3 19-15.3 5.4 0 10.7 1.2 15.4 3.4l-3.3 9.2z"
      />
    </svg>
  );
}

function FlutterLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#02569B">
      <path d="M14.314 0L2.3 12 6 15.7 21.684 0h-7.37zM6.02 15.686L12.01 21.677 15.71 17.977 9.72 11.986 6.02 15.686zm5.99-3.7L18 6 21.7 9.7 15.71 15.69l-3.7-3.7zM15.71 17.977l3.7-3.7 2.274 2.273L17.984 20.25l-2.274-2.273z" fill="#0175C2" />
    </svg>
  );
}

function PostgresLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 128 128">
      <path fill="#336791" d="M64.2 11.9c-2.3 0-4.6.2-6.7.7-18.7 3.9-24.6 19.3-25.5 32.4-.2 2.5-.1 5.3.3 8.3-4.9 3.5-9.6 8.5-11.9 15.5-3.6 10.9-.3 23.3 8.1 30.7 7.7 6.8 18.9 8.2 28.5 6.2 4.4-.9 8.6-2.6 12.3-4.8 3.7 2.2 7.9 3.9 12.3 4.8 9.6 2 20.8.6 28.5-6.2 8.4-7.4 11.7-19.8 8.1-30.7-2.3-7-7-12-11.9-15.5.4-3 .5-5.8.3-8.3-.9-13.1-6.8-28.5-25.5-32.4-2.1-.5-4.4-.7-6.9-.7z"/>
    </svg>
  );
}

function DockerLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#2496ED">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m-2.93 2.714h2.118a.185.185 0 00.186-.185V9.006a.185.185 0 00-.186-.186H8.099a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m0-2.714h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185H8.099a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m-2.93 2.714h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.185-.186H5.17a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m2.93-2.714h2.12a.185.185 0 00.184-.186V6.29a.185.185 0 00-.185-.185H5.17a.185.185 0 00-.185.185v1.888c0 .102.083.186.185.186m18.784 4.542c-.443-.32-1.397-.432-2.13-.343-.16-.92-.68-1.748-1.503-2.296-.28-.184-.58-.335-.904-.442l-.465-.152-.352.348c-.628.625-1.42 1.01-2.28 1.135H.725a.725.725 0 00-.725.725c0 .356.03.71.09 1.055.44 2.518 1.94 4.7 4.11 6.037 2.05 1.26 4.47 1.89 6.89 1.89 7.42 0 13.99-4.8 15.69-12.02.04-.18.06-.36.06-.54 0-.32-.14-.62-.39-.81z"/>
    </svg>
  );
}

const MANIFESTO_RULES = [
  {
    rule: "01",
    title: "100% Repository Ownership on Day 0",
    desc: "We commit directly to your private Git repository. You own all intellectual property, database schemas, and documentation from the first sprint.",
    accent: "#FF8A00",
  },
  {
    rule: "02",
    title: "Zero Proprietary Vendor Lock-in",
    desc: "No closed-source site builders or monthly licensing traps. Every application runs on open, self-hostable standards that any senior engineer can maintain.",
    accent: "#7C3AED",
  },
  {
    rule: "03",
    title: "Production Architecture Over Surface Fluff",
    desc: "We prioritize sub-100ms TTFB latency, strict TypeScript typing, and ACID database models over fragile, bloated CMS plugins.",
    accent: "#00C2FF",
  },
  {
    rule: "04",
    title: "Direct Senior Engineering Line",
    desc: "No middlemen or non-technical account executives translating requirements. You collaborate directly with the engineers architecting your system.",
    accent: "#FF2D8D",
  },
];

const METRICS_RADAR = [
  { label: "CODE OWNERSHIP", value: "100% Client Held" },
  { label: "TARGET LATENCY", value: "< 100ms TTFB" },
  { label: "FRAME RATE SLA", value: "60 FPS Native" },
  { label: "HOSTING BILL", value: "Up to -70% Reduction" },
];

export default function AboutPage() {
  const [copied, setCopied] = useState(false);

  const studioPledgeSnippet = `// technprinto.config.ts
export const studioContract = {
  ipOwnership: "100% Client Transferred",
  vendorLockIn: false,
  runtimes: ["Next.js 15", "Flutter", "PostgreSQL", "Linux VPS"],
  slaGuarantees: {
    uptimeMonitoring: "99.98%",
    repoDelivery: "Day-0 Private Git Access",
  },
};`;

  const copyPledge = () => {
    navigator.clipboard.writeText(studioPledgeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <main className="w-full bg-[#050608] text-white min-h-screen selection:bg-[#FF8A00] selection:text-white pt-24 font-sans">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08] overflow-hidden">
        
        {/* Soft Ambient Flare */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[350px] bg-gradient-to-r from-[#7C3AED]/15 via-[#1677FF]/15 to-[#00C2FF]/10 rounded-full blur-[190px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column Typography */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>STUDIO MANIFESTO // TURNING IDEAS INTO TECHNOLOGY</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Software Craftsmanship <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Without Compromise.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
              Technprinto is an independent digital product and software engineering studio. We build web platforms, mobile apps, and custom operational backbones designed to withstand production volume with zero vendor lock-in.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={openModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_20px_rgba(255,138,0,0.3)] cursor-pointer"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <a
                href="#manifesto"
                className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              >
                Our 4 Studio Rules ↓
              </a>
            </div>
          </div>

          {/* Right Column: Signed Studio Contract Spec Terminal */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
              
              <div className="px-5 py-3.5 bg-[#06080E] border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-[#00C2FF]" />
                  <span>technprinto.config.ts</span>
                </div>
                <button
                  onClick={copyPledge}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Spec</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-6 font-mono text-xs leading-relaxed space-y-1 bg-[#090C14]">
                <div className="text-emerald-400/80 italic">// Studio standard contract specification</div>
                <div className="text-[#FF2D8D] font-semibold">export const studioContract = &#123;</div>
                <div className="pl-4 text-zinc-300">
                  ipOwnership: <span className="text-[#00C2FF]">&quot;100% Client Transferred&quot;</span>,
                </div>
                <div className="pl-4 text-zinc-300">
                  vendorLockIn: <span className="text-[#FF8A00]">false</span>,
                </div>
                <div className="pl-4 text-zinc-300">
                  runtimes: [<span className="text-[#00C2FF]">&quot;Next.js 15&quot;</span>, <span className="text-[#00C2FF]">&quot;Flutter&quot;</span>, <span className="text-[#00C2FF]">&quot;PostgreSQL&quot;</span>],
                </div>
                <div className="pl-4 text-zinc-300">slaGuarantees: &#123;</div>
                <div className="pl-8 text-zinc-300">
                  uptimeMonitoring: <span className="text-emerald-400">&quot;99.98%&quot;</span>,
                </div>
                <div className="pl-8 text-zinc-300">
                  repoDelivery: <span className="text-[#00C2FF]">&quot;Day-0 Private Git Access&quot;</span>,
                </div>
                <div className="pl-4 text-zinc-300">&#125;,</div>
                <div className="text-[#FF2D8D] font-semibold">&#125;;</div>
              </div>

              <div className="p-4 border-t border-white/10 bg-[#06080E]/60 flex items-center justify-between text-[11px] font-mono">
                <span className="text-zinc-500 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  STRICT ENGINEERING PLEDGE
                </span>
                <span className="text-emerald-400 font-bold">VERIFIED PRODUCTION SPEC</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. VERIFIED OPERATIONAL BENCHMARKS ================= */}
      <section className="py-12 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
          {METRICS_RADAR.map((item) => (
            <div
              key={item.label}
              className="p-5 rounded-2xl bg-[#0B0D12]/60 border border-white/[0.08] text-center space-y-1"
            >
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest">
                {item.label}
              </div>
              <div className="text-base sm:text-lg font-black text-white">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 3. FOUR CORE MANIFESTO RULES ================= */}
      <section id="manifesto" className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#FF8A00] font-semibold uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>HOW WE OPERATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our 4 Studio Principles.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base max-w-2xl font-normal">
            We operate on clear technical truths, disciplined execution, and radical transparency. These rules guide every line of code we ship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MANIFESTO_RULES.map((rule) => (
            <div
              key={rule.rule}
              className="p-8 rounded-3xl bg-[#0B0D12]/70 border border-white/[0.08] hover:border-white/20 transition-all duration-300 relative overflow-hidden group space-y-4"
            >
              <div
                className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: rule.accent }}
              />

              <div className="flex items-center justify-between">
                <span
                  className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10"
                  style={{ color: rule.accent }}
                >
                  RULE // {rule.rule}
                </span>
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: rule.accent }}
                />
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {rule.title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                {rule.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4. WHAT WE REFUSE TO DO (HONEST INTEGRITY MATRIX) ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#FF2D8D] font-semibold uppercase mb-4">
              <Lock className="w-3.5 h-3.5" />
              <span>INTEGRITY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              What We Do vs What We Never Do.
            </h2>
          </div>
          <p className="text-xs font-mono text-zinc-400">
            * Clear boundaries that protect your investment and intellectual property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Technprinto Standard */}
          <div className="p-8 rounded-3xl bg-[#0B0D12]/70 border border-emerald-500/20 space-y-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE TECHNPRINTO STANDARD</span>
            </div>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-zinc-300">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Direct repository commits to your private organization GitHub/GitLab.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Type-safe architectures (TypeScript, Flutter, PostgreSQL) built to last years.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Hardened self-hosted Linux VPS deployments cutting cloud infrastructure costs.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>Milestone-based delivery with reproducible local dev environments via Docker.</span>
              </li>
            </ul>
          </div>

          {/* Traditional Agency Fluff */}
          <div className="p-8 rounded-3xl bg-[#0B0D12]/70 border border-red-500/20 space-y-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-400">
              <span className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center text-[10px]">✕</span>
              <span>WHAT TRADITIONAL AGENCIES DO</span>
            </div>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>Holding your source code hostage unless recurring retainer fees are paid.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>Reselling bloated WordPress themes and heavy plugins that break after minor updates.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>Pushing clients onto complex cloud services with unpredictable monthly bills.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-red-400 font-bold">✕</span>
                <span>Subcontracting engineering work to non-technical junior freelancers without testing.</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= 5. TECHNICAL RUNTIMES ================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-[11px] font-mono text-[#00C2FF] tracking-widest uppercase mb-2 font-bold">
              // PRODUCTION TOOLCHAIN
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Technologies in Our Daily Arsenal.
            </h2>
          </div>
          <span className="text-xs font-mono text-zinc-500">Zero Antiquated Tech</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {[
            { name: "Next.js 15", role: "SSR & Edge Routing", icon: NextjsLogo },
            { name: "TypeScript", role: "Strict Type-Safety", icon: TypeScriptLogo },
            { name: "Flutter", role: "60 FPS Cross-Platform", icon: FlutterLogo },
            { name: "PostgreSQL", role: "ACID Relational Storage", icon: PostgresLogo },
            { name: "Docker", role: "Container Containment", icon: DockerLogo },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.name}
                className="p-4 rounded-2xl bg-[#0B0D12]/70 border border-white/[0.08] hover:border-white/20 transition-all flex flex-col items-center text-center space-y-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon />
                </div>
                <div className="font-mono text-xs font-bold text-white">{item.name}</div>
                <div className="text-[10px] font-mono text-zinc-500">{item.role}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= 6. FINAL CTA ================= */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-[#FF8A00]/15 to-[#FF2D8D]/15 rounded-full blur-[170px] pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Build Real Technology?
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Whether architecting an enterprise ERP or shipping a 60 FPS mobile product, we bring discipline and precision to your digital roadmap.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] hover:brightness-110 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_25px_rgba(255,138,0,0.35)] cursor-pointer"
            >
              <span>Start an Architectural Consultation</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 7. FOOTER ================= */}
      <Footer />

    </main>
  );
}