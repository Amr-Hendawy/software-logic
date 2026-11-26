// JavaScript Debugging Challenge #092

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [0, 1, 2, 3, 4];
let result = numbers.filter(number => {
  return number;
});
console.log(result);

// ==================== SOLUTION ====================
let numbers = [0, 1, 2, 3, 4];
let result = numbers.filter(number => {
  return number % 2 === 0;
});
console.log(result);

// ==================== EXPLANATION ====================
// // The original filter keeps truthy numbers and removes zero. The intended predicate is evenness.

// ==================== EXPECTED OUTPUT ====================
// [ 0, 2, 4 ]
