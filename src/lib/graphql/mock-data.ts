export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface PricingPlan {
  price: string;
  unit: string;
  description: string;
  features: string[];
  ctaText: string;
}

export interface AutomationCapability {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const features: Feature[] = [
  {
    id: "automations",
    title: "Automations",
    description:
      "Build no-code workflows with event-based triggers. Automate routine tasks and focus on what matters.",
    icon: "zap",
    slug: "automations",
  },
  {
    id: "remote-control",
    title: "Remote Control",
    description:
      "Secure peer-to-peer device access with end-to-end encryption. Connect instantly to any managed device.",
    icon: "monitor",
    slug: "remote-control",
  },
  {
    id: "patch-management",
    title: "Patch Management",
    description:
      "Automated update deployment and compliance tracking. Keep every device secure and up to date.",
    icon: "shield",
    slug: "patch-management",
  },
  {
    id: "monitoring",
    title: "Monitoring & Alerting",
    description:
      "Proactive system monitoring with intelligent remediation. Know about issues before your users do.",
    icon: "activity",
    slug: "monitoring",
  },
  {
    id: "inventory",
    title: "Inventory",
    description:
      "Complete asset tracking and hardware/software cataloging. Know exactly what's on every device.",
    icon: "database",
    slug: "inventory",
  },
  {
    id: "scripting",
    title: "Scripting",
    description:
      "Execute custom scripts across your fleet. PowerShell, Bash, Python — run anything, anywhere.",
    icon: "terminal",
    slug: "scripting",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Level has completely transformed how we manage our IT infrastructure. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp",
  },
  {
    id: "2",
    quote:
      "The automation capabilities alone saved us thousands of hours this year. It's the best RMM tool we've ever used.",
    author: "Mike Rodriguez",
    role: "MSP Owner",
    company: "CloudManaged",
  },
  {
    id: "3",
    quote:
      "Simple pricing, powerful features. Level is exactly what the RMM space needed.",
    author: "Jamie Park",
    role: "Systems Administrator",
    company: "DataFlow Inc.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "How does Level's pricing work?",
    answer:
      "Level charges $2 per device per month. No hidden fees, no tiers, no surprises. You also get up to 10 endpoints free, forever.",
  },
  {
    id: "2",
    question: "What operating systems does Level support?",
    answer:
      "Level supports Windows, macOS, and Linux. Our lightweight agent works across all major operating systems with full feature parity.",
  },
  {
    id: "3",
    question: "Is there a free trial?",
    answer:
      "Yes — you can manage up to 10 endpoints completely free with no time limit. No credit card required to get started.",
  },
  {
    id: "4",
    question: "How secure is the remote connection?",
    answer:
      "Level uses peer-to-peer connections with end-to-end encryption. Your data never passes through our servers. We're SOC 2 Type II certified.",
  },
];

export const pricingPlan: PricingPlan = {
  price: "$2",
  unit: "per device / month",
  description:
    "Everything you need to manage your IT infrastructure. No tiers, no complexity.",
  features: [
    "Unlimited users",
    "All features included",
    "10 free endpoints",
    "SOC 2 Type II certified",
    "24/7 support",
  ],
  ctaText: "Get started for free",
};

export const automationCapabilities: AutomationCapability[] = [
  {
    id: "event-triggers",
    title: "Event-Based Triggers",
    description:
      "Automatically respond to system events like disk space warnings, service failures, or new device enrollment.",
    icon: "bell",
  },
  {
    id: "scheduled-tasks",
    title: "Scheduled Tasks",
    description:
      "Run maintenance scripts, generate reports, or deploy updates on a recurring schedule.",
    icon: "clock",
  },
  {
    id: "conditional-logic",
    title: "Conditional Logic",
    description:
      "Build branching workflows with if/then conditions. Different actions for different device states.",
    icon: "git-branch",
  },
  {
    id: "multi-step",
    title: "Multi-Step Workflows",
    description:
      "Chain actions together into complex workflows. Each step can depend on the result of the previous one.",
    icon: "layers",
  },
  {
    id: "templates",
    title: "Workflow Templates",
    description:
      "Start from pre-built templates for common IT tasks. Customize and deploy in minutes.",
    icon: "copy",
  },
  {
    id: "audit-log",
    title: "Audit Trail",
    description:
      "Every automation run is logged with full detail. Know exactly what happened, when, and why.",
    icon: "file-text",
  },
];
