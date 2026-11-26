// JavaScript Debugging Challenge #098

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [10, 50, 20, 80, 30];
let result = numbers.filter((number, index) => {
  return index > 20;
});
console.log(result);

// ==================== SOLUTION ====================
let numbers = [10, 50, 20, 80, 30];
let result = numbers.filter((number, index) => {
  return number > 20;
});
console.log(result);

// ==================== EXPLANATION ====================
// // The requirement compares element values, not their indexes.

// ==================== EXPECTED OUTPUT ====================
// [ 50, 80, 30 ]
