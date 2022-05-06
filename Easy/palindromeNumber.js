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


// var isPalindrome = function (x) {
//     //     1. y = reverse x 
//     //     2. compare x to y
//     //     3. if x == y 
//     //     4. return true
//     const arrNums = x.toString().split('')

//     // how many loops this do?
//     let count = 0
//     console.log(arrNums.length);

//     while (arrNums.length > 1) {
//         count = count + 1
//         if (arrNums.shift() !== arrNums.pop()) {
//             return false
//         }
//     }
//     console.log(count)
//     return true
// };

// // GOAL:
// // Create a new array (X)
// // Deconstruct array (X)
// // Reverse the array (X)
// // Compare the array ()
// // Index a array ()
// // Use .push() method (X)

var isPalindrome = function (x) {


    const numToString = x.toString()
    const numStringArray = numToString.split('')
    const reversedArray = []

    for (let i = numStringArray.length - 1; i >= 0; i--) {
        reversedArray.push(numStringArray[i])
    }


    // we want to compare the new array with the first array
    // convert reverseArray into string
    const reverseString = reversedArray.toString()

    // removes commas from reverseString 
    let reverseStringCleaned = reverseString.replace(/,/g, '');

    // compare reverseString to numToString
    // console.log(reverseStringCleaned === numToString)
    // return the results
    const ans = reverseStringCleaned === numToString
    return ans
}

const anotherAns = isPalindrome(123)


// const fuck = function () {
//     if (isPalindrome(111) === true) {
//         console.log('shit');
//     }
// }
// fuck()