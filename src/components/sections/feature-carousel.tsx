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
      <h2 className="text-3xl md:text-4xl font-bold text-level-navy text-center mb-12">
        Everything you need, nothing you don&apos;t
      </h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Tab list */}
        <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible md:w-1/3 shrink-0">
          {features.map((feature) => {
            const isActive = feature.id === activeId;
            return (
              <button
                key={feature.id}
                onClick={() => setActiveId(feature.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-left whitespace-nowrap md:whitespace-normal transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? "bg-level-blue-light border-l-4 border-level-blue text-level-navy font-semibold"
                    : "text-level-gray-500 hover:bg-level-gray-50"
                }`}
              >
                <Icon
                  name={feature.icon}
                  size={20}
                  className={isActive ? "text-level-blue" : "text-level-gray-500"}
                />
                <span>{feature.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="md:w-2/3 min-h-[200px] flex items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl border border-level-gray-100 shadow-lg p-8 w-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-level-blue-light">
                  <Icon name={active.icon} size={24} className="text-level-blue" />
                </div>
                <h3 className="text-xl font-bold text-level-navy">{active.title}</h3>
              </div>
              <p className="text-level-gray-500 text-lg leading-relaxed">
                {active.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
}
