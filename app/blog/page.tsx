// app/blog/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Footer } from "@/components/layout/footer";
import {
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Search,
  BookOpen,
  Calendar,
  Clock,
  Tag,
  Share2,
  Check,
} from "lucide-react";

interface BlogPost {
  id: string;
  slug: string;
  category: "Architecture" | "Mobile Engineering" | "DevOps & Cloud" | "AI & MCP";
  badge: string;
  title: string;
  summary: string;
  readTime: string;
  date: string;
  accent: string;
  featured?: boolean;
  tags: string[];
  snippet: {
    filename: string;
    code: string[];
  };
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "sub-100ms-nextjs-architecture",
    slug: "sub-100ms-nextjs-architecture",
    category: "Architecture",
    badge: "PERFORMANCE // NEXT.JS 15",
    title: "Engineering Sub-100ms TTFB: Next.js 15 Server Components & Redis Connection Pooling",
    summary:
      "A deep dive into optimizing cold-start latencies, pruning layout shifts, and implementing Redis connection pools with PgBouncer to sustain 20,000+ requests per minute.",
    readTime: "6 min read",
    date: "Aug 2026",
    accent: "#FF8A00",
    featured: true,
    tags: ["Next.js 15", "PostgreSQL", "Redis", "Edge SSR"],
    snippet: {
      filename: "lib/cache/edge-pool.ts",
      code: [
        "import { Redis } from '@upstash/redis';",
        "export const edgeCache = new Redis({",
        "  url: process.env.EDGE_REDIS_URL!,",
        "  token: process.env.EDGE_REDIS_TOKEN!,",
        "});",
        "// Cache-first query wrapper with 60s TTL",
        "export async function cachedFetch<T>(key: string, query: () => Promise<T>) {",
        "  const cached = await edgeCache.get<T>(key);",
        "  if (cached) return cached;",
        "  const fresh = await query();",
        "  await edgeCache.setex(key, 60, fresh);",
        "  return fresh;",
        "}",
      ],
    },
  },
  {
    id: "offline-first-flutter-sync",
    slug: "offline-first-flutter-sync",
    category: "Mobile Engineering",
    badge: "MOBILE ENGINE // FLUTTER",
    title: "Zero-Jank Offline-First Mobile Architectures: SQLite Local Persistence & Shorebird OTA",
    summary:
      "Designing multiplatform mobile engines that operate without active internet connectivity, reconcile conflict deltas automatically, and push live patches without store delays.",
    readTime: "8 min read",
    date: "Jul 2026",
    accent: "#FF2D8D",
    tags: ["Flutter", "SQLite", "Shorebird", "Offline-First"],
    snippet: {
      filename: "lib/core/sync_controller.dart",
      code: [
        "class SyncController {",
        "  Future<void> reconcilePendingDeltas() async {",
        "    final queue = await localDb.getUnsyncedRecords();",
        "    for (final change in queue) {",
        "      final result = await apiGateway.pushDelta(change);",
        "      if (result.isSuccess) {",
        "        await localDb.markSynced(change.id);",
        "      }",
        "    }",
        "  }",
        "}",
      ],
    },
  },
  {
    id: "model-context-protocol-enterprise",
    slug: "model-context-protocol-enterprise",
    category: "AI & MCP",
    badge: "AGENTIC WORKFLOWS // MCP",
    title: "Building Air-Gapped Multi-Agent Tool Servers with the Model Context Protocol (MCP)",
    summary:
      "How to standardize tool endpoints for autonomous reasoning agents, isolate sensitive corporate databases with JSON-RPC schemas, and eliminate repetitive knowledge work.",
    readTime: "7 min read",
    date: "Jun 2026",
    accent: "#1677FF",
    tags: ["Python", "FastMCP", "Multi-Agent", "JSON-RPC"],
    snippet: {
      filename: "agents/invoice_tool.py",
      code: [
        "from mcp.server.fastmcp import FastMCP",
        "mcp = FastMCP('FinancialTriage')",
        "",
        "@mcp.tool()",
        "async def reconcile_invoice(payload: dict) -> dict:",
        "    '''Performs cryptographic match against ERP records'''",
        "    discrepancies = await erp.match_order(payload['po_id'])",
        "    return {'audit_status': 'PASS', 'delta': discrepancies}",
      ],
    },
  },
  {
    id: "bare-metal-vps-vs-cloud",
    slug: "bare-metal-vps-vs-cloud",
    category: "DevOps & Cloud",
    badge: "INFRASTRUCTURE // LINUX",
    title: "Slashing 70% Cloud Costs: Hardened Ubuntu VPS, Nginx HTTP/2 & Docker Swarm Orchestration",
    summary:
      "Escaping managed cloud vendor lock-in through self-hosted Linux Virtual Private Servers, automated Let's Encrypt TLS rotation, and zero-downtime CI/CD deployment pipelines.",
    readTime: "5 min read",
    date: "May 2026",
    accent: "#00C2FF",
    tags: ["Linux VPS", "Nginx", "Docker", "DevOps"],
    snippet: {
      filename: "infra/deploy.sh",
      code: [
        "#!/bin/bash",
        "echo 'Deploying release commit: ' $GITHUB_SHA",
        "docker compose -f docker-compose.prod.yml pull",
        "docker compose -f docker-compose.prod.yml up -d --remove-orphans",
        "nginx -s reload",
        "echo 'Zero-downtime deployment finished.'",
      ],
    },
  },
  {
    id: "biometric-hardware-tcp-listeners",
    slug: "biometric-hardware-tcp-listeners",
    category: "Architecture",
    badge: "HARDWARE I/O // IOT",
    title: "Bridging Physical Biometric Clocks to Relational PostgreSQL Ledgers via TCP/IP Daemons",
    summary:
      "A technical case breakdown on writing asynchronous socket listeners to ingest real-time punch packets from biometric attendance devices directly into multi-tenant databases.",
    readTime: "6 min read",
    date: "Apr 2026",
    accent: "#7C3AED",
    tags: ["Node.js", "TCP/IP Sockets", "PostgreSQL", "Hardware"],
    snippet: {
      filename: "server/listeners/biometric_socket.ts",
      code: [
        "import * as net from 'net';",
        "const server = net.createServer((socket) => {",
        "  socket.on('data', async (rawBuffer) => {",
        "    const punch = parseDevicePacket(rawBuffer);",
        "    await db.attendance.insertPunchEvent(punch);",
        "    socket.write(Buffer.from([0x06])); // ACK",
        "  });",
        "});",
        "server.listen(4370, () => console.log('Listener live'));",
      ],
    },
  },
];

