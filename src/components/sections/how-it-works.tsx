"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Icon } from "@/components/ui/icon";

const steps = [
  {
    number: 1,
    title: "Define your trigger",
    icon: "bell",
    description:
      "Choose from system events, schedules, or manual triggers to start your workflow.",
  },
  {
    number: 2,
    title: "Set conditions",
    icon: "git-branch",
    description:
      "Add branching logic to handle different scenarios and device states.",
  },
  {
    number: 3,
    title: "Execute actions",
    icon: "zap",
    description:
      "Run scripts, deploy patches, send alerts, or chain multiple actions together.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <h2 className="text-3xl md:text-4xl font-bold text-[#d6d3cd] tracking-[-0.02em] text-center mb-16">
        How it works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
        {steps.map((step, i) => (
          <div key={step.number} className="relative flex flex-col items-center">
            {/* Connector line between steps (hidden on first step and mobile) */}
            {i > 0 && (
              <div className="hidden md:block absolute top-10 -left-2 w-[calc(100%_-_3rem)] h-0.5 bg-white/10 -translate-x-full translate-x-1/2" />
            )}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col items-center text-center rounded-xl border border-white/10 bg-white/5 p-8 shadow-sm w-full"
            >
              {/* Numbered circle with icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-level-blue/15 flex items-center justify-center">
                  <Icon name={step.icon} size={32} className="text-level-blue" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-level-blue text-white text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-[#d6d3cd] tracking-[-0.02em] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>

            {/* Arrow connector on desktop */}
            {i < steps.length - 1 && (
              <div className="hidden md:flex absolute top-10 -right-2 translate-x-1/2 z-10">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-level-blue"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
