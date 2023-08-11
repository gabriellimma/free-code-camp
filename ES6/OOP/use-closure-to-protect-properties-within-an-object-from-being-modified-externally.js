function Bird() {
  let weight = 15; // using let to remove variable from the global conext to local

  this.getWeight = () => { // using a method to acess that variable
    return weight;
  }
}

// In JavaScript, a function always has access to the context in which it was created. 
// This is called closure.