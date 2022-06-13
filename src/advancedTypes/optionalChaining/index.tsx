import React from "react";

const OptionalChaining = () => {
	const fetchedUserData = {
		id: "U1",
		name: "Max",
		job: { title: "CEO", description: "Company owner" },
	};

	// like this we can check in plain JS if some data, maybe from the Backend, is there or not
	// the second argument will only be executed if the first gives back a "truthy" response
	// console.log(fetchedUserData.job && fetchedUserData.job.title)
	// anyway, with the chaining Operator we can do the same in TS and check for the specific props
	console.log(fetchedUserData?.job?.title);
	// like this we get no runtime Errors
	// n2k, this syntax is compiled to simple if check
	return <></>;
};

export default OptionalChaining;
