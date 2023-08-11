/** 
 * Return the lowest index at which a value (second argument) 
 * should be inserted into an array (first argument) once it 
 * has been sorted. The returned value should be a number. 
 */

function getIndexToIns(arr, num) {
  let index = 0;
  const sortedArr = arr.sort((a, b) => {
    a-b
  })
  for(let i = 0; i < arr.length; i++) {
    if(num > sortedArr[i]) {
      index++
    }
  }
  return index
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35)) //3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)) //2