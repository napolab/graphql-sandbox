import type { Resolvers } from "@graphql/resolver-types";

export const resolvers: Resolvers = {
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
	},
};
