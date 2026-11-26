// JavaScript Debugging Challenge #033

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [10, 20, 30];
for (let i = 0; i <= numbers.length; i++) {
  console.log(numbers[i]);
}

// ==================== SOLUTION ====================
let numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// ==================== EXPLANATION ====================
// // The final valid index is length - 1. Using <= reads one undefined value after the last element.

// ==================== EXPECTED OUTPUT ====================
// 10\n20\n30
