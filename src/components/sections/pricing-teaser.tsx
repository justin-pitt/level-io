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
        <h2 className="text-3xl md:text-4xl font-bold text-level-navy mb-12">
          Simple, transparent pricing
        </h2>

        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl border border-level-gray-100 p-8 md:p-10">
          <div className="mb-6">
            <span className="text-5xl md:text-6xl font-bold text-level-navy">
              {pricingPlan.price}
            </span>
            <span className="text-level-gray-500 text-lg ml-2">
              {pricingPlan.unit}
            </span>
          </div>

          <p className="text-level-gray-500 mb-8">{pricingPlan.description}</p>

          <ul className="space-y-3 text-left mb-8">
            {pricingPlan.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check size={20} className="text-level-blue shrink-0" />
                <span className="text-level-gray-900">{feature}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full">
            {pricingPlan.ctaText}
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
