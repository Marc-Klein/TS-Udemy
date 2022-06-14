import React from "react";

const GenericClasses = () => {
	class DataStorage<T> {
		private data: T[] = [];

		addItem(item: T) {
			this.data.push(item);
		}

		removeItem(item: T) {
			this.data.splice(this.data.indexOf(item), 1);
		}

		getItem() {
			return [...this.data];
		}
	}

	const textStorage = new DataStorage<string>();
	textStorage.addItem("Max");
	textStorage.addItem("Peter");
	textStorage.removeItem("Peter");
	console.log(textStorage.getItem());

	const numberStorage = new DataStorage<number>();
	numberStorage.addItem(2);
	console.log(numberStorage.getItem());

	return <></>;
};

export default GenericClasses;
