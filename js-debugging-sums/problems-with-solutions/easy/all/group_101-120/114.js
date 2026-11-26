// JavaScript Debugging Challenge #114

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let message = "  hello world  ";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let message = "  hello world  ";
console.log(message.trim().toUpperCase());

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// HELLO WORLD
