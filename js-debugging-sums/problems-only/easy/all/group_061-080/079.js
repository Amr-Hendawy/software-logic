// JavaScript Debugging Challenge #079
// Fix the problem in this code. Do not change the Expected Result.

function outer() {
  function inner() {
    console.log(message);
  }
  inner();
}
outer();

// Expected Result:
// Hello
