import type { Resolvers } from "@graphql/resolver-types";

export const resolvers: Resolvers = {
	User: {
		name(parent, args, context) {
			context.logger.debug("User.name", parent.name);

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
	},
};
