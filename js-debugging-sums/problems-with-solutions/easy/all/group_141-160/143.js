// JavaScript Debugging Challenge #143

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let n = 9;
if (n > 0 && n / 2 !== 0) {
  console.log("Positive odd");
} else {
  console.log("Other");
}

// ==================== SOLUTION ====================
let n = 9;
if (n > 0 && n % 2 !== 0) {
  console.log("Positive odd");
} else {
  console.log("Other");
}

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// Positive odd
