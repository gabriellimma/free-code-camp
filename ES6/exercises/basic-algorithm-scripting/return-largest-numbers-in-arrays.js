/**
 * Return an array consisting of the largest number 
 * from each provided sub-array. For simplicity, the 
 * provided array will contain exactly 4 sub-arrays.
 * Remember, you can iterate through an array with a 
 * simple for loop, and access each member with 
 * array syntax arr[i].
 */
function largestOfFour(arr) {
  let sortedArr = []
  for(let i = 0; i < arr.length; i++) {
    sortedArr.push(arr[i].sort((a, b) => {
     return a - b;
    })[arr.length-1]);
  }
  return sortedArr
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));