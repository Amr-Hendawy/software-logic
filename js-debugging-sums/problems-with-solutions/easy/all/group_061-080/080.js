// JavaScript Debugging Challenge #080

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let value = 10;
if (true) {
  let value = 20;
  value += 5;
}
console.log(value);

// ==================== SOLUTION ====================
let value = 10;
if (true) {
  value += 15;
}
console.log(value);

// ==================== EXPLANATION ====================
// // The inner let creates a different binding. Update the outer variable directly when that is the requirement.

// ==================== EXPECTED OUTPUT ====================
// 25
