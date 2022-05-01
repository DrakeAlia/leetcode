// Palindrome Number:

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

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

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    //     1. y = reverse x 
    //     2. compare x to y
    //     3. if x == y 
    //     4. return true
    const arrNums = x.toString().split('')

    // how many loops this do?
    let count = 0
    console.log(arrNums.length);

    while (arrNums.length > 1) {
        count = count + 1
        if (arrNums.shift() !== arrNums.pop()) {
            return false
        }
    }
    console.log(count)
    return true
};

// // GOAL:
// // Create a new array (X)
// // Deconstruct array (X)
// // Reverse the array (X)
// // Compare the array ()
// // Index a array ()
// // Use .push() method (X)

// var isPalindrome = function (x) {

//     const arr = x.toString().split('')
//     const arr2 = []
//     console.log(arr)

//     // how many loops does this do?
//     // let count = 0

//     for (let i = arr.length - 1; i >= 0; i--) {
//         arr2.push(arr[i])
//     }

//     // console.log(count)
//     console.log(arr2)
// }

// isPalindrome(123);