// JavaScript Debugging Challenge #028

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let symbol = "*";
console.log(symbol.repeat(0));

// ==================== SOLUTION ====================
let symbol = "*";
console.log(symbol.repeat(5));

// ==================== EXPLANATION ====================
// // repeat takes the number of repetitions. Zero produces an empty string.

// ==================== EXPECTED OUTPUT ====================
// *****
