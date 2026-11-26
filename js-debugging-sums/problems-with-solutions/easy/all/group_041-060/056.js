// JavaScript Debugging Challenge #056

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

for (let i = 1; i <= 5; i++) {
  if (i > 0) break;
  console.log(i);
}

// ==================== SOLUTION ====================
for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) break;
}

// ==================== EXPLANATION ====================
// // The original condition is true immediately, so the loop exits before printing. Print first and stop at 3.

// ==================== EXPECTED OUTPUT ====================
// 1\n2\n3
