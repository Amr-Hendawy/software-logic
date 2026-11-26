// JavaScript Debugging Challenge #180

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const profile = { name: "Youssef", address: { city: "Giza" } };
console.log("Incorrect result");

// ==================== SOLUTION ====================
const profile = { name: "Youssef", address: { city: "Giza" } };
console.log(profile.address.city);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// Giza
