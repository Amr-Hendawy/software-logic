// JavaScript Debugging Challenge #178

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const order = { items: { count: 3 } };
order.items.count -= 2;
console.log(order.items.count);

// ==================== SOLUTION ====================
const order = { items: { count: 3 } };
order.items.count += 2;
console.log(order.items.count);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 5
