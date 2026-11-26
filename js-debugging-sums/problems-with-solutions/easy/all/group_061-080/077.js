// JavaScript Debugging Challenge #077

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

console.log(name);
var name = "Ahmed";

// ==================== SOLUTION ====================
var name = "Ahmed";
console.log(name);

// ==================== EXPLANATION ====================
// // var declarations are hoisted but assignments are not. Move the initialization before use for the intended output.

// ==================== EXPECTED OUTPUT ====================
// Ahmed
