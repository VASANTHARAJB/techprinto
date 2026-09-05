// app/portfolio/page.tsx
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
  Globe,
  Smartphone,
  Database,
  Cpu,
  Server,
  Code2,
  ShieldCheck,
  Zap,
} from "lucide-react";

interface CaseStudy {
  id: string;
  category: "Web & SaaS" | "Mobile Apps" | "ERP & Operations" | "AI & Automation";
  badge: string;
  status: "PRODUCTION SYSTEM" | "ARCHITECTURAL PROTOTYPE";
  title: string;
  clientType: string;
  lead: string;
  accent: string;
  icon: any;
  coreMetrics: { label: string; value: string }[];
  problem: string;
  solution: string;
  architectureHighlights: string[];
  techStack: string[];
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "real-time-eauction",
    category: "Mobile Apps",
    badge: "MOBILE & BIDDING ENGINE",
    status: "PRODUCTION SYSTEM",
    title: "Real-Time E-Auction & Property Bidding Platform",
    clientType: "Commercial Asset Liquidation",
    lead: "A low-latency cross-platform mobile application delivering sub-80ms live auction bid broadcasts with hardware biometric authentication and conflict-free database row locking.",
    accent: "#FF8A00",
    icon: Smartphone,
    coreMetrics: [
      { label: "BROADCAST LATENCY", value: "< 80ms Sockets" },
      { label: "FRAME RATE", value: "60 FPS Native" },
      { label: "CONCURRENCY", value: "Row-Locked Safe" },
    ],
    problem:
      "Legacy auction systems suffered from bid synchronization lag, causing dispute claims on close bids, alongside heavy drop-offs due to difficult mobile web forms.",
    solution:
      "Engineered a unified Flutter mobile application with direct WebSocket event broadcasting, biometric authorization for high-value tenders, and automated KYC asset auditing.",
    architectureHighlights: [
      "Clustered WebSocket bid broadcast engine with fallback retry buffers",
      "Biometric FaceID / Fingerprint authorization vault for placed bids",
      "Automated over-the-air (OTA) code deployments via Shorebird",
      "Multi-region PostgreSQL database with isolated row-level transaction locks",
    ],
    techStack: ["Flutter", "Dart", "Node.js", "WebSockets", "PostgreSQL", "Redis", "Shorebird"],
  },
  {
    id: "biometric-erp-engine",
    category: "ERP & Operations",
    badge: "ENTERPRISE WORKFORCE ERP",
    status: "PRODUCTION SYSTEM",
    title: "Biometric Hardware Sync & Attendance Management ERP",
    clientType: "Multi-Shift Enterprise Workforce",
    lead: "Centralized attendance reconciliation software bridging physical biometric timeclocks directly into real-time payroll calculation state machines.",
    accent: "#7C3AED",
    icon: Database,
    coreMetrics: [
      { label: "PAYROLL CALC", value: "Real-Time Instant" },
      { label: "DATA RETENTION", value: "Daily Cold Sync" },
      { label: "AUDIT LOG", value: "Immutable Entries" },
    ],
    problem:
      "Fragmented biometric hardware led to manual CSV export reconciliation, frequent salary calculation errors, unrecorded overtime, and employee attendance disputes.",
    solution:
      "Constructed a direct TCP/IP hardware bridge listener linking physical biometric devices with an automated payroll state machine and instant WhatsApp notifications.",
    architectureHighlights: [
      "TCP/IP daemon listener streaming punches directly to PostgreSQL without manual CSVs",
      "Automated overtime calculation engine compliant with regional labor standards",
      "Transactional WhatsApp Cloud API dispatchers sending arrival/departure confirmations",
      "Granular multi-branch Role-Based Access Control (RBAC) with tamper-proof audit trails",
    ],
    techStack: ["Node.js", "Python Bridge", "PostgreSQL", "Docker", "WhatsApp Cloud API", "Nginx"],
  },
  {
    id: "mcp-agentic-auditor",
    category: "AI & Automation",
    badge: "MODEL CONTEXT PROTOCOL (MCP)",
    status: "ARCHITECTURAL PROTOTYPE",
    title: "Air-Gapped Multi-Agent Expense & Invoice Triage System",
    clientType: "Corporate Finance & Auditing",
    lead: "Autonomous multi-agent orchestration framework utilizing the Model Context Protocol (MCP) to monitor inboxes, parse PDF invoices, and verify line items against ERP databases.",
    accent: "#1677FF",
    icon: Cpu,
    coreMetrics: [
      { label: "EXTRACTION SPEED", value: "< 2.5s / Doc" },
      { label: "DISCREPANCY DETECT", value: "99.4% Accuracy" },
      { label: "PRIVACY SLA", value: "100% Air-Gapped" },
    ],
    problem:
      "Accounts teams spent 30+ hours weekly manually extracting vendor invoice data, matching PO numbers across disparate ERP spreadsheets, and rectifying duplicate billings.",
    solution:
      "Engineered an air-gapped agent network using Model Context Protocol (MCP) servers with strict JSON-RPC schemas and human-in-the-loop approval gates before payment dispatches.",
    architectureHighlights: [
      "Custom Model Context Protocol (MCP) tool servers running strict schema validation",
      "Automated asynchronous webhook dispatchers ingesting multi-format PDF receipts",
      "Deterministic database cross-verification flags preventing duplicate payouts",
      "Executive real-time monitoring dashboard with comprehensive execution traces",
    ],
    techStack: ["Python", "FastAPI", "Model Context Protocol", "PostgreSQL", "Docker", "Streamlit"],
  },
  {
    id: "headless-commerce-engine",
    category: "Web & SaaS",
    badge: "HIGH-CONCURRENCY COMMERCE",
    status: "PRODUCTION SYSTEM",
    title: "Zero-Take-Rate Headless E-Commerce & Logistics Platform",
    clientType: "Direct-to-Consumer Apparel & Retail",
    lead: "Custom Next.js 15 storefront with server-side rendering, sub-2-second checkout speed, integrated payment webhooks, and automated logistics order dispatch.",
    accent: "#00C2FF",
    icon: Globe,
    coreMetrics: [
      { label: "CHECKOUT TIME", value: "< 1.8 Seconds" },
      { label: "LIGHTHOUSE SCORE", value: "98 / 100" },
      { label: "PLATFORM FEE", value: "0% Recurring Cut" },
    ],
    problem:
      "High monthly SaaS platform fees, slow sluggish themes with poor Core Web Vitals, and cart drop-offs during marketing flash sales.",
    solution:
      "Bespoke server-rendered architecture with Redis edge caching, optimized payment webhooks (UPI, Cards, Netbanking), and direct merchant order routing.",
    architectureHighlights: [
      "Next.js 15 App Router with zero layout-shift Server Components",
      "Idempotent payment webhook listeners guaranteeing zero lost transactions",
      "Merchant back-office portal with automated shipping label generation",
      "Automated Let's Encrypt TLS 1.3 rotation on hardened Linux VPS infrastructure",
    ],
    techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "digital-publishing-portal",
    category: "Web & SaaS",
    badge: "DISTRIBUTION ARCHITECTURE",
    status: "PRODUCTION SYSTEM",
    title: "Digital Publishing Portal & Global Distribution Metadata Engine",
    clientType: "International Publications & Media",
    lead: "Web publishing infrastructure managing digital and print manuscript formatting, automated ISBN registration, tax classification, and multichannel storefront sync.",
    accent: "#FF2D8D",
    icon: Server,
    coreMetrics: [
      { label: "CATALOG INDEXING", value: "Sub-Second Search" },
      { label: "FILE ENCRYPTION", value: "AES-256 Assets" },
      { label: "UPTIME TARGET", value: "99.98% Monitored" },
    ],
    problem:
      "Authors and publishers struggled with manual distribution uploads, tax category discrepancies, and unorganized digital asset cataloging across regional platforms.",
    solution:
      "Constructed a unified web management portal with automated document conversion, metadata verification, and streamlined listing workflows.",
    architectureHighlights: [
      "Automated document processing pipelines formatting print-ready PDFs and digital files",
      "Secure digital rights distribution with temporary presigned download URLs",
      "Custom catalog search engine powered by PostgreSQL full-text indexing",
      "Comprehensive author royalty calculation and transparent billing ledgers",
    ],
    techStack: ["Next.js", "PHP / CodeIgniter", "MySQL", "Nginx", "Linux VPS", "Tailwind CSS"],
  },
];

