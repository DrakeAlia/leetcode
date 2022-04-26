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



// var isPalindrome = function (x) {
//     console.log(x)
//     // 0. arrayify x [1,2,3]

//     // created an array for x
//     // convert the values of x inside the array to a string
//     // split the string into a order of strings inside the array 
//     const arrNums = x.toString().split('')
//     console.log(arrNums)

//     // point at the last item of x 
//     // store that item
//     // check if there is an item to the left it
//     // if there is, point to that item
//     // store that item
//     // if there is, point to that item
//     // store that item
//     // if there is, point to that item
//     // store that item 
//     // if there no item is left, break out

//     while (arrNums.length > 1) {
//         // 2. compare x to y
//         // 3. if x == y
//         // check to see if the front of the array is equal to the 
//         // back of the array
//         if (arrNums.shift() !== arrNums.pop()) {

//             return false
//         }
//     }

//     return true
// }
// isPalindrome(123)