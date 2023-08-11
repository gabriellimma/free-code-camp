function Human() {}

Human.prototype = {
	constructor: Human,
	sayHi: () => {
		return console.log(`Hi ${this.name}`);
	}
}

function Adult(name, age) {
	this.name = name;
	this.age = age;
}

Adult.prototype = {
	constructor: Adult
}

Adult.prototype = Object.create(Human.prototype);
const adult = new Adult("Gabriel", 25);
console.log(adult.name)
console.log(adult)
console.log(adult.sayHi())