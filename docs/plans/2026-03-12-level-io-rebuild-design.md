# Level.io Marketing Site Rebuild — Design Document

## Purpose

A React/Next.js reimagining of Level's marketing site (level.io) as a portfolio piece demonstrating Senior Frontend Engineer skills: React, TypeScript, GraphQL, animations, and responsive design.

## Design Direction

Hybrid approach — keep Level's brand identity (blue #155EEF palette, product positioning) but redesign the layout and UX with modern patterns. Clean, spacious, typography-led.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router, Server Components) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Data | Mock GraphQL API via GraphQL Yoga |
| Deployment | Vercel (free tier) |
| Repo | GitHub — `master` + `justins-desktop` branches |

## Pages

### Landing Page (`/`)

| Section | Description |
|---|---|
| Hero | Animated headline (Framer Motion text reveal), two CTAs, product screenshot with subtle parallax |
| Feature Carousel | Tabbed/interactive feature showcase — controlled React component with animated content transitions |
| Social Proof | Testimonial slider with auto-play and manual navigation |
| Pricing Teaser | Single card — $2/device, feature highlights, CTA |
| FAQ | Animated accordion with Framer Motion expand/collapse |
| Footer | Nav columns, social links, newsletter input |

### Feature Page (`/features/automations`)

| Section | Description |
|---|---|
| Hero | Feature-specific headline + subtext with illustration |
| How It Works | 3-step visual flow (trigger → condition → action) with scroll-triggered animations |
| Capabilities Grid | Card grid showing automation types |
| CTA | Bottom banner pushing to signup |

## Data Architecture

- GraphQL Yoga server running as a Next.js API route (`/api/graphql`)
- Schema covers: `features`, `testimonials`, `faqItems`, `pricingPlan`
- All content sourced from typed mock data files
- Components fetch via `graphql-request` with generated types (GraphQL Code Generator)

## Component Architecture

```
src/
  app/
    layout.tsx              # Root layout, fonts, nav
    page.tsx                # Landing page
    features/
      automations/
        page.tsx            # Automations feature page
    api/
      graphql/
        route.ts            # GraphQL Yoga endpoint
  components/
    ui/                     # Button, Card, Accordion, etc.
    sections/               # Hero, FeatureCarousel, Testimonials, etc.
    layout/                 # Navbar, Footer
  lib/
    graphql/
      schema.ts             # GraphQL type defs + resolvers
      mock-data.ts          # Typed mock content
      queries.ts            # Client-side query strings
  styles/
    globals.css             # Tailwind directives + custom properties
```

## Key Technical Showcases

- **TypeScript throughout** — strict mode, generated GraphQL types, no `any`
- **Server Components + Client Components** — proper boundary separation
- **GraphQL end-to-end** — schema, resolvers, codegen, typed queries
- **Framer Motion** — scroll-triggered reveals, page transitions, interactive carousel
- **Responsive** — mobile-first, looks great at all breakpoints
- **Accessibility** — semantic HTML, keyboard navigation, ARIA labels
- **Performance** — Lighthouse 90+ scores, image optimization via `next/image`
