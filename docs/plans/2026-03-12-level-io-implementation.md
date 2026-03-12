# Level.io Marketing Site Rebuild — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a React/Next.js reimagining of Level's marketing site as a portfolio piece demonstrating Senior Frontend Engineer skills.

**Architecture:** Next.js 16 App Router with TypeScript, Tailwind CSS v4, Framer Motion animations, and a mock GraphQL API via GraphQL Yoga served from a Next.js route handler. Content is sourced from typed mock data files with GraphQL Code Generator producing client-side types.

**Tech Stack:** Next.js 16, TypeScript (strict), Tailwind CSS v4, Framer Motion, GraphQL Yoga, graphql-request, GraphQL Code Generator, Vercel

---

### Task 1: Project Scaffolding

**Files:**
- Create: entire project via `create-next-app`
- Modify: `package.json`, `tsconfig.json`, `tailwind.config.ts`

**Step 1: Scaffold Next.js project**

Run from `C:\Code\level-io`:
```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
```

Expected: Project scaffolded with App Router, TypeScript, Tailwind, ESLint.

**Step 2: Verify dev server starts**

```bash
npm run dev
```

Expected: Dev server at http://localhost:3000 showing Next.js welcome page.

**Step 3: Install core dependencies**

```bash
npm install graphql graphql-yoga graphql-request framer-motion
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-operations @graphql-codegen/typescript-graphql-request
```

**Step 4: Configure GraphQL Code Generator**

Create `codegen.ts` in project root:

```typescript
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/lib/graphql/schema.ts",
  documents: "src/lib/graphql/queries.ts",
  generates: {
    "src/lib/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
```

**Step 5: Add codegen script to package.json**

Add to `scripts`:
```json
"codegen": "graphql-codegen --config codegen.ts"
```

**Step 6: Configure Tailwind with Level brand tokens**

Update `src/styles/globals.css` to add custom CSS properties:

```css
@import "tailwindcss";

@theme {
  --color-level-blue: #155EEF;
  --color-level-blue-light: #EFF4FF;
  --color-level-blue-dark: #0040C1;
  --color-level-navy: #0A1628;
  --color-level-gray-50: #F9FAFB;
  --color-level-gray-100: #F3F4F6;
  --color-level-gray-500: #6B7280;
  --color-level-gray-900: #111827;
  --font-family-heading: "Inter", sans-serif;
  --font-family-body: "Inter", sans-serif;
}
```

**Step 7: Clean out default boilerplate**

Replace `src/app/page.tsx` with:

```tsx
export default function Home() {
  return (
    <main className="min-h-screen">
      <h1 className="text-4xl font-bold text-level-blue p-8">Level.io Rebuild</h1>
    </main>
  );
}
```

Strip default styles from `src/app/layout.tsx`, keep only the Inter font import and globals.css import.

**Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js 16 project with Tailwind, GraphQL, Framer Motion"
```

---

### Task 2: GraphQL Schema & Mock Data

**Files:**
- Create: `src/lib/graphql/schema.ts`
- Create: `src/lib/graphql/mock-data.ts`
- Create: `src/lib/graphql/queries.ts`
- Create: `src/app/api/graphql/route.ts`

**Step 1: Create mock data file**

Create `src/lib/graphql/mock-data.ts` with typed content for all sections:

```typescript
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
    description: "Build no-code workflows with event-based triggers. Automate routine tasks and focus on what matters.",
    icon: "zap",
    slug: "automations",
  },
  {
    id: "remote-control",
    title: "Remote Control",
    description: "Secure peer-to-peer device access with end-to-end encryption. Connect instantly to any managed device.",
    icon: "monitor",
    slug: "remote-control",
  },
  {
    id: "patch-management",
    title: "Patch Management",
    description: "Automated update deployment and compliance tracking. Keep every device secure and up to date.",
    icon: "shield",
    slug: "patch-management",
  },
  {
    id: "monitoring",
    title: "Monitoring & Alerting",
    description: "Proactive system monitoring with intelligent remediation. Know about issues before your users do.",
    icon: "activity",
    slug: "monitoring",
  },
  {
    id: "inventory",
    title: "Inventory",
    description: "Complete asset tracking and hardware/software cataloging. Know exactly what's on every device.",
    icon: "database",
    slug: "inventory",
  },
  {
    id: "scripting",
    title: "Scripting",
    description: "Execute custom scripts across your fleet. PowerShell, Bash, Python — run anything, anywhere.",
    icon: "terminal",
    slug: "scripting",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Level has completely transformed how we manage our IT infrastructure. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    role: "IT Director",
    company: "TechCorp",
  },
  {
    id: "2",
    quote: "The automation capabilities alone saved us thousands of hours this year. It's the best RMM tool we've ever used.",
    author: "Mike Rodriguez",
    role: "MSP Owner",
    company: "CloudManaged",
  },
  {
    id: "3",
    quote: "Simple pricing, powerful features. Level is exactly what the RMM space needed.",
    author: "Jamie Park",
    role: "Systems Administrator",
    company: "DataFlow Inc.",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "How does Level's pricing work?",
    answer: "Level charges $2 per device per month. No hidden fees, no tiers, no surprises. You also get up to 10 endpoints free, forever.",
  },
  {
    id: "2",
    question: "What operating systems does Level support?",
    answer: "Level supports Windows, macOS, and Linux. Our lightweight agent works across all major operating systems with full feature parity.",
  },
  {
    id: "3",
    question: "Is there a free trial?",
    answer: "Yes — you can manage up to 10 endpoints completely free with no time limit. No credit card required to get started.",
  },
  {
    id: "4",
    question: "How secure is the remote connection?",
    answer: "Level uses peer-to-peer connections with end-to-end encryption. Your data never passes through our servers. We're SOC 2 Type II certified.",
  },
];

export const pricingPlan: PricingPlan = {
  price: "$2",
  unit: "per device / month",
  description: "Everything you need to manage your IT infrastructure. No tiers, no complexity.",
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
    description: "Automatically respond to system events like disk space warnings, service failures, or new device enrollment.",
    icon: "bell",
  },
  {
    id: "scheduled-tasks",
    title: "Scheduled Tasks",
    description: "Run maintenance scripts, generate reports, or deploy updates on a recurring schedule.",
    icon: "clock",
  },
  {
    id: "conditional-logic",
    title: "Conditional Logic",
    description: "Build branching workflows with if/then conditions. Different actions for different device states.",
    icon: "git-branch",
  },
  {
    id: "multi-step",
    title: "Multi-Step Workflows",
    description: "Chain actions together into complex workflows. Each step can depend on the result of the previous one.",
    icon: "layers",
  },
  {
    id: "templates",
    title: "Workflow Templates",
    description: "Start from pre-built templates for common IT tasks. Customize and deploy in minutes.",
    icon: "copy",
  },
  {
    id: "audit-log",
    title: "Audit Trail",
    description: "Every automation run is logged with full detail. Know exactly what happened, when, and why.",
    icon: "file-text",
  },
];
```

**Step 2: Create GraphQL schema with resolvers**

Create `src/lib/graphql/schema.ts`:

```typescript
import { createSchema } from "graphql-yoga";
import {
  features,
  testimonials,
  faqItems,
  pricingPlan,
  automationCapabilities,
} from "./mock-data";

