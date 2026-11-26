// JavaScript Debugging Challenge #196

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let amount = 0;
console.log(amount || 100);

// ==================== SOLUTION ====================
let amount = 0;
console.log(amount ?? 100);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 0
