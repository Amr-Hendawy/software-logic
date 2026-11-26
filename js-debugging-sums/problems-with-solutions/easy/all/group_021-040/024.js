// JavaScript Debugging Challenge #024

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let word = "JavaScript";
console.log(word.slice(0, 4));

// ==================== SOLUTION ====================
let word = "JavaScript";
console.log(word.slice(0, 5));

// ==================== EXPLANATION ====================
// // The end index in slice is exclusive. Five characters require end index 5.

// ==================== EXPECTED OUTPUT ====================
// JavaS