const CATEGORIES = ["All Systems", "Web & SaaS", "Mobile Apps", "ERP & Operations", "AI & Automation"] as const;

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Systems");

  const filteredProjects =
    activeFilter === "All Systems"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === activeFilter);

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <main className="w-full bg-[#050608] text-white min-h-screen selection:bg-[#FF8A00] selection:text-white pt-24 font-sans">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08] overflow-hidden">
        
        {/* Ambient Flare */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[350px] bg-gradient-to-r from-[#FF8A00]/10 via-[#7C3AED]/10 to-[#00C2FF]/10 rounded-full blur-[190px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROVEN ENGINEERING ARCHITECTURES // CASE STUDIES</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Shipped Systems. <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Engineered For Production.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Explore concrete case studies and technical architectures. We replace fragile pre-made templates with custom-built mobile apps, high-concurrency web engines, and automated enterprise software.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={openModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_20px_rgba(255,138,0,0.3)] cursor-pointer"
              >
                <span>Initiate Technical Project</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <a
                href="#case-studies"
                className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              >
                Inspect All Deployments ↓
              </a>
            </div>
          </div>

          {/* Quick Metrics HUD */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-[#0B0D12]/90 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span>SHIPPED_TELEMETRY</span>
                </span>
                <span className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20 text-[10px] font-mono text-emerald-400 font-bold">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">MOBILE FRAME RATE</span>
                  <span className="text-zinc-200 font-bold">60 FPS Native</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">EDGE TTFB LATENCY</span>
                  <span className="text-zinc-200 font-bold">&lt; 95ms</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">IP CODE OWNERSHIP</span>
                  <span className="text-emerald-400 font-bold">100% Client Held</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">VENDOR COMMISSIONS</span>
                  <span className="text-zinc-200 font-bold">0.0% Take-Rate</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. FILTER TABS ================= */}
      <section id="case-studies" className="pt-16 pb-8 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center gap-2 border-b border-white/[0.08] pb-6">
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-bold shadow-md scale-105"
                    : "bg-white/[0.03] text-zinc-400 border border-white/5 hover:border-white/15 hover:text-white"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ================= 3. DETAILED ARCHITECTURAL CASE STUDIES ================= */}
      <section className="pb-28 px-6 md:px-12 max-w-7xl mx-auto space-y-12">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="p-8 sm:p-10 rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.85)] relative overflow-hidden space-y-8"
              >
                {/* Top Accent Line */}
                <div
                  className="absolute top-0 inset-x-0 h-[2px]"
                  style={{
                    backgroundColor: project.accent,
                    boxShadow: `0 0 24px ${project.accent}`,
                  }}
                />

                {/* Header Meta */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-white/10 pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span
                        className="text-xs font-mono font-bold tracking-widest uppercase"
                        style={{ color: project.accent }}
                      >
                        {project.badge}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-400">
                        {project.status}
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                      {project.title}
                    </h2>
                    <div className="text-xs font-mono text-zinc-500">
                      INDUSTRY: <span className="text-zinc-300">{project.clientType}</span>
                    </div>
                  </div>

                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0"
                    style={{
                      backgroundColor: `${project.accent}15`,
                      borderColor: `${project.accent}30`,
                      color: project.accent,
                    }}
                  >
                    <ProjectIcon className="w-6 h-6" />
                  </div>
                </div>

                {/* Core Benchmarks Grid */}
                <div className="grid grid-cols-3 gap-3 py-3 border-y border-white/5 font-mono">
                  {project.coreMetrics.map((m) => (
                    <div key={m.label} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                        {m.label}
                      </div>
                      <div className="text-sm sm:text-base font-bold text-white mt-1">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Problem vs Solution Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs font-mono">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                    <span className="text-zinc-400 font-bold uppercase tracking-wider block">
                      The Operational Problem:
                    </span>
                    <p className="text-zinc-300 font-sans leading-relaxed text-sm">
                      {project.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                    <span
                      className="font-bold uppercase tracking-wider block"
                      style={{ color: project.accent }}
                    >
                      The Engineered Solution:
                    </span>
                    <p className="text-zinc-200 font-sans leading-relaxed text-sm">
                      {project.solution}
                    </p>
                  </div>
                </div>

                {/* Architectural Highlights Checklist */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                    ARCHITECTURAL SPECS & DELIVERABLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.architectureHighlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-sans p-3 rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: project.accent }}
                        />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Stack & Scope Trigger */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-zinc-500 mr-1">STACK:</span>
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={openModal}
                    className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md shrink-0"
                  >
                    <span>Deploy Similar System</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </section>

      {/* ================= 4. FINAL CTA ================= */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto text-center relative overflow-hidden border-t border-white/[0.08]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-[#FF8A00]/15 to-[#FF2D8D]/15 rounded-full blur-[170px] pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Have a Technical Challenge to Solve?
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Whether building an offline-first mobile product, an ERP hardware integration, or high-throughput web architecture, we engineer systems that perform.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] hover:brightness-110 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_25px_rgba(255,138,0,0.35)] cursor-pointer"
            >
              <span>Request System Architecture Review</span>
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