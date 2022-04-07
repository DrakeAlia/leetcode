// Palindrome Number:

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

/**
 * @param {number} x
 * @return {boolean}
 */
// 
// The Problem:
// var isPalindrome = function (x) {
//     // ....
// };

// Start:
var isPalindrome = function (x) {
    let reversed = x.toString().split('').reverse().join('');
    return (x.toString() === reversed)
};




// Breakdown:
// 1. Start by setting reversed (let reversed) to the input of (x)
// 2. Then I'm going to convert it to a string (x.toString())
// 3. I'm going to split it (.split(''))
// 4. Then I'm going to reverse it (.reverse())
// 5. And then I'm going to join it (.join(''))
// this is how you get a string and you reverse the string
// 6. Now I need to take this reverse string and compare it to the input x
// 7. To do that I say x.toString and just compare it/see if it's equal to reverse
// 8. And by saying return, it'll give me a true or false
// It should run with these results:

// Input: 121
// Output: true
// Expected: true


// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and 
// from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. From right to left, 
// it becomes 121 -.Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it is not 
// a palindrome.

// Constraints:

// -2^31 <= x <= 2^31 - 1
// Follow up: Could you solve it without converting the integer to a string ?
