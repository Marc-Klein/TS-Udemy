import React from "react";

const PropDecorators = () => {
	// if you add a decorator to a propertie, the decorator gets two arguments
	const Log = (target: any, name: string | Symbol) => {
		console.log("Prop decorator");
		console.log(target, name);
	};

	const Log2 = (target: any, AccessorName: string, descriptor: PropertyDescriptor) => {
		console.log("Accessor decorator");
		console.log(target, AccessorName, descriptor);
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

		getPriceWithTax(tax: number) {
			return this._price * (1 + tax);
		}
	}

	return <></>;
};

export default PropDecorators;
