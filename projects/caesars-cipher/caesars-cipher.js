function rot13(str) {
  let splittedStr = str.split('');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const ROT13Alphabet = 'NOPQRSTUVWXYZABCDEFGHIJKLM'
  let finalStr = [];

  for(let i = 0; i < splittedStr.length; i++) {
    let indexOnAlphabet = alphabet.indexOf(splittedStr[i]);
    if(ROT13Alphabet[indexOnAlphabet] == undefined) {
      finalStr.push(str[i])
    } else {
      finalStr.push(ROT13Alphabet[indexOnAlphabet])
    }
  }
  return finalStr.join('')
}

module.exports = {
  rot13
}