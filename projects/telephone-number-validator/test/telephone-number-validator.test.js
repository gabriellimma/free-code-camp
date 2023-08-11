const {test, expect} = require('@jest/globals');
const {telephoneCheck} = require('../telephone-number-validator.js');

test('validate that an US number shoud return true', () => {
  expect(telephoneCheck("555-555-5555")).toBe(true);
});

test('validate an valid US number with country code', () => {
  expect(telephoneCheck("1 555-555-5555")).toBe(true);
});

test('validate an valid US number with country code and parenthesis', () => {
  expect(telephoneCheck("1 (555) 555-5555")).toBe(true);
});

test('validate an valid US numbers only', () => {
  expect(telephoneCheck("5555555555")).toBe(true);
});

test('validate an valid US number divided by sign', () => {
  expect(telephoneCheck("555-555-5555")).toBe(true);
});

test('validate an valid US number with parenthesis on beginning', () => {
  expect(telephoneCheck("(555)555-5555")).toBe(true);
});

test('validate an valid US number with contry code and parenthesis on beginning', () => {
  expect(telephoneCheck("1(555)555-5555")).toBe(true);
});

test('validate an invalid US number', () => {
  expect(telephoneCheck("555-5555")).toBe(false);
});

test('validate an invalid US number', () => {
  expect(telephoneCheck("5555555")).toBe(false);
});

test('validate an invalid US number', () => {
  expect(telephoneCheck("1 555)555-5555")).toBe(false);
});

test('validate an invalid US number with invalid country code 2', () => {
  expect(telephoneCheck("2 (757) 622-7382")).toBe(false);
});

test('validate an ivalid US number with a invalid country code 0', () => {
  expect(telephoneCheck("0 (757) 622-7382")).toBe(false);
});

test('validate an ivalid US number with a invalid country code -1', () => {
  expect(telephoneCheck("-1 (757) 622-7382")).toBe(false);
});

test('validate an ivalid US number', () => {
  expect(telephoneCheck("55 55-55-555-5")).toBe(false);
});