function Dog(_name, _age, _isMale) {
	this.name = _name;
	this.age = _age;
	this.isMale = _isMale;
	this.bark = () => `this dog nammed ${this.name} is barking`;
}

function Person (_name, _age) {
  this.name = _name;
  this.age = _age;
}

const doge = new Dog("Doge", 8, true);
console.log(doge instanceof Dog)
console.log(doge instanceof Object)
console.log(doge instanceof Person)

// retorno: true