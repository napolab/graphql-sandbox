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
				defaultScalarType: 'unknown',
				mapperTypeSuffix: 'Model',
				useTypeImports: true,
				avoidOptionals: {
					resolvers: true
				},
				mappers: {
					User: "@graphql/types#User",
					Book: "@graphql/types#Book",
				},
				scalars: {
					DateTime: "Date"
				}
			},
		},
	},
	config: {
		contextType: "@graphql/context#GraphQLContext",
	},
};

export default config;
