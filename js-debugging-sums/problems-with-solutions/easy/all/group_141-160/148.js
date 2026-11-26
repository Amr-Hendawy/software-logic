// JavaScript Debugging Challenge #148

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let x = 0;
console.log(x === 0 ?? x > 10);

// ==================== SOLUTION ====================
let x = 0;
console.log(x === 0 || x > 10);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// true
