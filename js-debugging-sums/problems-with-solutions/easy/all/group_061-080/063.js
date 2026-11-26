// JavaScript Debugging Challenge #063

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(10));

// ==================== SOLUTION ====================
function calculateArea(width, height) {
  return width * height;
}
console.log(calculateArea(10, 5));

// ==================== EXPLANATION ====================
// // The missing height parameter is undefined, so multiplication produces NaN.

// ==================== EXPECTED OUTPUT ====================
// 50
