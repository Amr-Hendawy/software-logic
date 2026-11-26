// JavaScript Debugging Challenge #124

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let tasks = ["study", "work", "sleep"];
tasks.shift();
console.log("Incorrect result");

// ==================== SOLUTION ====================
let tasks = ["study", "work", "sleep"];
tasks.shift();
console.log(tasks[0]);

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// work
