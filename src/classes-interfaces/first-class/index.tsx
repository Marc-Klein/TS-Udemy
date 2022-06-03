import React from "react";

const FirstClass = () => {
	class Department {
		name: string;

		// constructor runs initalizing code whil instan
		constructor(n: string) {
			this.name = n;
		}

		// with describe you define the Method of a Class
		// the type in this cas points to the class itself
		// like this it should be clerer where the Method has to look for
		// with the "this" Keyword
		describe(this: Department) {
			// with this. we look in the class not inside the Methode or globally
			console.log("Department:" + this.name);
		}
	}

	const accounting = new Department("Acounting");
	console.log(accounting);
	// the describe Method calls on accouting an gives us the "name" back
	accounting.describe();

	return <></>;
};

export default FirstClass;
