// JavaScript Debugging Challenge #102

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let score = 17;
score -= 5;
score *= 2;
score -= 6;
console.log(score);

// ==================== SOLUTION ====================
let score = 17;
score -= 5;
score *= 2;
score += 6;
console.log(score);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 30
