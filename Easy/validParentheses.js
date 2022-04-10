// Valid Parentheses

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

// Example 3:
// Input: s = "(]"
// Output: false

// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'

/**
 * @param {string} s
 * @return {boolean}
 */
// Start:
var isValid = function (s) {
    const hashMap = { "(": ")", "{": "}", "[": "]" }
    const stack = []
    for (let ch of s) {
        if (hashMap[ch]) {
            stack.push(hashMap[ch])
        } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
            stack.pop()
        } else {
            return false
        }
    }
    return stack.length === 0
}

// Breakdown:
// If we have just the closing bracket without a mactching opening brackets, then it's not valid. ")" => invalid!
// Likewise if we have an opening bracket without a matching closing bracket then it won't be valid either.
// "(" => invalid!
// In the next ex we have an opening bracket and a closing bracket but they are of two different types, 
// so since the types do not match we will also be invalid. "(]" => invalid!
// And in this ex we have a pair of every type of brackets, in this case this string is valid. "()[]{}" => valid!
// And this ex is also valid, since every open bracket has a matching closing bracket and the order is correct. 
// "([]){}" => valid!

// We'll use the data structure called stack, in stack we can insert an el to the end and remove an el 
// from the end of the stack in constant time. 
// In Js, we can use an array as a stack. we take the input string and then iterate  through every single ch in the str.
// When we come across an opening bracket we would push the matching closing bracket onto 
// the stack moving on to the next ch. Once we have an opening bracket we push the corresponding closing bracket

// 1. First define a hashmap,the keys in the hashmap are the opening brackets and 
// the values are their corresponding closing brackets. const hasMap = { "(": ")", "{": "}", "[": "]" }
// 2. Need to define our stack. const stack = []
// 3. Now we are ready to iterate through the characters of the string, we do with the for loop for(let ch of s)
// 4. First we will check to see if my ch is an opening bracket then it will be a key in our hash map, 
// so this conditional should produce a truthy value. if (hashMap[ch]) 
// 5. We will push the matching closing bracket onto the stack and look up the matching closing 
// bracket in the hashmap. stack.push(hashMap[ch])
// 6. If our ch is not an opening bracket it must be a closing bracket so we need to check wheather the 
// stack has a matching bracket at the end of it, first we need to make sure that the stack is not empty and 
// then we will look up the last el in the stack and if it's equal to my ch. 
// else if (stack.length > 0 && stack[stack.length - 1] === ch)
// 7. Then we have a matching pair so we can pop the last el from the stack, 
// the ch is a closing bracket and the top of the stack matches. stack.pop()
// 8. And for the last else statement, the ch will be a closing bracket and 
// the top of the stack will not match the ch, in this case we have an invalid string
//  meaing we can return false. else { return false }
// 9. Once we have gone through all the characters in the string, we can check if the stack is empty 
// then we know our str is valid and if stack has some characters left over we know that there's some 
// open brackets left over that haven't been matched. return stack.length === 0

// time complexity: 0(N) linear - since we need to iterate over a single character in the string
// space complexity: 0(N) linear - suppose that the string is made up of only opening brackets then the 
// stack will end up having the size equal to the string. 