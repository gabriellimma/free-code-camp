const arr = [1, 2, 3];

// the code below will result in an error
// arr = [3, 2, 1];

console.log(`the initial array is ${arr}`)

arr[0] = 3;
arr[1] = 2;
arr[2] = 1;

console.log(`the final array is ${arr}`);

/** 
 * besides wer'e using the keyword 'const' in the
 * array declaration, we still able to mutate or 
 * change the values inside an index, but not it's
 * original declaration.
 */