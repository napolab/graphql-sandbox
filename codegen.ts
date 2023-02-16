import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "./schema.graphql",
	generates: {
		"__generated__/graphql/resolver-types.d.ts": {
			plugins: ["typescript", "typescript-resolvers"],
			config: {
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
					DateTime: "@graphql/types#DateTime"
				}
			},
		},
	},
	config: {
		contextType: "@graphql/context#GraphQLContext",
	},
};

export default config;
