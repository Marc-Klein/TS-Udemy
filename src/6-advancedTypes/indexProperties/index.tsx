import React from "react";

const IndexProps = () => {
	interface ErrorContainer {
		//every object build on that ErrorContainer must have props with string type
		// so we can define the Key/Value pair types
		[property: string]: string;
	}

	const ErrorBag: ErrorContainer = {
		email: "Not a valid Mail!",
		username: "Must start with a capital character!",
	};
	return <></>;
};

export default IndexProps;
