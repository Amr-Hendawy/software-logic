// JavaScript Debugging Challenge #090

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = { name: "Ali" };
console.log(user.address.city);

// ==================== SOLUTION ====================
let user = { name: "Ali" };
console.log(user.address?.city ?? "Unknown");

// ==================== EXPLANATION ====================
// // address is undefined, so accessing city throws. Optional chaining safely stops and ?? supplies a fallback.

// ==================== EXPECTED OUTPUT ====================
// Unknown
