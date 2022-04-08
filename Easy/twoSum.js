// Two Sum:

// Given an array of integers nums and an integer target, return indices of 
// the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and 
// you may not use the same element twice.

// You can return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// Problem:
// var twoSum = function (nums, target) {
//     // ....
// };

// Start:
var twoSum = function (nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let num1 = nums[i];
        let num2 = target - num1;
        if (map.has(num2)) {
            return [i, map.get(num2)]
        }
        map.set(num1, i);
    }
};

// Breakdown:
// Use a hash map for this problem, It'll store what we've seen so far and later recall if we have seen that particular num
// So for the first example, were at (2) and the mssing number is (7), How do we know that because the target (9) minus the current num is (7)
// We're gonna ask the map have we seen (7) before? it'll say no and we just want to add this current num (2) and it's index to the map
// In case we do see (7) we recall that we've seen the 7th pair before, so were just gonna to return those indices

// 1. let map equal new map (let map = new Map())
// 2. loop through this array starting at 0, until the end of this array and increment each time because we're checking 
// each value until we find our mssing value (for (let i = 0; i < nums.length; i++))
// 3. Gonna say num1 is equal nums at i (let num1 = nums[i];)
// 4. Then say num2, the num were looking for is going to be the target minus num1 (let num2 = target - num1;)
// 5. Then we're going to ask the map if it has this num2 (if (map.has(num2)))
// 6. And now we're going to return an array with the first index and the index of the second num, 
// so we're going ask the map to get us that second num's index. Because we store the num and its index (return [i, map.get(num2)])
// 7. if we haven't seen it then we're just going to set in the map, the first num/current num that we're at and its index, 
// that way we can recall it later and have the map return it to use in case we find the other pair (map.set(num1, i))

// The time complexity here we be 0(n) because we are looping through each number

// Input: [2, 7, 11, 15, 9]
// Output: [1, 0]
// Expected: [0, 1]




// Example 1:
// We have 2 and 7 which adds up to 9, so we return 0 and 1

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].


// Example 2:
// Can't use the same el twice, so we can't say 3 and 3. We have to use 2 and 4, 
// those indices are 1 and 2

// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]


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