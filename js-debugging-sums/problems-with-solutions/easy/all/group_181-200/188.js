// JavaScript Debugging Challenge #188

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const products = [
  { name: "Pen", price: 5 },
  { name: "Bag", price: 50 },
  { name: "Book", price: 20 }
];
const cheap = products.filter(product => product.price < 25);
console.log(cheap.filter(product => product.name).join(","));

// ==================== SOLUTION ====================
const products = [
  { name: "Pen", price: 5 },
  { name: "Bag", price: 50 },
  { name: "Book", price: 20 }
];
const cheap = products.filter(product => product.price < 25);
console.log(cheap.map(product => product.name).join(","));

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// Pen,Book
