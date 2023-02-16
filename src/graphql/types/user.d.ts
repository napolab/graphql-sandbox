import type { User  as Base} from "@graphql/resolver-types";

export type User = Pick<Base, "name">;
