"use client";

import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Icon } from "@/components/ui/icon";

interface Capability {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface CapabilitiesGridProps {
  capabilities: Capability[];
}

export function CapabilitiesGrid({ capabilities }: CapabilitiesGridProps) {
  return (
    <SectionWrapper id="capabilities">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-16">
        Everything you need to automate
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {capabilities.map((cap, i) => (
          <motion.div
            key={cap.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-xl border border-white/10 bg-white/5 p-8 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-200"
          >
            <div className="w-12 h-12 rounded-lg bg-level-blue/15 flex items-center justify-center mb-5">
              <Icon name={cap.icon} size={24} className="text-level-blue" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {cap.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {cap.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
