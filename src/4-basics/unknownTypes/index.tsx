import React from "react";

const UnknownTypes = () => {
	// in contrast to "any" Type "unknown" cannot be directly assigned to annother type
	let userInput: unknown;
	let userName: string;

	userInput = 5;
	userInput = "Max";

	// at this point TS knows that the outcome of this if statement
	// is a string if it matches the conditions

	if (typeof userInput === "string") {
		userName = userInput;
	}
	console.log(userName);

	return (
		<>
			<p>Unknown Types</p>
		</>
	);
};
