import React from "react";

const FirstClassDecorator = () => {
	const LoggerDecorator = (logString: string) => {
		return (constructor: Function) => {
			console.log(logString);
			console.log(constructor);
		};
	};

	// with this Function we describe the decorator,
	// we give to inputs, our template what we want to render and the id to look for
	const TemplateDecorator = (template: string, hookID: string) => {
		// _ Im aware of the argument but I dont use it
		return (_: Function) => {
			// like this we describe the how to get the id
			const hookEl = document.getElementById(hookID);
			if (hookEl) {
				// here we check if we got an hookEL
				// if  a hookEl is their we can create with innerHTML our template
				hookEl.innerHTML = template;
			} else {
				throw new console.error("nos Element found!");
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
