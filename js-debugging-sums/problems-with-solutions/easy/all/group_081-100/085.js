// JavaScript Debugging Challenge #085

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let student = { name: "Ali", grade: 80 };
student.Grade = 95;
console.log(student);

// ==================== SOLUTION ====================
let student = { name: "Ali", grade: 80 };
student.grade = 95;
console.log(student);

// ==================== EXPLANATION ====================
// // Property names are case-sensitive. Grade and grade are two different properties.

// ==================== EXPECTED OUTPUT ====================
// { name: 'Ali', grade: 95 }
