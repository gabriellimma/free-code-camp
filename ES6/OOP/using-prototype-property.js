function Cellphone(_model, _price) {
  Cellphone.prototype.brand = 'Nokia';
	this.model = _model;
	this.price = _price;
}
const cell1 = new Cellphone("C1", 100);
const cell2 = new Cellphone("C1 Pro", 500);

console.log(cell1.constructor == Cellphone)
console.log(cell2.brand)
console.log(Object.keys(cell1))
console.log(Object.getPrototypeOf(cell1))