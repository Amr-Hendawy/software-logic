// JavaScript Debugging Challenge #100

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let prices = [100, 200, 300, 400];
let result = prices
  .map(price => price * 2)
  .filter(price => price < 300);
console.log(result);

// ==================== SOLUTION ====================
let prices = [100, 200, 300, 400];
let result = prices
  .filter(price => price < 300)
  .map(price => price * 2);
console.log(result);

// ==================== EXPLANATION ====================
// // Filter original prices first, then double the selected values. Chaining order changes the result.

// ==================== EXPECTED OUTPUT ====================
// [ 200, 400 ]
