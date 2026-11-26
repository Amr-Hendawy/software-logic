// JavaScript Debugging Challenge #159

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const calculate = function(a, b, c) {
  return a + b + c;
};
console.log("Incorrect result");

// ==================== SOLUTION ====================
const calculate = function(a, b, c) {
  return a + b + c;
};
console.log(calculate(2, 3, 4));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 9
