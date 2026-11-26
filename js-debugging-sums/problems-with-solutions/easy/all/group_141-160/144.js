// JavaScript Debugging Challenge #144

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let isMember = true;
let hasTicket = false;
console.log(isMember ?? hasTicket);

// ==================== SOLUTION ====================
let isMember = true;
let hasTicket = false;
console.log(isMember || hasTicket);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// true
