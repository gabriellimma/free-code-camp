const { expect, test } = require("@jest/globals");
const exercises = require("./arrow-functions");

test("A adição 1 + 2 para ser igual a 3", () => {
  let value1 = exercises.randomNumber();
  let value2 = exercises.randomNumber();
  expect(exercises.soma(value1, value2)).toBe(value1 + value2);
});

test("A multiplicação 2 vezes 6 deve ser 12", () => {
  let value1 = exercises.randomNumber();
  let value2 = exercises.randomNumber();
  expect(exercises.multiplica(value1, value2)).toBe(value1 * value2);
});

test("A divisão de 2/12 deve ser 6", () => {
  let value1 = exercises.randomNumber();
  let value2 = exercises.randomNumber();
  expect(exercises.divide(value1, value2)).toBe(value1 / value2);
});

test("A divisão de 24/0 deve dar uma mensagem de erro ao usuário", () => {
  expect(exercises.divide(exercises.randomNumber, 0)).toBe(
    "não se pode dividir por 0"
  );
});
