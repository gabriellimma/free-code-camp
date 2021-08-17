/**
 * In order to help us create more flexible functions,
 * ES6 introduces the rest parameter for function parameters.
 * With the rest parameter, you can create functions that
 * take a variable number of arguments. These arguments are
 * stored in an array that can be accessed later from inside
 * the function.
 */

const sum = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0); // this is a callback fn that iterates 0 by all of the indexes.
}

console.log(sum(5, 5, 5, 5));

/**
 * how arr.reduce works:
 *
 * reduce((a,b) => a+b, 0);
 *
 * a and b = parameters;
 * a+b = are the logic parts, what we
 * will do with the parameters a and b?
 * we want to add it.
 */