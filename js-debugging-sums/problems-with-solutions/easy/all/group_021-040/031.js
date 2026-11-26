// JavaScript Debugging Challenge #031

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let queue = ["Ali", "Ahmed"];
queue.push("Sara");
console.log(queue);

// ==================== SOLUTION ====================
let queue = ["Ali", "Ahmed"];
queue.unshift("Sara");
console.log(queue);

// ==================== EXPLANATION ====================
// // The requirement is to add at the beginning. unshift adds to the beginning; push adds to the end.

// ==================== EXPECTED OUTPUT ====================
// [ 'Sara', 'Ali', 'Ahmed' ]
