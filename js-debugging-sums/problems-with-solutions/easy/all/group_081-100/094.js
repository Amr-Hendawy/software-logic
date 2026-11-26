// JavaScript Debugging Challenge #094

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let prices = [100, 200, 300, 400, 500];
let result = prices.filter(price => price < 300);
console.log(result);

// ==================== SOLUTION ====================
let prices = [100, 200, 300, 400, 500];
let result = prices.filter(price => price > 300);
console.log(result);

// ==================== EXPLANATION ====================
// // The condition is reversed: the requirement is prices greater than 300.

// ==================== EXPECTED OUTPUT ====================
// [ 400, 500 ]
