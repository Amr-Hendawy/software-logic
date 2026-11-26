// JavaScript Debugging Challenge #093

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let ages = [12, 18, 25, 15, 30];
let adults = ages.map(age => age >= 18);
console.log(adults);

// ==================== SOLUTION ====================
let ages = [12, 18, 25, 15, 30];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// ==================== EXPLANATION ====================
// // map transforms every element into a boolean; filter retains the original elements that pass the condition.

// ==================== EXPECTED OUTPUT ====================
// [ 18, 25, 30 ]
