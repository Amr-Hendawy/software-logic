// JavaScript Debugging Challenge #071

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function showMessage() {
  let message = "Hello";
}
showMessage();
console.log(message);

// ==================== SOLUTION ====================
function showMessage() {
  let message = "Hello";
  return message;
}
let result = showMessage();
console.log(result);

// ==================== EXPLANATION ====================
// // A local variable is inaccessible outside its function. Return it and store the returned value.

// ==================== EXPECTED OUTPUT ====================
// Hello
