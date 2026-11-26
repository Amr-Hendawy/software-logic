// JavaScript Debugging Challenge #011

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let age = 18;
if (age > 18) console.log("Allowed");
else console.log("Not Allowed");

// ==================== SOLUTION ====================
let age = 18;
if (age >= 18) console.log("Allowed");
else console.log("Not Allowed");

// ==================== EXPLANATION ====================
// // The requirement includes age 18, so use >= rather than >.

// ==================== EXPECTED OUTPUT ====================
// Allowed
