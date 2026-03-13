import { Check } from "lucide-react";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Button } from "@/components/ui/button";

const leftBullets = [
  "Automate all your remedial tasks",
  "Remote access when you need it most",
  "Complete visibility across your fleet",
  "SOC 2 Type II certified security",
  "Deploy in minutes, not days",
];

const pricingFeatures = [
  "Remote control",
  "Background management",
  "Patch management",
  "Monitoring & alerting",
  "Automations",
  "Scripting",
  "Inventory",
];

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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left column — feature highlights */}
        <div className="text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Everything you need.
            <br />
            <span className="text-white/60">Nothing you don&apos;t.</span>
          </h2>
          <ul className="space-y-4 mt-8">
            {leftBullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-level-blue/20 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-level-blue" />
                </div>
                <span className="text-lg text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column — pricing card */}
        <div className="bg-white/5 rounded-2xl border border-level-blue/30 p-8 md:p-10 shadow-[0_0_40px_rgba(21,94,239,0.15)]">
          {/* Simple pricing badge */}
          <div className="mb-6">
            <span className="inline-block text-sm font-medium border border-level-blue/30 text-level-blue rounded-full px-4 py-1">
              Simple pricing
            </span>
          </div>

          <div className="mb-2">
            <span className="text-6xl font-bold text-white">$2</span>
          </div>
          <p className="text-gray-400 mb-8">per device / month</p>

          <ul className="space-y-3 text-left mb-8">
            {pricingFeatures.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <Check size={18} className="text-green-400 shrink-0" />
                <span className="text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full">
            Get started for free
          </Button>

          <p className="text-gray-500 text-sm mt-4 text-center">
            No credit card required
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
