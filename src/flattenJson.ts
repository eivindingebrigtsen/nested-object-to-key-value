import type { UnflattenedJson } from "./unflattenJson";

export interface FlattenedPair {
	key: string;
	value: string;
}

export function flattenJson(
	obj: UnflattenedJson,
	prefix = "",
): FlattenedPair[] {
	const result: FlattenedPair[] = [];
	function _flatten(
		currentObj: Record<string, unknown>,
		currentPrefix: string,
	) {
		for (const [key, value] of Object.entries(currentObj)) {
			const newKey = currentPrefix ? `${currentPrefix}.${key}` : key;

			if (value && typeof value === "object" && !Array.isArray(value)) {
				_flatten(value as Record<string, unknown>, newKey);
			} else {
				result.push({
					key: newKey,
					value: value as string,
				});
			}
		}
	}

	_flatten(obj, prefix);
	return result;
}

export function keyValueArrayToObject(obj: FlattenedPair[]) {
	const result: Record<string, string> = {};
	for (const { key, value } of obj) {
		result[key] = value;
	}
	return result;
}
