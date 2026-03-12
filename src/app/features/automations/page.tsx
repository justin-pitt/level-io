import { type Metadata } from "next";
import { AutomationHero } from "@/components/sections/automation-hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { CapabilitiesGrid } from "@/components/sections/capabilities-grid";
import { CtaBanner } from "@/components/sections/cta-banner";
import { automationCapabilities } from "@/lib/graphql/mock-data";

export const metadata: Metadata = {
  title: "Automations | Level",
  description:
    "Build powerful no-code workflows with event-based triggers, conditional logic, and multi-step actions.",
};

export default function AutomationsPage() {
  return (
    <>
      <AutomationHero />
      <HowItWorks />
      <CapabilitiesGrid capabilities={automationCapabilities} />
      <CtaBanner />
    </>
  );
}