export const schema = createSchema({
  typeDefs: `
    type Feature {
      id: String!
      title: String!
      description: String!
      icon: String!
      slug: String!
    }

    type Testimonial {
      id: String!
      quote: String!
      author: String!
      role: String!
      company: String!
    }

    type FaqItem {
      id: String!
      question: String!
      answer: String!
    }

    type PricingPlan {
      price: String!
      unit: String!
      description: String!
      features: [String!]!
      ctaText: String!
    }

    type AutomationCapability {
      id: String!
      title: String!
      description: String!
      icon: String!
    }

    type Query {
      features: [Feature!]!
      feature(slug: String!): Feature
      testimonials: [Testimonial!]!
      faqItems: [FaqItem!]!
      pricingPlan: PricingPlan!
      automationCapabilities: [AutomationCapability!]!
    }
  `,
  resolvers: {
    Query: {
      features: () => features,
      feature: (_, { slug }: { slug: string }) =>
        features.find((f) => f.slug === slug) ?? null,
      testimonials: () => testimonials,
      faqItems: () => faqItems,
      pricingPlan: () => pricingPlan,
      automationCapabilities: () => automationCapabilities,
    },
  },
});
```

**Step 3: Create Next.js API route for GraphQL**

Create `src/app/api/graphql/route.ts`:

```typescript
import { createYoga } from "graphql-yoga";
import { schema } from "@/lib/graphql/schema";

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
```

**Step 4: Create client-side queries**

Create `src/lib/graphql/queries.ts`:

```typescript
import { gql } from "graphql-request";

export const LANDING_PAGE_QUERY = gql`
  query LandingPage {
    features {
      id
      title
      description
      icon
      slug
    }
    testimonials {
      id
      quote
      author
      role
      company
    }
    faqItems {
      id
      question
      answer
    }
    pricingPlan {
      price
      unit
      description
      features
      ctaText
    }
  }
`;

export const AUTOMATIONS_PAGE_QUERY = gql`
  query AutomationsPage {
    feature(slug: "automations") {
      id
      title
      description
      icon
      slug
    }
    automationCapabilities {
      id
      title
      description
      icon
    }
  }
`;
```

**Step 5: Run codegen to generate types**

```bash
npm run codegen
```

Expected: `src/lib/graphql/generated.ts` created with typed query functions.

**Step 6: Verify GraphQL endpoint works**

```bash
npm run dev
```

Visit `http://localhost:3000/api/graphql` — should show GraphQL Yoga playground.

**Step 7: Commit**

```bash
git add -A
git commit -m "feat: add GraphQL schema, mock data, and API route"
```

---

### Task 3: Shared UI Components

**Files:**
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/section-wrapper.tsx`
- Create: `src/components/ui/animated-text.tsx`
- Create: `src/components/ui/icon.tsx`

**Step 1: Create Button component**

```tsx
// src/components/ui/button.tsx
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const variants = {
  primary: "bg-level-blue text-white hover:bg-level-blue-dark",
  secondary: "bg-white text-level-blue border border-level-blue hover:bg-level-blue-light",
  ghost: "text-level-gray-500 hover:text-level-gray-900",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-lg font-semibold transition-colors duration-200 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
```

**Step 2: Create SectionWrapper for consistent spacing + scroll animations**

```tsx
// src/components/ui/section-wrapper.tsx
"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className = "", id }: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`py-20 px-6 md:px-12 lg:px-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </motion.section>
  );
}
```

**Step 3: Create AnimatedText for hero headlines**

```tsx
// src/components/ui/animated-text.tsx
"use client";

import { motion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: delay + i * 0.08 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}
```

**Step 4: Create Icon component using Lucide icons**

```bash
npm install lucide-react
```

```tsx
// src/components/ui/icon.tsx
import {
  Zap,
  Monitor,
  Shield,
  Activity,
  Database,
  Terminal,
  Bell,
  Clock,
  GitBranch,
  Layers,
  Copy,
  FileText,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  zap: Zap,
  monitor: Monitor,
  shield: Shield,
  activity: Activity,
  database: Database,
  terminal: Terminal,
  bell: Bell,
  clock: Clock,
  "git-branch": GitBranch,
  layers: Layers,
  copy: Copy,
  "file-text": FileText,
};

interface IconProps {
  name: string;
  size?: number;
  className?: string;
}

