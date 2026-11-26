// JavaScript Debugging Challenge #105

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let temperature = 30;
console.log("Incorrect result");

// ==================== SOLUTION ====================
let temperature = 30;
console.log(temperature < 20 ? "Cold" : "Hot");

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Hot
