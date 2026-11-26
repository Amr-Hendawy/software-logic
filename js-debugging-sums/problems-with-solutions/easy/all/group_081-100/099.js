// JavaScript Debugging Challenge #099

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 }
];
let result = users.map(user => {
  user.age += 5;
  return user;
});
console.log(result);
console.log(users);

// ==================== SOLUTION ====================
let users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 }
];
let result = users.map(user => {
  return { name: user.name, age: user.age + 5 };
});
console.log(result);
console.log(users);

// ==================== EXPLANATION ====================
// // The original mutates each object. Return new objects to preserve the source data.

// ==================== EXPECTED OUTPUT ====================
// result ages 25 and 30; original ages 20 and 25
