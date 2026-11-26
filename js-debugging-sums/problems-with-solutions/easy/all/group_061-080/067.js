// JavaScript Debugging Challenge #067

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function sayHello() {
  return "Hello";
}
console.log(sayHello);

// ==================== SOLUTION ====================
function sayHello() {
  return "Hello";
}
console.log(sayHello());

// ==================== EXPLANATION ====================
// // Without parentheses, the code logs the function object instead of calling it.

// ==================== EXPECTED OUTPUT ====================
// Hello
