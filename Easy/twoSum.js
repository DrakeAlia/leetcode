// Two Sum:
// Given an array of integers nums and an integer target, return indices of 
// the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and 
// you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// Example 2:

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]
// Explanation: Can't use the same element twice, so we can't say 3 and 3. 
// We have to use 2 and 4, those indices are 1 and 2


// Example 3:

// Input: nums = [3, 3], target = 6
// Output: [0, 1]


// Constraints:
// 2 <= nums.length <= 10^4
// - 10^9 <= nums[i] <= 10^9
// - 10^9 <= target <= 10^9
// Only one valid answer exists.

// Follow - up: Can you come up with an algorithm that is less than O(n2) 
// time complexity ?

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// GOAL:
// 1. create an empty output array ?
// 2. iterate over each of the  elements in our array 
// with a loop
// 3. create another loop to look for the value that is 
// equal to our target if we sum both numbers
// 4. return the indices in our empty output array
// i = first pointer
// j = second poitner
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
        // -> console.log(nums[i, j]) X
                console.log([i,j])
                return [i, j]
            }
        }
    }
};
twoSum([2, 7, 11, 15], 9)
// test case:
// nums = [2,7,11,15]
// target = 9

// nums = [3,2,4]
// target = 6

// nums = [3,3]
// target = 6
