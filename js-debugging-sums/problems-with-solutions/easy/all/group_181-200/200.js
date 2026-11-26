// JavaScript Debugging Challenge #200

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [1, 2, 3];
console.log("Incorrect result");

// ==================== SOLUTION ====================
let numbers = [1, 2, 3];
console.log(numbers.join("-"));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 1-2-3
