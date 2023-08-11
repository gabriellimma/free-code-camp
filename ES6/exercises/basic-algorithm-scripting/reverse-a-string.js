function reverseString(str) {
  if(typeof str === 'string') {
    return str.split('').reverse().join('');;
  }
  return null;
}

reverseString("hello");

console.log(reverseString('hellO gabrieL'));