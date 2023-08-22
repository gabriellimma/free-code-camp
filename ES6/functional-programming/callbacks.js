function print(callback, timeout) {  
  setTimeout(callback, timeout);
}

print(() => {
  console.log('hi')
}, 2000)