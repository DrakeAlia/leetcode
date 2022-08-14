// Roman to Integer:

// Given a roman numeral, convert it to an integer.
// Roman numerals are represented by seven different symbols: 
// I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, 
// which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII.Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.The same principle applies to the number nine, 
// which is written as IX.There are six instances where subtraction is used:

// I can be placed before V(5) and X(10) to make 4 and 9. !!!!
// X can be placed before L(50) and C(100) to make 40 and 90.  !!!!!
// C can be placed before D(500) and M(1000) to make 400 and 900. !!!!!!

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.

// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V = 5, III = 3.

// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.


// Constraints:

// 1 <= s.length <= 15
// s contains only the characters('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range[1, 3999]


// Problem:
/**
 * @param {string} s
 * @return {number}
 */

// GOAL:
// 1. map each symbol to its value

// 2. create a variable that represents the roman numeral converted
// into a integer and its total

// 3. loop over the symbols in order convert the numerals into 
// integers

// 4. if the current value is less then the next value 
// then the larger value is subtracted by the smaller
// value and its result is added to the total

// 5. otherwise add the numerals together

// 6. return the total at the end of the order

var romanToInt = function (s) {
    // 1. 
    const symbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    // 2.
    let total = 0
    // 3. 
    for (let i = 0; i < s.length; i++) {
        // 4.
        if (symbol[s[i]] < symbol[s[i + 1]]) {
            total -= symbol[s[i]]
        }
        // 5.
        else {
            total += symbol[s[i]]
        }
        console.log(total)
    }
    // 6.
    return total
};
romanToInt("III")

// "III"
// "LVIII"
// "MCMXCIV"




