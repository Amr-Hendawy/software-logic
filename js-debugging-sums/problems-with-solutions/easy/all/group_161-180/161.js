// JavaScript Debugging Challenge #161

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let username = "";
console.log(username ?? "Guest");

// ==================== SOLUTION ====================
let username = "";
console.log(username || "Guest");

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// Guest
