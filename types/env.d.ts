declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: "development" | "production" | "test" | "staging";
		HOST?: string;
		PORT?: string;
	}
}
