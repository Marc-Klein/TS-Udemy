import React from "react";

const FirstClass = () => {
	class Department {
		// name: string;
		// modifier "private" makes sure that nothing else can access employees from outside the class
		private employees: string[] = [];

		// constructor runs initalizing code
		// readonly at this point makes sure that the prop is only initalized ones
		constructor(private readonly id: string, public name: string) {
			// this.name = n;
		}

		// with describe you define the Method of a Class
		// the type in this cas points to the class itself
		// like this it should be clerer where the Method has to look for
		// with the "this" Keyword
		describe(this: Department) {
			// with this. we look in the class not inside the Methode or globally
			// console.log("Department:" + this.name);
			// we can also do it like this
			console.log(`Department (${this.id}): ${this.name}`);
		}

		addEmployee(employee: string) {
			this.employees.push(employee);
		}

		printEmployeeInfo() {
			console.log(this.employees.length);
			console.log(this.employees);
		}
	}

	class ITDepartement extends Department {
		constructor(id: string, public admins: string[]) {
			// super has to be called before this.
			// you can use the constructor shortcut to bluebrint the class
			super(id, "IT");
		}
	}

	const itDepartment = new ITDepartement("d2", ["Max"]);

	// the describe Method calls on accounting an gives us the "name" back
	const accounting = new Department("D2", "Acounting");
	console.log(accounting);
	accounting.addEmployee("Manu");
	accounting.addEmployee("Max");
	accounting.describe();
	accounting.printEmployeeInfo();

	return <></>;
};

export default FirstClass;
