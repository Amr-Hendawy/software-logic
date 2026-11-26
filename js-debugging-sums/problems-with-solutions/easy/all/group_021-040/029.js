// JavaScript Debugging Challenge #029

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let firstNumber = "10";
let secondNumber = "20";
let result = firstNumber + secondNumber;
console.log(result);

// ==================== SOLUTION ====================
let firstNumber = "10";
let secondNumber = "20";
let result = Number(firstNumber) + Number(secondNumber);
console.log(result);

// ==================== EXPLANATION ====================
// // Two strings joined with + are concatenated. Convert both to numbers for arithmetic.

// ==================== EXPECTED OUTPUT ====================
// 30
