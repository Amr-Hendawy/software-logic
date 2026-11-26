// JavaScript Debugging Challenge #096

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let products = [
  { name: "Laptop", details: { price: 1000 } },
  { name: "Mouse", details: { price: 200 } },
  { name: "Monitor", details: { price: 500 } }
];
let result = products.filter(product => product.price > 300);
console.log(result);

// ==================== SOLUTION ====================
let products = [
  { name: "Laptop", details: { price: 1000 } },
  { name: "Mouse", details: { price: 200 } },
  { name: "Monitor", details: { price: 500 } }
];
let result = products.filter(product => product.details.price > 300);
console.log(result);

// ==================== EXPLANATION ====================
// // price is nested inside details, not directly on product.

// ==================== EXPECTED OUTPUT ====================
// Laptop and Monitor
