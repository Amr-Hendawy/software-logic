// JavaScript Debugging Challenge #078

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

console.log(age);
let age = 25;

// ==================== SOLUTION ====================
let age = 25;
console.log(age);

// ==================== EXPLANATION ====================
// // A let binding cannot be accessed before its initialization because it is in the temporal dead zone.

// ==================== EXPECTED OUTPUT ====================
// 25
