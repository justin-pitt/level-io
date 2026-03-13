"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function LandingCtaBanner() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-20 bg-level-navy overflow-hidden">
      {/* Subtle blue gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-level-blue/10 via-transparent to-level-blue/5 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="relative max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#d6d3cd] tracking-[-0.02em] mb-4">
          Start managing your IT infrastructure with Level
        </h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of IT teams who save hours every week.
        </p>

        <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
          <Button size="lg" className="w-auto px-8">
            Get started for free
          </Button>
          <button className="inline-flex items-center justify-center rounded-lg font-semibold px-8 py-4 text-lg text-white border border-white/30 bg-transparent hover:bg-white/10 transition-colors duration-200 cursor-pointer">
            Book a demo
          </button>
        </div>
      </motion.div>
    </section>
  );
}
