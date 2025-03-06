# 🦤 Nested objects to key value

![[build and test workflow]](https://github.com/github/docs/actions/workflows/main.yml/badge.svg)
[![npm version](https://badge.fury.io/js/nested-object-to-key-value.svg)](https://www.npmjs.com/package/nested-object-to-key-value)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

A lightweight utility to flatten nested JavaScript objects into dot-notation key-value pairs and unflatten them back. Perfect for handling complex configurations, form data, or API transformations.

## Features

- 🎯 Zero dependencies
- 📦 Lightweight (~XKB gzipped)
- 💪 Fully typed (TypeScript)
- 🔍 Preserves type information
- ⚡ Tree-shakeable
- 🧪 Well tested

## 📦 Installation

```bash
npm install nested-object-to-key-value
```

## 📚 Usage

```ts
import { flattenJson, unflattenJson } from "nested-object-to-key-value";
// Flatten a nested object
const nested = {
user: {
		name: "John",
		address: {
			city: "New York",
			country: "USA",
		},
	},
};
const flattened = flattenJson(nested);
// Result:
// [
//   { key: "user.name", value: "John" },
//   { key: "user.address.city", value: "New York" },
//   { key: "user.address.country", value: "USA" }
// ]

// Unflatten back to nested object
const flat = {
	"user.name": "John",
	"user.address.city": "New York",
	"user.address.country": "USA",
};
const unflattened = unflattenJson(flat);
// Result:
// {
//   user: {
//   name: "John",
//   address: {
//   city: "New York",
//   country: "USA"
// }
// }
// }


```
## 📘 API

### `flattenJson(obj: UnflattenedJson, prefix?: string): FlattenedPair[]`
Converts a nested object into an array of flattened key-value pairs.

### `unflattenJson(obj: Record<string, string>): UnflattenedJson`
Converts a flat object with dot-notation keys back into a nested object.

### `keyValueArrayToObject(obj: FlattenedPair[]): Record<string, string>`
Converts an array of key-value pairs into a flat object.

## 🚲 Testing

We use [Vitest](https://vitest.dev/) for testing.

```bash
npm test
```

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.



## 📝 License

MIT