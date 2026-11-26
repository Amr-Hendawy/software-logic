// JavaScript Debugging Challenge #084

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = {};
let key = "age";
user.key = 25;
console.log(user);

// ==================== SOLUTION ====================
let user = {};
let key = "age";
user[key] = 25;
console.log(user);

// ==================== EXPLANATION ====================
// // Bracket notation uses the variable's value as the property name.

// ==================== EXPECTED OUTPUT ====================
// { age: 25 }
