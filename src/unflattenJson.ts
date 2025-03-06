export interface UnflattenedJson {
	[key: string]: string | UnflattenedJson;
}

export function unflattenJson(obj: Record<string, string>): UnflattenedJson {
	const result: UnflattenedJson = {};

	for (const [flatKey, value] of Object.entries(obj)) {
		const keys = flatKey.split(".");
		let current = result;

		for (let i = 0; i < keys.length - 1; i++) {
			const key = keys[i];
			current[key] = current[key] || {};
			current = current[key] as UnflattenedJson;
		}

		current[keys[keys.length - 1]] = value;
	}

	return result;
}
