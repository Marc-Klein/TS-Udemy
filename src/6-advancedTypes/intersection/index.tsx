import React from "react";

const Intersection = () => {
	type Admin = {
		name: string;
		privileges: string[];
	};

	type Employee = {
		name: string;
		startDate: Date;
	};

	// this is also doable with interface
	// replace the the "type" with "Interface" and
	// extend the Intersectioned Interfaces
	// Interface ElevatedEmployee extends Admin, Employee {}
	type ElevatedEmployee = Admin & Employee;

	const Employee1: ElevatedEmployee = {
		name: "Max",
		privileges: ["Company Car"],
		startDate: new Date(),
	};

	return <></>;
};

export default Intersection;
