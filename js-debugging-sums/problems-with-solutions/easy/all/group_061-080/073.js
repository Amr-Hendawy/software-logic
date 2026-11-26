// JavaScript Debugging Challenge #073

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

if (true) {
  let message = "Welcome";
}
console.log(message);

// ==================== SOLUTION ====================
let message;
if (true) {
  message = "Welcome";
}
console.log(message);

// ==================== EXPLANATION ====================
// // let is block-scoped. Declare the variable outside the block if it must be used afterward.

// ==================== EXPECTED OUTPUT ====================
// Welcome
