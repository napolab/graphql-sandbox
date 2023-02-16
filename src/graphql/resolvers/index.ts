import type { Resolvers } from "@graphql/resolver-types";

export const resolvers: Resolvers = {
	User: {
		async name(parent, args, context) {
			context.logger.debug("User.name", parent.name);

			return parent.name;
		},
		async books() {
			return [{ title: "hoge" }];
		},
	},
	Book: {
		async author() {
			return { name: "book:author" };
		},
	},
	Query: {
		async users() {
			return [{ name: "napo" }, { name: "napo2" }];
		},
	},
};
