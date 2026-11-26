// JavaScript Debugging Challenge #154
// Fix the problem in this code. Do not change the Expected Result.

function getDiscount(price, discount = 10) {
  return price - price * discount / 100;
}
console.log(getDiscount(200));

// Expected Result:
// 180
