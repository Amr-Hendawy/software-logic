// JavaScript Debugging Challenge #163

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let score;
console.log(score || 0);

// ==================== SOLUTION ====================
let score;
console.log(score ?? 0);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 0
