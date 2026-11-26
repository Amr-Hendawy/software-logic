// JavaScript Debugging Challenge #025

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let userName = "  Ahmed  ";
userName.trim();
console.log(userName);

// ==================== SOLUTION ====================
let userName = "  Ahmed  ";
userName = userName.trim();
console.log(userName);

// ==================== EXPLANATION ====================
// // trim returns a new string; it does not mutate the original string.

// ==================== EXPECTED OUTPUT ====================
// Ahmed
