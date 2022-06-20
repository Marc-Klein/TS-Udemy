import { type } from "os";
import { stringify } from "querystring";
import React from "react";

const GenericClasses = () => {
	// union types can only be defined through the "type" keyword
	type primitives = string | number | boolean;

	// In Typescript we should only work with primitive types and not reference Types like
	// objects or arrays
	class DataStorage<T extends primitives> {
		private data: T[] = [];

		addItem(item: T) {
			this.data.push(item);
		}

		removeItem(item: T) {
			// this if statement elimantes the normal JavaScript behaviour, that if it cant
			// find soemthing, it returns nothing instead of the last char of the array "-1"
			if (this.data.indexOf(item) === -1) {
				return;
			}
			this.data.splice(this.data.indexOf(item), 1);
		}

		getItem() {
			return [...this.data];
		}
	}

	// its also possible to use Uniontypes
	const textStorage = new DataStorage<string>();
	textStorage.addItem("Max");
	textStorage.addItem("Manu");
	textStorage.removeItem("Peter");
	console.log(textStorage.getItem());

	const numberStorage = new DataStorage<number>();
	numberStorage.addItem(2);
	console.log(numberStorage.getItem());

	return <></>;
};

export default GenericClasses;
