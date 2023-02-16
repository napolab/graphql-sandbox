import { ApolloServer } from "@apollo/server";

import typeDefs from "schema.graphql";

import { resolvers } from "./resolvers";

import type { GraphQLContext } from "./context";

export const server = new ApolloServer<GraphQLContext>({
	typeDefs,
	resolvers,
});
