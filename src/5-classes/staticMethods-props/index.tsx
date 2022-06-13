import { handleClientScriptLoad } from "next/script";
import React from "react";

const Statics = () => {
	// abstract classes cant be instantiated, its only for inherriting
	abstract class Department {
		// props
		static fiscalYear = 2020;
		protected employees: string[] = [];

		constructor(protected readonly id: string, public name: string) {}

		static createEmployee(name: string) {
			return { name: name };
		}

		addEmployee(employee: string) {
			this.employees.push(employee);
		}

		printEmployeeInfo() {
			console.log(this.employees.length);
			console.log(this.employees);
		}

		abstract describe(this: Department): void;
	}

	class AccountingDepartment extends Department {
		private lastReport: string;

		get mostRecentReport() {
			if (this.lastReport) {
				return this.lastReport;
			} else {
				throw new Error("No Report found");
			}
		}

		set mostRecentReport(value: string) {
			if (!value) {
				throw new Error("Please add a valid value");
			}
			this.addReport(value);
		}

		constructor(id: string, private reports: string[]) {
			super(id, "Accounting");

			this.lastReport = reports[0];
		}

		addReport(text: string) {
			this.reports.push(text);
			this.lastReport = text;
		}

		printReports() {
			console.log(this.reports);
		}

		addEmployee(name: string): void {
			if (name === "Max") return;
			this.employees.push(name);
		}

		describe() {
			console.log("Accounting Department goes brr.." + this.id);
		}
	}

	// with static Methods you dont have to instantiating a class with keyword "new"
	// you can call it directly on the class it self
	const employee1 = Department.createEmployee("Max");
	console.log(employee1, Department.fiscalYear);

	const accounting = new AccountingDepartment("D2", []);

	return <></>;
};

export default Statics;
