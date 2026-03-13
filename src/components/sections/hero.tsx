"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";

const devices = [
  { name: "PROD-WEB-01", os: "Ubuntu 22.04", status: "Online", color: "bg-green-400", seen: "2m ago" },
  { name: "DESK-MKT-04", os: "Windows 11", status: "Online", color: "bg-green-400", seen: "5m ago" },
  { name: "SRV-DB-02", os: "RHEL 9", status: "Warning", color: "bg-yellow-400", seen: "1h ago" },
  { name: "LAPTOP-DEV-12", os: "macOS 14", status: "Offline", color: "bg-red-400", seen: "3d ago" },
  { name: "IOT-SENSOR-88", os: "Linux", status: "Online", color: "bg-green-400", seen: "30s ago" },
];

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
          className="mt-10 flex flex-row gap-4 items-center justify-center"
        >
          <Button size="lg">Get started for free</Button>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">
            Book a demo &rarr;
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-16 flex flex-col md:flex-row items-stretch justify-center text-center"
        >
          {[
            { value: "10,000+", label: "Managed endpoints" },
            { value: "$2", label: "Per device / month" },
            { value: "SOC 2", label: "Type II certified" },
            { value: "24/7", label: "Support" },
          ].map((stat, i, arr) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center py-4 px-8 ${
                i < arr.length - 1 ? "border-b md:border-b-0 md:border-r border-white/10" : ""
              }`}
            >
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="text-sm text-white/40 mt-1">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 rounded-xl overflow-hidden shadow-2xl shadow-black/50 max-w-5xl mx-auto border border-white/10"
        >
          <div className="bg-[#0d1117]">
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#161b22]">
              <span className="text-sm font-semibold text-white">Level Dashboard</span>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  <span className="text-xs text-white/30">Search devices...</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-level-blue/30 border border-level-blue/50 flex items-center justify-center">
                  <span className="text-xs text-level-blue font-medium">JP</span>
                </div>
              </div>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 p-4">
              {[
                { label: "Total Devices", value: "1,247", accent: "text-white" },
                { label: "Online", value: "1,183", accent: "text-green-400" },
                { label: "Alerts", value: "12", accent: "text-yellow-400" },
                { label: "Patches Pending", value: "89", accent: "text-orange-400" },
              ].map((card) => (
                <div key={card.label} className="bg-[#161b22] border border-white/10 rounded-lg px-4 py-3">
                  <p className="text-xs text-white/40 mb-1">{card.label}</p>
                  <p className={`text-xl font-bold ${card.accent}`}>{card.value}</p>
                </div>
              ))}
            </div>

            {/* Device table */}
            <div className="px-4 pb-4">
              <div className="bg-[#161b22] border border-white/10 rounded-lg overflow-hidden">
                <div className="grid grid-cols-4 gap-4 px-4 py-2 border-b border-white/10 text-xs text-white/40 font-medium">
                  <span>Device Name</span>
                  <span>OS</span>
                  <span>Status</span>
                  <span className="text-right">Last Seen</span>
                </div>
                {devices.map((device, i) => (
                  <div
                    key={device.name}
                    className={`grid grid-cols-4 gap-4 px-4 py-2.5 text-xs ${
                      i < devices.length - 1 ? "border-b border-white/5" : ""
                    } hover:bg-white/[0.02]`}
                  >
                    <span className="text-white font-medium truncate">{device.name}</span>
                    <span className="text-white/50 truncate">{device.os}</span>
                    <span className="flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${device.color}`} />
                      <span className="text-white/60">{device.status}</span>
                    </span>
                    <span className="text-white/40 text-right">{device.seen}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
