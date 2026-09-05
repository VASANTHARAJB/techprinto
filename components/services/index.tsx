// components/services/index.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Smartphone,
  Database,
  Cpu,
  Server,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bot,
  Terminal as TerminalIcon,
  Play,
  Copy,
  Layers,
  Check,
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

function ReactLogo() {
  return (
    <svg className="w-4 h-4 text-[#00D8FF]" viewBox="-11.5 -10.23174 23 20.46348">
      <circle cx="0" cy="0" r="2.05" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
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

function PythonLogo() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.7 3.3c-27 0-25.3 11.7-25.3 11.7l.1 12.1h25.7v3.7H21.7s-16.7 1.9-16.7 25.5c0 23.5 14.6 24.8 14.6 24.8h8.7v-12.3s-.5-14.6 14.4-14.6h24.8s13.9.2 13.9-13.6V17.2s1.9-13.9-27.7-13.9zm-13.8 8.1c2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.1 4.8-4.8 4.8-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.2-4.8 4.8-4.8z"/>
      <path fill="#FFD43B" d="M64.3 124.7c27 0 25.3-11.7 25.3-11.7l-.1-12.1H63.8v-3.7h42.5s16.7-1.9 16.7-25.5c0-23.5-14.6-24.8-14.6-24.8h-8.7v12.3s.5 14.6-14.4 14.6H60.5s-13.9-.2-13.9 13.6v23.4s-1.9 13.9 27.7 13.9zm13.8-8.1c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8 2.6 0 4.8 2.1 4.8 4.8 0 2.6-2.2 4.8-4.8 4.8z"/>
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

// ================= DATA ARCHITECTURE =================
interface StudioService {
  id: string;
  badge: string;
  title: string;
  lead: string;
  accent: string;
  icon: any;
  techLogos: { name: string; icon: any }[];
  fileTab: string;
  codeSnippet: string[];
  aiConversation: {
    userPrompt: string;
    aiResponse: string;
    aiAction: string;
    artifacts: string[];
  };
  metrics: { label: string; value: string }[];
  features: string[];
}

const STUDIO_SERVICES: StudioService[] = [
  {
    id: "web-systems",
    badge: "01 // NEXT.JS 15 & REACT",
    title: "High-Throughput Web Applications",
    lead: "Engineered with React Server Components, zero layout shift, and sub-100ms TTFB edge caching.",
    accent: "#FF8A00",
    icon: Globe,
    techLogos: [
      { name: "Next.js", icon: NextjsLogo },
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "React", icon: ReactLogo },
      { name: "PostgreSQL", icon: PostgresLogo },
    ],
    fileTab: "app/dashboard/page.tsx",
    codeSnippet: [
      'import { cache } from "react";',
      'import { db } from "@/lib/db";',
      "",
      "// Edge-cached server component",
      "export const revalidate = 60; // 60s ISR",
      "",
      "export default async function DashboardPage() {",
      "  const metrics = await db.analytics.getLiveTelemetry();",
      "  return <LiveMetricsConsole data={metrics} latency='<95ms' />;",
      "}",
    ],
    aiConversation: {
      userPrompt: "Optimize our checkout page for high traffic and prevent database connection spikes.",
      aiResponse: "Refactored checkout flow into Next.js Server Actions with Redis connection pooling and optimistic UI updates.",
      aiAction: "DEPLOYED: Edge Cache + PgBouncer pooler (0ms connection latency)",
      artifacts: ["checkout-action.ts", "redis-rate-limiter.ts", "lighthouse-audit: 99/100"],
    },
    metrics: [
      { label: "TTFB LATENCY", value: "< 95ms" },
      { label: "LIGHTHOUSE", value: "98/100" },
      { label: "CODEBASE", value: "100% Owned" },
    ],
    features: [
      "Dynamic Server-Side Rendering (SSR)",
      "Strict TypeScript Type-Safety",
      "Optimized Asset & Bundle Delivery",
      "Secure OAuth & Role-Based Auth",
    ],
  },
  {
    id: "custom-software-erp",
    badge: "02 // ENTERPRISE BACKBONE",
    title: "Custom Software & ERP Engines",
    lead: "Centralized business portals replacing fragmented tools with automated workflows and audit trails.",
    accent: "#7C3AED",
    icon: Database,
    techLogos: [
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "PostgreSQL", icon: PostgresLogo },
      { name: "Docker", icon: DockerLogo },
    ],
    fileTab: "server/erp/workflow.ts",
    codeSnippet: [
      "export class EnterpriseOrchestrator {",
      "  async reconcileInventory(tenantId: string) {",
      "    await db.transaction(async (trx) => {",
      "      const delta = await trx.orders.calculateDeficit();",
      "      await trx.auditLog.append({ tenantId, delta });",
      "      await whatsapp.triggerRestockWebhook(delta);",
      "    });",
      "  }",
      "}",
    ],
    aiConversation: {
      userPrompt: "We need automated PDF invoicing with WhatsApp notifications whenever a biometric check-out occurs.",
      aiResponse: "Constructed multi-tenant transactional pipeline with cryptographic invoice signatures and WhatsApp Cloud API dispatcher.",
      aiAction: "GENERATED: Biometric reconciliation state machine & webhook queue.",
      artifacts: ["pdf-engine.ts", "whatsapp-webhook.ts", "audit-ledger.sql"],
    },
    metrics: [
      { label: "CONCURRENCY", value: "10K+ Trans/hr" },
      { label: "DATA RETENTION", value: "Daily Cold Sync" },
      { label: "SECURITY", value: "OWASP Compliant" },
    ],
    features: [
      "Automated PDF Invoicing Engine",
      "Biometric Attendance Synchronization",
      "Multi-Tenant Relational Schemas",
      "Immutable System Audit Logging",
    ],
  },
  {
    id: "mobile-apps",
    badge: "03 // UNIFIED MOBILE",
    title: "Mobile Apps (iOS & Android)",
    lead: "60 FPS Flutter mobile apps with offline-first local SQLite sync and native biometric authentication.",
    accent: "#FF2D8D",
    icon: Smartphone,
    techLogos: [
      { name: "Flutter", icon: FlutterLogo },
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "PostgreSQL", icon: PostgresLogo },
    ],
    fileTab: "lib/sync/offline_engine.dart",
    codeSnippet: [
      "class OfflineCacheEngine {",
      "  Future<void> syncDeltaWithCloud() async {",
      "    final localRecords = await localDatabase.getPendingSync();",
      "    final remoteDiff = await apiGateway.pushDelta(localRecords);",
      "    await biometricVault.verifySecureSignature();",
      "    print('Sync Complete: 60 FPS UI Preserved');",
      "  }",
      "}",
    ],
    aiConversation: {
      userPrompt: "Prepare our Flutter build with Shorebird code-push and FaceID authentication for the App Store.",
      aiResponse: "Configured biometrics hardware bridge, encrypted local SQLite vault, and automated Shorebird OTA patch pipeline.",
      aiAction: "PACKAGED: App Store .ipa & Google Play .aab release bundles.",
      artifacts: ["ios-podfile.lock", "shorebird.yaml", "biometrics_bridge.dart"],
    },
    metrics: [
      { label: "FRAME RATE", value: "60 FPS Native" },
      { label: "OFFLINE SYNC", value: "Real-time Delta" },
      { label: "STORES", value: "Apple + Google" },
    ],
    features: [
      "Production-Signed iOS & Android Releases",
      "Biometric FaceID / Fingerprint Vault",
      "Offline-First SQLite Architecture",
      "Instant Over-The-Air (OTA) Patches",
    ],
  },
  {
    id: "ai-agents-mcp",
    badge: "04 // AGENTIC AI & AUTOMATION",
    title: "Autonomous AI Agents & Workflows",
    lead: "Air-gapped agentic workflows utilizing the Model Context Protocol (MCP) and automated document reasoning.",
    accent: "#1677FF",
    icon: Cpu,
    techLogos: [
      { name: "Python", icon: PythonLogo },
      { name: "TypeScript", icon: TypeScriptLogo },
      { name: "Docker", icon: DockerLogo },
    ],
    fileTab: "agents/mcp_server.py",
    codeSnippet: [
      "from mcp.server.fastmcp import FastMCP",
      "",
      "mcp = FastMCP('EnterpriseTriageBot')",
      "",
      "@mcp.tool()",
      "async def audit_incoming_invoice(pdf_bytes: bytes) -> dict:",
      "    '''Analyzes invoice metadata & verifies against ERP ledger'''",
      "    result = await agent_core.evaluate_discrepancies(pdf_bytes)",
      "    return {'status': 'approved', 'matched_po': result.po_id}",
    ],
    aiConversation: {
      userPrompt: "Build an AI agent that monitors our inbox, parses vendor invoices, and logs entries into PostgreSQL.",
      aiResponse: "Created custom Model Context Protocol (MCP) tool server running air-gapped LLM extraction with validation checkpoints.",
      aiAction: "ORCHESTRATING: Multi-agent triage loop with 99.4% field accuracy.",
      artifacts: ["mcp-server.py", "inbox-watcher.py", "guardrails.json"],
    },
    metrics: [
      { label: "HUMAN OVERHEAD", value: "85% Reduction" },
      { label: "RPC LATENCY", value: "< 180ms" },
      { label: "DATA PRIVACY", value: "100% Air-Gapped" },
    ],
    features: [
      "Custom Model Context Protocol (MCP) Servers",
      "Inbox Triage & Document Reconciliation",
      "Guardrail & Boundary Enforcement Layer",
      "Real-Time Telemetry Dashboard",
    ],
  },
  {
    id: "cloud-devops",
    badge: "05 // PRODUCTION RUNTIME",
    title: "Cloud DevOps & Hardened VPS",
    lead: "Self-hosted high-availability Linux VPS, Nginx reverse proxies, automated SSL, and zero-downtime CI/CD.",
    accent: "#00C2FF",
    icon: Server,
    techLogos: [
      { name: "Docker", icon: DockerLogo },
      { name: "Python", icon: PythonLogo },
      { name: "PostgreSQL", icon: PostgresLogo },
    ],
    fileTab: "infra/nginx/proxy.conf",
    codeSnippet: [
      "upstream app_cluster {",
      "    server 127.0.0.1:3000 max_fails=2 fail_timeout=10s;",
      "    keepalive 64;",
      "}",
      "",
      "server {",
      "    listen 443 ssl http2;",
      "    ssl_certificate /etc/letsencrypt/live/fullchain.pem;",
      "    add_header X-Frame-Options 'SAMEORIGIN' always;",
      "    proxy_pass http://app_cluster;",
      "}",
    ],
    aiConversation: {
      userPrompt: "Migrate our staging environment to an isolated Ubuntu Linux VPS with zero-downtime CI/CD.",
      aiResponse: "Configured Nginx reverse proxy with TLS 1.3, Docker container clusters, and automated GitHub Actions runner.",
      aiAction: "DEPLOYED: Blue/Green deployment pipeline on hardened VPS.",
      artifacts: ["docker-compose.yml", "deploy.sh", "ssl-autorenew.cron"],
    },
    metrics: [
      { label: "SYSTEM UPTIME", value: "99.98% Monitored" },
      { label: "SSL / TLS", value: "A+ Auto-Renewing" },
      { label: "HOSTING BILL", value: "-70% vs AWS" },
    ],
    features: [
      "Hardened Linux VPS with UFW Firewall",
      "Nginx Reverse Proxy & HTTP/2 Acceleration",
      "Automated CI/CD GitHub Actions Pipeline",
      "Docker Swarm & PM2 Auto-Resurrection",
    ],
  },
];

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>(STUDIO_SERVICES[0].id);
  const [viewMode, setViewMode] = useState<"code" | "ai">("code");
  const [copied, setCopied] = useState(false);

  const selectedService =
    STUDIO_SERVICES.find((s) => s.id === activeTab) || STUDIO_SERVICES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedService.codeSnippet.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <section
      id="services"
      className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]"
    >
      {/* Background Ambient Flare */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-r from-[#FF8A00]/10 via-[#7C3AED]/10 to-[#00C2FF]/10 rounded-full blur-[200px] pointer-events-none -z-10" />

      {/* Header with Live Coding Badge */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#00C2FF] animate-pulse" />
            <span>INTERACTIVE ARCHITECTURE STUDIO</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            Engineered Like Software. <br />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
              Not Stock Templates.
            </span>
          </h2>
        </div>

        <p className="max-w-md text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
          Toggle between our <strong className="text-white">Live Code Editor</strong> and <strong className="text-white">AI Copilot Simulation</strong> to inspect how we architect production software.
        </p>
      </div>

      {/* Main Studio Console Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Capability Switcher (5 Columns) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mb-3 flex items-center justify-between">
            <span>SELECT ARCHITECTURE CORE</span>
            <span>// PRODUCTION SPEC</span>
          </div>

          {STUDIO_SERVICES.map((service) => {
            const isSelected = activeTab === service.id;
            const ServiceIcon = service.icon;

            return (
              <div
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 relative overflow-hidden ${
                  isSelected
                    ? "bg-[#0C0F17] border-white/25 shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
                    : "bg-[#07090E]/80 border-white/5 hover:border-white/15 hover:bg-white/[0.02]"
                }`}
              >
                {/* Active Indicator Accent Line */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${
                    isSelected ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ backgroundColor: service.accent }}
                />

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 mt-0.5"
                    style={{
                      backgroundColor: isSelected ? `${service.accent}15` : "rgba(255,255,255,0.02)",
                      borderColor: isSelected ? `${service.accent}35` : "rgba(255,255,255,0.06)",
                      color: isSelected ? service.accent : "#71717A",
                    }}
                  >
                    <ServiceIcon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5 flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span
                        className="text-[10px] font-mono font-bold tracking-wider uppercase"
                        style={{ color: isSelected ? service.accent : "#71717A" }}
                      >
                        {service.badge}
                      </span>
                      
                      {/* Tech Stack Mini Logos */}
                      <div className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded-full border border-white/5">
                        {service.techLogos.map((tech) => {
                          const LogoComp = tech.icon;
                          return (
                            <span key={tech.name} title={tech.name}>
                              <LogoComp />
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <h3
                      className={`text-base font-bold transition-colors ${
                        isSelected ? "text-white" : "text-zinc-300"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                      {service.lead}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Trending Live Coding / AI Copilot Workspace (7 Columns) */}
        <div className="lg:col-span-7 sticky top-28">
          <div className="rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_25px_80px_rgba(0,0,0,0.95)] overflow-hidden">
            
            {/* Top IDE Window Header Bar */}
            <div className="px-5 py-3.5 bg-[#06080E] border-b border-white/10 flex items-center justify-between">
              
              {/* Traffic Light Dots & Tab File Name */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/40" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/40" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/40" />
                </div>

                <div className="h-4 w-px bg-white/10 ml-1" />

                <span className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                  <Code2 className="w-3.5 h-3.5 text-[#00C2FF]" />
                  <span>{selectedService.fileTab}</span>
                </span>
              </div>

              {/* Toggle Switch: Code Editor vs AI Copilot */}
              <div className="flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setViewMode("code")}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === "code"
                      ? "bg-white text-black font-bold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <TerminalIcon className="w-3 h-3" />
                  <span>IDE Code</span>
                </button>

                <button
                  onClick={() => setViewMode("ai")}
                  className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                    viewMode === "ai"
                      ? "bg-gradient-to-r from-[#7C3AED] to-[#1677FF] text-white font-bold shadow-md"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  <Bot className="w-3 h-3" />
                  <span>AI Copilot</span>
                </button>
              </div>

            </div>

            {/* Main Interactive Screen Content */}
            <div className="p-6 sm:p-7 min-h-[380px] flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {viewMode === "code" ? (
                  /* ============= VIEW 1: LIVE CODE EDITOR ============= */
                  <motion.div
                    key={`code-${selectedService.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-500 pb-2 border-b border-white/5">
                      <span>SYNTAX: TYPESCRIPT // UTF-8</span>
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Code</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Syntax Highlighted Lines */}
                    <div className="font-mono text-xs leading-relaxed space-y-1 overflow-x-auto py-2">
                      {selectedService.codeSnippet.map((line, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <span className="text-zinc-600 select-none w-5 text-right shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-zinc-200">
                            {line.startsWith("//") ? (
                              <span className="text-emerald-400/80 italic">{line}</span>
                            ) : line.includes("import") || line.includes("export") || line.includes("from") ? (
                              <span className="text-[#FF2D8D] font-semibold">{line}</span>
                            ) : line.includes("async") || line.includes("await") || line.includes("return") ? (
                              <span className="text-[#00C2FF]">{line}</span>
                            ) : (
                              <span>{line}</span>
                            )}
                          </span>
                        </div>
                      ))}
                      
                      {/* Blinking IDE Cursor */}
                      <div className="flex items-center gap-4 pt-1">
                        <span className="text-zinc-600 select-none w-5 text-right shrink-0">
                          {selectedService.codeSnippet.length + 1}
                        </span>
                        <span className="w-2 h-4 bg-[#FF8A00] animate-pulse inline-block" />
                      </div>
                    </div>

                  </motion.div>
                ) : (
                  /* ============= VIEW 2: AI AGENT CHAT SIMULATOR ============= */
                  <motion.div
                    key={`ai-${selectedService.id}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-4"
                  >
                    {/* User Chat Bubble */}
                    <div className="flex items-start gap-3 justify-end">
                      <div className="p-3.5 rounded-2xl rounded-tr-sm bg-white/[0.06] border border-white/10 max-w-md text-xs sm:text-sm text-zinc-200">
                        {selectedService.aiConversation.userPrompt}
                      </div>
                      <div className="w-7 h-7 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] font-mono text-zinc-300 shrink-0">
                        YOU
                      </div>
                    </div>

                    {/* AI Agent Response Bubble */}
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#1677FF] flex items-center justify-center text-white shrink-0 shadow-lg">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                      <div className="p-4 rounded-2xl rounded-tl-sm bg-[#0E121E] border border-white/15 max-w-lg space-y-3">
                        <div className="flex items-center gap-2 text-[10px] font-mono text-[#00C2FF]">
                          <Sparkles className="w-3 h-3" />
                          <span>TECHNPRINTO_AGENT // REASONING COMPLETE</span>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed">
                          {selectedService.aiConversation.aiResponse}
                        </p>

                        <div className="p-2 rounded-lg bg-black/50 border border-white/10 text-[11px] font-mono text-emerald-400 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{selectedService.aiConversation.aiAction}</span>
                        </div>

                        {/* Generated Artifacts Pills */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {selectedService.aiConversation.artifacts.map((art) => (
                            <span
                              key={art}
                              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-zinc-300"
                            >
                              📄 {art}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bottom Operational SLA Bar & Tech Log Stack */}
              <div className="pt-6 border-t border-white/10 space-y-4 mt-6">
                
                {/* 3 Metrics */}
                <div className="grid grid-cols-3 gap-3 font-mono text-center">
                  {selectedService.metrics.map((m) => (
                    <div key={m.label} className="p-2 rounded-xl bg-white/[0.02] border border-white/5">
                      <div className="text-[10px] text-zinc-500 uppercase">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Scope Action CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Active Sprint Capacity Available</span>
                  </div>

                  <button
                    onClick={openModal}
                    className="px-5 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
                  >
                    <span>Scope {selectedService.title.split(" ")[0]} Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;