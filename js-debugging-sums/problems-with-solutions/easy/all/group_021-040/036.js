// JavaScript Debugging Challenge #036

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [10, 20, 30];
console.log(numbers.includes("20"));

// ==================== SOLUTION ====================
let numbers = [10, 20, 30];
console.log(numbers.includes(20));

// ==================== EXPLANATION ====================
// // includes does not coerce the string '20' into the number 20.

// ==================== EXPECTED OUTPUT ====================
// true
