import React from "react";

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
