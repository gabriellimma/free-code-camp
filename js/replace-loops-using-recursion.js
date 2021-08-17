function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1]
  }
  // Only change code above this line
}

sum([1], 0)
var ari = [2, 3, 4];
//console.log(sum(ari, 2))

function countDown(n) {
  console.log(n)
  if(n <= 1) {
    return 0
  } else {
    return countDown(n - 1);
  }
}

function two() {
  return 2
}

console.log(countDown(10));