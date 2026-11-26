// JavaScript Debugging Challenge #098
// Fix the problem in this code. Do not change the Expected Result.

let numbers = [10, 50, 20, 80, 30];
let result = numbers.filter((number, index) => {
  return index > 20;
});
console.log(result);

// Expected Result:
// [ 50, 80, 30 ]
