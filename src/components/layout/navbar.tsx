"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Solutions", href: "#" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Changelog", href: "#" },
  { label: "Blog", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-level-blue text-white text-sm py-2 text-center w-full z-50 relative">
        Now supporting Linux endpoints —{" "}
        <Link href="#" className="underline hover:text-white/80 transition-colors">
          read more &rarr;
        </Link>
      </div>

      <header className="sticky top-0 left-0 right-0 z-50 bg-[#0a1628]/80 backdrop-blur-md border-b border-white/10">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white">
            {/* Logo icon — layered squares */}
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="14" height="14" rx="3" fill="#155eef" opacity="0.5" />
              <rect x="10" y="10" width="14" height="14" rx="3" fill="#155eef" />
            </svg>
            Level
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 ml-4">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
                Log in
              </Link>
              <Button size="sm">Get started for free</Button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-b border-white/10 bg-[#0a1628]/95 backdrop-blur-md"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link href="#" className="text-gray-400 hover:text-white font-medium">
                  Log in
                </Link>
                <Button size="sm" className="w-full">Get started for free</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
