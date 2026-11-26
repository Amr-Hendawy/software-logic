// JavaScript Debugging Challenge #001

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let price = "100";
let quantity = 3;
let total = price * quantity;
console.log(total);
console.log(typeof total);

// ==================== SOLUTION ====================
let price = "100";
let quantity = 3;
price = Number(price);
let total = price * quantity;
console.log(total);
console.log(typeof total);

// ==================== EXPLANATION ====================
// // The original code actually works because * coerces the numeric string to a number. The fix makes the conversion explicit and predictable.

// ==================== EXPECTED OUTPUT ====================
// 300\nnumber