const CATEGORIES = ["All Dispatches", "Architecture", "Mobile Engineering", "DevOps & Cloud", "AI & MCP"] as const;

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All Dispatches");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesFilter =
      activeFilter === "All Dispatches" || post.category === activeFilter;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  const handleShare = (id: string, title: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(`${window.location.origin}/blog#${id}`);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

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
              <Terminal className="w-3.5 h-3.5" />
              <span>ENGINEERING FIELD DISPATCHES // TECHNICAL LOGS</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
              Architectural Logbook. <br />
              <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                Lessons From Production.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
              No generic fluff or marketing speculation. Practical technical post-mortems, latency benchmark analyses, and production code walkthroughs written directly by our engineers.
            </p>

            {/* Search Input Bar */}
            <div className="pt-2 max-w-md">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-zinc-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search architectures, tech stacks, protocols..."
                  className="w-full bg-[#090C14] border border-white/10 rounded-xl pl-11 pr-4 py-3 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#00C2FF]/60 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Mini Knowledge Radar */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.85)] relative backdrop-blur-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#FF8A00]" />
                  <span>DISPATCH_RADAR</span>
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 font-bold">
                  UPDATED 2026
                </span>
              </div>

              <div className="space-y-2 font-mono text-xs">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">PUBLISHED LOGS</span>
                  <span className="text-zinc-200 font-bold">05 Deep Dives</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">CORE FOCUS</span>
                  <span className="text-zinc-200 font-bold">Latency & Hardware</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <span className="text-zinc-500">FORMAT</span>
                  <span className="text-emerald-400 font-bold">Code + Schema Specs</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>READ TIME AVERAGE: 6 MIN</span>
                <span className="text-zinc-400">100% OPEN KNOWLEDGE</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 2. FEATURED HERO DISPATCH ================= */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto border-b border-white/[0.08]">
        <div className="mb-6 flex items-center gap-2 text-xs font-mono text-[#FF8A00]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FEATURED TECHNICAL DISPATCH</span>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#090C14] border border-white/15 shadow-[0_20px_70px_rgba(0,0,0,0.85)] relative overflow-hidden">
          <div
            className="absolute top-0 inset-x-0 h-[2px]"
            style={{
              backgroundColor: featuredPost.accent,
              boxShadow: `0 0 24px ${featuredPost.accent}`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Article Narrative */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="text-[#FF8A00] font-bold">{featuredPost.badge}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {featuredPost.readTime}
                </span>
                <span>•</span>
                <span>{featuredPost.date}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
                {featuredPost.title}
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                {featuredPost.summary}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-zinc-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={openModal}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
                >
                  <span>Discuss This Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <button
                  onClick={() => handleShare(featuredPost.id, featuredPost.title)}
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-colors cursor-pointer"
                  title="Copy link to dispatch"
                >
                  {copiedId === featuredPost.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Right: Code Sample Preview */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#06080E] border border-white/10 overflow-hidden font-mono text-xs">
                <div className="px-4 py-2.5 bg-black/40 border-b border-white/5 flex items-center justify-between text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-[#FF8A00]" />
                    <span>{featuredPost.snippet.filename}</span>
                  </div>
                  <span className="text-[10px] text-zinc-600">TypeScript</span>
                </div>
                <div className="p-4 space-y-1 text-zinc-300 overflow-x-auto leading-relaxed text-[11px]">
                  {featuredPost.snippet.code.map((line, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-zinc-600 select-none w-4 text-right shrink-0">
                        {idx + 1}
                      </span>
                      <span>
                        {line.startsWith("//") ? (
                          <span className="text-emerald-400/80 italic">{line}</span>
                        ) : line.includes("export") || line.includes("import") ? (
                          <span className="text-[#FF2D8D]">{line}</span>
                        ) : line.includes("async") || line.includes("await") ? (
                          <span className="text-[#00C2FF]">{line}</span>
                        ) : (
                          <span>{line}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 3. FILTER TABS & ALL DISPATCHES ================= */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-white/[0.08] pb-6">
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

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="wait">
            {filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                id={post.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="p-8 rounded-3xl bg-[#090C14] border border-white/15 hover:border-white/25 transition-all flex flex-col justify-between group relative overflow-hidden space-y-6"
              >
                <div
                  className="absolute top-0 inset-x-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: post.accent }}
                />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs font-mono font-bold tracking-wider uppercase"
                      style={{ color: post.accent }}
                    >
                      {post.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug group-hover:text-white transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {post.summary}
                  </p>

                  {/* Code snippet snapshot */}
                  <div className="p-3 rounded-xl bg-[#06080E] border border-white/5 font-mono text-[11px] text-zinc-400 space-y-1">
                    <div className="flex items-center gap-1.5 text-zinc-500 text-[10px] pb-1 border-b border-white/5">
                      <Code2 className="w-3 h-3" style={{ color: post.accent }} />
                      <span>{post.snippet.filename}</span>
                    </div>
                    <div className="truncate text-zinc-300">
                      {post.snippet.code[0]}
                    </div>
                    <div className="truncate text-zinc-400">
                      {post.snippet.code[1] || post.snippet.code[2]}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-zinc-500">
                        #{t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={openModal}
                    className="text-xs font-mono text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Technical Blueprint</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

      </section>

      {/* ================= 4. NEWSLETTER / DISPATCH NOTIFICATIONS ================= */}
      <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-white/[0.08]">
        <div className="p-10 sm:p-14 rounded-3xl bg-[#090C14] border border-white/15 shadow-2xl relative overflow-hidden space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
            <Terminal className="w-3.5 h-3.5" />
            <span>DISPATCH SUBSCRIPTION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Receive Architecture Logs Directly.
          </h2>

          <p className="text-sm text-zinc-400 max-w-lg mx-auto font-normal leading-relaxed">
            We publish once or twice a month when we solve interesting engineering bottlenecks in production. No promotional spam.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="engineer@company.com"
              className="w-full sm:flex-1 bg-[#06080E] border border-white/10 rounded-xl px-4 py-3 text-xs font-mono text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#00C2FF]/60"
            />
            <button
              onClick={() => alert("Subscribed to Technprinto architectural logs.")}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs transition-all active:scale-95 cursor-pointer shadow-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* ================= 5. FOOTER ================= */}
      <Footer />

    </main>
  );
}