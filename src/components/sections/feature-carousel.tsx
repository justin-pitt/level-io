"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import {
  CheckCircle2,
  Monitor,
  Wifi,
  Bell,
  MousePointerClick,
  GitBranch,
  Settings2,
  Calendar,
  Package,
  Lock,
  ShieldCheck,
  Fingerprint,
  FileSearch,
} from "lucide-react";
import type { ReactNode } from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

interface FeatureCarouselProps {
  features: Feature[];
}

/* ------------------------------------------------------------------ */
/*  Mockup components                                                  */
/* ------------------------------------------------------------------ */

function DeviceListMockup() {
  const devices = [
    { name: "MBP-Engineering-01", os: "macOS 15.2", status: "online" },
    { name: "WIN-Design-PC", os: "Windows 11", status: "online" },
    { name: "LNX-Server-Prod", os: "Ubuntu 24.04", status: "warning" },
    { name: "MBP-Marketing-03", os: "macOS 15.1", status: "offline" },
    { name: "WIN-Finance-02", os: "Windows 11", status: "online" },
  ];

  const statusColor: Record<string, string> = {
    online: "bg-emerald-400",
    warning: "bg-amber-400",
    offline: "bg-gray-500",
  };

  return (
    <div className="bg-[#0B1120] rounded-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-white">Devices</span>
        <span className="text-xs text-gray-500">5 total</span>
      </div>
      <div className="space-y-2">
        {devices.map((d) => (
          <div
            key={d.name}
            className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"
          >
            <div className="flex items-center gap-3">
              <span className={`w-2 h-2 rounded-full ${statusColor[d.status]}`} />
              <div>
                <p className="text-sm text-white font-medium">{d.name}</p>
                <p className="text-xs text-gray-500">{d.os}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500 capitalize">{d.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WorkflowMockup() {
  const boxClass =
    "bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-center";

  return (
    <div className="bg-[#0B1120] rounded-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-white">
          Automation: Patch Deployment
        </span>
        <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
          Active
        </span>
      </div>

      <div className="flex flex-col items-center gap-2">
        {/* Trigger */}
        <div className={boxClass}>
          <p className="text-xs text-gray-400 mb-1">Trigger</p>
          <p className="text-sm text-white font-medium">New patch available</p>
        </div>
        <div className="w-px h-5 bg-white/20" />

        {/* Condition */}
        <div className={`${boxClass} border-amber-400/30`}>
          <p className="text-xs text-amber-400 mb-1">Condition</p>
          <p className="text-sm text-white font-medium">
            Device in &quot;auto-update&quot; group?
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-emerald-400">Yes</span>
          <div className="w-8 h-px bg-white/20" />
          <span className="text-xs text-gray-500">No → Skip</span>
        </div>
        <div className="w-px h-5 bg-white/20" />

        {/* Action */}
        <div className={`${boxClass} border-level-blue/30`}>
          <p className="text-xs text-level-blue mb-1">Action</p>
          <p className="text-sm text-white font-medium">Deploy patch &amp; restart</p>
        </div>
      </div>
    </div>
  );
}

function SecurityMockup() {
  return (
    <div className="bg-[#0B1120] rounded-xl border border-white/10 p-5 shadow-2xl">
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm font-semibold text-white">
          Security Overview
        </span>
        <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
          All clear
        </span>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-level-blue/15 flex items-center justify-center">
          <Lock className="text-level-blue" size={28} />
        </div>
      </div>

      <div className="space-y-3">
        {[
          { label: "Encrypted connections", value: "128 / 128", ok: true },
          { label: "SOC 2 compliance", value: "Verified", ok: true },
          { label: "Zero-trust policies", value: "Enforced", ok: true },
          { label: "Audit events (24h)", value: "1,247", ok: true },
        ].map((row) => (
          <div
            key={row.label}
            className="flex items-center justify-between bg-white/5 rounded-lg px-4 py-2.5"
          >
            <span className="text-sm text-gray-300">{row.label}</span>
            <span
              className={`text-sm font-medium ${
                row.ok ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bullet item                                                        */
/* ------------------------------------------------------------------ */

function Bullet({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 text-level-blue shrink-0">{icon}</span>
      <span className="text-gray-300">{text}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  Feature block data                                                 */
/* ------------------------------------------------------------------ */

const blocks: {
  eyebrow: string;
  title: string;
  description: string;
  bullets: { icon: ReactNode; text: string }[];
  mockup: ReactNode;
  imagePosition: "left" | "right";
}[] = [
  {
    eyebrow: "Device Management",
    title: "Simplify your tech toolset",
    description:
      "Consolidate your IT management stack into one powerful platform. No more juggling between tools.",
    bullets: [
      { icon: <Monitor size={18} />, text: "Unified device dashboard" },
      {
        icon: <Wifi size={18} />,
        text: "Cross-platform support (Windows, macOS, Linux)",
      },
      { icon: <Bell size={18} />, text: "Real-time monitoring and alerts" },
      {
        icon: <MousePointerClick size={18} />,
        text: "One-click remote access",
      },
    ],
    mockup: <DeviceListMockup />,
    imagePosition: "right",
  },
  {
    eyebrow: "Automation",
    title: "Work smarter, not harder",
    description:
      "Build no-code automations that handle routine tasks while you focus on what matters.",
    bullets: [
      { icon: <GitBranch size={18} />, text: "Event-based triggers" },
      { icon: <Settings2 size={18} />, text: "Conditional workflow logic" },
      {
        icon: <Calendar size={18} />,
        text: "Scheduled maintenance scripts",
      },
      { icon: <Package size={18} />, text: "Automated patch deployment" },
    ],
    mockup: <WorkflowMockup />,
    imagePosition: "left",
  },
  {
    eyebrow: "Security",
    title: "Seamless speed. Seamless security.",
    description:
      "Peer-to-peer connections with end-to-end encryption. Fast, secure, and SOC 2 Type II certified.",
    bullets: [
      { icon: <Lock size={18} />, text: "End-to-end encrypted connections" },
      { icon: <ShieldCheck size={18} />, text: "SOC 2 Type II certified" },
      { icon: <Fingerprint size={18} />, text: "Zero-trust architecture" },
      {
        icon: <FileSearch size={18} />,
        text: "Audit logging on every action",
      },
    ],
    mockup: <SecurityMockup />,
    imagePosition: "right",
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function FeatureCarousel({ features: _features }: FeatureCarouselProps) {
  return (
    <SectionWrapper id="features">
      <p className="text-sm font-medium text-level-blue mb-3 text-center">Features</p>
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-16">
        Everything you need, nothing you don&apos;t
      </h2>

      <div className="space-y-24">
        {blocks.map((block, index) => {
          const imageFirst = block.imagePosition === "left";

          return (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              {/* Text side */}
              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <p className="text-sm font-medium text-level-blue mb-2">{block.eyebrow}</p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {block.title}
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {block.description}
                </p>
                <ul className="space-y-3">
                  {block.bullets.map((b) => (
                    <Bullet key={b.text} icon={b.icon} text={b.text} />
                  ))}
                </ul>
              </div>

              {/* Mockup side */}
              <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                {block.mockup}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
