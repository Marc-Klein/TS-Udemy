import React from "react";

const DiscriminatedUnions = () => {
	// here we have a specialized type in every Interface "bird", "horse"

	interface Bird {
		type: "bird";
		flyingSpeed: number;
	}

	interface Horse {
		type: "horse";
		runningSpeed: number;
	}

	type Animal = Bird | Horse;

	const moveAnimal = (animal: Animal) => {
		let speed;
		let name;
		switch (animal.type) {
			case "bird":
				name = "Vooogel";
				speed = animal.flyingSpeed;
				break;

			case "horse":
				name = "Pfeeerd";
				speed = animal.runningSpeed;
				break;
		}
		console.log(name + " moving with speed: " + speed);
	};

	moveAnimal({ type: "bird", flyingSpeed: 300 });

	return <></>;
};

export default DiscriminatedUnions;
