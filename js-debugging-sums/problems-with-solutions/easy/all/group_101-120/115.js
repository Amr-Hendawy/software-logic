// JavaScript Debugging Challenge #115

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let title = "frontend developer";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let title = "frontend developer";
console.log(title.includes("end"));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// true
