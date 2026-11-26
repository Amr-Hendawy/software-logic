// JavaScript Debugging Challenge #082

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let product = { title: "Laptop", price: 1000 };
console.log(product.name);

// ==================== SOLUTION ====================
let product = { title: "Laptop", price: 1000 };
console.log(product.title);

// ==================== EXPLANATION ====================
// // The object has title, not name. Access the property that actually exists.

// ==================== EXPECTED OUTPUT ====================
// Laptop
