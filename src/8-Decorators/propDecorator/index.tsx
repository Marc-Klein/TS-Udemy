import React from "react";

// where to place decorators

const PropDecorators = () => {
	// if you add a decorator to a propertie, the decorator gets two arguments
	const Log = (target: any, name: string | Symbol) => {
		console.log("Prop decorator");
		console.log(target, name);
	};

	// accessor Decorator
	const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
		console.log("Accessor decorator");
		console.log(target);
		console.log(name);
		console.log(descriptor);
	};

	// method decorator
	const Log3 = (target: any, name: string | Symbol, descriptor: PropertyDescriptor) => {
		console.log("Method decorator");
		console.log(target);
		console.log(name);
		console.log(descriptor);
	};

	// parameter decorator
	const Log4 = (target: any, name: string | Symbol, position: number) => {
		console.log("Parameter decorator");
		console.log(target);
		console.log(name);
		console.log(position);
	};

	class Product {
		@Log
		title: string;
		private _price: number;

		@Log2
		set price(val: number) {
			if (val > 0) {
				this._price = val;
			} else {
				throw new Error("Invalid price should be positive");
			}
		}

		constructor(t: string, p: number) {
			this.title = t;
			this._price = p;
		}

		@Log3
		getPriceWithTax(@Log4 tax: number) {
			return this._price * (1 + tax);
		}
	}

	return <></>;
};

export default PropDecorators;
