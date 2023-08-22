function Car() {
	
	let name = "Little Corsa"; // constructor scope variables
	let price = 10000;
	
	// functions that are global scope to interact with constructor scope
	// variables
	this.getName = () => { 
		return name;
	}
	
	this.getPrice = () => {
		return price;
	}

	this.setName = (newName) => {
		return name = newName;
	}
}

const car = new Car();
car.setName("Focus");
console.log(car.getName(), car)