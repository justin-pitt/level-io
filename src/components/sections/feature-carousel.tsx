"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Icon } from "@/components/ui/icon";

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

export function FeatureCarousel({ features }: FeatureCarouselProps) {
  const [activeId, setActiveId] = useState(features[0]?.id ?? "");
  const active = features.find((f) => f.id === activeId) ?? features[0];

  return (
    <SectionWrapper id="features">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-12">
        Everything you need, nothing you don&apos;t
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tabs — horizontal scroll on mobile, vertical stack on desktop */}
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible md:w-1/3 shrink-0 pb-2 md:pb-0">
          {features.map((feature) => {
            const isActive = feature.id === activeId;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left whitespace-nowrap md:whitespace-normal transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white/10 border-l-0 md:border-l-4 border-level-blue text-white font-semibold"
                    : "text-gray-400 hover:bg-white/5"
                }`}
              >
                <Icon
                  name={feature.icon}
                  size={20}
                  className={isActive ? "text-level-blue" : "text-gray-400"}
                />
                <span>{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="md:w-2/3 min-h-[250px] flex items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111827] rounded-xl border border-white/10 p-8 w-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-level-blue/15">
                  <Icon name={active.icon} size={24} className="text-level-blue" />
                </div>
                <h3 className="text-2xl font-bold text-white">{active.title}</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                {active.description}
              </p>
              <a
                href={`/features/${active.slug}`}
                className="text-level-blue font-semibold hover:underline inline-flex items-center gap-1"
              >
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
