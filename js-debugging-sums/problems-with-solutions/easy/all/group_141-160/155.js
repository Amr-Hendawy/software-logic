// JavaScript Debugging Challenge #155

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function isEven(number) {
  return number / 2 === 0;
}
console.log(isEven(14));

// ==================== SOLUTION ====================
function isEven(number) {
  return number % 2 === 0;
}
console.log(isEven(14));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// true
