//[1,2,3,4,3,5,4,6,7,8] => 10 Elements
// Count largest sum of consecutive digits
//num = 4
//sum = 25

function largestSumOfConsecutiveDigits(array, num) {
  if (num > array) {
    throw new Error("Num is greater than array");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - 4 + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        temp += array[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const result = largestSumOfConsecutiveDigits([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(result);