export function Icon({ name, size = 24, className = "" }: IconProps) {
  const LucideIcon = iconMap[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
}
```

**Step 5: Commit**

```bash
git add -A
git commit -m "feat: add shared UI components (Button, SectionWrapper, AnimatedText, Icon)"
```

---

### Task 4: Layout — Navbar & Footer

**Files:**
- Create: `src/components/layout/navbar.tsx`
- Create: `src/components/layout/footer.tsx`
- Modify: `src/app/layout.tsx`

**Step 1: Create Navbar**

```tsx
// src/components/layout/navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-level-gray-100">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
        <Link href="/" className="text-xl font-bold text-level-navy">
          Level
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-level-gray-500 hover:text-level-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button size="sm">Get started</Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-level-gray-100 bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-level-gray-500 hover:text-level-gray-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button size="sm" className="w-full">Get started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
```

**Step 2: Create Footer**

```tsx
// src/components/layout/footer.tsx
import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Automations", href: "/features/automations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-level-navy text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="text-xl font-bold mb-4">Level</p>
          <p className="text-sm text-gray-400">
            Reinventing remote monitoring and management.
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <p className="font-semibold mb-4 text-sm">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Level. All rights reserved.
      </div>
    </footer>
  );
}
```

**Step 3: Update root layout**

Modify `src/app/layout.tsx` to include Navbar and Footer, add Inter font, set metadata.

**Step 4: Commit**

```bash
git add -A
git commit -m "feat: add Navbar and Footer layout components"
```

---

### Task 5: Landing Page — Hero Section

**Files:**
- Create: `src/components/sections/hero.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build Hero with animated headline, CTAs, and product mockup**

```tsx
// src/components/sections/hero.tsx
"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-level-blue-light to-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-level-navy leading-tight">
          <AnimatedText text="IT management" />
          <br />
          <AnimatedText text="reinvented." delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6 text-lg md:text-xl text-level-gray-500 max-w-2xl mx-auto"
        >
          The modern RMM platform that saves your team thousands of hours.
          Simple pricing, powerful features, zero complexity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg">Get started for free</Button>
          <Button variant="secondary" size="lg">Book a demo</Button>
        </motion.div>

        {/* Product screenshot placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
          className="mt-16 rounded-xl border border-level-gray-100 bg-white shadow-2xl overflow-hidden max-w-5xl mx-auto"
        >
          <div className="aspect-video bg-level-gray-50 flex items-center justify-center text-level-gray-500">
            Product Screenshot Placeholder
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

**Step 2: Wire Hero into landing page and verify**

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Hero section with animated text and CTAs"
```

---

### Task 6: Landing Page — Feature Carousel

**Files:**
- Create: `src/components/sections/feature-carousel.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build interactive tabbed feature carousel**

A controlled React component where clicking a feature tab transitions the content panel with Framer Motion `AnimatePresence`. No external carousel library.

Features fetched from GraphQL. Each tab shows title + description + icon. Active tab highlighted with Level blue underline/background.

**Step 2: Wire into landing page**

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add interactive Feature Carousel section"
```

---

### Task 7: Landing Page — Social Proof (Testimonials)

**Files:**
- Create: `src/components/sections/testimonials.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build testimonial slider**

Auto-playing slider with manual dot navigation. Framer Motion `AnimatePresence` for transitions between quotes. Testimonials fetched from GraphQL.

**Step 2: Wire into landing page**

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Testimonials slider section"
```

---

### Task 8: Landing Page — Pricing Teaser

**Files:**
- Create: `src/components/sections/pricing-teaser.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build pricing card**

Single centered card with price ($2/device), feature checklist, and CTA button. Data from GraphQL `pricingPlan` query. Clean card design with subtle shadow and Level blue accents.

**Step 2: Wire into landing page**

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add Pricing Teaser section"
```

---

### Task 9: Landing Page — FAQ Accordion

**Files:**
- Create: `src/components/sections/faq.tsx`
- Modify: `src/app/page.tsx`

