function Chair() {}
Chair.prototype = {
  constructor: Chair,
  chairProtFn: () => {
    return console.log('this is an prototype function');
  }
}

function Car(name, model) {
  this.name = name;
  this.model = model;
}

let colorMixin = (obj) => {
  obj.sell = () => {
    console.log(`I can be selled`); // passing a behavior
  },
  obj.valu = "value"; // passing a value 
}

let car = new Car('f50', 'Ferrari');
let chair = new Chair('Hergos', 'Herman Miller');

colorMixin(car);
colorMixin(chair);

car.sell();
chair.sell();