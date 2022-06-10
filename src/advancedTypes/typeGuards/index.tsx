import React from "react";

const TypeGuards = () => {
	type Admin = {
		name: string;
		status: string;
		privileges: string[];
	};

	type Employee = {
		name: string;
		status: string;
		startDate: Date;
	};

	type ElevatedEmployee = Admin & Employee;

	const Employee1: ElevatedEmployee = {
		name: "Max",
		status: "admin",
		privileges: ["Company Car"],
		startDate: new Date(),
	};

	type Combineable = string | number;
	type Numeric = number | boolean;
	type Universal = Numeric & Combineable;

	/************************TypeGuards************************/

	// this is a typeGurad
	// here we concatenate or we add mathematically depens on the input
	// a typeGuard check if a certain property exists before it is used
	const add = (a: Combineable, b: Combineable) => {
		if (typeof a === "string" || typeof b === "string") {
			return a.toString() + b.toString();
		}
		return a + b;
	};

	type UnknownEmployee = Admin | Employee;

	const printEmployeeInfo = (emp: UnknownEmployee) => {
		console.log("Name is, " + emp.name + " and his status is " + emp.status + ".");
		if ("privileges" in emp) {
			console.log("Privileges: " + emp.privileges);
		}
	};

	printEmployeeInfo(Employee1);

	class Car {
		rollinRollin() {
			console.log("Rollin a Car");
		}
	}

	class Truck {
		rollinRollin() {
			console.log("Rollin a Truck");
		}

		cargo(load: number) {
			console.log("loaaaaaaaaading " + load);
		}
	}

	type Vehicle = Car | Truck;

	const v1 = new Car();
	const v2 = new Truck();

	// if vehicle is based on the Truck  constructor func, we get the Truck context
	const useVehicle = (vehicle: Vehicle) => {
		vehicle.rollinRollin();

		if (vehicle instanceof Truck) {
			console.log(vehicle.cargo(9000!));
		}
	};

	useVehicle(v2);

	return <></>;
};

export default TypeGuards;
