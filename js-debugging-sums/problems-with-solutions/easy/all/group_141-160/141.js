// JavaScript Debugging Challenge #141

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let age = 20;
console.log("Incorrect result");

// ==================== SOLUTION ====================
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Adult
