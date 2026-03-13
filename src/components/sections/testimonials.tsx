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

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index);
      // Reset auto-play timer when user clicks a dot
      setAutoPlay(false);
      setTimeout(() => setAutoPlay(true), 0);
    },
    []
  );

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const current = testimonials[activeIndex];

  return (
    <SectionWrapper className="bg-level-navy">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Loved by IT teams everywhere
        </h2>

        <div className="min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">
                &ldquo;{current.quote}&rdquo;
              </p>
              <footer>
                <p className="text-white font-semibold text-lg">{current.author}</p>
                <p className="text-white/60">
                  {current.role}, {current.company}
                </p>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Dot navigation */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3 h-3 rounded-full transition-colors duration-200 cursor-pointer ${
                i === activeIndex ? "bg-level-blue" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
