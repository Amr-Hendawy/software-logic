// JavaScript Debugging Challenge #125

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let values = [2, 4, 6];
console.log(values[values.length]);

// ==================== SOLUTION ====================
let values = [2, 4, 6];
console.log(values[values.length - 1]);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 6
