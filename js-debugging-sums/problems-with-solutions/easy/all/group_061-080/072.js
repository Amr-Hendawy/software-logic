// JavaScript Debugging Challenge #072

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let score = 100;
function updateScore() {
  let score = 50;
}
updateScore();
console.log(score);

// ==================== SOLUTION ====================
let score = 100;
function updateScore() {
  score = 50;
}
updateScore();
console.log(score);

// ==================== EXPLANATION ====================
// // Declaring let score inside the function creates a separate local variable. Assign to the outer variable to update it.

// ==================== EXPECTED OUTPUT ====================
// 50
