// JavaScript Debugging Challenge #193

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let data = [1, 2, 3];
console.log("Incorrect result");

// ==================== SOLUTION ====================
let data = [1, 2, 3];
console.log(Array.isArray(data));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// true
