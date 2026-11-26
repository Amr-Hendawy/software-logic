// JavaScript Debugging Challenge #035

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [10, 20, 30];
let result = numbers.pop();
console.log(result.length);

// ==================== SOLUTION ====================
let numbers = [10, 20, 30];
let result = numbers.pop();
console.log(result);
console.log(numbers.length);

// ==================== EXPLANATION ====================
// // pop returns the removed element (30), not the array. The remaining array has length 2.

// ==================== EXPECTED OUTPUT ====================
// 30\n2
