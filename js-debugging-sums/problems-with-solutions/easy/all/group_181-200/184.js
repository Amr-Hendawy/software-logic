// JavaScript Debugging Challenge #184

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const prices = [10, 20, 30];
const withTax = prices.filter(price => price * 1.1);
console.log(withTax[1]);

// ==================== SOLUTION ====================
const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.1);
console.log(withTax[1]);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 22
