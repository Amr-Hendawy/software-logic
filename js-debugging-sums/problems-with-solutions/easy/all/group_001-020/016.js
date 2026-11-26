// JavaScript Debugging Challenge #016

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let isActive = 1;
if (isActive === true) console.log("Active");
else console.log("Inactive");

// ==================== SOLUTION ====================
let isActive = 1;
if (isActive == true) console.log("Active");
else console.log("Inactive");

// ==================== EXPLANATION ====================
// // For this exercise, 1 should be accepted as equivalent to true using loose equality. In production, prefer storing a boolean.

// ==================== EXPECTED OUTPUT ====================
// Active
