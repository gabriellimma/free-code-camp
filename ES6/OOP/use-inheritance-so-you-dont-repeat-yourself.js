function Human() {}

Human.prototype = {
  constructor: Human,
  sayHi:  () => {
    return console.log(`Hi ${this.name}`)
  }
}

function Adult(name, age) {
	this.name = name;
	this.age = age;
}

Adult.prototype = {
	constructor: Adult,
}

function Kid(name, age) {
	this.name = name;
	this._age = age;
	this.getAge = () => {
		return this._age
	}
}

Kid.prototype = {
	constructor: Kid,
}

const person = new Adult("Gabriel Lima", 26)
const kid = new Kid("Rebeca Oliveira", 5)
const person2 = Object.create(Human.prototype);

person2.sayHi()