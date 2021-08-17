const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function upperCase(val) {
  let asciiVal = val.charCodeAt(0) - 32;
  console.log(String.fromCharCode(asciiVal));
}

function foo() {
  for(let i = 0; i < alphabet.length; i++){
    upperCase(alphabet[i]);
  }
}

foo();