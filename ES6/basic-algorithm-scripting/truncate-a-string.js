/** Truncate a string (first argument) if it is longer 
 * than the given maximum string length (second argument). 
 * Return the truncated string with a ... ending. 
 * */
function truncateString(str, num) {
  console.log(str.length)
  console.log(num)

  if(num >= str.length) {
    return str
  }
  return str.slice(0, num)+"...";
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))