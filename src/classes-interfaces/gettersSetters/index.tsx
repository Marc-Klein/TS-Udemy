import React from "react";

const GetterSetter = () => {
	class Department {
		protected employees: string[] = [];

		constructor(private readonly id: string, public name: string) {}

		addEmployee(employee: string) {
			this.employees.push(employee);
		}

		printEmployeeInfo() {
			console.log(this.employees.length);
			console.log(this.employees);
		}
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
		}

		printReports() {
			console.log(this.reports);
		}

		addEmployee(name: string): void {
			if (name === "Max") return;
			this.employees.push(name);
		}
	}
	const accounting = new AccountingDepartment("D2", []);
	accounting.addReport("somethings odd");
	accounting.printReports();

	return <></>;
};

export default GetterSetter;
