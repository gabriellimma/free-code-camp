const {expect, test} = require('@jest/globals');
const palindromeChecker = require('../index.js');

test('validate if a palindrome word returns true', () => {
  expect(palindromeChecker.palindrome("radar")).toBe(true);
});

test('validate if a palindrome word with non-alpha numeric returns true', () => {
  expect(palindromeChecker.palindrome("2_A3*3#A2")).toBe(true);
});

test('validate if a non-palindrome word returns false', () => {
  expect(palindromeChecker.palindrome("gabriel")).toBe(false);
});

test('validate if a non-string return false', () => {
  expect(palindromeChecker.palindrome(1)).toBe(false);
});