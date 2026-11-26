// JavaScript Debugging Challenge #066

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

console.log(subtract(20, 5));
const subtract = function(a, b) {
  return a - b;
};

// ==================== SOLUTION ====================
console.log(subtract(20, 5));
function subtract(a, b) {
  return a - b;
}

// ==================== EXPLANATION ====================
// // Function declarations are hoisted with their function body; const function expressions are not callable before initialization.

// ==================== EXPECTED OUTPUT ====================
// 15
