import React from "react";

const Generics = () => {
	// with <T,U> we tell Typescript that the result of the func
	// will be the intersection of the two objects
	// likes this we can use the dot notation to acces certain values inside the Object
	const merge = <T, U>(obj1: T, obj2: U) => {
		return Object.assign(obj1, obj2);
	};

	const target = { a: 1, b: 2 };
	const source = { c: 3, d: 4 };
	const mergedObjects = merge(target, source);
	console.log(mergedObjects);

	return <></>;
};

export default Generics;
