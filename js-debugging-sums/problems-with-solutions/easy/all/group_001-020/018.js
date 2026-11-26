// JavaScript Debugging Challenge #018

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let money = 1000;
let people = 4;
money *= people;
console.log(money);

// ==================== SOLUTION ====================
let money = 1000;
let people = 4;
money /= people;
console.log(money);

// ==================== EXPLANATION ====================
// // To divide money equally, divide by the number of people.

// ==================== EXPECTED OUTPUT ====================
// 250
