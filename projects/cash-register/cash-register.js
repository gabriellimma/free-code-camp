function checkCashRegister(price, cash, cid) {

  const UNIT_PRICE = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }

  let totalCashInDrawer = 0;
  let change = 0;
  let changeArray = [];

  for(let item of cid) {
    totalCashInDrawer+= item[1];
  }
  totalCashInDrawer = totalCashInDrawer.toFixed(2);
  console.log(`total cash in drawer:`, totalCashInDrawer);
  change = cash - price;
  console.log(`total change:`, change);
  
  if(change > totalCashInDrawer) {
    return { status: "INSUFFICIENT_FUNDS", change: changeArray };
  } else if (change == totalCashInDrawer) {
    return { status: "CLOSED", change: cid }
  } else {
    cid = cid.reverse()
    for(let el of cid) {
      let temp = [el[0], 0];
      while (change >= UNIT_PRICE[el[0]] && el[1] > 0) {
        temp[1] += UNIT_PRICE[el[0]];
        el[1] -= UNIT_PRICE[el[0]];
        change -= UNIT_PRICE[el[0]];
        change = change.toFixed(2);
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }
  if (change > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }  return { status: "OPEN", change: changeArray};
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

module.exports = {
  checkCashRegister
}