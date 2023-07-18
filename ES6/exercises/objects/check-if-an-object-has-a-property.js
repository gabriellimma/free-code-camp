/**
 * Finish writing the function so that it returns true if the 
 * object passed to it contains all four names, Alan, Jeff, 
 * Sarah and Ryan and returns false otherwise.
 */

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line
  let flag = true;
  const names = ['Alan', 'Jeff', 'Sarah', 'Ryan', 'Gabriel'];
  for(let i = 0; i < names.length; i++) {
    if(!userObj.hasOwnProperty(names[i])) {
      flag = false;
    }
  }
  return flag;
  // Only change code above this line
}

console.log(isEveryoneHere(users));