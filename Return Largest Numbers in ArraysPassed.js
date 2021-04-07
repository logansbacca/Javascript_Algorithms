function largestOfFour(arr) {
 var arrNew = [];
  for(var i = 0; i < arr.length; i++){
  arrNew.push(arr[i].sort(function(a, b){return b-a})[0]);

  }

 console.log(arrNew);
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
