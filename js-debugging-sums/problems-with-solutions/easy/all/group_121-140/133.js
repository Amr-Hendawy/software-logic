// JavaScript Debugging Challenge #133

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let count = 5;
while (count > 2) {
  count--;
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
let count = 5;
while (count > 2) {
  count--;
}
console.log(count);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 2
