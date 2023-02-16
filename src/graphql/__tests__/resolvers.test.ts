import { ApolloServer } from "@apollo/server";

import typeDefs from "schema.graphql";
import { resolvers } from "~/graphql/resolvers";

const testServer = new ApolloServer({
	typeDefs,
	resolvers,
});

it("snapshot test", async () => {
	const query = `
      query Query {
        users {
					__typename
          name
        }
      }
    `;
	const res = await testServer.executeOperation({
		query,
	});
	expect(res).toMatchSnapshot();
});
