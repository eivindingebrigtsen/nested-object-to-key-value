import { describe, expect, it } from "vitest";
import { flattenJson } from "./flattenJson";

describe("flattenJson", () => {
	it("should flatten a json object", () => {
		const obj = { a: { b: { c: "d", d: { e: "f" } } } };
		const flattened = flattenJson(obj);
		expect(flattened).toEqual([
			{ key: "a.b.c", value: "d" },
			{ key: "a.b.d.e", value: "f" },
		]);
	});
});
