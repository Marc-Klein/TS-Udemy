import React from "react";

const NeverType = () => {
	// The never Type contains no value and it doesnt accept any values
	// This means that variables with a never Type wont accept any input
	// The never Type is therefore used to represent the return Type of a
	// function that only throws errors
	const createError = (message: string, code: number): never => {
		throw { message: message, errorCode: code };
	};
	createError("An error occurred!", 500);
	return <></>;
};

export default NeverType;
