const myObject = {
  prop: 'Hello',
  sayHello: () => {
    console.log(this.prop); // 'this' captures the surrounding context (possibly global)
  }
};

const otherObject = {
  prop: 'Hello',
  sayHello: () => {
    let lexicalContext = 'Hello from the inner array function context';
    console.log(lexicalContext)
  }
}

const dynamicThisObject = {
  prop: 'Hello',
  sayHello: function() {
    return console.log(this.prop)
  }
}

myObject.sayHello(); // Outputs: undefined or unexpected value
otherObject.sayHello()
dynamicThisObject.sayHello()