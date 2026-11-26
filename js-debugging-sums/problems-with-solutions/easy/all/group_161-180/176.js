// JavaScript Debugging Challenge #176

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const account = { balance: 100, active: true };
console.log("Incorrect result");

// ==================== SOLUTION ====================
const account = { balance: 100, active: true };
console.log(account.active && account.balance > 0);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// true
