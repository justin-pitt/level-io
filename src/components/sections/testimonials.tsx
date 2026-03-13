"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionWrapper } from "@/components/ui/section-wrapper";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 0);
  }, []);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <SectionWrapper className="bg-level-navy py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="min-h-[320px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Decorative quote mark */}
              <span className="text-level-blue text-6xl font-serif leading-none select-none mb-4">
                &ldquo;
              </span>

              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-relaxed mb-10">
                {current.quote}
              </p>

              <footer className="flex flex-col items-center gap-1">
                <p className="text-white font-semibold text-lg">
                  {current.author}
                </p>
                <p className="text-gray-400">
                  {current.role}
                </p>
                <p className="text-gray-400 text-lg font-medium mt-1">
                  {current.company}
                </p>
              </footer>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                i === activeIndex
                  ? "bg-level-blue"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
