import run from "@rollup/plugin-run";
import { defineConfig } from "rollup";

import config from "./rollup.config.mjs";

export default defineConfig({
	...config,
	plugins: [...config.plugins, run()],
});
