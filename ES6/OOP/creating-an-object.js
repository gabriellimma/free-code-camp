chair = {
	name: "Ergo", //object property
	price: 25.00,
	color: "black",
	isErgonomic: true,
  sayName: function () {
    return `The name of this chair is ${this.name}.`
  }
}

Ochair = chair // creating a clone of chair
console.log(chair.sayName())
Ochair['name'] = "second Name"
console.log(Ochair.sayName())


