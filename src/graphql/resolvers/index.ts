import { DateTimeResolver } from "graphql-scalars";

import { BookResolver } from "./model/book";
import { UserResolver } from "./model/user";
import { UsersQueryResolver } from "./query/users.query";

import type { Resolvers } from "@graphql/resolver-types";

export const resolvers: Resolvers = {
	DateTime: DateTimeResolver,
	Book: BookResolver,
	User: UserResolver,
	Query: {
		users: UsersQueryResolver,
	},
};
