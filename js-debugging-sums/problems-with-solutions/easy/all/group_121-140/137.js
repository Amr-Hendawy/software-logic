// JavaScript Debugging Challenge #137

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let total = 0;
for (let i = 1; i <= 6; i++) {
  if (i / 2 === 0) total += i;
}
console.log(total);

// ==================== SOLUTION ====================
let total = 0;
for (let i = 1; i <= 6; i++) {
  if (i % 2 === 0) total += i;
}
console.log(total);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 12
