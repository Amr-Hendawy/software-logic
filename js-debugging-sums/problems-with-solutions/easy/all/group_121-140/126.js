// JavaScript Debugging Challenge #126

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let colors = ["red", "green", "blue"];
colors[1] = "yellow";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let colors = ["red", "green", "blue"];
colors[1] = "yellow";
console.log(colors.join(", "));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// red, yellow, blue
