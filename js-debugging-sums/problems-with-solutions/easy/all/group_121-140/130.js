// JavaScript Debugging Challenge #130

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let stack = [1, 2, 3];
let removed = stack.pop();
console.log("Incorrect result");

// ==================== SOLUTION ====================
let stack = [1, 2, 3];
let removed = stack.pop();
console.log(removed + stack.length);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 5
