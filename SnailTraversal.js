/*
Task: You are given a 1D array of numbers and two values: rowsCount and colsCount. You need to create a method called snail(rowsCount, colsCount) that transforms this 1D array into a 2D array following a specific pattern known as "snail traversal order."

What is Snail Traversal Order? Snail traversal order is a way of arranging the numbers in a 2D grid by following a snail-like pattern. It starts at the top-left cell and moves through the grid in a specific way:

First, it goes from top to bottom in the first column.
Then, it moves to the next column on the right and goes from bottom to top.
It continues alternating between these two directions until it covers the entire grid.
Conditions and Constraints:

If the product of rowsCount and colsCount is not equal to the number of elements in the input array, the input is considered invalid, and the output should be an empty array.
Example: Let's say you have the input array [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15] with rowsCount = 5 and colsCount = 4. The desired output matrix should look like this:

[[19, 10, 3, 7],
 [11, 20, 4, 15],
 [13, 6, 18, 12],
 [2, 5, 8, 9],
 [1, 17, 16, 14]]

*/

Array.prototype.snail = function (rowsCount, colsCount) {
  const res = [];

  if (this.length !== rowsCount * colsCount) {
    return [];
  }

  for (let i = 0; i < rowsCount; ++i) {
    res.push(new Array(colsCount));
  }

  let revOrder = false,
    index = 0;
  for (let j = 0; j < colsCount; ++j) {
    if (!revOrder) {
      for (let i = 0; i < rowsCount; ++i) {
        res[i][j] = this[index++];
      }
    } else {
      for (let i = rowsCount - 1; i >= 0; --i) {
        res[i][j] = this[index++];
      }
    }
    revOrder = !revOrder;
  }
  return res;
};
