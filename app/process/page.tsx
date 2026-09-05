// app/process/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/layout/footer";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  Search,
  FileText,
  Palette,
  Code2,
  ShieldCheck,
  Rocket,
  RefreshCw,
  GitBranch,
  Cpu,
  Clock,
  Check,
} from "lucide-react";

interface ProcessStage {
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  duration: string;
  lead: string;
  accent: string;
  icon: React.ElementType;
  deliverables: string[];
  clientInvolvement: string;
  engineeringOutputs: string[];
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    badge: "STAGE 01 // DISCOVERY",
    title: "Discover & Feasibility Analysis",
    subtitle: "Understanding constraints, user profiles, and technical scope.",
    duration: "Week 01",
    lead: "We analyze your business workflows, define functional requirements, identify architectural edge cases, and eliminate operational unknowns before writing any code.",
    accent: "#FF8A00",
    icon: Search,
    deliverables: [
      "Technical Feasibility & Constraint Audit",
      "User Persona & Workflow State Maps",
      "API & 3rd-Party Integration Matrix",
      "Defined Milestone Roadmap & Cost Estimates",
    ],
    clientInvolvement: "Kickoff stakeholder interviews & workflow demonstrations",
    engineeringOutputs: [
      "discovery-audit.md",
      "entity-relationship-draft.json",
      "integration-matrix.yml",
    ],
  },
  {
    number: "02",
    badge: "STAGE 02 // ARCHITECTURE",
    title: "Planning & System Architecture",
    subtitle: "Normalized databases, API contracts, and infrastructure specs.",
    duration: "Week 01 - 02",
    lead: "We draft formal database schemas, map asynchronous message queues, design idempotent API contracts, and choose hosting infrastructure to guarantee sub-100ms latency.",
    accent: "#7C3AED",
    icon: FileText,
    deliverables: [
      "Normalized Database ERD (PostgreSQL / SQLite)",
      "OpenAPI / Swagger REST & GraphQL Schemas",
      "Cloud Infrastructure & Reverse Proxy Blueprint",
      "Day-0 Private Git Repository Provisioning",
    ],
    clientInvolvement: "Review and sign-off on architecture blueprint",
    engineeringOutputs: [
      "schema.sql",
      "openapi-spec.json",
      "docker-compose.infra.yml",
    ],
  },
  {
    number: "03",
    badge: "STAGE 03 // DESIGN SYSTEM",
    title: "UX/UI Architecture & Design Systems",
    subtitle: "High-density dark consoles, interactive states, and responsive flows.",
    duration: "Week 02 - 03",
    lead: "We construct design tokens, atomic UI components, and accessible interactive prototypes focused on information hierarchy, speed of operation, and zero cognitive clutter.",
    accent: "#FF2D8D",
    icon: Palette,
    deliverables: [
      "Interactive Figma Workspace & Component Library",
      "Mobile 390px to Ultra-Wide 1920px Breakpoints",
      "Dark / Light Atomic Design Tokens",
      "Micro-Interactions & Animation Specifications",
    ],
    clientInvolvement: "Design review sessions with click-through prototype testing",
    engineeringOutputs: [
      "tokens.config.json",
      "ui-component-spec.md",
      "prototype-flow-v1.fig",
    ],
  },
  {
    number: "04",
    badge: "STAGE 04 // SPRINT DEV",
    title: "Sprint Development & Implementation",
    subtitle: "Type-safe engineering across frontend, backend, and mobile.",
    duration: "Bi-Weekly Cycles",
    lead: "We engineer features in rigorous 2-week agile sprints. Every sprint commits clean, tested code directly to your private Git repository with staging preview deployments.",
    accent: "#1677FF",
    icon: Code2,
    deliverables: [
      "Production-Grade Next.js / Flutter Codebase",
      "Stateless API Microservices with Isolated Workers",
      "Direct Commits to Client's Private Organization Git",
      "Bi-Weekly Interactive Staging Demonstrations",
    ],
    clientInvolvement: "Bi-weekly sprint review calls and staging acceptance testing",
    engineeringOutputs: [
      "app/page.tsx",
      "lib/db/queries.ts",
      "controllers/api.controller.ts",
    ],
  },
  {
    number: "05",
    badge: "STAGE 05 // QUALITY ASSURANCE",
    title: "Verification, Testing & Security Audits",
    subtitle: "Automated end-to-end tests, load simulation, and penetration audits.",
    duration: "Continuous",
    lead: "We execute synthetic traffic load tests, audit OWASP top 10 security boundaries, stress-test database concurrency, and verify strict 60 FPS mobile rendering targets.",
    accent: "#00C2FF",
    icon: ShieldCheck,
    deliverables: [
      "Automated End-to-End Test Suites (Playwright)",
      "Database Concurrency Stress & Deadlock Tests",
      "Lighthouse Score Verification (95+ Guaranteed)",
      "OWASP Security & Vulnerability Sweep",
    ],
    clientInvolvement: "User Acceptance Testing (UAT) sign-off",
    engineeringOutputs: [
      "test-report-coverage.xml",
      "load-test-summary.csv",
      "security-audit.json",
    ],
  },
  {
    number: "06",
    badge: "STAGE 06 // DEPLOYMENT",
    title: "Production Launch & Server Hardening",
    subtitle: "Zero-downtime deployment, automated SSL, and DNS propagation.",
    duration: "Launch Day",
    lead: "We configure hardened Linux VPS instances, automated Let's Encrypt TLS 1.3 rotation, Nginx load balancing, and continuous deployment webhooks for hands-off releases.",
    accent: "#FF8A00",
    icon: Rocket,
    deliverables: [
      "Hardened Linux VPS with UFW & SSH Key Walls",
      "Automated Let's Encrypt SSL/TLS 1.3 Encryption",
      "App Store & Google Play Production Release Builds",
      "Zero-Downtime Rollback & CI/CD Pipeline",
    ],
    clientInvolvement: "Production DNS authorization & final cutover confirmation",
    engineeringOutputs: [
      "nginx.conf",
      "deploy-pipeline.yml",
      "production-ssl.cert",
    ],
  },
  {
    number: "07",
    badge: "STAGE 07 // EVOLUTION",
    title: "Telemetry, Upkeep & Scaled Evolution",
    subtitle: "Monitoring SLAs, automated daily backups, and iterative features.",
    duration: "Ongoing",
    lead: "Post-release support focused on 99.98% monitored uptime, daily encrypted database backups, query indexing optimization, and continuous product feature evolution.",
    accent: "#7C3AED",
    icon: RefreshCw,
    deliverables: [
      "Automated Daily Database Snapshots & Cold Storage",
      "Real-Time Health Telemetry & Slack / Discord Alerts",
      "Priority Patch Turnaround & SLA Monitoring",
      "Feature Iteration Sprints Based on Real User Analytics",
    ],
    clientInvolvement: "Monthly roadmap reviews and performance audits",
    engineeringOutputs: [
      "backup-retention.sh",
      "monitoring-alerts.yml",
      "quarterly-audit.pdf",
    ],
  },
];

