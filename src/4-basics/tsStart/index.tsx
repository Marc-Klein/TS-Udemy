const Add = () => {
	// here we have a function that has several parameters, everyone is declared with its type

	const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
		const result = n1 + n2;
		if (showResult) {
			console.log(phrase + result);
		} else {
			return result;
		}
	};
	const number1 = 5;
	const number2 = 2;
	const printResult = true;
	const resultPhrase = "Result is: ";
	// we have to call the function with every declared parameter and its corresponding type
	add(number1, number2, printResult, resultPhrase);

	return <p>Typescript start</p>;
};

export default Add;
