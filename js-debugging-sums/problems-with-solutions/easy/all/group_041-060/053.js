// JavaScript Debugging Challenge #053

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let i = 1;
while (i > 10) {
  console.log(i);
  i++;
}

// ==================== SOLUTION ====================
let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// ==================== EXPLANATION ====================
// // The original condition is false before the first iteration. Use a condition matching the intended range.

// ==================== EXPECTED OUTPUT ====================
// 1 through 10
