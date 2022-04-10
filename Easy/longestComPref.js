// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ""

// Example 1:
// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower -case English letters.

// Problem:
// var longestCommonPrefix = function (strs) {
//     // ...
// };

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return prefix;
            }
        }
        prefix += strs[0][i]
    }
    return prefix
};


// Breakdown:
// 1. Create prefix variable as an empty string
// 2. Loop over the string of first index
// 3. Loop over the rest of the strs array
// 4. Compare the character from outer loop with inner loop
// 5. If (strs) doesn't equal (!==) (strs[j][i]), return prefix
// 6. Concate prefix with outer loop variable if does make it out of the outer loop
// 7. Return the prefix

// time complexity: 0(n * m)?
// space complexity: 0(n^2)