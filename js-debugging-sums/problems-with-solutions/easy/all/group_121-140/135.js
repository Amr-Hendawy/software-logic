// JavaScript Debugging Challenge #135

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let sum = 0;
for (let i = 2; i <= 10; i -= 2) {
  sum += i;
}
console.log(sum);

// ==================== SOLUTION ====================
let sum = 0;
for (let i = 2; i <= 10; i += 2) {
  sum += i;
}
console.log(sum);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 30
