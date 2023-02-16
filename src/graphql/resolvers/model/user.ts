import type { Resolvers } from "@graphql/resolver-types";

export const UserResolver: Resolvers["User"] = {
	async name(parent, args, { logger }) {
		logger.debug("User.name", parent.name);

		return parent.name;
	},
	async books() {
		return [{ title: "hoge" }];
	},
};
