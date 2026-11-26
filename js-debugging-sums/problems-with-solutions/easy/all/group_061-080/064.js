// JavaScript Debugging Challenge #064

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const square = number => {
  number * number;
};
console.log(square(5));

// ==================== SOLUTION ====================
const square = number => {
  return number * number;
};
console.log(square(5));

// ==================== EXPLANATION ====================
// // A block-bodied arrow function needs an explicit return statement.

// ==================== EXPECTED OUTPUT ====================
// 25
