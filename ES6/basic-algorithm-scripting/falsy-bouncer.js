/**
 * Remove all falsy values from an array. 
 * Return a new array; do not mutate the 
 * original array.
 * Falsy values in JavaScript are false, 
 * null, 0, "", undefined, and NaN.
 * Hint: Try converting each value to a Boolean.
 */

function bouncer(arr) {
  let mutedArr = [];
  arr.forEach(element => {
    if(!!element) {
      mutedArr.push(element);
    }
  });
  return mutedArr;
}

console.log(
  bouncer([7, "ate", "", false, 9]),
  bouncer(["a", "b", "c"]),
  bouncer([false, null, 0, NaN, undefined, ""]),
  bouncer([null, NaN, 1, 2, undefined])
)