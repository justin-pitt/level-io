import { Hero } from "@/components/sections/hero";
import { FeatureCarousel } from "@/components/sections/feature-carousel";
import { LandingHowItWorks } from "@/components/sections/landing-how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingTeaser } from "@/components/sections/pricing-teaser";
import { Faq } from "@/components/sections/faq";
import { LandingCtaBanner } from "@/components/sections/landing-cta-banner";
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
      <LandingHowItWorks />
      <Testimonials testimonials={testimonials} />
      <PricingTeaser pricingPlan={pricingPlan} />
      <Faq faqItems={faqItems} />
      <LandingCtaBanner />
    </main>
  );
}
