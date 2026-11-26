// JavaScript Debugging Challenge #123

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let queue = ["B", "C"];
queue.unshift("A");
console.log("Incorrect result");

// ==================== SOLUTION ====================
let queue = ["B", "C"];
queue.unshift("A");
console.log(queue[0]);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// A
