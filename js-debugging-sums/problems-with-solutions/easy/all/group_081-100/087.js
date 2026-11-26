// JavaScript Debugging Challenge #087

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = { name: "Ali", age: 25 };
let keys = Object.values(user);
console.log(keys);

// ==================== SOLUTION ====================
let user = { name: "Ali", age: 25 };
let keys = Object.keys(user);
console.log(keys);

// ==================== EXPLANATION ====================
// // Object.keys returns property names; Object.values returns property values.

// ==================== EXPECTED OUTPUT ====================
// [ 'name', 'age' ]
