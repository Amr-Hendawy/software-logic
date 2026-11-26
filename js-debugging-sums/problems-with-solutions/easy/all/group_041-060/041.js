// JavaScript Debugging Challenge #041

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let age = 15;
if (age >= 18 || age <= 60) console.log("Allowed");
else console.log("Not Allowed");

// ==================== SOLUTION ====================
let age = 15;
if (age >= 18 && age <= 60) console.log("Allowed");
else console.log("Not Allowed");

// ==================== EXPLANATION ====================
// // To be within a range, both conditions must be true.

// ==================== EXPECTED OUTPUT ====================
// Not Allowed
