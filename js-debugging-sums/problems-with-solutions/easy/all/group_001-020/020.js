// JavaScript Debugging Challenge #020

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let role = "admin";
if (role != "ADMIN") console.log("Access Denied");
else console.log("Access Granted");

// ==================== SOLUTION ====================
let role = "admin";
if (role.toLowerCase() === "admin") console.log("Access Granted");
else console.log("Access Denied");

// ==================== EXPLANATION ====================
// // String comparisons are case-sensitive. Normalize the value before comparing.

// ==================== EXPECTED OUTPUT ====================
// Access Granted
