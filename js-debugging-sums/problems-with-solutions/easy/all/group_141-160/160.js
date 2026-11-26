// JavaScript Debugging Challenge #160

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function makeCounter(start) {
  let count = start;
  count -= 1;
  return count;
}
console.log(makeCounter(10));

// ==================== SOLUTION ====================
function makeCounter(start) {
  let count = start;
  count += 1;
  return count;
}
console.log(makeCounter(10));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 11
