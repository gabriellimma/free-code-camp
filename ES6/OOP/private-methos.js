function Cellphone(_model, _price) {
  this.brand = 'Nokia';
  this.model = _model;
  this.price = _price;
  let _color = 'blue';
  this.getColor = () => {
    return _color;
  }
  this.updateColor = (newColor) => {
    if(newColor != _color) {
      _color = newColor;
    }
  }
}

const obj = new Cellphone('BKG1', 100)
const obj2 = new Cellphone('BKG1', 100)
obj2.updateColor('black')
console.log(obj.getColor())
console.log(obj2.getColor())