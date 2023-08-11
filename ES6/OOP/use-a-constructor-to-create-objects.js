function Dog() {
	this.name = "Loopy";
	this.age = 8;
	this.isMale = true;
}

const newDog = new Dog();

console.log(newDog)
const otherDog = new Dog();
otherDog.name = "Browny";
console.log(otherDog.name)