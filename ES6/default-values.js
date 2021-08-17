/**
 * In new es6 features you can now add a default
 * value to an parameter
 * 
 * how to use sum => (a = 0, b = 0){a+b}
 * then if any value is passed as a parameter
 * js will asume that 0 for a and 0 for b is the
 * default values tho those parameters.
 */
let sum = (a = 0, b = 0) => {
  return a + b;
}
/**
 * using default values to parameters minimize
 * the chance of getting any parameter at all.
 */
let hi = (name = 'Stranger') => {
  return `Hi ${name}`;
}

console.log(hi());
console.log(sum(2, 2));