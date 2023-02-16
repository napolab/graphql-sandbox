import type { Book as Base } from "@graphql/resolver-types";

export type Book = Pick<Base, "title">;
