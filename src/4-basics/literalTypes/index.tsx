import { stringify } from "querystring";
import React from "react";

const LiteralAdd = () => {
	// literals with type aliases
	// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases
	// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types

	type Combinable = number | string;
	type ConversionDescription = "as-number" | "as-text";

	const combine = (
		input1: Combinable,
		input2: Combinable,
		resultConversion: ConversionDescription
	) => {
		let result;
		// workaround for TS checking for the types of the arr
		if (
			(typeof input1 === "number" && typeof input2 === "number") ||
			resultConversion === "as-number"
		) {
			// + directly before the input converts it to number
			result = +input1 + +input2;
		} else {
			result = input1.toString() + input2.toString();
		}
		return result;
	};

	const combinedAges = combine(30, 29, "as-number");
	console.log(combinedAges);

	const combinedNames = combine("Max", "Peter", "as-text");
	console.log(combinedNames);

	return <p>literal Add</p>;
};

export default LiteralAdd;
