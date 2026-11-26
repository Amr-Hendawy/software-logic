// JavaScript Debugging Challenge #194

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let value = null;
console.log(value !== null);

// ==================== SOLUTION ====================
let value = null;
console.log(value === null);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// true
