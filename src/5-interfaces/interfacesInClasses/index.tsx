import React from "react";

const InterfaceInClass = () => {
	// You can set different Interfaces and extend them with another interface
	interface Named {
		readonly name: string;
	}

	interface Greetable extends Named {
		// if we use readonly here we can make the prop readonly sames
		// as we would use it in the class
		// you can also extend more and separate them with a comma
		greet(phrase: string): void;
	}

	// you can implement different interfaces and separate them with a comma
	class Person implements Greetable {
		name: string;
		constructor(n: string) {
			this.name = n;
		}

		greet(phrase: string) {
			console.log(phrase + " " + this.name);
		}
	}
	// user point to greetable ans uses it
	let user: Greetable;
	// now user can be instantiated with "new Person"
	user = new Person("Peter");

	return <></>;
};

export default InterfaceInClass;
