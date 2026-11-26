// JavaScript Debugging Challenge #017

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let quantity = 0;
if (quantity) console.log("Quantity Available");
else console.log("No Quantity");

// ==================== SOLUTION ====================
let quantity = 0;
if (quantity >= 0) console.log("Quantity Available");
else console.log("Invalid Quantity");

// ==================== EXPLANATION ====================
// // Zero is falsy, but that does not mean it is invalid. Express the intended numeric rule directly.

// ==================== EXPECTED OUTPUT ====================
// Quantity Available
