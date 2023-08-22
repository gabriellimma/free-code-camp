function Bottle(name, mls) {
  this.name = name;
  this.mls = mls;
}

const coke = new Bottle("Coke Bottle", "300");
const pepsi = new Bottle("Pepsi Bottle", "300");

delete coke.mls
console.log(coke, pepsi)