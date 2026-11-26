// JavaScript Debugging Challenge #134

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let i = 1;
let product = 1;
do {
  product *= i;
  i++;
} while (i < 4);
console.log(product);

// ==================== SOLUTION ====================
let i = 1;
let product = 1;
do {
  product *= i;
  i++;
} while (i <= 4);
console.log(product);

// ==================== EXPLANATION ====================
// The loop or comparison stops one step too early. Include the boundary value.

// ==================== EXPECTED OUTPUT ====================
// 24
