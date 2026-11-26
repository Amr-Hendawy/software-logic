// JavaScript Debugging Challenge #172

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const product = { title: "Laptop", price: 15000 };
console.log("Incorrect result");

// ==================== SOLUTION ====================
const product = { title: "Laptop", price: 15000 };
console.log(product["price"]);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 15000
