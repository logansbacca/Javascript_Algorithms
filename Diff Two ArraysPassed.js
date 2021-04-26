function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(same => !arr1.includes(same) || !arr2.includes(same))

}
   

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
