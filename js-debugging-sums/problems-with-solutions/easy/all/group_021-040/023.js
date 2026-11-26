// JavaScript Debugging Challenge #023

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let email = "Student@Gmail.com";
if (email.includes("gmail")) console.log("Gmail Account");
else console.log("Other Account");

// ==================== SOLUTION ====================
let email = "Student@Gmail.com";
if (email.toLowerCase().includes("gmail")) console.log("Gmail Account");
else console.log("Other Account");

// ==================== EXPLANATION ====================
// // includes is case-sensitive. Normalize the string before searching.

// ==================== EXPECTED OUTPUT ====================
// Gmail Account
