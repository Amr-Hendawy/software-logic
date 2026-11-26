// JavaScript Debugging Challenge #116

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let file = "photo.png";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let file = "photo.png";
console.log(file.endsWith(".jpg"));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// false
