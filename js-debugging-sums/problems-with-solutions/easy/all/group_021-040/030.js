// JavaScript Debugging Challenge #030

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let text = "banana";
console.log(text.indexOf("a"));

// ==================== SOLUTION ====================
let text = "banana";
console.log(text.lastIndexOf("a"));

// ==================== EXPLANATION ====================
// // indexOf returns the first match; lastIndexOf returns the final match.

// ==================== EXPECTED OUTPUT ====================
// 5
