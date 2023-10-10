// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

 

// Example 1:

// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]
// Example 2:

// Input: nums = [1,1]
// Output: [2]


// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
var findDisappearedNumbers = function(nums) {
    let map = new Array(nums.length+1).fill(0)
    let result= []

    for(let num of nums){
        map[num] = 1
    }

    for(let i=1;i<map.length;i++){
        if(!map[i]) result.push(i)
    }
    return result
};