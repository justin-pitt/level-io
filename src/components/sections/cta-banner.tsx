"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-r from-level-blue to-level-blue-dark">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">
          Ready to automate your IT operations?
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-level-blue hover:bg-level-gray-50"
          >
            Get started for free
          </Button>
          <Button
            size="lg"
            className="border border-white text-white bg-transparent hover:bg-white/10"
          >
            Book a demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
