// JavaScript Debugging Challenge #081

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = { name: "Ahmed", age: 25 };
let property = "name";
console.log(user.property);

// ==================== SOLUTION ====================
let user = { name: "Ahmed", age: 25 };
let property = "name";
console.log(user[property]);

// ==================== EXPLANATION ====================
// // Dot notation looks for a literal property named property; bracket notation evaluates the variable.

// ==================== EXPECTED OUTPUT ====================
// Ahmed
