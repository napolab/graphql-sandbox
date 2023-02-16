import { DateTime } from "luxon";

class CustomDate extends Date {
	toISOString(): string {
		return DateTime.fromJSDate(this).toISO();
	}
}

global.Date = CustomDate as DateConstructor;
globalThis.Date = CustomDate as DateConstructor;
