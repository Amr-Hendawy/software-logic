// JavaScript Debugging Challenge #061

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function multiply(a, b) {
  console.log(a * b);
}
let result = multiply(5, 4);
console.log(result);

// ==================== SOLUTION ====================
function multiply(a, b) {
  return a * b;
}
let result = multiply(5, 4);
console.log(result);

// ==================== EXPLANATION ====================
// // console.log displays a value but does not return it. The function must return the result for assignment.

// ==================== EXPECTED OUTPUT ====================
// 20
