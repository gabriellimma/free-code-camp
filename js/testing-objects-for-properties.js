/*
Sometimes it is useful to check if the property of a given object 
exists or not. We can use the .hasOwnProperty(propname) method of 
objects to determine if that object has the given property name. 
.hasOwnProperty() returns true or false if the property is found 
or not.

Example

var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false

Modify the function checkObj to test if an object passed to the 
function (obj) contains a specific property (checkProp). If the 
property is found, return that property's value. If not, return 
"Not Found".

*/
//tests if the object has the propety ? propety : "Not Found"
function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {
  return "Not Found";
  }
  // Only change code above this line
}