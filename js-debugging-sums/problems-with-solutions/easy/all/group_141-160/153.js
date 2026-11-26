// JavaScript Debugging Challenge #153

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const getFullName = function(first, last) {
  return first + " " + last;
};
console.log("Incorrect result");

// ==================== SOLUTION ====================
const getFullName = function(first, last) {
  return first + " " + last;
};
console.log(getFullName("Ali", "Hassan"));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Ali Hassan
