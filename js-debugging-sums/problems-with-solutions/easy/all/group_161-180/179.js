// JavaScript Debugging Challenge #179

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const scores = { Ali: 80, Sara: 95 };
let key = "Sara";
console.log("Incorrect result");

// ==================== SOLUTION ====================
const scores = { Ali: 80, Sara: 95 };
let key = "Sara";
console.log(scores[key]);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 95