**Step 1: Build animated FAQ accordion**

Framer Motion `AnimatePresence` for expand/collapse. Only one item open at a time. FAQ items from GraphQL. Accessible — uses `button` elements with `aria-expanded`.

**Step 2: Wire into landing page**

**Step 3: Commit**

```bash
git add -A
git commit -m "feat: add FAQ accordion section"
```

---

### Task 10: Automations Feature Page

**Files:**
- Create: `src/app/features/automations/page.tsx`
- Create: `src/components/sections/automation-hero.tsx`
- Create: `src/components/sections/how-it-works.tsx`
- Create: `src/components/sections/capabilities-grid.tsx`
- Create: `src/components/sections/cta-banner.tsx`

**Step 1: Build Automation Hero**

Feature-specific headline ("Automate everything"), subtext, and illustration area. Scroll-triggered Framer Motion entrance.

**Step 2: Build How It Works — 3-step flow**

Visual flow: Trigger → Condition → Action. Each step revealed on scroll with staggered animation. Connected by animated lines/arrows.

**Step 3: Build Capabilities Grid**

Card grid of `automationCapabilities` from GraphQL. Each card has icon, title, description. Staggered entrance animation.

**Step 4: Build CTA Banner**

Full-width banner with headline + two buttons (Get started, Book demo). Subtle background gradient.

**Step 5: Assemble Automations page**

Wire all sections into `src/app/features/automations/page.tsx`.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: add Automations feature page with hero, how-it-works, grid, CTA"
```

---

### Task 11: Polish & Performance

**Files:**
- Modify: various component files
- Modify: `src/app/layout.tsx`

**Step 1: Add page transitions**

Wrap page content in Framer Motion layout animations for smooth route transitions.

**Step 2: Add smooth scroll behavior**

CSS `scroll-behavior: smooth` and proper anchor link handling for navbar links.

**Step 3: Add Open Graph metadata**

Set proper `<title>`, `<meta description>`, and OG tags in layout and page metadata exports.

**Step 4: Responsive audit**

Test all breakpoints (mobile 375px, tablet 768px, desktop 1280px+). Fix any layout issues.

**Step 5: Accessibility audit**

Verify keyboard navigation, focus states, ARIA labels, color contrast.

**Step 6: Commit**

```bash
git add -A
git commit -m "feat: add page transitions, smooth scroll, metadata, responsive/a11y polish"
```

---

### Task 12: Deploy to Vercel & GitHub Setup

**Files:**
- Create: `.gitignore` (already from create-next-app)
- Create: GitHub repo

**Step 1: Create GitHub repo**

```bash
gh repo create justin-pitt/level-io --public --source=. --remote=origin
```

**Step 2: Create justins-desktop branch**

```bash
git checkout -b justins-desktop
```

**Step 3: Push both branches**

```bash
git push -u origin master
git push -u origin justins-desktop
```

**Step 4: Deploy to Vercel**

Connect the GitHub repo to Vercel via the Vercel dashboard or CLI. Production branch: `master`.

**Step 5: Verify deployment**

Visit the Vercel URL. Confirm all pages load, GraphQL API works, animations play.

**Step 6: Update portfolio**

Add the Level.io rebuild to `C:\Code\portfolio\index.html` with Vercel live link and GitHub link.

---

## Summary

| Task | Description | Estimated Commits |
|------|-------------|-------------------|
| 1 | Project scaffolding | 1 |
| 2 | GraphQL schema & mock data | 1 |
| 3 | Shared UI components | 1 |
| 4 | Navbar & Footer layout | 1 |
| 5 | Hero section | 1 |
| 6 | Feature Carousel | 1 |
| 7 | Testimonials | 1 |
| 8 | Pricing Teaser | 1 |
| 9 | FAQ Accordion | 1 |
| 10 | Automations feature page | 1 |
| 11 | Polish & performance | 1 |
| 12 | Deploy & GitHub setup | 1 |
