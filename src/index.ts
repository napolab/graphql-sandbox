import { ApolloServer } from "apollo-server";

import typeDefs from "./schema.graphql";

import type { Resolvers } from "./generated/graphql";

const resolvers: Resolvers = {
	User: {
		name(parent) {
			return parent.name;
		},
		books() {
			return [{ title: "hoge" }];
		},
	},
	Query: {
		users() {
			return [{ name: "napo" }, { name: "napo2" }];
		},
		books() {
			return [];
		},
	},
};
const server = new ApolloServer({ typeDefs, resolvers });

async function main() {
	const { url } = await server.listen();
	console.log(`🚀 Server ready at ${url}`);
}

void main();
