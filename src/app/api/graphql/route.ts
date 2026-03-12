import { createYoga } from "graphql-yoga";
import { schema } from "@/lib/graphql/schema";
import { NextRequest } from "next/server";

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
  fetchAPI: { Response },
});

export async function GET(request: NextRequest) {
  return yoga.handleRequest(request, {}) as Promise<Response>;
}

export async function POST(request: NextRequest) {
  return yoga.handleRequest(request, {}) as Promise<Response>;
}
