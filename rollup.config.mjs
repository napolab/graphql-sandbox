import path from "node:path";
import { fileURLToPath } from "node:url";

import alias from "@rollup/plugin-alias";
import graphql from "@rollup/plugin-graphql";
import resolve from "@rollup/plugin-node-resolve";
import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { externals } from "rollup-plugin-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	input: ["src/index.ts"],
	output: [
		{
			format: "cjs",
			file: "dist/index.js",
		},
	],
	plugins: [
		externals(),
		alias({
			customResolver: resolve({ extensions: [".ts"] }),
			entries: [
				{
					find: /~/,
					replacement: path.join(__dirname, "./src/"),
				},
			],
		}),
		esbuild(),
		graphql(),
	],
});
