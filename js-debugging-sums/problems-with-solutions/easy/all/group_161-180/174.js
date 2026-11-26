// JavaScript Debugging Challenge #174

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const settings = { theme: "dark" };
settings.theme = "light";
console.log("Incorrect result");

// ==================== SOLUTION ====================
const settings = { theme: "dark" };
settings.theme = "light";
console.log(settings.theme);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// light
