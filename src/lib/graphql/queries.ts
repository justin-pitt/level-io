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
