// JavaScript Debugging Challenge #057

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum = 0;
  sum += i;
}
console.log(sum);

// ==================== SOLUTION ====================
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log(sum);

// ==================== EXPLANATION ====================
// // Resetting the accumulator each iteration discards the previous total. Initialize it before the loop.

// ==================== EXPECTED OUTPUT ====================
// 15
