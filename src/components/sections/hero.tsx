"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";

function DashboardMockup() {
  return (
    <div className="bg-[#111827] rounded-xl border border-white/10 p-6 text-left">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-xs text-gray-500 font-mono">Level Dashboard</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white/5 rounded-lg p-4 border border-white/5">
          <p className="text-xs text-gray-500 mb-1">Total Devices</p>
          <p className="text-2xl font-bold text-white">1,284</p>
          <p className="text-xs text-green-400 mt-1">+12 today</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/5">
          <p className="text-xs text-gray-500 mb-1">Online</p>
          <p className="text-2xl font-bold text-green-400">1,197</p>
          <p className="text-xs text-gray-500 mt-1">93.2%</p>
        </div>
        <div className="bg-white/5 rounded-lg p-4 border border-white/5">
          <p className="text-xs text-gray-500 mb-1">Alerts</p>
          <p className="text-2xl font-bold text-amber-400">7</p>
          <p className="text-xs text-gray-500 mt-1">3 critical</p>
        </div>
      </div>

      {/* Table mockup */}
      <div className="bg-white/5 rounded-lg border border-white/5 overflow-hidden">
        <div className="grid grid-cols-4 gap-4 px-4 py-2.5 border-b border-white/5 text-xs text-gray-500 font-medium">
          <span>Device</span>
          <span>OS</span>
          <span>Status</span>
          <span>Last Seen</span>
        </div>
        {[
          { device: "WS-PROD-01", os: "Windows 11", status: "Online", statusColor: "text-green-400", time: "Just now" },
          { device: "WS-PROD-02", os: "macOS 15.2", status: "Online", statusColor: "text-green-400", time: "2m ago" },
          { device: "SRV-DB-03", os: "Ubuntu 24.04", status: "Warning", statusColor: "text-amber-400", time: "1m ago" },
          { device: "WS-DEV-04", os: "Windows 11", status: "Online", statusColor: "text-green-400", time: "5m ago" },
          { device: "SRV-WEB-05", os: "Ubuntu 22.04", status: "Offline", statusColor: "text-red-400", time: "3h ago" },
        ].map((row) => (
          <div key={row.device} className="grid grid-cols-4 gap-4 px-4 py-2.5 border-b border-white/5 last:border-0 text-sm">
            <span className="text-white font-mono text-xs">{row.device}</span>
            <span className="text-gray-400 text-xs">{row.os}</span>
            <span className={`${row.statusColor} text-xs flex items-center gap-1.5`}>
              <span className={`w-1.5 h-1.5 rounded-full ${row.statusColor.replace("text-", "bg-")}`} />
              {row.status}
            </span>
            <span className="text-gray-500 text-xs">{row.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-28 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#0d1f3c] to-[#0a1628] overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid" />

      {/* Glowing blue orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-level-blue opacity-10 blur-[120px] rounded-full w-[500px] h-[500px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Pill badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-6 inline-flex"
        >
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-gray-300 backdrop-blur-sm">
            Reinventing IT management
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
          <AnimatedText text="IT management" />
          <br />
          <AnimatedText text="reinvented." delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
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

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}
