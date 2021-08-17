/* 
If you have a multi-dimensional array, you can use the same logic 
as the prior waypoint to loop through both the array and any 
sub-arrays. Here is an example:

var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}

This outputs each sub-element in arr one at a time. 
Note that for the inner loop, we are checking the .
length of arr[i], since arr[i] is itself an array.

Modify function multiplyAll so that it returns the product of all 
the numbers in the sub-arrays of arr.

*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
    //access the first index 1 index =[ 2 index = [...] ]
  for(let i=0; i < arr.length; i++) {
    //access the second index
    for(let j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}
console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));

// in the first iteration, the track output is: 
//for I[0] [[1,2]] for J0 [1] J1 [2] returns to for I[1] [3,4]
//for J0 [3] J1 [4] returns for I[2] [5,6]
//for J0 [5] J1 [6] returns for I[3] but 3 > arr.length end of iteraction.