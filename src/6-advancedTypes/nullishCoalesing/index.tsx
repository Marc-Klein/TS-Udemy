import React from "react";

const NullishCoalescing = () => {
	// how to check for nullish values

	const userInput = null;
	const storedData = userInput ?? "Default";

	console.log(storedData);

	return <></>;
};

export default NullishCoalescing;
