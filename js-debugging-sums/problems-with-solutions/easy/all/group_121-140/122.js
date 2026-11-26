// JavaScript Debugging Challenge #122

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [4, 8, 12];
numbers.pop();
console.log("Incorrect result");

// ==================== SOLUTION ====================
let numbers = [4, 8, 12];
numbers.pop();
console.log(numbers.join("-"));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 4-8
