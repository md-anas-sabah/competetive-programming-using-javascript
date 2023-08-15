/*
FIND THE INDEX OF GIVEN NUMBER IN AN ARRAY=> 7
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
OP: INDEX 6
*/

// Linear Search
function linear(array, k) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    if (array[i] === k) {
      return i;
    }
  }
}
console.log(linear([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 7));

// Binary Search
function binarySearch(array, k) {
  let min = 0;
  let max = array.length - 1;
  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    if (array[mid] < k) {
      min = mid + 1;
    } else if (array[mid] > k) {
      max = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const result = binarySearch(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  7
);
console.log(result);
