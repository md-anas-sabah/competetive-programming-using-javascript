// Checking square in another array

/*
input-> arr1=[1,2,3,4], arr2=[1,9,4,16]  
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
console.log(square([1, 2, 3, 4], [1, 4, 9, 16]));
