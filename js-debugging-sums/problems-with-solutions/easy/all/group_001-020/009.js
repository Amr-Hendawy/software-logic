// JavaScript Debugging Challenge #009

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let value = "25px";
let result = Number(value);
console.log(result);

// ==================== SOLUTION ====================
let value = "25px";
let result = parseInt(value, 10);
console.log(result);

// ==================== EXPLANATION ====================
// // Number('25px') is NaN. parseInt reads the leading integer portion.

// ==================== EXPECTED OUTPUT ====================
// 25
