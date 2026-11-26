// JavaScript Debugging Challenge #037

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let numbers = [1, 2, 3, 4];
let reversed = numbers.reverse();
console.log(numbers);
console.log(reversed);

// ==================== SOLUTION ====================
let numbers = [1, 2, 3, 4];
let reversed = [...numbers].reverse();
console.log(numbers);
console.log(reversed);

// ==================== EXPLANATION ====================
// // reverse mutates the original array. Copy it first when the original must remain unchanged.

// ==================== EXPECTED OUTPUT ====================
// [ 1, 2, 3, 4 ]\n[ 4, 3, 2, 1 ]
