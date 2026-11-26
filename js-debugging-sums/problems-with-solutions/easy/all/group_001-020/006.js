// JavaScript Debugging Challenge #006

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let total = 100;
let quantity = 0;
let result = total / quantity;
if (result === 0) {
  console.log("Free");
} else {
  console.log("Price:", result);
}

// ==================== SOLUTION ====================
let total = 100;
let quantity = 0;
if (quantity === 0) {
  console.log("Invalid Quantity");
} else {
  let result = total / quantity;
  console.log("Price:", result);
}

// ==================== EXPLANATION ====================
// // Dividing a positive number by zero produces Infinity in JavaScript. Validate the divisor first.

// ==================== EXPECTED OUTPUT ====================
// Invalid Quantity
