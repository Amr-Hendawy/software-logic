// JavaScript Debugging Challenge #069

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let result = function(a, b) {
  return a + b;
};
console.log(result(5));

// ==================== SOLUTION ====================
let result = function(a, b) {
  return a + b;
};
console.log(result(5, 10));

// ==================== EXPLANATION ====================
// // The second argument is missing, so b is undefined and the result is NaN.

// ==================== EXPECTED OUTPUT ====================
// 15
