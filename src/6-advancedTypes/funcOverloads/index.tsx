import React from "react";

const FuncOverload = () => {
	type Combineable = string | number;
	type Numeric = number | boolean;
	type Universal = Numeric & Combineable;

	// overloading means, that weve to make function suitable for a special case
	// as here we need to specify number to use string methods
	// Its only possible to overload function with a type that is declared before
	// we cant assign a new type in the overloaded function that isnt declared
	function add(a: number, b: number): number;
	function add(a: string, b: string): string;
	function add(a: Combineable, b: Combineable) {
		if (typeof a === "string" || typeof b === "string") {
			return a.toString() + b.toString();
		}
		return a + b;
	}

	// we could typecast this to a string but this isnt optimal
	// we cant run string Operations on the result because "Combineable" is a union Type "string|number"
	// now we cann call add an TS is matching the correct output to the input
	const resultString = add("mad", "max");
	const resultNumber = add(1, 2);
	console.log(resultString);
	console.log(resultNumber);
	return <></>;
};

export default FuncOverload;
