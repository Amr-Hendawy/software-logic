// JavaScript Debugging Challenge #175

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const car = { brand: "Toyota", year: 2020 };
console.log("Incorrect result");

// ==================== SOLUTION ====================
const car = { brand: "Toyota", year: 2020 };
console.log("brand" in car);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// true
