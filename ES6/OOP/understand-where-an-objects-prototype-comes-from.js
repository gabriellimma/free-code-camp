function Dog(name, age) {
  this.name = name;
  this.age = age;
}

const snoopy = new Dog("Snoopy", 50);

console.log(Dog.prototype.isPrototypeOf(snoopy));
