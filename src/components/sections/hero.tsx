"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-[#050d1f] overflow-hidden flex items-center">
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-level-blue opacity-[0.07] blur-[120px]" />
        <div
          className="absolute inset-0 opacity-60"
          style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 0h40v40H0z' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E")`}}
        />
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-level-blue/30 bg-level-blue/10 text-level-blue text-sm font-medium mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-level-blue animate-pulse" />
          Modern RMM Platform
        </motion.div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6">
          <span className="bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            <AnimatedText text="IT management" />
          </span>
          <br />
          <span className="bg-gradient-to-r from-level-blue via-blue-400 to-blue-300 bg-clip-text text-transparent">
            <AnimatedText text="reinvented." delay={0.3} />
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          The modern RMM platform that saves your team thousands of hours.
          Simple pricing, powerful features, zero complexity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg">Get started for free</Button>
          <Button variant="secondary" size="lg">Book a demo</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "10,000+", label: "Managed endpoints" },
            { value: "$2", label: "Per device / month" },
            { value: "SOC 2", label: "Type II certified" },
            { value: "24/7", label: "Support" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-white/40 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="aspect-video bg-gradient-to-br from-[#0d1b35] to-[#1a2d52] flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 rounded-xl bg-level-blue/20 border border-level-blue/30 flex items-center justify-center mx-auto mb-3">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/>
                  <path d="M8 21h8M12 17v4"/>
                </svg>
              </div>
              <p className="text-white/40 text-sm">Product interface preview</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
