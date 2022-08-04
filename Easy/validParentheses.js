// Valid Parentheses

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
// 3. extract string at i and put in character variable
// 4. if character is equal to an open bracket or equal to 
// an open curly bracket or equal to an open square curly bracket,
// then push() into stack with that value
// 5. else we need to get the previous value else which going 
// to equal stack.pop(), going to pop off the stack because 
// stack data structure is last in first out 
// 6. create a number of cases,
// 7. if previous value is equal to an open curly brace and the 
// character that we are currently on does not equal a 
// closing brace then the open brackets are not being closed 
// in the correct order, return false 
// 9. return the emptied stack at the end(the string is all open brackets)

// Problem:
/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {

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