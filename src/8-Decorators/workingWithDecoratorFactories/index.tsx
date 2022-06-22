import React from "react";

const FirstClassDecorator = () => {
	// like this we can pass in values to the decorator when we call it
	const LoggerDecorator = (logString: string) => {
		return function (constructor: Function) {
			console.log(logString);
			console.log(constructor);
		};
	};

	// here we calling the decorator, whos giving us the constructor func back
	@LoggerDecorator("logging Person")
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
