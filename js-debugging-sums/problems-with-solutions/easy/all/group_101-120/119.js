// JavaScript Debugging Challenge #119

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let code = "A7B9";
console.log(code.startsWith("A") && code.length !== 4);

// ==================== SOLUTION ====================
let code = "A7B9";
console.log(code.startsWith("A") && code.length === 4);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// true
