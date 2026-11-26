// JavaScript Debugging Challenge #128

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let letters = ["a", "b", "c", "d"];
console.log(letters.slice(1, 2).join(""));

// ==================== SOLUTION ====================
let letters = ["a", "b", "c", "d"];
console.log(letters.slice(1, 3).join(""));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// bc
