// components/home/services-grid.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, type ServiceItem } from "@/lib/data";

export function ServicesGrid() {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <section id="services" className="relative py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/[0.08]">
      
      {/* Background Flare */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-[#1677FF]/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-[11px] font-mono tracking-widest text-[#00C2FF] font-semibold uppercase">
            WHAT WE BUILD
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-3 leading-tight">
            Digital Products Designed for Real Business.
          </h2>
        </div>

        <button
          onClick={openModal}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF8A00] hover:text-white transition-colors cursor-pointer"
        >
          <span>Have a custom requirement? Talk to us</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>

      {/* 6 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service: ServiceItem) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.id}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group relative p-8 rounded-3xl bg-[#0D1017] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-zinc-500 tracking-wider">
                    SERVICE {service.num}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#141824] border border-white/10 flex items-center justify-center text-white group-hover:scale-105 group-hover:border-[#1677FF]/40 transition-all shadow-inner">
                    <Icon className="w-5 h-5 text-zinc-300 group-hover:text-[#00C2FF] transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-[#00C2FF] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-[#8E95A5] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {service.capabilities.map((cap: string) => (
                    <span
                      key={cap}
                      className="px-2.5 py-1 rounded-lg bg-[#141824] border border-white/[0.06] text-[11px] font-medium text-zinc-400"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={openModal}
                className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-white group-hover:text-[#FF8A00] transition-colors cursor-pointer w-full"
              >
                <span>Request {service.title}</span>
                <div className="w-7 h-7 rounded-full bg-[#141824] group-hover:bg-[#FF8A00] group-hover:text-black flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </motion.div>
          );
        })}
      </div>

    </section>
  );
}