// JavaScript Debugging Challenge #101

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let price = "25";
let quantity = 4;
let total = price - quantity;
console.log(total);

// ==================== SOLUTION ====================
let price = "25";
let quantity = 4;
let total = price + quantity;
console.log(total);

// ==================== EXPLANATION ====================
// The arithmetic operator is incorrect. Restore the operator used in the solution.

// ==================== EXPECTED OUTPUT ====================
// 100
