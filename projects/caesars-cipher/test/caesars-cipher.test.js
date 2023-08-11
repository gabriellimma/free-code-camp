const {expect, test} = require('@jest/globals');
const {rot13} = require('../caesars-cipher.js');

test("cyper test free code camp", () => {
  expect(rot13("SERR PBQR PNZC")).toBe("FREE CODE CAMP");
})

test("cyper test free pizza!", () => {
  expect(rot13("SERR CVMMN!")).toBe("FREE PIZZA!");
})

test("cyper test FREE LOVE?", () => {
  expect(rot13("SERR YBIR?")).toBe("FREE LOVE?");
})

test("cyper test THE QUICK BROWN FOX", () => {
  expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).toBe("THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
})