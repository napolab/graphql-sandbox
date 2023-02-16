import type { Book } from "@graphql/resolver-types";

export type BookModel = Pick<Book, "title">;
