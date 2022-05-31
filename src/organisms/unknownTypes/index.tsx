import React from "react";

const UnknownTypes = () => {
	let userInput: unknown;
	let userName: string;

	userInput = 5;
	userName = "Max";
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
