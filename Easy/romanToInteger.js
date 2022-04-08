// Roman to Integer:

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

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

// Given a roman numeral, convert it to an integer.

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
// var romanToInt = function (s) {
//     // ....
// };


// Start:
var romanToInt = function (s) {
    var symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    var num = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) {
            num += symbols[s[i + 1]] - symbols[s[i]]
            i++
        } else if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
            num += symbols[s[i + 1]] - symbols[s[i]]
            i++
        } else if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
            num += symbols[s[i + 1]] - symbols[s[i]]
            i++
        } else {
            num += symbols[s[i]]
        }
    }
    return num
};


// Breakdown:
// 1. Make an array of key value pairs (I, V, X, L, C, D and M.)
// 2. Check to see if the key value pair has any specfic subtraction cases, if doesn't we just do simple adding but if it does then 
// we do the subtraction case
// 3. create a js object called symbols (var symbols) this will be a key value pair mapping 
// 4. loop through the array
// 5. if s[i] equals the roman numeral "I" and s[i +1] equals "V" (s[i] == "I" && (s[i + 1] == "V") or equals "X" (|| s[i + 1] == "X")
// 6. Implement our test case (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) and within it say num plus/equals (num +=) (symbols[s[i+1]])
// and minus the character ahead of it, (- symbols[s[i]]) and after that increment i (i++), 
// we want to increment again due to i + 1 being used, so we skipp the next character 