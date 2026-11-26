// JavaScript Debugging Challenge #097

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [10, 20, 30];
let result = numbers.map((number, index) => {
  return index * 2;
});
console.log(result);

// ==================== SOLUTION ====================
let numbers = [10, 20, 30];
let result = numbers.map((number, index) => {
  return number * 2;
});
console.log(result);

// ==================== EXPLANATION ====================
// // The first callback argument is the element and the second is its index. Multiply the element.

// ==================== EXPECTED OUTPUT ====================
// [ 20, 40, 60 ]
