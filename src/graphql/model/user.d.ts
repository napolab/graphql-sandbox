import type { User } from "@graphql/resolver-types";

export type UserModel = Pick<User, "name">;
