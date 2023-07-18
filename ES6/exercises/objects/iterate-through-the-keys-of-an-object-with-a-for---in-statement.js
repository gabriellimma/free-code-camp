/**
 * We've defined a function countOnline which accepts one argument, 
 * allUsers. Use a for...in statement inside this function to loop 
 * through the allUsers object and return the number of users whose 
 * online property is set to true. An example of an object which 
 * could be passed to countOnline is shown below. Each user will 
 * have an online property set to either true or false.
 */

const users = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

const users2 = { 
  Alan: { 
    online: true 
  }, 
  Jeff: { 
    online: true 
  }, 
  Sarah: { 
    online: true 
  } 
}

function countOnline(allUsers) {
  // Only change code below this line
  let userCount = 0;
  for(const items in users){
    if(allUsers[items].online === true) {
      userCount+=1;
    }
  }
  return userCount
  // Only change code above this line
}

console.log(countOnline(users));

//output: 1