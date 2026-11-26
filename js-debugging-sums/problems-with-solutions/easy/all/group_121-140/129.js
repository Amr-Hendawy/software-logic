// JavaScript Debugging Challenge #129

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let data = [5, 10, 15];
data[0] -= data[2];
console.log(data[0]);

// ==================== SOLUTION ====================
let data = [5, 10, 15];
data[0] += data[2];
console.log(data[0]);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 20
