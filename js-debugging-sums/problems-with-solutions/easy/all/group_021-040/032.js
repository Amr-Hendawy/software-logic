// JavaScript Debugging Challenge #032

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let tasks = ["Study", "Work", "Sleep"];
tasks.pop();
console.log(tasks);

// ==================== SOLUTION ====================
let tasks = ["Study", "Work", "Sleep"];
tasks.shift();
console.log(tasks);

// ==================== EXPLANATION ====================
// // pop removes the last element. shift removes the first.

// ==================== EXPECTED OUTPUT ====================
// [ 'Work', 'Sleep' ]
