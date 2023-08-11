function convertCtoF(celsius) {
 if(typeof celsius === "number") {
  let fahrenheit;
  fahrenheit = ((celsius*9)/5) + 32;
  return fahrenheit;
 }
 return NaN;
}

convertCtoF(30);

// output 86