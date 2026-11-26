// JavaScript Debugging Challenge #079

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

function outer() {
  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// ==================== SOLUTION ====================
function outer() {
  let message = "Hello";
  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// ==================== EXPLANATION ====================
// // An inner function can access bindings in its outer lexical scope, but message must first be declared there.

// ==================== EXPECTED OUTPUT ====================
// Hello
