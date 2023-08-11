const { checkCashRegister } = require('../cash-register.js')
const {expect, test} = require('@jest/globals');

test("cash register inssuficient founds", () => {
  expect(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toStrictEqual({status: "INSUFFICIENT_FUNDS", change: []});
})

test("cash register equal founds", () => {
  expect(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])).toStrictEqual({status: "INSUFFICIENT_FUNDS", change: []});
})