import type { CodegenConfig } from "@graphql-codegen/cli";

// https://the-guild.dev/graphql/codegen/docs/guides/graphql-server-apollo-yoga-with-server-preset
// この辺り参考にする
const config: CodegenConfig = {
	overwrite: true,
	schema: "./schema.graphql",
	generates: {
		"__generated__/graphql/resolver-types.d.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
				useIndexSignature: true,
				mappers: {
					User: "@graphql/model#UserModel",
					Book: "@graphql/model#BookModel",
				},
			},
		},
	},
	config: {
		contextType: "@graphql/context#GraphQLContext",
	},
};

export default config;
