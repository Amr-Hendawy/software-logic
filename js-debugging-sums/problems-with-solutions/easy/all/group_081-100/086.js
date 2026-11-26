// JavaScript Debugging Challenge #086

// ==================== PROBLEM ====================
// Find and fix the bug in this code.

let employee = {
  name: "Ahmed",
  job: { title: "Developer", salary: 10000 }
};
employee.salary = 15000;
console.log(employee);

// ==================== SOLUTION ====================
let employee = {
  name: "Ahmed",
  job: { title: "Developer", salary: 10000 }
};
employee.job.salary = 15000;
console.log(employee);

// ==================== EXPLANATION ====================
// // salary is nested inside job, so update employee.job.salary.

// ==================== EXPECTED OUTPUT ====================
// job.salary becomes 15000
