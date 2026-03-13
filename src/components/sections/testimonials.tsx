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
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center mb-4">
          Trusted by IT teams worldwide
        </h2>
        <p className="text-gray-400 text-center mb-12">
          See what our customers have to say.
        </p>

        <div className="min-h-[280px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#111827] border border-white/10 rounded-xl p-8 w-full"
            >
              {/* Decorative quote mark */}
              <span className="text-5xl font-serif leading-none text-level-blue select-none">
                &ldquo;
              </span>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mt-2 mb-8">
                {current.quote}
              </p>

              <footer className="flex items-center gap-4">
                {/* Avatar initials */}
                <div className="bg-level-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-sm shrink-0">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold">{current.author}</p>
                  <p className="text-gray-400 text-sm">
                    {current.role}, {current.company}
                  </p>
                </div>
              </footer>
            </motion.div>
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
