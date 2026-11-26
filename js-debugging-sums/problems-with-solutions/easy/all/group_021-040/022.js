// JavaScript Debugging Challenge #022

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let word = "JavaScript";
console.log(word[word.length]);

// ==================== SOLUTION ====================
let word = "JavaScript";
console.log(word[word.length - 1]);

// ==================== EXPLANATION ====================
// // The last valid index is length - 1. Index length is out of range.

// ==================== EXPECTED OUTPUT ====================
// t
