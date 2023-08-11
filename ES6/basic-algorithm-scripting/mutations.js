/**
 * Return true if the string in the first element 
 * of the array contains all of the letters of the 
 * string in the second element of the array
 * For example, ["hello", "Hello"], should return true 
 * because all of the letters in the second string are 
 * present in the first, ignoring case.
 * The arguments ["hello", "hey"] should return false 
 * because the string hello does not contain a y.
 * Lastly, ["Alien", "line"], should return true 
 * because all of the letters in line are present in Alien.
 */
function mutation(arr) {
  const firstElementArr = arr[0].toLowerCase().split('')
  console.log('first element', firstElementArr)
  const secondElementArr = arr[1].toLowerCase().split('')
  console.log('second element', secondElementArr)
  let errorCount = 0
  for(let i = 0; i < secondElementArr.length; i++) {
    if(firstElementArr.indexOf(secondElementArr[i]) > -1) {
      errorCount++
    }
  }

  if(errorCount < secondElementArr.length) {
    return false
  }

  return true;
}

console.log(mutation(["GaBriE", "ei"]))