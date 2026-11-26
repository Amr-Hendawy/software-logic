// JavaScript Debugging Challenge #152

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const multiply = (a, b) => a / b;
console.log(multiply(4, 6));

// ==================== SOLUTION ====================
const multiply = (a, b) => a * b;
console.log(multiply(4, 6));

// ==================== EXPLANATION ====================
// The arithmetic operation is incorrect. The solution uses the correct operator for the required calculation.

// ==================== EXPECTED OUTPUT ====================
// 24
