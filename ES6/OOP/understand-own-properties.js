function Cellphone(_model, _price) {
  this.brand = 'NokiaS';
  this.model = _model;
  this.price = _price;
}

const obj = new Cellphone('BKG1', 100)
obj.newProp = true;

let ownProps = []

for(property in obj) {
  if(obj.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps);
console.log(obj.hasOwnProperty('price'));
console.log(Object.keys(obj))