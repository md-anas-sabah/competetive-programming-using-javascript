// Count Unique Number

// [1,1,2,2,3,4,4,5,6,7,8,8]
// output -> 8

function unique(array) {
  if (array.length) {
    array.sort();
    let i = 0;
    for (let j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i++;
        array[i] = array[j];
      }
    }
    return i + 1;
  } else {
    throw new Error("Array is Empty");
  }
}
const check = unique([1, 1, 5, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 10]);
console.log(check);
