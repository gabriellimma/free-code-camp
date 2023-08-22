// adding myMap to the super type of arrays
Array.prototype.myMap = function(callback) {
  // creating a new array
  const newArray = [];
  // Only change code below this line
  this.forEach((item, index, array) => {
    newArray.push(callback(item, index, array))
  })
  // Only change code above this line
  return newArray;
};

let arr = [1, 2, 3, 4]
let arr2 = ["naomi", "quincy", "camperbot"]
let arr3 = [1, 1, 2, 5, 2]
//console.log(arr3.myMap((element, index, array) => array[index + 1] || array[0]))
//console.log(arr2.myMap(element => element.toUpperCase()))
console.log(arr.myMap(item => item * 2))