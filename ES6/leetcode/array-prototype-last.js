Array.prototype.last = function() {
  return this.length ?  this[this.length-1] : -1;
};


 const arr = [1, 2, 3];
 const arr2 = [1, 2, null]
 const arr3 = []
 arr.last(); // 3
  