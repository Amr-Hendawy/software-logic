// JavaScript Debugging Challenge #076

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let price = 100;
function updatePrice(price) {
  price += 50;
}
updatePrice(200);
console.log(price);

// ==================== SOLUTION ====================
let price = 100;
function updatePrice(newPrice) {
  price = newPrice + 50;
}
updatePrice(200);
console.log(price);

// ==================== EXPLANATION ====================
// // The parameter named price shadows the global variable. Use a distinct parameter name and explicitly update the outer binding.

// ==================== EXPECTED OUTPUT ====================
// 250
