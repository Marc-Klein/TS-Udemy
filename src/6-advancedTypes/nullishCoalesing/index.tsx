import React from "react";

const NullishCoalescing = () => {
	// how to check for nullish values

	const userInput = null;
	// the double questionmark operator makes sure to set default
	// this is also called nullishCoalescing
	const storedData = userInput ?? "Default";

	console.log(storedData);

	return <></>;
};

export default NullishCoalescing;
