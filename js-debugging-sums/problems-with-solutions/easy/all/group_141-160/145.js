// JavaScript Debugging Challenge #145

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let hour = 14;
console.log("Incorrect result");

// ==================== SOLUTION ====================
let hour = 14;
console.log(hour >= 12 && hour < 18 ? "Afternoon" : "Other");

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Afternoon
