function frankenSplice(arr1, arr2, n) {
  let arr1Mod = arr1.slice(0);
  let arr2Mod = arr2.slice(0);

  arr2Mod.splice(n, 0, arr1Mod)
  arr2Mod = [].concat(...arr2Mod)
  return arr2Mod;
}
console.log(
frankenSplice([1, 2, 3], [4, 5, 6], 1),
frankenSplice([1, 2, 3, 4], [], 0), // 1234
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2)) // ["head", "shoulders", "claw", "tentacle", "knees", "toes"]