// JavaScript Debugging Challenge #002

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let a = 10, b = "20", c = 30;
let result = a + b + c;
console.log(result);

// ==================== SOLUTION ====================
let a = 10, b = "20", c = 30;
let result = a + Number(b) + c;
console.log(result);

// ==================== EXPLANATION ====================
// // The + operator concatenates after encountering a string. Convert b before adding.

// ==================== EXPECTED OUTPUT ====================
// 60
