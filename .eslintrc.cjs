module.exports = {
	extends: ["@naporin0624/eslint-config"],
	rules: {
		"no-void": "off",
		"no-console": "warn",
		"no-restricted-imports": [
			"error",
			{
				patterns: ["../"],
			},
		],
	},
};
