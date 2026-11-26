// JavaScript Debugging Challenge #147

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let status = "pending";
console.log(status !== "done" ? "Completed" : "Waiting");

// ==================== SOLUTION ====================
let status = "pending";
console.log(status === "done" ? "Completed" : "Waiting");

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// Waiting
