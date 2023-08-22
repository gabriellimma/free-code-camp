const arr = [1, 2, 3, 4, 5];

function findIndex(arr, value, index = 0) {
  if(index >= arr.length) {
    return -1;
  }
  if(arr[index] === value) {
    return index;
  } else {
    return findIndex(arr, value, index+1);
  } 
}

// console.log(findIndex(arr, 2)) // outputs: 1

function outputsEveryValue(arr, n = 5) {
  if(n == 0) {
    return n
  }
  return outputsEveryValue(arr, n-1)
}

outputsEveryValue(arr)

function findFactorial(num) {
  if (num === 0) return 1
  let factorial = num * findFactorial(num - 1)
  return factorial;
}

console.log(findFactorial(5))