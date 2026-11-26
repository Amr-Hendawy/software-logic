// JavaScript Debugging Challenge #051

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

for (let i = 1; i <= 5; i--) {
  console.log(i);
}

// ==================== SOLUTION ====================
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// ==================== EXPLANATION ====================
// // The counter must increase to reach the upper limit; decrementing causes an endless loop.

// ==================== EXPECTED OUTPUT ====================
// 1\n2\n3\n4\n5
