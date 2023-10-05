// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

// Example 1:

// Input: nums = [3,2,3]
// Output: [3]
// Example 2:

// Input: nums = [1]
// Output: [1]
// Example 3:

// Input: nums = [1,2]
// Output: [1,2]

// Follow up: Could you solve the problem in linear time and in O(1) space?

var majorityElement = function (nums) {
  let map = new Map();
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) map.set(nums[i], 1);
    else map.set(nums[i], map.get(nums[i]) + 1);
  }

  for (const [key, value] of map) {
    if (value > nums.length / 3) res.push(key);
  }
  return res;
};
