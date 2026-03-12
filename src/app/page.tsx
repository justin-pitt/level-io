import { Hero } from "@/components/sections/hero";
import { FeatureCarousel } from "@/components/sections/feature-carousel";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { Faq } from "@/components/sections/faq";
import {
  features,
  testimonials,
  pricingPlan,
  faqItems,
} from "@/lib/graphql/mock-data";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FeatureCarousel features={features} />
      <Testimonials testimonials={testimonials} />
      <PricingTeaser pricingPlan={pricingPlan} />
      <Faq faqItems={faqItems} />
    </main>
  );
}
