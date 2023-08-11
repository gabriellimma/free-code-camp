function titleCase(str) {
  let splittedStr = str.split(' ');
  let finalString = [];

  for(let i = 0; i < splittedStr.length; i++) {
    let firstLetter = splittedStr[i][0].toUpperCase(); // finds the first letter and returns to uppercase
    let strLeftover = splittedStr[i].toLowerCase().slice(1) //get the leftover and turns into lower case
    finalString.push(`${firstLetter}${strLeftover}`) //push them as one
  }
  return finalString.join(' '); //join them
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));