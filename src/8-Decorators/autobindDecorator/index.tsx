import React from "react";

const AutoBindDecorator = () => {
	const Autobind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
		const originalMethod = descriptor.value;
		const adjustedDescriptor: PropertyDescriptor = {
			configurable: true,
			enumerable: false,
			get() {
				// this refers to everything by everything
				// what triggers the getter method
				const boundFN = originalMethod.bind(this);
				return boundFN;
			},
		};
		return adjustedDescriptor;
	};

	class Printer {
		message = "This works!";

		@Autobind
		showMessage() {
			console.log(this.message);
		}
	}

	const pr = new Printer();
	const Button = ({ onClickValue, children }) => {
		return (
			<>
				<button onClick={onClickValue}>{children}</button>
			</>
		);
	};

	return (
		<>
			<Button onClickValue={pr.showMessage}>Test</Button>
		</>
	);
};

export default AutoBindDecorator;
