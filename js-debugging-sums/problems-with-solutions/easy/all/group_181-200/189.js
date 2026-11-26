// JavaScript Debugging Challenge #189

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const numbers = [1, 2, 3, 4, 5];
const even = numbers.map(number => number % 2 === 0);
console.log(even.join("-"));

// ==================== SOLUTION ====================
const numbers = [1, 2, 3, 4, 5];
const even = numbers.filter(number => number % 2 === 0);
console.log(even.join("-"));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 2-4
