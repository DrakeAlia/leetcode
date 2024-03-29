// Valid Parentheses:

// Given a string (s) containing just the characters '(', ')', '{', '}', '[' and ']', 
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
// (s) consists of parentheses only '()[]{}'

// if they are not equal to each other, return false

// otherwise if they are equal tot each other, just loop through.
// stack is now empty, move onto the next string

// if the stack has been emptied, we know we found all of the counterparts and if not then its going to return false

// exit the stack and return true

// GOAL:
// 1. initialize the stack data structure which is an array

// 2. loop through the values in the strings

// 3. extract string(s) at i and put in character(char) variable

// 4. if character is equal to an open bracket or equal to 
// an open curly bracket or equal to an open square curly bracket,
// then push() into stack with that value

// 5. else we need to get the previous value(preValue) which is going 
// to equal stack.pop() in order to pop off the stack because 
// stack data structure is last in first out 

// 6. if previous value(preValue) is equal to an open curly brace and the 
// character(char) that we are currently on does not equal a 
// closing brace then the open brackets are not being closed 
// in the correct order, return false 

// 7. return the emptied stack at the end
// (the string is all open brackets)

// Problem:
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
    // 1.
    let stack = []
    // 2.
    for (let i = 0; i < s.length; i++) {
        // 3.
        let char = s[i]
        // 4.
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
            // 5.
        } else {
            let preValue = stack.pop()
            // 6.
            if (preValue === "(" && char !== ")")
                return false
            if (preValue === "{" && char !== "}")
                return false
            if (preValue === "[" && char !== "]")
                return false
            if (preValue === undefined)
                return false
        }
        console.log(char)
    }
    // 7.
    return stack.length === 0
}


// *Stack* -  a stack is an abstract data type(stacks are just special 
// cases of lists) that serves as a collection of elements with two 
// main operations:
// (Push) which adds an element to the collection, and (Pop) which 
// removes the 
// most recently added element that was not yet removed
// The order in which elements come off a stack gives rise to its 
// alternative name LIFO(Last In, First Out)

// What identifies the data structure as a stack, in either case, is not the 
// implementation but the interface: the user is only allowed to pop or 
// push items onto the array or linked list, with few other helper operations.