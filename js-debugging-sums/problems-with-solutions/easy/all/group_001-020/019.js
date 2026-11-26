// JavaScript Debugging Challenge #019

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let age = 25;
if (age >= 18 || age <= 60) console.log("Working Age");
else console.log("Not Working Age");

// ==================== SOLUTION ====================
let age = 25;
if (age >= 18 && age <= 60) console.log("Working Age");
else console.log("Not Working Age");

// ==================== EXPLANATION ====================
// // Both boundaries must be satisfied. OR makes the condition true for almost every number.

// ==================== EXPECTED OUTPUT ====================
// Working Age
