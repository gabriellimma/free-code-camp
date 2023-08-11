/** Write a function that splits an array (first argument) 
 * into groups the length of size (second argument) and
 * returns them as a two-dimensional array.
*/
function chunkArrayInGroups(arr, size) {
  let finalArr = []
  for(let i = 0; i <= arr.length; i++) {
    if(size < arr.length) {
      finalArr.push(arr.splice(0, size))
    }
  }
  if(arr.length != 0) {
    finalArr.push(arr)
  }
  return finalArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 2))
