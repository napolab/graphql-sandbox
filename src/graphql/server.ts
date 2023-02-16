import { ApolloServer } from "@apollo/server";

import { resolvers } from "@graphql/resolvers";
import typeDefs from "schema.graphql";

import type { GraphQLContext } from "./context";

export const server = new ApolloServer<GraphQLContext>({
	typeDefs,
	resolvers,
});
