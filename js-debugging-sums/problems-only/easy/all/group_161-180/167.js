// JavaScript Debugging Challenge #167
// Fix the problem in this code. Do not change the Expected Result.

let value = 10;
{
  let value = 20;
  console.log(value);
}
console.log(value);

// Expected Result:
// 20
// 10
