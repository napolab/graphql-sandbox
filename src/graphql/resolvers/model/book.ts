import type { Resolvers } from "@graphql/resolver-types";

export const BookResolver: Resolvers["Book"] = {
	title(parent) {
		return parent.title;
	},
	async author() {
		return { name: "book:author" };
	},
	createdAt() {
		return new Date();
	},
};
