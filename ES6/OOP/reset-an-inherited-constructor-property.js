function Human() {}
Human.prototype = {
  constructor: Human,
  sayHi: (name) => {
    console.log(`Hi! ${name}`);
  }
}

function Person(name) {
  this.name = name;
}
Person.prototype = Object.create(Human.prototype);
Person.prototype.constructor = Person;

let gabriel = new Person("Gabriel");
gabriel.sayHi(gabriel.name);

console.log(gabriel.constructor) //[Function: Person]