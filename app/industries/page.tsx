// app/industries/page.tsx
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
  ShieldCheck,
  Activity,
  Layers,
  Building2,
  HeartPulse,
  Factory,
  ShoppingBag,
  Gavel,
  GraduationCap,
  Lock,
  Server,
  Zap,
  TrendingUp,
} from "lucide-react";

interface IndustrySpec {
  id: string;
  num: string;
  badge: string;
  name: string;
  tagline: string;
  lead: string;
  accent: string;
  icon: any;
  compliance: string[];
  coreChallenge: string;
  engineeredArchitecture: string;
  keyDeliverables: string[];
  systemMetrics: { label: string; value: string }[];
  deployedStack: string[];
}

const INDUSTRIES: IndustrySpec[] = [
  {
    id: "fintech-payments",
    num: "01",
    badge: "FINANCIAL INFRASTRUCTURE",
    name: "Fintech & High-Volume Payments",
    tagline: "IDEMPOTENT TRANSACTION PIPELINES & AUDIT VAULTS",
    lead: "Cryptographically verified financial workflows engineered for high-concurrency micro-transactions, idempotent webhooks, and tamper-evident audit ledgers.",
    accent: "#FF8A00",
    icon: TrendingUp,
    compliance: ["PCI-DSS Ready", "OWASP Hardened", "ISO 27001 Controls"],
    coreChallenge:
      "Race conditions during concurrent checkouts, duplicate deductions, and slow reconciliations between payment gateways and internal accounting ledgers.",
    engineeredArchitecture:
      "ACID-compliant relational database isolation with Redis distributed locks, idempotent webhook listeners, and zero-loss financial event sourcing.",
    keyDeliverables: [
      "Custom Payment Orchestration Layer (Razorpay / Stripe)",
      "Automated Daily Reconciliation & Escrow Ledger",
      "Role-Based Access Control (RBAC) with 2FA Enforcement",
      "End-to-End Cryptographic Payload Encryption",
    ],
    systemMetrics: [
      { label: "TRANSACTION LATENCY", value: "< 140ms" },
      { label: "CONCURRENCY", value: "20K+ Tx / min" },
      { label: "RECONCILIATION", value: "100% Automated" },
    ],
    deployedStack: ["Next.js 15", "Node.js", "PostgreSQL", "Redis Locks", "Docker", "JWT Vault"],
  },
  {
    id: "manufacturing-erp",
    num: "02",
    badge: "INDUSTRIAL AUTOMATION",
    name: "Manufacturing & Supply Chain ERP",
    tagline: "SHOP-FLOOR TELEMETRY & HARDWARE INTEGRATION",
    lead: "Centralized industrial management systems connecting physical biometric attendance, raw material batch tracking, and automated procurement orders.",
    accent: "#7C3AED",
    icon: Factory,
    compliance: ["Local Hardware I/O", "Tamper-Proof Audit", "Cold Data Archive"],
    coreChallenge:
      "Siloed inventory registers, paper-based job cards, unrecorded material wastage, and biometric machines that fail to sync with employee payroll.",
    engineeredArchitecture:
      "TCP/IP hardware bridge listeners connecting physical biometric clocks directly to a normalized multi-tenant PostgreSQL state machine with automated WhatsApp dispatchers.",
    keyDeliverables: [
      "Biometric Attendance & Overtime Calculation Engine",
      "Bill of Materials (BOM) & Multi-Stage Production Tracking",
      "Automated PO Generation & WhatsApp Supplier Alerts",
      "Real-Time Warehouse Stock Auditing & QR Validation",
    ],
    systemMetrics: [
      { label: "PAYROLL SYNC", value: "Real-Time Instant" },
      { label: "STOCK DRIFT", value: "0.0% Discrepancy" },
      { label: "BACKUP COLD", value: "Automated Daily" },
    ],
    deployedStack: ["Node.js", "Python Bridge", "PostgreSQL", "Docker", "WhatsApp API", "Nginx"],
  },
  {
    id: "healthtech-clinical",
    num: "03",
    badge: "CLINICAL SYSTEMS",
    name: "HealthTech & Clinical Operations",
    tagline: "PATIENT RECORDS & PRIVATE TELEMEDICINE",
    lead: "Privacy-first medical portals, diagnostic report distribution engines, and automated patient consultation appointment booking systems.",
    accent: "#FF2D8D",
    icon: HeartPulse,
    compliance: ["HIPAA-Conscious", "TLS 1.3 Strict", "Encrypted Data Vault"],
    coreChallenge:
      "Fragile patient booking tools, unencrypted lab report distribution via open messaging apps, and fragmented patient medical history records.",
    engineeredArchitecture:
      "Air-gapped digital report engines with presigned expiring URLs, encrypted diagnostic storage, and SMS/WhatsApp consultation status automations.",
    keyDeliverables: [
      "Role-Segregated Doctor / Staff / Patient Portals",
      "Secure Digital Lab Report Delivery Engine (PDF)",
      "Automated Appointment Slot Booking & Rescheduling",
      "Encrypted Medical Document Storage with Expiring Access",
    ],
    systemMetrics: [
      { label: "DATA RETENTION", value: "Encrypted at Rest" },
      { label: "REPORT LOAD", value: "< 250ms Global" },
      { label: "UPTIME TARGET", value: "99.98% SLA" },
    ],
    deployedStack: ["Next.js", "TypeScript", "PostgreSQL", "Flutter", "S3 Storage", "AES-256"],
  },
  {
    id: "ecommerce-retail",
    num: "04",
    badge: "HIGH-THROUGHPUT COMMERCE",
    name: "Retail & Omnichannel E-Commerce",
    tagline: "HIGH-CONCURRENCY CATALOGS & FAST CHECKOUT",
    lead: "Bespoke digital storefronts engineered for sub-2-second checkout speed, multi-category inventory filtering, and zero third-party platform take-rates.",
    accent: "#00C2FF",
    icon: ShoppingBag,
    compliance: ["Zero Platform Fees", "PCI Compliant", "Edge Caching"],
    coreChallenge:
      "Expensive monthly SaaS platform fees, slow sluggish themes with low Lighthouse scores, and checkout crashes during flash sales.",
    engineeredArchitecture:
      "Server-side rendered Next.js 15 storefronts with Redis product caching, localized stock management, and custom merchant dashboard control.",
    keyDeliverables: [
      "Custom Server-Rendered E-Commerce Storefront",
      "Integrated Payment Gateway (Card, UPI, Netbanking)",
      "Order Fulfillment & Delivery Dispatch Hub",
      "Automated WhatsApp Order Confirmation Triggers",
    ],
    systemMetrics: [
      { label: "CHECKOUT TIME", value: "< 2 Seconds" },
      { label: "LIGHTHOUSE", value: "95+ Guaranteed" },
      { label: "VENDOR COMM", value: "0% Revenue Cut" },
    ],
    deployedStack: ["Next.js 15", "React", "Node.js", "PostgreSQL", "Redis", "Tailwind CSS"],
  },
  {
    id: "proptech-auctions",
    num: "05",
    badge: "LIVE AUCTION ENGINES",
    name: "PropTech, Real Estate & E-Auctions",
    tagline: "REAL-TIME BIDDING SOCKETS & ASSET LISTINGS",
    lead: "High-speed real estate and auction platforms featuring sub-100ms bid broadcast sockets, automated KYC document validation, and buyer storefronts.",
    accent: "#1677FF",
    icon: Gavel,
    compliance: ["Real-Time WebSocket", "KYC Verification", "Legal Handover"],
    coreChallenge:
      "Latency during live auction bidding leading to disputed bids, and slow manual verification of high-value buyer identity documents.",
    engineeredArchitecture:
      "Clustered WebSocket event dispatchers delivering real-time bid updates across iOS, Android, and web with database row-level locking.",
    keyDeliverables: [
      "Low-Latency Live Auction Bidding Engine (Web & Mobile)",
      "Automated Bid History Ledger & Dispute Resolution Audit",
      "Dynamic Property Showcase with Filter Matrices",
      "Customer Bidder Registration & KYC Upload Portal",
    ],
    systemMetrics: [
      { label: "BID BROADCAST", value: "< 80ms Latency" },
      { label: "CONCURRENT BIDS", value: "Row-Locked Safe" },
      { label: "MOBILE FPS", value: "60 FPS Native" },
    ],
    deployedStack: ["Flutter", "Next.js", "WebSockets", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    id: "edtech-institutes",
    num: "06",
    badge: "LEARNING ECOSYSTEMS",
    name: "EdTech & Institutional Portals",
    tagline: "CAMPUS ADMINISTRATION & CONTENT DELIVERY",
    lead: "Custom educational backbones designed for student enrollment workflows, webinar management, fee payment collections, and institutional publishing.",
    accent: "#FF8A00",
    icon: GraduationCap,
    compliance: ["Multi-Branch RBAC", "Automated Receipts", "Secure Video I/O"],
    coreChallenge:
      "Fragmented third-party software for admissions, fees, and attendance causing administrative confusion and lost fee reconciliation records.",
    engineeredArchitecture:
      "Unified educational administrative portal handling student lifecycle from registration to fee receipt generation and academic transcript archival.",
    keyDeliverables: [
      "Student Admission & Webinar Registration Modules",
      "Automated Fee Collection & Downloadable Tax Receipts",
      "Digital Publishing & Manuscript Metadata Catalog",
      "Staff Attendance & Academic Grade Book System",
    ],
    systemMetrics: [
      { label: "BATCH ENROLL", value: "10K+ Students" },
      { label: "INVOICE DISPATCH", value: "Automated Instant" },
      { label: "TENANT ISOLATION", value: "Strict Schema" },
    ],
    deployedStack: ["Next.js", "CodeIgniter / PHP", "MySQL / Postgres", "REST APIs", "Docker"],
  },
];

export default function IndustriesPage() {
  const [selectedId, setSelectedId] = useState<string>(INDUSTRIES[0].id);

  const activeIndustry =
    INDUSTRIES.find((ind) => ind.id === selectedId) || INDUSTRIES[0];
  const ActiveIcon = activeIndustry.icon;

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <main className="w-full bg-[#050608] text-white min-h-screen selection:bg-[#FF8A00] selection:text-white pt-24 font-sans">
      
      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-12 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08] overflow-hidden">
        
        {/* Soft Ambient Radial Flares */}
        <div className="absolute top-1/4 left-1/4 w-[650px] h-[350px] bg-gradient-to-r from-[#FF8A00]/10 via-[#7C3AED]/10 to-[#00C2FF]/10 rounded-full blur-[190px] pointer-events-none -z-10" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>VERTICAL SPECIALIZATION // DOMAIN ARCHITECTURE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Engineered For Regulated & <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                High-Volume Operations.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Generic software fails under domain-specific pressures. We build systems architected strictly around regulatory mandates, peak concurrent volumes, and physical hardware requirements across 6 core industries.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={openModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_20px_rgba(255,138,0,0.3)] cursor-pointer"
              >
                <span>Consult For Your Industry</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>

              <a
                href="#industry-console"
                className="px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white text-xs font-mono transition-colors"
              >
                Inspect Blueprints ↓
              </a>
            </div>
          </div>

          {/* Quick Domain Matrix Snapshot */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-[#0B0D12]/90 border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#00C2FF]" />
                  <span>ACTIVE DOMAINS // 06</span>
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              <div className="space-y-2 font-mono text-xs">
                {INDUSTRIES.map((ind) => (
                  <div
                    key={ind.id}
                    onClick={() => setSelectedId(ind.id)}
                    className="p-2.5 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/5 cursor-pointer flex items-center justify-between transition-colors"
                  >
                    <span className="text-zinc-300 truncate">{ind.name}</span>
                    <span className="text-[10px] text-zinc-500 font-bold">{ind.num}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. INTERACTIVE DOMAIN ARCHITECTURE CONSOLE ================= */}
      <section id="industry-console" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#FF8A00] font-semibold uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>INDUSTRY SPECIFICATION BLUEPRINT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.1]">
              Domain Architectures & <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Engineered Solutions.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Select an industry to inspect the exact operational friction, compliance controls, and verified system benchmarks we deliver.
          </p>
        </div>

        {/* 2-Column Split Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Domain Selectors (5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block mb-2">
              SELECT SECTOR // ({INDUSTRIES.length} DOMAINS)
            </span>

            {INDUSTRIES.map((ind) => {
              const isSelected = selectedId === ind.id;
              const IconComp = ind.icon;

              return (
                <div
                  key={ind.id}
                  onClick={() => setSelectedId(ind.id)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                    isSelected
                      ? "bg-[#0B0E17] border-white/25 shadow-[0_12px_40px_rgba(0,0,0,0.8)] scale-[1.01]"
                      : "bg-[#07090E]/80 border-white/5 hover:border-white/15 hover:bg-white/[0.02]"
                  }`}
                >
                  {/* Left Accent Bar */}
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                      isSelected ? "opacity-100" : "opacity-0"
                    }`}
                    style={{ backgroundColor: ind.accent }}
                  />

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 mt-0.5"
                      style={{
                        backgroundColor: isSelected ? `${ind.accent}18` : "rgba(255,255,255,0.02)",
                        borderColor: isSelected ? `${ind.accent}40` : "rgba(255,255,255,0.06)",
                        color: isSelected ? ind.accent : "#71717A",
                      }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span
                          className="text-[10px] font-mono font-bold tracking-wider uppercase"
                          style={{ color: isSelected ? ind.accent : "#71717A" }}
                        >
                          {ind.badge}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500">
                          {ind.num}
                        </span>
                      </div>

                      <h3
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          isSelected ? "text-white" : "text-zinc-300"
                        }`}
                      >
                        {ind.name}
                      </h3>

                      <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-2">
                        {ind.lead}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Detailed Industry Spec Terminal (7 Cols) */}
          <div className="lg:col-span-7 sticky top-28">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#080B12] border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.9)] space-y-7 relative overflow-hidden">
              
              {/* Top Accent Line */}
              <div
                className="absolute top-0 inset-x-0 h-[2px] transition-all duration-500"
                style={{
                  backgroundColor: activeIndustry.accent,
                  boxShadow: `0 0 24px ${activeIndustry.accent}`,
                }}
              />

              {/* Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold tracking-widest uppercase flex items-center gap-2"
                    style={{ color: activeIndustry.accent }}
                  >
                    <Terminal className="w-4 h-4" />
                    <span>DOMAIN SPECIFICATION // {activeIndustry.num}</span>
                  </span>

                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${activeIndustry.accent}15`,
                      borderColor: `${activeIndustry.accent}30`,
                      color: activeIndustry.accent,
                    }}
                  >
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {activeIndustry.name}
                </h3>
                <p className="mt-1 text-xs font-mono text-zinc-400">
                  {activeIndustry.tagline}
                </p>
              </div>

              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {activeIndustry.compliance.map((c) => (
                  <span
                    key={c}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[10px] font-mono text-zinc-300 flex items-center gap-1.5"
                  >
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>{c}</span>
                  </span>
                ))}
              </div>

              {/* The Friction vs Engineered Solution */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                  <span className="text-zinc-400 font-bold uppercase tracking-wider block">
                    Domain Friction (Problem):
                  </span>
                  <p className="text-zinc-300 font-sans leading-relaxed">
                    {activeIndustry.coreChallenge}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 space-y-2">
                  <span
                    className="font-bold uppercase tracking-wider block"
                    style={{ color: activeIndustry.accent }}
                  >
                    Engineered Architecture:
                  </span>
                  <p className="text-zinc-200 font-sans leading-relaxed">
                    {activeIndustry.engineeredArchitecture}
                  </p>
                </div>
              </div>

              {/* Benchmarks */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-white/10 font-mono">
                {activeIndustry.systemMetrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-[10px] text-zinc-400 uppercase tracking-wider">
                      {m.label}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white mt-1">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                  KEY PRODUCTION DELIVERABLES
                </span>
                <div className="space-y-2">
                  {activeIndustry.keyDeliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 font-sans"
                    >
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: activeIndustry.accent }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deployed Stack */}
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider block">
                  DEPLOYED STACK & RUNTIMES
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeIndustry.deployedStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Dedicated Architecture Sprint</span>
                </div>

                <button
                  onClick={openModal}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
                >
                  <span>Scope {activeIndustry.name.split(" ")[0]} Architecture</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* ================= 3. CROSS-INDUSTRY ENGINEERING STANDARDS ================= */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#7C3AED] font-semibold uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>CROSS-DOMAIN CORE GUARANTEES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Engineering Principles Across All Verticals.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          <div className="p-8 sm:p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs font-bold text-[#FF8A00] block">01 // TENANT PRIVACY</span>
            <h3 className="text-xl font-bold text-white">Zero Multi-Tenant Data Leakage</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Whether building an ERP or fintech engine, data records are isolated using strict schema partitioning and encryption-at-rest.
            </p>
          </div>

          <div className="p-8 sm:p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs font-bold text-[#FF2D8D] block">02 // DETERMINISTIC RECOVERY</span>
            <h3 className="text-xl font-bold text-white">Immutable Ledger Logging</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              Every system state change, financial delta, and attendance punch generates an unalterable audit log with automated daily cold backup snapshots.
            </p>
          </div>

          <div className="p-8 sm:p-10 space-y-4 hover:bg-white/[0.02] transition-colors">
            <span className="font-mono text-xs font-bold text-[#00C2FF] block">03 // INTELLECTUAL PROPERTY</span>
            <h3 className="text-xl font-bold text-white">100% Repository Transfer</h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
              No proprietary framework traps or recurring software licenses. You own 100% of the private Git source code upon delivery.
            </p>
          </div>

        </div>
      </section>

      {/* ================= 4. FINAL CALL TO ACTION ================= */}
      <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-gradient-to-r from-[#FF8A00]/15 to-[#FF2D8D]/15 rounded-full blur-[180px] pointer-events-none -z-10" />

        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Have a Domain Challenge? Let's Architect It.
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
            Whether you run a manufacturing plant, an e-commerce brand, or a high-concurrency fintech platform, we engineer systems that scale with your operational volume.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="px-7 py-4 rounded-xl bg-gradient-to-r from-[#FF8A00] to-[#FF2D8D] hover:brightness-110 text-white font-bold text-xs flex items-center gap-2 transition-all active:scale-95 shadow-[0_4px_25px_rgba(255,138,0,0.35)] cursor-pointer"
            >
              <span>Initiate Industry Scope</span>
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