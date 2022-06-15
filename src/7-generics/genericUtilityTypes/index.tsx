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

		return courseGoal;
	};

	return <></>;
};

export default UtilityTypes;
