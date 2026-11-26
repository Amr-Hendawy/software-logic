// JavaScript Debugging Challenge #164

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let quantity = 0;
console.log(quantity || 1);

// ==================== SOLUTION ====================
let quantity = 0;
console.log(quantity ?? 1);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 0
