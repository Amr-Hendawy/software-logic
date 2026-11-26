// JavaScript Debugging Challenge #042

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let products = [];
if (products) console.log("Products Found");
else console.log("No Products");

// ==================== SOLUTION ====================
let products = [];
if (products.length > 0) console.log("Products Found");
else console.log("No Products");

// ==================== EXPLANATION ====================
// // An empty array is truthy. Check its length to determine whether it contains elements.

// ==================== EXPECTED OUTPUT ====================
// No Products
