// JavaScript Debugging Challenge #107

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let points = 7;
points -= 3;
points /= 2;
console.log(points);

// ==================== SOLUTION ====================
let points = 7;
points += 3;
points /= 2;
console.log(points);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 5
