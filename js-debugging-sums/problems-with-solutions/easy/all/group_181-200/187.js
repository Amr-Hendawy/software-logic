// JavaScript Debugging Challenge #187

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const values = [2, 5, 8];
const labels = values.filter(value => "No." + value);
console.log(labels[2]);

// ==================== SOLUTION ====================
const values = [2, 5, 8];
const labels = values.map(value => "No." + value);
console.log(labels[2]);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// No.8
