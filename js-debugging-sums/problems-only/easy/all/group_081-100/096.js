// JavaScript Debugging Challenge #096
// Fix the problem in this code. Do not change the Expected Result.

let products = [
  { name: "Laptop", details: { price: 1000 } },
  { name: "Mouse", details: { price: 200 } },
  { name: "Monitor", details: { price: 500 } }
];
let result = products.filter(product => product.price > 300);
console.log(result);

// Expected Result:
// Laptop and Monitor
