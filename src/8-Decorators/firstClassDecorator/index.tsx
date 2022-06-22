import React from "react";

// Decorators are experimental in Typescript.
// Decorators dynamically alter the functionality
// of a function, method, or class without having to directly use
// subclasses or change the source code of the function being decorated
const FirstClassDecorator = () => {
	const LoggerDecorator = (constructor: Function) => {
		console.log("logging..");
		console.log(constructor);
	};

	@LoggerDecorator
	class Person {
		name = "Max";

		constructor() {
			console.log("creating person object..");
		}
	}

	const pers = new Person();

	return <></>;
};

export default FirstClassDecorator;
