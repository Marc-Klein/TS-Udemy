import React from "react";

const NeverType = () => {
	const createError = (message: string, code: number): never => {
		throw { message: message, errorCode: code };
	};
	createError("An error occurred!", 500);
	return <></>;
};

export default NeverType;
