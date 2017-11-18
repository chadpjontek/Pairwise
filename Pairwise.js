function pairwise(arr, arg) {
  var iArr = []; // stores indices used
  // add vals in arr with each other to see if they equal arg
  for (var i = 0; i < arr.length; i++) {
    for (var ni = 1 + i; ni <= arr.length; ni++) {
      // if they do (and indices not already used) add their indices to iArr
      if (
        arr[i] + arr[ni] === arg &&
        iArr.indexOf(i) === -1 &&
        iArr.indexOf(ni) === -1
      ) {
        iArr.push(i, ni);
      }
    }
  }
  // add indices and return val
  return iArr.reduce((acc, cur) => acc + cur,
    0
  );
}
// Examples
pairwise([1, 4, 2, 3, 0, 5], 7); // returns 11
pairwise([1, 3, 2, 4], 4); // returns 1
pairwise([1, 1, 1], 2); // returns 1
pairwise([0, 0, 0, 0, 1, 1], 1); // returns 10
pairwise([], 100); // returns 0