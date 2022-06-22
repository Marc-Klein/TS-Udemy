import React from "react";

const FirstClassDecorator = () => {
	const LoggerDecorator = (logString: string) => {
		return (constructor: Function) => {
			console.log(logString);
			console.log(constructor);
		};
	};

	const TemplateDecorator = (template: string, hookID: string) => {
		// _ Im aware of the argument but I dont use it
		return (_: Function) => {
			const hookEl = document.getElementById(hookID);
			if (hookEl) {
				hookEl.innerHTML = template;
			}
		};
	};

	// @LoggerDecorator("logging Person")
	@TemplateDecorator("<h1>Peter</h1>", "app")
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
