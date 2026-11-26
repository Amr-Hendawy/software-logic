// JavaScript Debugging Challenge #059

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

for (let i = 10; i >= 1; i++) {
  console.log(i);
}

// ==================== SOLUTION ====================
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// ==================== EXPLANATION ====================
// // The counter must decrease while the condition requires it to stay at least 1.

// ==================== EXPECTED OUTPUT ====================
// 10 down to 1
