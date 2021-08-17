/**
 * Function that add one value to another.
 * @param {Number} value1
 * @param {Number} value2
 * @returns Number
 */
const soma = (value1, value2) =>
  typeof value1 == "number"
    ? typeof value2 == "number"
      ? value1 + value2
      : "valor 2 não é um número."
    : "valor 1 não é um número";

/**
 * Function that subtracts one value from another
 * @param {Number} value1
 * @param {Number} value2
 * @returns Number
 */
const subtrai = (value1, value2) => value1 - value2;

/**
 *Function that multiplies two numbers.
 * @param {Number} value1
 * @param {Number} value2
 * @returns Number
 */
const multiplica = (value1, value2) => value1 * value2;

/**
 * Function that divide the first value to the second.
 * @param {Number} value1
 * @param {Number} value2
 * @returns Number | String
 */
const divide = (value1, value2) =>
  value2 != 0 ? value1 / value2 : "não se pode dividir por 0";

/**
 * Function that returns a random number.
 * @returns Number
 */
const randomNumber = () => Math.random() * (10, 2) + 1;

module.exports = {
  soma,
  subtrai,
  multiplica,
  divide,
  randomNumber,
};
