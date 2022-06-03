import React from "react";

const UnknownTypes = () => {
	// in contrast to "any" Type "unknown" cannot be directly assigned to annother type
	let userInput: unknown;
	let userName: string;

	userInput = 5;
	userInput = "Max";

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
