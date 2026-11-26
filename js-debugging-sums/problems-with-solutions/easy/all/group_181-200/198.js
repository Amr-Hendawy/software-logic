// JavaScript Debugging Challenge #198

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let result = typeof [];
console.log("Incorrect result");

// ==================== SOLUTION ====================
let result = typeof [];
console.log(result);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// object
