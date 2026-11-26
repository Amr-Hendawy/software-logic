// JavaScript Debugging Challenge #091

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [1, 2, 3, 4];
let result = numbers.map(number => {
  number * 2;
});
console.log(result);

// ==================== SOLUTION ====================
let numbers = [1, 2, 3, 4];
let result = numbers.map(number => {
  return number * 2;
});
console.log(result);

// ==================== EXPLANATION ====================
// // A block-bodied arrow callback needs return. Otherwise map receives undefined for each item.

// ==================== EXPECTED OUTPUT ====================
// [ 2, 4, 6, 8 ]
