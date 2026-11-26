// JavaScript Debugging Challenge #065

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

console.log(add(10, 20));
const add = function(a, b) {
  return a + b;
};

// ==================== SOLUTION ====================
const add = function(a, b) {
  return a + b;
};
console.log(add(10, 20));

// ==================== EXPLANATION ====================
// // A const-bound function expression cannot be accessed before initialization.

// ==================== EXPECTED OUTPUT ====================
// 30
