function sumAll(arr) {
var max = Math.max(...arr);
var min = Math.min(...arr);
let sumBetween = 0
for (let i=min; i<=max; i++) {
    sumBetween += i
  
}
  return sumBetween;
}

sumAll([1, 4]);
