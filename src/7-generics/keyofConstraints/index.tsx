import React from "react";

const KeyofConstraints = () => {
	const extractAndConvert = <T extends object, U extends keyof T>(obj: T, key: U) => {
		return "Value " + obj[key];
	};

	console.log(extractAndConvert({ name: "Max" }, "name"));
	return <></>;
};

export default KeyofConstraints;
