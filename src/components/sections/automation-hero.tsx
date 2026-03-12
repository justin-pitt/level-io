"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";

export function AutomationHero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-level-blue-light to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-level-navy leading-tight">
          <AnimatedText text="Automate everything." />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-level-gray-500 max-w-2xl mx-auto"
        >
          Build powerful no-code workflows with event-based triggers,
          conditional logic, and multi-step actions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg">Get started for free</Button>
          <Button variant="secondary" size="lg">View documentation</Button>
        </motion.div>

        {/* Illustration placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-16 rounded-xl border border-level-gray-100 bg-white shadow-2xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="aspect-video bg-level-gray-50 flex items-center justify-center text-level-gray-500">
            Automation Workflow Illustration
          </div>
        </motion.div>
      </div>
    </section>
  );
}
