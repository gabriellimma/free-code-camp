const {test, expect} = require('@jest/globals');
const {convertToRoman} = require('../roman-numeral-converter.js')

test("validate error in case of mistype param", () => {
  expect(convertToRoman("ga")).toBe(NaN);
});

test("validate if the number 1 is converted to I", () => {
  expect(convertToRoman(1)).toBe("I");
});

test("validate if the number 3 is converted to III", () => {
  expect(convertToRoman(3)).toBe("III");
});

test("validate if the number 4 is converted to IV", () => {
  expect(convertToRoman(4)).toBe("IV");
});

test("validate if the number 5 is converted to V", () => {
  expect(convertToRoman(5)).toBe("V");
});

test("validate if the number 10 is converted to X", () => {
  expect(convertToRoman(10)).toBe("X");
});

test("validate if the number 11 is converted to XI", () => {
  expect(convertToRoman(11)).toBe("XI");
});

test("validate if the number 11 is converted to XI", () => {
  expect(convertToRoman(1000)).toBe("M");
});