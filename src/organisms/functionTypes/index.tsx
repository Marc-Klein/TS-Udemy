import React from "react";

const FuncTypes = () => {
	// void has no return
	const add = (num1: number, num2: number): void => {
		console.log(add(1, 2));
	};
	// undefined expects a return Statement
	const add2 = (num1: number, num2: number): undefined => {
		console.log(add2(2, 3));
		return;
	};

	// specify the outcom of a function
	const add3 = (num1: number, num2: number): number => {
		console.log(add2(2, 4));
		return num1 + num2;
	};

	// define what to store in a variable
	let addValues: (a: number, b: number) => number;
	addValues = add3;
	console.log(addValues(2, 5));

	// callbacks also have types
	const addWithCallback = (num1: number, num2: number, callBack: (num: number) => void) => {
		const result = num1 + num2;
		callBack(result);
	};
	addWithCallback(2, 6, result => {
		console.log(result);
		return result;
	});

	return (
		<>
			<p>FuncTypes</p>
		</>
	);
};

export default FuncTypes;
