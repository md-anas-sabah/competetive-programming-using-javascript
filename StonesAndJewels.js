/* 
You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: jewels = "aA", stones = "aAAbbbb"
Output: 3
Example 2:

Input: jewels = "z", stones = "ZZ"
Output: 0

*/

var numJewelsInStones = function(jewels, stones) {
    const hashmap = new Map()
    let count = 0

    for(let i=0;i<jewels.length;i++){
        const jewel = jewels[i]
        hashmap.set(jewel,i)
    }

    for(let i=0;i<stones.length;i++){
        const stone = stones[i];
        if(hashmap.has(stone)) count++;
    }
    return count;
};