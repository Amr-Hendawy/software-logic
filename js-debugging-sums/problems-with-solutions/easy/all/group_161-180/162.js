// JavaScript Debugging Challenge #162

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let nickname = null;
console.log(nickname || "Anonymous");

// ==================== SOLUTION ====================
let nickname = null;
console.log(nickname ?? "Anonymous");

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// Anonymous
