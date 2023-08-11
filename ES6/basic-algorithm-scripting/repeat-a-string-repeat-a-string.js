/**
 * Repeat a given string str (first argument) for num times 
 * (second argument). Return an empty string if num is not 
 * a positive number. For the purpose of this challenge, 
 * do not use the built-in .repeat() method.
 */

function repeatStringNumTimes(str, num) {
  let cumulativeStr = ['']
  if(typeof num == 'number' && num > 0) {
    for(let i = 0; i < num; i++) {
      cumulativeStr.push(str)
    }
    return cumulativeStr.join('');
  } else {
    return cumulativeStr.join('');
  }
}

console.log(repeatStringNumTimes("*", 2))