const key = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']


function convertToRoman(number) {
  if(typeof number != "number")
  return NaN;

  let splittedStrNum = String(number).split("");
  let romanNumber = [];
  romanNumber.push(findDozens(number));
  if(splittedStrNum.length == 2 ) {
    romanNumber.push(findBetween1039(number))
    romanNumber.push(findBetween4049(number))
    romanNumber.push(findBetween5089(number))
    romanNumber.push(findBetween9099(number))
  } else if (splittedStrNum.length == 3) {
    romanNumber.push(findBetween100999(number))
  } else {
    romanNumber.push(findMoreThen1000(number))
  }
  return romanNumber.join('').toString();
}

function num2Arr(number) {
  return String(number).split("");
}

function findDozens(number) {
  if(number < 11) {
    return key[number];
  }
  return ''
}

function findBetween1039(number) {
  if(number > 10 && number <= 39) {
    let splNum = num2Arr(number);
    let romanNumber = [];
    for(let i = 0; i < splNum[0]; i++) {
      romanNumber.push(key[10])
    }
    romanNumber.push(findDozens(splNum[1]))
    return romanNumber.join('');
  }
  return ''
}

function findBetween4049(number) {
  if(number >= 40 && number <= 49) {
    let splNum = num2Arr(number);
    let romanNumber = [];
    romanNumber.push(key[11] + findDozens(splNum[1]))
    return romanNumber;
  }
  return ''
}

function findBetween5089(number) {
  if(number >= 50 && number <= 89) {
    let splNum = num2Arr(number);
    let romanNumber = [];
    romanNumber.push(key[12])
    for(let i = splNum[0]; i > 5; i--) {
      romanNumber.push(key[10])
    }
    romanNumber.push(findDozens(splNum[1]))
    return romanNumber.join('');
  }
  return ''
}

function findBetween9099(number) {
  if(number >= 90 && number <= 99) {
    let splNum = num2Arr(number);
    let romanNumber = [];
    romanNumber.push(key[13] + findDozens(splNum[1]))
    return romanNumber;
  }
}

function findBetween100999(number) {
  if(number >= 100 && number <= 999) {
    let splNum = num2Arr(number);
    let firstNum = splNum.shift()
    if(splNum[0] == 0) {
      splNum.shift()
    }
    let romanNumber = [];
    
    if(firstNum < 4) {
      for(let i = firstNum; i > 0; i--) {
        romanNumber.push(key[14])
      }
    } else if(firstNum == 4) {
      romanNumber.push(key[15])
    } else if(firstNum == 5) {
      romanNumber.push(key[16])
    } else if(firstNum >= 6 && firstNum <= 8) {
      romanNumber.push(key[16])
      for(let i = firstNum; i > 5; i--) {
        romanNumber.push(key[14])
      }
    } else if (firstNum == 9) {
      romanNumber.push(key[17])
    }

    splNum = splNum.join('')
    romanNumber.push(findDozens(splNum))
    romanNumber.push(findBetween1039(splNum))
    romanNumber.push(findBetween4049(splNum))
    romanNumber.push(findBetween5089(splNum))
    romanNumber.push(findBetween9099(splNum))
    return romanNumber.join('');
  }
}

function findMoreThen1000(number) {
  if(number >= 1000 && number <= 3999) {
    let romanNumber = [];
    let splNum = num2Arr(number);
    let firstNum = splNum.shift()
    for(let i = 0; i < firstNum; i++) {
        romanNumber.push(key[18])
    }
    if(number >= 1001 && number <= 3099) {
      console.log(splNum)
      splNum.shift()
      if(number < 1010) {
        splNum.shift()
      }
      splNum = splNum.join('')
      romanNumber.push(findDozens(splNum))
      romanNumber.push(findBetween1039(splNum))
      romanNumber.push(findBetween4049(splNum))
      romanNumber.push(findBetween5089(splNum))
      romanNumber.push(findBetween9099(splNum))
    } else {
      splNum = splNum.join('')
      romanNumber.push(findBetween100999(splNum))
    }
    return romanNumber.join('')
  }
}

console.log(convertToRoman(2014))

module.exports = {
  convertToRoman
}