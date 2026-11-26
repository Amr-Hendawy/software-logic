// JavaScript Debugging Challenge #190

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const numbers = [10, 20, 30];
const increased = numbers.filter(number => number + 5);
console.log(increased.join(" "));

// ==================== SOLUTION ====================
const numbers = [10, 20, 30];
const increased = numbers.map(number => number + 5);
console.log(increased.join(" "));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 15 25 35
