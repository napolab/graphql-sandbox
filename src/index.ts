import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import typeDefs from "schema.graphql";

import { logger } from "./logger";
import { resolvers } from "./resolvers";

import type { Logger } from "log4js";

export interface GraphQLContext {
	logger: Logger;
}

async function main() {
	const server = new ApolloServer<GraphQLContext>({
		typeDefs,
		resolvers,
	});
	const { url } = await startStandaloneServer(server, {
		context: async () => ({
			logger,
		}),
		listen: {
			port: parseInt(process.env.PORT ?? "4000"),
		},
	});

	logger.info(`🚀 Server ready at ${url}`);
}

void main();
