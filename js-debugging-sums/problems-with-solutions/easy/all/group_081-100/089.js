// JavaScript Debugging Challenge #089

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let user = { name: "Ahmed", age: 25 };
let copy = user;
copy.age = 30;
console.log(user.age);

// ==================== SOLUTION ====================
let user = { name: "Ahmed", age: 25 };
let copy = { ...user };
copy.age = 30;
console.log(user.age);
console.log(copy.age);

// ==================== EXPLANATION ====================
// // Assignment copies the object reference, not the object. Spread makes a shallow copy.

// ==================== EXPECTED OUTPUT ====================
// 25\n30
