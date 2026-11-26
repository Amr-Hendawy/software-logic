// JavaScript Debugging Challenge #113

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let word = "programming";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let word = "programming";
console.log(word.slice(0, 7));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// program
