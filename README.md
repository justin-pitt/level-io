# Level.io — Marketing Site Rebuild

A React/Next.js reimagining of [Level's](https://level.io) marketing site, built as a frontend architecture portfolio piece.

## Tech Stack

- **Next.js 16** — App Router, Server Components, TypeScript (strict mode)
- **Tailwind CSS v4** — Custom design tokens, dark theme
- **Framer Motion** — Scroll-triggered animations, page transitions
- **GraphQL Yoga** — Mock API served from a Next.js route handler
- **GraphQL Code Generator** — End-to-end type safety from schema to client

## Pages

- `/` — Landing page (hero, features, how it works, testimonials, pricing, FAQ, CTA)
- `/features/automations` — Feature deep-dive page
- `/api/graphql` — GraphQL playground

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Other Commands

```bash
npm run build      # Production build
npm run codegen    # Regenerate GraphQL types
```

## Project Structure

```
src/
  app/                    # Next.js App Router pages
    api/graphql/          # GraphQL Yoga endpoint
    features/automations/ # Automations feature page
  components/
    ui/                   # Button, Icon, SectionWrapper, AnimatedText
    sections/             # Hero, Features, Testimonials, Pricing, FAQ, etc.
    layout/               # Navbar, Footer, MotionProvider
  lib/graphql/            # Schema, mock data, queries, generated types
```

## Design

Dark theme inspired by Level's brand identity (blue #155EEF), with redesigned layout and UX. See [design document](docs/plans/2026-03-12-level-io-rebuild-design.md) for details.
