// Palindrome Number:

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same 
// backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and 
// from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads - 121. 
// From right to left, 
// it becomes 121 -.Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left.Therefore it 
// is not 
// a palindrome.

// Constraints:

// -2^31 <= x <= 2^31 - 1
// Follow up: Could you solve it without converting the 
// integer to a string ?

/**
 * @param {number} x
 * @return {boolean}
 */

// GOAL:
// 1. Convert the numbers into strings, using toString() 
// method (X)
// 2. Put the strings into an array, using split() method (X)
// 3. Create a new array (X)
// 4. Deconstruct the first array (X)
// 5. Reverse the first array (X)
// 6. Use .push() method to push in new elements in 
// the new array (X)
// 7. Convert the new array numbers into strings (X)
// 8. Use .replace() method to remove the commas in 
// reverse array (X)
// 9. Compare the arrays (X)
// ---> Instead of comparing them as arrays, compare the 
// two as strings <---
// 10. Return the results as a boolean(true/false) (X)

var isPalindrome = function (x) {
    
    // 1. Convert the numbers into strings
    const numToString = x.toString()
    // 2. Put the strings into an array
    const numStringArray = numToString.split('')
    // 3. Create a new array 
    const reversedArray = []
    
    // 4. & 5. Iterate over the the first array in reverse order 
    for (let i = numStringArray.length - 1; i >= 0; i--) {
        // 6. Use .push() method to push in new elements in 
        // the new array (X)
        reversedArray.push(numStringArray[i])
    }
    
    // We want to compare the new array with the first array
    // 7. Convert reverseArray into strings
    const reverseString = reversedArray.toString()
    
    // 8. Remove commas from reverseString
    let reverseStringCleaned = reverseString.replace(/,/g, '');
    
    // 9. Compare reverseString to numToString
    // console.log(reverseStringCleaned === numToString)
    // 10. Return the results/answers
    const ans = reverseStringCleaned === numToString
    return ans
}
// isPalindrome(123)


// Alternative answer:

const anotherAns = isPalindrome(123)

// const fuck = function () {
    //     if (isPalindrome(111) === true) {
        //         console.log('shit');
        //     }
        // }
        // fuck()
        
        // Time Complexity: 0(n) linear time
        // Space Complexity:
        
        
        var twoSum = function (nums, target) {
            // const output = []
            
            for (let i = 0; i < nums.length; i++) {
                for (let j = i + 1; j < nums.length; j++) {
                }
            }
        };
        // return output
        
        twoSum()
        
        // i = first pointer
        // j = second poitner
        
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