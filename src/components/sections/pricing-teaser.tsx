import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

interface PricingPlan {
  price: string;
  unit: string;
  description: string;
  features: string[];
  ctaText: string;
}

interface PricingTeaserProps {
  pricingPlan: PricingPlan;
}

export function PricingTeaser({ pricingPlan }: PricingTeaserProps) {
  return (
    <SectionWrapper id="pricing">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-12">
          Simple, transparent pricing
        </h2>

        <div className="max-w-md mx-auto bg-white/5 rounded-2xl border border-level-blue/30 p-8 md:p-10 shadow-[0_0_40px_rgba(21,94,239,0.15)]">
          {/* Simple pricing badge */}
          <div className="mb-6">
            <span className="inline-block text-sm font-medium border border-level-blue/30 text-level-blue rounded-full px-4 py-1">
              Simple pricing
            </span>
          </div>

          <div className="mb-6">
            <span className="text-6xl font-bold text-white">
              {pricingPlan.price}
            </span>
            <span className="text-gray-400 text-lg ml-2">
              {pricingPlan.unit}
            </span>
          </div>

          <p className="text-gray-400 mb-8">{pricingPlan.description}</p>

          <ul className="space-y-3 text-left mb-8">
            {pricingPlan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check size={20} className="text-level-blue shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="w-full sm:flex-1">
              {pricingPlan.ctaText}
            </Button>
            <Button size="lg" variant="ghost" className="w-full sm:flex-1">
              Book a demo
            </Button>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            No credit card required &middot; Cancel anytime
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