export default function ProcessPage() {
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  const activeStage = PROCESS_STAGES[selectedStageIndex];
  const ActiveIcon = activeStage.icon;

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <main className="w-full bg-[#050608] text-white min-h-screen selection:bg-[#FF8A00] selection:text-white pt-24 font-sans">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08] overflow-hidden">
        
        {/* Soft Radial Ambient Flares */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[350px] bg-gradient-to-r from-[#FF8A00]/10 via-[#7C3AED]/10 to-[#00C2FF]/10 rounded-full blur-[190px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ENGINEERING PROTOCOL // 7-STAGE PIPELINE</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              A Clear Path From <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Idea to Production.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
              Software shouldn&apos;t be an ambiguous black box. We run a structured, milestone-driven engineering protocol that provides continuous visibility, weekly staging previews, and Day-0 source code ownership.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={openModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_20px_rgba(255,138,0,0.3)] cursor-pointer"
              >
                <span>Initiate Stage 01 Scope</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <a
                href="#pipeline"
                className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              >
                Inspect All 7 Stages ↓
              </a>
            </div>
          </div>

          {/* Right Column: Deployment Telemetry HUD */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative backdrop-blur-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#00C2FF]" />
                  <span>CI_CD_PIPELINE_RUNNER // ACTIVE</span>
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  PIPELINE HEALTHY
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">STAGE 01-02</span>
                  <span className="text-zinc-200">Architecture Spec & ERD</span>
                  <span className="text-emerald-400 font-bold">PASSED</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">STAGE 03-04</span>
                  <span className="text-zinc-200">Type-Safe Sprint Build</span>
                  <span className="text-emerald-400 font-bold">COMPILED</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">STAGE 05</span>
                  <span className="text-zinc-200">E2E Tests & Latency SLA</span>
                  <span className="text-emerald-400 font-bold">&lt; 95ms</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">STAGE 06-07</span>
                  <span className="text-zinc-200">Hardened VPS & Uptime</span>
                  <span className="text-emerald-400 font-bold">99.98%</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>CADENCE: BI-WEEKLY SPRINTS</span>
                <span className="text-zinc-300">100% REPO ACCESS</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. INTERACTIVE PIPELINE SELECTOR ================= */}
      <section id="pipeline" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#FF8A00] font-semibold uppercase mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>DISCIPLINED EXECUTION MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The 7 Stages of Delivery.
          </h2>
        </div>

        {/* Stage Timeline Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-10">
          {PROCESS_STAGES.map((stage, idx) => {
            const isSelected = selectedStageIndex === idx;
            return (
              <button
                key={stage.number}
                onClick={() => setSelectedStageIndex(idx)}
                className={`p-3.5 rounded-2xl border text-left font-mono transition-all cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? "bg-[#0C0F17] border-white/30 shadow-lg scale-105"
                    : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                }`}
              >
                <div
                  className={`absolute top-0 inset-x-0 h-1 transition-opacity ${
                    isSelected ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: stage.accent }}
                />
                <div
                  className="text-[10px] font-bold"
                  style={{ color: isSelected ? stage.accent : "#71717A" }}
                >
                  {stage.number}
                </div>
                <div className="text-xs font-bold text-white truncate mt-1">
                  {stage.title.split(" ")[0]}
                </div>
                <div className="text-[10px] text-zinc-500 mt-0.5">{stage.duration}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep-Dive Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.9)] relative overflow-hidden space-y-8">
          
          <div
            className="absolute top-0 inset-x-0 h-[2px] transition-all duration-500"
            style={{
              backgroundColor: activeStage.accent,
              boxShadow: `0 0 24px ${activeStage.accent}`,
            }}
          />

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 border-b border-white/10 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-mono font-bold tracking-widest uppercase"
                  style={{ color: activeStage.accent }}
                >
                  {activeStage.badge}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-400">
                  {activeStage.duration}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {activeStage.title}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                {activeStage.subtitle}
              </p>
            </div>

            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0"
              style={{
                backgroundColor: `${activeStage.accent}15`,
                borderColor: `${activeStage.accent}30`,
                color: activeStage.accent,
              }}
            >
              <ActiveIcon className="w-6 h-6" />
            </div>
          </div>

          {/* Lead Description */}
          <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
            {activeStage.lead}
          </p>

          {/* Deliverables vs Artifacts Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left: What We Deliver */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-bold">
                STAGE DELIVERABLES & ARTIFACTS
              </span>
              <div className="space-y-2.5">
                {activeStage.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2
                      className="w-4 h-4 shrink-0 mt-0.5"
                      style={{ color: activeStage.accent }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Technical Output Files & Client Role */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 space-y-2">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider block font-bold">
                  CLIENT TOUCHPOINTS
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed">
                  {activeStage.clientInvolvement}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#06080E] border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  VERSION-CONTROLLED COMMITS
                </span>
                <div className="space-y-1 font-mono text-xs text-emerald-400/90">
                  {activeStage.engineeringOutputs.map((file) => (
                    <div key={file} className="flex items-center gap-2">
                      <Terminal className="w-3 h-3 text-zinc-500" />
                      <span>{file}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

          {/* Stage Footer CTA */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Git repo ownership included in this stage</span>
            </div>

            <button
              onClick={openModal}
              className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
            >
              <span>Schedule Stage Discovery</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </section>

      {/* ================= 3. SPRINT CADENCE BREAKDOWN ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase mb-4">
            <Clock className="w-3.5 h-3.5" />
            <span>HOW WE COMMUNICATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            The Bi-Weekly Sprint Rhythm.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="p-8 sm:p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs font-bold text-[#FF8A00] block">01 // MONDAY PLANNING</span>
            <h3 className="text-xl font-bold text-white">Locked Sprint Backlogs</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Sprint scopes are locked before execution begins. Features are granularly estimated and tracked on visible project boards without surprise scope creep.
            </p>
          </div>

          <div className="p-8 sm:p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs font-bold text-[#FF2D8D] block">02 // DIRECT CHANNELS</span>
            <h3 className="text-xl font-bold text-white">Daily Async Slack Updates</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Direct Slack communication with the senior engineers writing your code. We provide loom video walkthroughs and pull request diffs rather than dry status meetings.
            </p>
          </div>

          <div className="p-8 sm:p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs font-bold text-[#00C2FF] block">03 // FRIDAY STAGING</span>
            <h3 className="text-xl font-bold text-white">Interactive Staging Deploys</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              End-of-sprint working software. Every 14 days, you test live, clickable builds deployed to isolated staging servers before production sign-off.
            </p>
          </div>

        </div>
      </section>

      {/* ================= 4. FINAL CTA ================= */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-[#FF8A00]/15 to-[#FF2D8D]/15 rounded-full blur-[170px] pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Ready to Begin Stage 01?
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Every successful deployment starts with understanding the problem clearly. Book an architectural discovery session to scope your product roadmap.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] hover:brightness-110 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_25px_rgba(255,138,0,0.35)] cursor-pointer"
            >
              <span>Schedule Stage 01 Kickoff</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </section>

      {/* ================= 5. FOOTER ================= */}
      <Footer />

    </main>
  );
}