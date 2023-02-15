import { defineConfig } from "rollup";
import config from "./rollup.config.mjs";
import run from "@rollup/plugin-run"

export default defineConfig({
	...config,
	plugins: [...config.plugins, run()],
});
