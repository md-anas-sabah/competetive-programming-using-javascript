// Checking square in another array

/*
input-> arr1=[1,2,3,4], arr2=[1,9,4,16]  
output-> true
input-> arr1=[1,2,4,2], arr2=[1,4,4,16]  
output-> true
*/

function square(arr1, arr2) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  for (let i = 0; i < n1; i++) {
    let isSquare = false;
    for (let j = 0; j < n2; j++) {
      if (arr1[i] * arr1[i] === arr2[j]) {
        isSquare = true;
      }
      if (j === arr2.length - 1) {
        if (!isSquare) {
          return false;
        }
      }
    }
  }
  return true;
}
// console.log(square([1, 2, 3, 4], [1, 4, 9, 16])); // Time Complexity => O(n^2)
// console.log(square([1, 2, 4, 2], [1, 4, 4, 16])); // Time Complexity => O(n^2)

function squareOptimize(array1, array2) {
  // time complexity-> O(n)
  let map1 = {};
  let map2 = {};

  for (item of array1) {
    map1[item] = (map1[item + 1] || 0) + 1;
  }
  for (item1 of array2) {
    map2[item1] = (map2[item1 + 1] || 0) + 1;
  }
  for (let key in map1) {
    if (!map2[key * key]) {
      // Obj key compare in terms of square
      return false;
    }
    if (map1[key] !== map2[key * key]) {
      // value compare
      return false;
    }
  }
  return true;
}

console.log(squareOptimize([1, 2, 4, 2], [1, 4, 4, 16])); // true
console.log(squareOptimize([1, 2, 4, 2], [1, 4, 4, 25])); // false
