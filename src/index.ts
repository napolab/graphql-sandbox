import { startStandaloneServer } from "@apollo/server/standalone";

import { server } from "@graphql/server";

import { logger } from "./logger";

import "./plugins/rfc3339.plugin";

async function main() {
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
