// CHECKING ZERO SUM
// [-5,-4,-3,-2,0,2,4,6,8] -> INPUT

function getSumZero(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; i++) {
      if (array[i] + array[j] === 0) {
        return [array[i], array[j]];
      }
    }
  }
}

console.log(getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8])); // Time Complexity: O(n^2)

function getSumZeroOptimize(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {  
      left++;
    }
  }
}

console.log(getSumZeroOptimize([-5, -4, -3, -2, 0, 2, 4, 6, 8])); //Time Complexity: O(n)
