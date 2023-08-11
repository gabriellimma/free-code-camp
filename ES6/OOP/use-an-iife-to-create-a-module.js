// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/object-oriented-programming/use-an-iife-to-create-a-module

// mixin 1
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
// mixin 2
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

// creating a mudule with mixins
let funModule = (function () { //anonymous function saved into funModule as an object
  return { //returning an object
    // with the first mixin
    isCuteMixin: (obj) => { 
      obj.isCute = () => {
        return true;
      }
    },
    // and the second mixin
    singMixin: (obj) => {
      obj.sing = () => {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();