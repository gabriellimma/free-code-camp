function Human() {}
Human.prototype = {
	constructor: Human,
	sayHi: () => {
		return console.log('Hi Human');
	}
}

function Person(name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype = Object.create(Human.prototype); // inheriting Human's behavior
Person.prototype.constructor = Person; // changing the constructor to Person's
// Overriding the sayHi method from the Human
Person.prototype.sayHi = () => {
	return console.log("Hi Person");
}

const person = new Person("Gabriel", 25);
const human = new Human()

human.sayHi();
person.sayHi();