import React from "react";

const Constraints = () => {
	const merge = <T extends object, U extends object>(obj1: T, obj2: U) => {
		return Object.assign(obj1, obj2);
	};

	const target = { a: "Con..", b: "..straints" };
	const source = { c: "Mad", d: "Max" };
	const mergedObjects = merge(target, source);
	console.log(mergedObjects);

	return <></>;
};

export default Constraints;
