// JavaScript Debugging Challenge #156

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const square = number => number ** 2;
console.log("Incorrect result");

// ==================== SOLUTION ====================
const square = number => number ** 2;
console.log(square(9));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 81
