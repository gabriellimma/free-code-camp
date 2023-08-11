/**
 * https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/add-methods-after-inheritance
 */

function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype) // inherit animals methods
Dog.prototype.constructor = Dog; // own constructor
Dog.prototype.bark = () => { // add new method
  return console.log("Woof!");
}


// Only change code above this line

let beagle = new Dog();

beagle.eat();
beagle.bark();