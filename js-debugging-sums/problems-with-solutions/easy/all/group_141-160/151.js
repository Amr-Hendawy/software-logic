// JavaScript Debugging Challenge #151

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function add(a, b) {
  return a - b;
}
console.log(add(7, 5));

// ==================== SOLUTION ====================
function add(a, b) {
  return a + b;
}
console.log(add(7, 5));

// ==================== EXPLANATION ====================
// The arithmetic operator is incorrect. Restore the operator used in the solution.

// ==================== EXPECTED OUTPUT ====================
// 12
