    // components/layout/footer.tsx
    "use client";

    import React, { useState, useEffect } from "react";
    import Link from "next/link";
    import { ArrowUpRight, ArrowUp, Mail, MessageSquare } from "lucide-react";
    import { BrandLogo } from "@/components/ui/brand-logo";

    export function Footer() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
        const now = new Date();
        setTime(
            now.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata",
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            })
        );
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const openModal = () => {
        window.dispatchEvent(new CustomEvent("open-project-modal"));
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#04060A] text-white border-t border-white/[0.08] overflow-hidden select-none">
        
        {/* 1. Subtle Clean White Top Horizon */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-20 bg-white/[0.04] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10 relative z-10">

            {/* 2. Main Studio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/[0.08]">
            
            {/* Brand Col */}
            <div className="lg:col-span-5 space-y-6">
                <BrandLogo />
                
                <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-normal">
                High-performance web applications, specialized custom software, and cross-platform mobile systems built for scale.
                </p>

                {/* Live Status Pill */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-zinc-300">Accepting New Projects</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">{time ? `${time} IST` : "LIVE"}</span>
                </div>

                {/* Quick Actions */}
                <div className="flex items-center gap-3 pt-2">
                <button
                    onClick={openModal}
                    className="px-6 py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-bold text-xs flex items-center gap-2 transition-all active:scale-95 cursor-pointer shadow-md"
                >
                    <span>Start a Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <a
                    href="mailto:contact@techprinto.com"
                    className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-white transition-colors"
                    aria-label="Email"
                >
                    <Mail className="w-4 h-4" />
                </a>

                <a
                    href="https://wa.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-zinc-300 hover:text-emerald-400 transition-colors"
                    aria-label="WhatsApp"
                >
                    <MessageSquare className="w-4 h-4" />
                </a>
                </div>
            </div>

            {/* Directory Links */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                
                {/* Capabilities */}
                <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase block">
                    Capabilities
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-medium">
                    <li><Link href="#services" className="hover:text-white transition-colors">Web Systems</Link></li>
                    <li><Link href="#services" className="hover:text-white transition-colors">Custom Software</Link></li>
                    <li><Link href="#services" className="hover:text-white transition-colors">Mobile Apps</Link></li>
                    <li><Link href="#services" className="hover:text-white transition-colors">ERP & CRM Engines</Link></li>
                    <li><Link href="#services" className="hover:text-white transition-colors">E-Commerce</Link></li>
                </ul>
                </div>

                {/* Directory */}
                <div className="space-y-3">
                <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase block">
                    Directory
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-medium">
                    <li><Link href="#portfolio" className="hover:text-white transition-colors">Production Index</Link></li>
                    <li><Link href="#process" className="hover:text-white transition-colors">7-Stage Pipeline</Link></li>
                    <li><Link href="/about" className="hover:text-white transition-colors">Engineering Specs</Link></li>
                    <li><Link href="/contact" className="hover:text-white transition-colors">Contact Studio</Link></li>
                </ul>
                </div>

                {/* Network */}
                <div className="space-y-3 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase block">
                    Network
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-medium">
                    <li>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                    </a>
                    </li>
                    <li>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                    </a>
                    </li>
                    <li>
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                        <span>X / Twitter</span>
                        <ArrowUpRight className="w-3 h-3 text-zinc-600" />
                    </a>
                    </li>
                </ul>
                </div>

            </div>

            </div>

            {/* 3. Balanced White Monochrome Watermark with Subtle Soft Glow */}
            <div className="relative pt-12 pb-6 w-full flex items-center justify-center">
            
            {/* Subtle soft white ambient glow behind letters */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-0">
                <div className="w-[65%] h-16 bg-white/[0.04] rounded-full blur-2xl" />
            </div>

            <svg
                className="w-full h-auto max-h-24 sm:max-h-32 relative z-10 transition-opacity duration-300"
                viewBox="0 0 1200 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                x="50%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="font-black tracking-[-0.04em]"
                fontSize="155"
                fill="url(#cleanWhiteWatermark)"
                style={{ fontWeight: 900, fontFamily: "system-ui, -apple-system, sans-serif" }}
                >
                TECHPRINTO.in
                </text>
                <defs>
                <linearGradient id="cleanWhiteWatermark" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
                    <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.06" />
                </linearGradient>
                </defs>
            </svg>
            </div>

            {/* 4. Bottom Meta Line */}
            <div className="pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <div>
                © {new Date().getFullYear()} Techprinto. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
                <span className="text-zinc-500">
                Coimbatore, India
                </span>

                <button
                onClick={scrollToTop}
                className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
                </button>
            </div>
            </div>

        </div>

        </footer>
    );
    }