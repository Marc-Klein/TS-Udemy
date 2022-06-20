import React from "react";

const FirstClass = () => {
	class Department {
		// name: string;
		// modifier "private" makes sure that nothing else can access employees from outside the class
		// instead of "private" before employees we use "protected"
		// with protected you can use for example employees in every class that extends Departemnent
		protected employees: string[] = [];

		// constructor runs initalizing code
		// readonly at this point makes sure that the prop is only initalized ones
		// "protected" makes sure that we  can use "id" in every class that extends "Department"
		constructor(protected readonly id: string, public name: string) {
			// this.name = n;
		}

		// the type in this case points to the class itself
		// like this it should be clearer where the method has to look for
		// with the "this" Keyword
		describe(this: Department) {
			// with this. we look in the class not inside the Method or globally
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
			// super is only permitted in derived classes not in base class itself
			super(id, "IT");
		}

		addAdmin(text: string) {
			this.admins.push(text);
		}
	}

	class AccountingDepartment extends Department {
		constructor(id: string, private reports: string[]) {
			super(id, "Accounting");
		}

		addReport(text: string) {
			this.reports.push(text);
		}

		printReports() {
			console.log(this.reports);
		}

		addEmployee(name: string): void {
			if (name === "Max") return;
			this.employees.push(name);
		}
	}

	// the describe Method calls on accounting an gives us the "name" back
	const someDepartment = new Department("D2", "Acounting");
	someDepartment.addEmployee("Manu");
	someDepartment.addEmployee("Max");
	someDepartment.describe();
	someDepartment.printEmployeeInfo();
	console.log(someDepartment);

	// it Departement
	const itDepartment = new ITDepartement("d2", ["Max"]);
	itDepartment.addAdmin("Peter");
	// since ITDepartement extends Departement we can also access the Methods from Departement
	itDepartment.addEmployee("Paula");
	console.log(itDepartment);

	const accounting = new AccountingDepartment("D2", []);
	accounting.addReport("somethings odd");
	accounting.printReports();

	return <></>;
};

export default FirstClass;
