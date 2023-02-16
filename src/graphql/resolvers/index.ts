import { DateTimeResolver } from 'graphql-scalars';

import type { Resolvers } from "@graphql/resolver-types";

export const resolvers: Resolvers = {
	DateTime: DateTimeResolver,
	User: {
		async name(parent, args, { logger }) {
			logger.debug("User.name", parent.name);

			return parent.name;
		},
		async books() {
			return [{ title: "hoge" }];
		},
	},
	Book: {
		title(parent) {
			return parent.title;
		},
		async author() {
			return { name: "book:author" };
		},
		createdAt() {
			return new Date();
		}
	},
	Query: {
		async users() {
			return [{ name: "napo" }, { name: "napo2" }];
		},
	},
};
