/// <reference types="vitest" />
import { join } from "node:path";

import graphql from "@rollup/plugin-graphql";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			"~": join(__dirname, "src/"),
			"@graphql": join(__dirname, "__generated__/graphql/"),
		},
	},
	plugins: [graphql()],
	test: {
		globals: true,
	},
});
