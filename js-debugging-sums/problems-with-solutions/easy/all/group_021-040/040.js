// JavaScript Debugging Challenge #040

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let students = [["Ahmed", 80], ["Ali", 90], ["Mona", 95]];
console.log(students[1][1]);

// ==================== SOLUTION ====================
let students = [["Ahmed", 80], ["Ali", 90], ["Mona", 95]];
console.log(students[1][0]);

// ==================== EXPLANATION ====================
// // The second student's name is the first item in the nested array at index 1.

// ==================== EXPECTED OUTPUT ====================
// Ali
