import { describe, expect, it } from "vitest";
import { unflattenJson } from "./unflattenJson";

describe("unflattenJson", () => {
	it("should unflatten a flat JSON object", () => {
		const flatJson = {
			"a.b.c": "value1",
			"a.b.d": "value2",
			"a.e": "value3",
			f: "value4",
		};
		const unflattenedJson = unflattenJson(flatJson);
		expect(unflattenedJson).toEqual({
			a: {
				b: {
					c: "value1",
					d: "value2",
				},
				e: "value3",
			},
			f: "value4",
		});
	});
});
