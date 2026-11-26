// JavaScript Debugging Challenge #138

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let i = 0;
let text = "";
while (i < 3) {
  text -= "X";
  i++;
}
console.log(text);

// ==================== SOLUTION ====================
let i = 0;
let text = "";
while (i < 3) {
  text += "X";
  i++;
}
console.log(text);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// XXX
