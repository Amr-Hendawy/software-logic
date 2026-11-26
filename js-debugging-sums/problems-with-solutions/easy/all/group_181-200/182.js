// JavaScript Debugging Challenge #182

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const nums = [3, 6, 9, 12];
const filtered = nums.map(n => n > 6);
console.log(filtered.join(","));

// ==================== SOLUTION ====================
const nums = [3, 6, 9, 12];
const filtered = nums.filter(n => n > 6);
console.log(filtered.join(","));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 9,12
