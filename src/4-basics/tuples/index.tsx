import React from "react";

const Tuples = () => {
	// const person: {
	//   name: string;
	//   age: number;
	// } = {

	// not very common
	const person: {
		name: string;
		age: number;
		hobbies: string[];
		role: [number, string]; //this is a tuple, now we can specify the input
	} = {
		name: "Maximilian",
		age: 30,
		hobbies: ["Sports", "Cooking"],
		role: [2, "author"],
	};

	// person.role.push('admin');
	// person.role[1] = 10;

	// person.role = [0, 'admin', 'user'];

	let favoriteActivities: string[];
	favoriteActivities = ["Sports"];

	console.log(person.name);

	for (const hobby of person.hobbies) {
		console.log(hobby.toUpperCase());
		// console.log(hobby.map()); // !!! ERROR !!!
	}
};

export default Tuples;
