import { type } from "os";
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
	const textStorage = new DataStorage();
	textStorage.addItem("Max");
	textStorage.addItem("Peter");
	textStorage.removeItem("Peter");
	console.log(textStorage.getItem());

	const numberStorage = new DataStorage();
	numberStorage.addItem(2);
	console.log(numberStorage.getItem());

	return <></>;
};

export default GenericClasses;
