// JavaScript Debugging Challenge #010

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let word = "JavaScript";
let length = word.length - 1;
console.log("Characters:", length);

// ==================== SOLUTION ====================
let word = "JavaScript";
let length = word.length;
console.log("Characters:", length);

// ==================== EXPLANATION ====================
// // length is the number of UTF-16 code units; the last index is length - 1.

// ==================== EXPECTED OUTPUT ====================
// Characters: 10
