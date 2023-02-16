import { getLogger } from "log4js";

export const logger = getLogger();

switch (process.env.NODE_ENV) {
	case "development": {
		logger.level = "debug";
		break;
	}
	case "test": {
		logger.level = "off";
		break;
	}
	default: {
		logger.level = "error";
	}
}
