/// <reference types="vitest" />
import { join } from "node:path";

import graphql from "@rollup/plugin-graphql";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"~": join(__dirname, "src/"),
			"@graphql": join(__dirname, "src/graphql/"),
			"schema.graphql": join(__dirname, "./schema.graphql"),
		},
	},
	plugins: [graphql()],
	test: {
		globals: true,
	},
});
