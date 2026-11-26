// JavaScript Debugging Challenge #117

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let sentence = "red,green,blue";
console.log("Incorrect result");

// ==================== SOLUTION ====================
let sentence = "red,green,blue";
console.log(sentence.replace(",", " | "));

// ==================== EXPLANATION ====================
// The final output statement prints a fixed incorrect message instead of the calculated value. Restore the output expression shown in the solution.

// ==================== EXPECTED OUTPUT ====================
// red | green,blue
