// JavaScript Debugging Challenge #049

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let score = 95;
let grade = score >= 50 ? "Pass" : score >= 90 ? "Excellent" : "Fail";
console.log(grade);

// ==================== SOLUTION ====================
let score = 95;
let grade = score >= 90 ? "Excellent" : score >= 50 ? "Pass" : "Fail";
console.log(grade);

// ==================== EXPLANATION ====================
// // Check the more specific high-score condition before the broader passing condition.

// ==================== EXPECTED OUTPUT ====================
// Excellent
