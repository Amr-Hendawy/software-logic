// JavaScript Debugging Challenge #052

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// ==================== SOLUTION ====================
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// ==================== EXPLANATION ====================
// // Incrementing by two skips every other number. Use i++ to visit every integer.

// ==================== EXPECTED OUTPUT ====================
// 1 through 10
