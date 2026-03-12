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
      feature: (_: unknown, { slug }: { slug: string }) =>
        features.find((f) => f.slug === slug) ?? null,
      testimonials: () => testimonials,
      faqItems: () => faqItems,
      pricingPlan: () => pricingPlan,
      automationCapabilities: () => automationCapabilities,
    },
  },
});
