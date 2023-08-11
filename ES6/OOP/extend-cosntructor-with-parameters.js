function Dog(_name, _age, _isMale) {
	this.name = _name;
	this.age = _age;
	this.isMale = _isMale;
  this.bark = () => `this dog nammed ${this.name} is barking`;
}

const dog = new Dog("Loopy", 5, true);

console.log(dog);
console.log(dog.bark());