import React from "react";

const Optionals = () => {
	interface Optionals {
		readonly name?: string;
		age?: number;
		outputName?: string;
		phrase?: string;
	}

	class SomeOptionalClass implements Optionals {
		name?: string;
		age?: 30;
		outputName?: string;
		phrase?: string;

		constructor(n?: string) {
			if (n) {
				this.name = n;
			} else {
				console.log("Holla");
			}
		}
		greet(phrase: string) {
			console.log(phrase + " " + this.name);
		}
	}

	let person: Optionals;

	person = new SomeOptionalClass();

	return <></>;
};

export default Optionals;
