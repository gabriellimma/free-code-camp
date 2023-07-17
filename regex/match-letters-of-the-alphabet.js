/**
 * You saw how you can use character sets to specify a group of characters
 * to match, but that's a lot of typing when you need to match a large 
 * range of characters (for example, every letter in the alphabet). 
 * Fortunately, there is a built-in feature that makes this short and 
 * simple.
 * 
 * Inside a character set, you can define a range of characters to match 
 * using a hyphen character: -.
 * For example, to match lowercase letters a through e you would use [a-e].
 */

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
console.log(result)