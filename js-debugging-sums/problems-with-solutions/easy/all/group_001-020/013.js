// JavaScript Debugging Challenge #013

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let price = 200;
let discount = 20;
price *= discount / 100;
console.log(price);

// ==================== SOLUTION ====================
let price = 200;
let discount = 20;
price -= price * discount / 100;
console.log(price);

// ==================== EXPLANATION ====================
// // The original calculates the discount amount, not the final price. Subtract the discount from price.

// ==================== EXPECTED OUTPUT ====================
// 160
