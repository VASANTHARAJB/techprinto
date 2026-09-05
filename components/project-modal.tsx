"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-project-modal", handleOpen);
    return () => window.removeEventListener("open-project-modal", handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setSubmitted(false), 300);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative w-full max-w-2xl bg-[#0D1017] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-[0_24px_80px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#FF8A00] via-[#FF5E3A] to-[#7C3AED]" />

            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#181C26] hover:bg-[#222836] border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-transform active:scale-95"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Project Enquiry Received</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto">
                  Thank you! We'll review your requirements and get back to you with a structured proposal.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white text-black font-semibold text-sm hover:opacity-90"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6 pr-8">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF8A00] font-semibold">
                    Let's Collaborate
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                    Start Your Project
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    Tell us what you're imagining. We'll turn your idea into technology.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-300 mb-1.5">Name *</label>
                      <input
                        required
                        placeholder="Your Name"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF5E3A]"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-300 mb-1.5">Email *</label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF5E3A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-300 mb-1.5">Service Required</label>
                      <select className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF5E3A]">
                        <option>Website Development</option>
                        <option>Custom Software Development</option>
                        <option>Mobile Application (iOS & Android)</option>
                        <option>ERP Software System</option>
                        <option>CRM Software System</option>
                        <option>E-Commerce Development</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-zinc-300 mb-1.5">Budget Scope</label>
                      <select className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF5E3A]">
                        <option>Discuss with us</option>
                        <option>Under $1,000</option>
                        <option>$1,000 – $5,000</option>
                        <option>$5,000 – $10,000</option>
                        <option>$10,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-zinc-300 mb-1.5">Project Scope *</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Briefly describe your idea, goals, or requirements..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#141822] border border-white/10 text-white text-sm focus:outline-none focus:border-[#FF5E3A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FF4500] hover:brightness-110 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,85,0,0.35)] transition-all cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <>
                        <span>Submit Project Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}