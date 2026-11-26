// JavaScript Debugging Challenge #199

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let value = NaN;
console.log("Incorrect result");

// ==================== SOLUTION ====================
let value = NaN;
console.log(Number.isNaN(value));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// true
