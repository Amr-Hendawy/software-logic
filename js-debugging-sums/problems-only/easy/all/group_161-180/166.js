// JavaScript Debugging Challenge #166
// Fix the problem in this code. Do not change the Expected Result.

let outer = "global";
function test() {
  let inner = "local";
  return outer + " " + inner;
}
console.log(test());

// Expected Result:
// global local
