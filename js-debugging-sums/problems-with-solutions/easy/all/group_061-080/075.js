// JavaScript Debugging Challenge #075

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

if (true) {
  let age = 20;
}
console.log(age);

// ==================== SOLUTION ====================
if (true) {
  var age = 20;
}
console.log(age);

// ==================== EXPLANATION ====================
// // This exercise demonstrates var's function/global scope versus let's block scope. Prefer let or const in modern code.

// ==================== EXPECTED OUTPUT ====================
// 20
