// JavaScript Debugging Challenge #158

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function getFirst(arr) {
  return arr[0];
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
function getFirst(arr) {
  return arr[0];
}
console.log(getFirst(["HTML", "CSS", "JS"]));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// HTML
