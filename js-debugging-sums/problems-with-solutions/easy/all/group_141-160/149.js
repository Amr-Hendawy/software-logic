// JavaScript Debugging Challenge #149

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let password = "abc12345";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let password = "abc12345";
console.log(password.length >= 8 ? "Valid" : "Invalid");

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Valid
