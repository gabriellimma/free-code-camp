/** Create a function that looks through an array arr 
 * and returns the first element in it that passes a 'truth test'. 
 * This means that given an element x, the 'truth test' is passed 
 * if func(x) is true. If no element passes the test, return undefined.
 */

function findElement(arr, func) {
  let num = 0;
  for(let item of arr) {
    if(func(item)) {
      num = item;
      return num;
    }
  }
  num = undefined;
  return num;
}

console.log(findElement([1, 1, 3, 1], num => num % 2 === 0))