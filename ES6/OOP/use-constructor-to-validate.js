function Cellphone(_model, _price) {
  Cellphone.prototype.brand = 'Nokia';
	this.model = _model;
	this.price = _price;
}

function Car(name, price) {
  Car.prototype.brand = 'DSC';
  this.name = name;
  this.price = price;
}

const cell = new Cellphone("C1", 100);
const car = new Car("Mazda", 150000);

console.log(cell.constructor == Cellphone) // true
console.log(car.constructor == Cellphone) // false

function Utils() {
  this.name = "utils";
}

Utils.prototype = {
  constructor: Utils,
	brand: "Nokia",
	getConstructor: (object) => {
    return object.constructor;
  },
  compareObject: (objectConstructor, CompareConstructor) => {
    return objectConstructor == CompareConstructor ? true : false;
  }
}

const utils = new Utils();


console.log(utils.constructor == Utils)
console.log(utils.compareObject(utils.getConstructor(cell), Cellphone));