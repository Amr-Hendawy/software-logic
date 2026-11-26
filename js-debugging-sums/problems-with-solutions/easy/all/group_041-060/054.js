// JavaScript Debugging Challenge #054

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let i = 10;
do {
  console.log(i);
  i++;
} while (i < 5);

// ==================== SOLUTION ====================
let i = 10;
while (i < 5) {
  console.log(i);
  i++;
}

// ==================== EXPLANATION ====================
// // do...while always executes its body once before checking the condition. Use while for a pre-check.

// ==================== EXPECTED OUTPUT ====================
// No output
