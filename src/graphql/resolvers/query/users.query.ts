import type { Resolvers } from "@graphql/resolver-types";

export const UsersQueryResolver: Resolvers["Query"]["users"] = () => {
	return [{ name: "napo" }, { name: "napo2" }];
};
