// JavaScript Debugging Challenge #139

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let count = 0;
for (let i = 1; i <= 10; i++) {
  if (i !== 5) continue;
  count++;
}
console.log(count);

// ==================== SOLUTION ====================
let count = 0;
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  count++;
}
console.log(count);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 9
