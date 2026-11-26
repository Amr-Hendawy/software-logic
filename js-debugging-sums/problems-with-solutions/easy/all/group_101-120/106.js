// JavaScript Debugging Challenge #106

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let a = 12;
let b = 8;
console.log("Incorrect result");

// ==================== SOLUTION ====================
let a = 12;
let b = 8;
console.log(a >= b && b !== 8);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// false
