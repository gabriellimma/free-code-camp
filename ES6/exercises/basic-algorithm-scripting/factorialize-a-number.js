// Return the factorial of the provided integer.

function factorialize(num) {
  if (typeof num != 'number' || num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    for (let i = num - 1; i > 0; i--) {
      num = num * i;
    }
  }
  return num;
}

factorialize(5);
// output 120