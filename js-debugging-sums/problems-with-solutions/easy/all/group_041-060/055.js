// JavaScript Debugging Challenge #055

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let i = 0;
while (i < 5) {
  if (i === 2) continue;
  console.log(i);
  i++;
}

// ==================== SOLUTION ====================
let i = 0;
while (i < 5) {
  if (i === 2) {
    i++;
    continue;
  }
  console.log(i);
  i++;
}

// ==================== EXPLANATION ====================
// // continue skips the increment below it. Increment before continuing to avoid an infinite loop.

// ==================== EXPECTED OUTPUT ====================
// 0\n1\n3\n4
