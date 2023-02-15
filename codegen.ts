import type { CodegenConfig } from '@graphql-codegen/cli';

// https://the-guild.dev/graphql/codegen/docs/guides/graphql-server-apollo-yoga-with-server-preset
// この辺り参考にする
const config: CodegenConfig = {
  overwrite: true,
  schema: "src/schema.graphql",
  generates: {
    "src/generated/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    }
  }
};

export default config;
