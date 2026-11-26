// JavaScript Debugging Challenge #058

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let number = 5;
for (let i = 1; i <= 5; i++) {
  console.log(number + i);
}

// ==================== SOLUTION ====================
let number = 5;
for (let i = 1; i <= 5; i++) {
  console.log(number * i);
}

// ==================== EXPLANATION ====================
// // A multiplication table requires multiplication, not addition.

// ==================== EXPECTED OUTPUT ====================
// 5\n10\n15\n20\n25
