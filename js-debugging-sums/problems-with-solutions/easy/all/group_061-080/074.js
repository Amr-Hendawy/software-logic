// JavaScript Debugging Challenge #074

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const tax = 0.14;
tax = 0.20;
console.log(tax);

// ==================== SOLUTION ====================
let tax = 0.14;
tax = 0.20;
console.log(tax);

// ==================== EXPLANATION ====================
// // A const binding cannot be reassigned. Use let when the binding must change.

// ==================== EXPECTED OUTPUT ====================
// 0.2
