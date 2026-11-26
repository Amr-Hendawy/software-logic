// JavaScript Debugging Challenge #118

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let word = "banana";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let word = "banana";
console.log(word.indexOf("na"));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 2
