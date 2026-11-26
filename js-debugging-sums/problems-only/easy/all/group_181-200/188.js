// JavaScript Debugging Challenge #188
// Fix the problem in this code. Do not change the Expected Result.

const products = [
  { name: "Pen", price: 5 },
  { name: "Bag", price: 50 },
  { name: "Book", price: 20 }
];
const cheap = products.filter(product => product.price < 25);
console.log(cheap.map(product => product.name).join(","));

// Expected Result:
// Pen,Book
