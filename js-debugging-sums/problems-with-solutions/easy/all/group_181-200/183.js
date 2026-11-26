// JavaScript Debugging Challenge #183

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const names = ["ali", "sara", "mona"];
const upper = names.filter(name => name.toUpperCase());
console.log(upper.join(","));

// ==================== SOLUTION ====================
const names = ["ali", "sara", "mona"];
const upper = names.map(name => name.toUpperCase());
console.log(upper.join(","));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// ALI,SARA,MONA
