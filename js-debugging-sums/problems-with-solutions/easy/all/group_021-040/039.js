// JavaScript Debugging Challenge #039

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let first = [1, 2];
let second = [3, 4];
first.concat(second);
console.log(first);

// ==================== SOLUTION ====================
let first = [1, 2];
let second = [3, 4];
first = first.concat(second);
console.log(first);

// ==================== EXPLANATION ====================
// // concat returns a new array and leaves the original unchanged.

// ==================== EXPECTED OUTPUT ====================
// [ 1, 2, 3, 4 ]
