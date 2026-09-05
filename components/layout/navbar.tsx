// components/layout/navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/ui/brand-logo";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const openModal = () => {
    window.dispatchEvent(new CustomEvent("open-project-modal"));
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 pt-4 pb-2 px-6 md:px-10 transition-all duration-300 pointer-events-none ${
        isVisible ? "translate-y-0" : "-translate-y-24"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between p-2 rounded-full transition-all duration-300 pointer-events-auto ${
          isScrolled
            ? "bg-[#090B10]/85 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.75)]"
            : "bg-transparent border-transparent"
        }`}
      >
        {/* BrandLogo handles its own Link internally */}
        <div className="flex items-center pl-2">
          <BrandLogo />
        </div>

        {/* Center Nav Pills */}
        <nav className="hidden lg:flex items-center">
          <div className="flex items-center p-1 rounded-full bg-[#0B0D13]/90 backdrop-blur-xl border border-white/[0.12] shadow-lg">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-[13px] font-medium transition-colors rounded-full select-none ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-[#8E95A5] hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full bg-[#1B1E26] border border-white/[0.15] shadow-inner -z-0"
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5 pr-2">
          <a
            href="tel:+910000000000"
            aria-label="Call Studio"
            className="w-10 h-10 rounded-[14px] bg-[#16181F]/90 hover:bg-[#20232D] backdrop-blur-xl border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-transform active:scale-95 shadow-md"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={openModal}
            aria-label="Start a Project"
            className="w-10 h-10 rounded-[14px] bg-gradient-to-r from-[#FF7A00] to-[#FF4500] hover:brightness-110 flex items-center justify-center text-white transition-transform active:scale-95 shadow-[0_4px_18px_rgba(255,69,0,0.4)] cursor-pointer"
          >
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center pr-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-[12px] bg-[#16181F]/90 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mt-3 max-w-sm mx-auto p-4 rounded-2xl bg-[#090B10]/95 backdrop-blur-2xl border border-white/10 shadow-2xl pointer-events-auto space-y-3"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm text-[#8E95A5] hover:text-white rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full h-10 rounded-xl bg-gradient-to-r from-[#FF7A00] to-[#FF4500] text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}