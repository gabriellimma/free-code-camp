/**
* Find the Longest Word in a String
* Return the length of the longest word in the 
* provided sentence.
* Your response should be a number.
*/
function findLongestWordLength(str) {
  let strArr = str.split(' ');
  let strToNum = [];
  for(let i = 0; i < strArr.length; i++) {
    strToNum.push(strArr[i].length)
  }
  strArr = strToNum.sort((a, b) => {
    return a - b;
  })
  return strArr[strArr.length-1];
}

function findLongestWordLengthToo(str) {
  let longest = 0;
  const strToArr = str.split(" ");

  for(let i = 0; i < strToArr.length; i++) {
    if(strToArr[i].length > longest) {
      longest = strToArr[i].length
    }   
  }
  return longest;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
console.log(findLongestWordLengthToo("The quick brown fox jumped over the lazy dog"))
