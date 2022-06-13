import React from "react";

const FirstInterface = () => {
	interface Person {
		name: string;
		age: number;
		greet(phrase: string): void;
	}

	let user1: Person;

	user1 = {
		name: "Max",
		age: 12,
		greet(phrase: string) {
			console.log(phrase + " ", this.name);
		},
	};
	user1.greet("Hi there I am");
	return <></>;
};

export default FirstInterface;
