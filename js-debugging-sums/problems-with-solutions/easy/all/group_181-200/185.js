// JavaScript Debugging Challenge #185

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

const ages = [12, 18, 25, 16];
const adults = ages.map(age => age >= 18);
console.log(adults.length);

// ==================== SOLUTION ====================
const ages = [12, 18, 25, 16];
const adults = ages.filter(age => age >= 18);
console.log(adults.length);

// ==================== EXPLANATION ====================
// A JavaScript operator, method, or index is used incorrectly. Compare the problem with the solution to see the corrected operation.

// ==================== EXPECTED OUTPUT ====================
// 2
