import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AutomationCapability = {
  __typename?: 'AutomationCapability';
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type FaqItem = {
  __typename?: 'FaqItem';
  answer: Scalars['String']['output'];
  id: Scalars['String']['output'];
  question: Scalars['String']['output'];
};

export type Feature = {
  __typename?: 'Feature';
  description: Scalars['String']['output'];
  icon: Scalars['String']['output'];
  id: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type PricingPlan = {
  __typename?: 'PricingPlan';
  ctaText: Scalars['String']['output'];
  description: Scalars['String']['output'];
  features: Array<Scalars['String']['output']>;
  price: Scalars['String']['output'];
  unit: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  automationCapabilities: Array<AutomationCapability>;
  faqItems: Array<FaqItem>;
  feature?: Maybe<Feature>;
  features: Array<Feature>;
  pricingPlan: PricingPlan;
  testimonials: Array<Testimonial>;
};


export type QueryFeatureArgs = {
  slug: Scalars['String']['input'];
};

export type Testimonial = {
  __typename?: 'Testimonial';
  author: Scalars['String']['output'];
  company: Scalars['String']['output'];
  id: Scalars['String']['output'];
  quote: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type LandingPageQueryVariables = Exact<{ [key: string]: never; }>;


export type LandingPageQuery = { __typename?: 'Query', features: Array<{ __typename?: 'Feature', id: string, title: string, description: string, icon: string, slug: string }>, testimonials: Array<{ __typename?: 'Testimonial', id: string, quote: string, author: string, role: string, company: string }>, faqItems: Array<{ __typename?: 'FaqItem', id: string, question: string, answer: string }>, pricingPlan: { __typename?: 'PricingPlan', price: string, unit: string, description: string, features: Array<string>, ctaText: string } };

export type AutomationsPageQueryVariables = Exact<{ [key: string]: never; }>;


export type AutomationsPageQuery = { __typename?: 'Query', feature?: { __typename?: 'Feature', id: string, title: string, description: string, icon: string, slug: string } | null, automationCapabilities: Array<{ __typename?: 'AutomationCapability', id: string, title: string, description: string, icon: string }> };


export const LandingPageDocument = gql`
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
export const AutomationsPageDocument = gql`
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    LandingPage(variables?: LandingPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LandingPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LandingPageQuery>({ document: LandingPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'LandingPage', 'query', variables);
    },
    AutomationsPage(variables?: AutomationsPageQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<AutomationsPageQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<AutomationsPageQuery>({ document: AutomationsPageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'AutomationsPage', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;