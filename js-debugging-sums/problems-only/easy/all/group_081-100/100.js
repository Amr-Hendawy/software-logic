// JavaScript Debugging Challenge #100
// Fix the problem in this code. Do not change the Expected Result.

let prices = [100, 200, 300, 400];
let result = prices
  .map(price => price * 2)
  .filter(price => price < 300);
console.log(result);

// Expected Result:
// [ 200, 400 ]
