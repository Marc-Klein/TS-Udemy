import React from "react";

const UtilityTypes = () => {
	interface CourseGoal {
		title: string;
		description: string;
		completeUntil: Date;
	}

	const createCourseGoal = (title: string, description: string, date: Date): CourseGoal => {
		// Partial makes all props from the interface optional
		let courseGoal: Partial<CourseGoal> = {};
		courseGoal.title = title;
		courseGoal.description = description;
		courseGoal.completeUntil = date;
		// weve to typecast "courseGoal" to "CourseGoal" because we cant return "courseGoal", because his type is "Partial CourseGoal"
		return courseGoal as CourseGoal;
	};

	// with "readonly" we make sure that we cant push something in the "names" array
	// const names: Readonly<string[]> = ["Max", "Peter", "Horst"];
	// names.push("Manu"); TS is complaining because you shouldnt push something in names

	return <></>;
};

export default UtilityTypes;
