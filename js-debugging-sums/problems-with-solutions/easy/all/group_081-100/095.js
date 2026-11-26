// JavaScript Debugging Challenge #095

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let students = [
  { name: "Ali", grade: 90 },
  { name: "Sara", grade: 80 },
  { name: "Mona", grade: 95 }
];
let names = students.map(student => student.title);
console.log(names);

// ==================== SOLUTION ====================
let students = [
  { name: "Ali", grade: 90 },
  { name: "Sara", grade: 80 },
  { name: "Mona", grade: 95 }
];
let names = students.map(student => student.name);
console.log(names);

// ==================== EXPLANATION ====================
// // The object property is name, not title. Access the correct property.

// ==================== EXPECTED OUTPUT ====================
// [ 'Ali', 'Sara', 'Mona' ]
