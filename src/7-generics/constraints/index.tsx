import React from "react";

const Constraints = () => {
	// with the extends object , we make clear, that our "generics" are from type object
	const merge = <T extends object, U extends object>(obj1: T, obj2: U) => {
		return Object.assign(obj1, obj2);
	};

	const target = { a: "Con..", b: "..straints" };
	const source = { c: "Mad", d: "Max" };
	const mergedObjects = merge(target, source);
	console.log(mergedObjects);

	// with an interface instead of an string, we make the function mor flexible
	interface Lengthy {
		length: number;
	}
	// at the end we define the outcome from the tuple
	const countAndDescripe = <T extends Lengthy>(element: T): [T, string] => {
		let descriptionText = "No value";
		if (element.length === 1) {
			descriptionText = "Got 1 element";
		} else if (element.length > 1) {
			descriptionText = "Got " + element.length + " elements.";
		}
		return [element, descriptionText];
	};

	console.log(countAndDescripe("holla senior"));
	return <></>;
};

export default Constraints;
