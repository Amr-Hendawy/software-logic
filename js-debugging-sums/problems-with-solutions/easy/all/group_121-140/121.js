// JavaScript Debugging Challenge #121

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let items = ["pen", "book"];
items.push("bag");
console.log("Incorrect result");

// ==================== SOLUTION ====================
let items = ["pen", "book"];
items.push("bag");
console.log(items.length);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// 3
