// JavaScript Debugging Challenge #140

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let result = 1;
for (let i = 1; i <= 3; i++) {
  result *= 2;
}
console.log("Incorrect result");

// ==================== SOLUTION ====================
let result = 1;
for (let i = 1; i <= 3; i++) {
  result *= 2;
}
console.log(result);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 8
