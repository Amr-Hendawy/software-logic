// JavaScript Debugging Challenge #015

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let score = 50;
let bonus = 10;
score -= bonus;
console.log(score);

// ==================== SOLUTION ====================
let score = 50;
let bonus = 10;
score += bonus;
console.log(score);

// ==================== EXPLANATION ====================
// // A bonus must be added, not subtracted.

// ==================== EXPECTED OUTPUT ====================
// 60
