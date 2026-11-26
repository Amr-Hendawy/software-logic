// JavaScript Debugging Challenge #181

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const nums = [1, 2, 3, 4];
const doubled = nums.filter(n => n * 2);
console.log(doubled.join(","));

// ==================== SOLUTION ====================
const nums = [1, 2, 3, 4];
const doubled = nums.map(n => n * 2);
console.log(doubled.join(","));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 2,4,6,8
