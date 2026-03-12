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
