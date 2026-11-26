// JavaScript Debugging Challenge #132

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let result = "";
for (let i = 0; i < 4; i++) {
  result -= i;
}
console.log(result);

// ==================== SOLUTION ====================
let result = "";
for (let i = 0; i < 4; i++) {
  result += i;
}
console.log(result);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 0123
