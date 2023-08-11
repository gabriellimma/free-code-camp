// normal function that has to be invoked and has a name
function makeNest() {
  console.log("A cozy nest is ready");
}

makeNest();

// the same function written as an anonymous function, immediately executed

(function () {
  console.log("A cozy nest is ready");
})()