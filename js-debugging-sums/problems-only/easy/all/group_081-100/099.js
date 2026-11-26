// JavaScript Debugging Challenge #099
// Fix the problem in this code. Do not change the Expected Result.

let users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 25 }
];
let result = users.map(user => {
  user.age += 5;
  return user;
});
console.log(result);
console.log(users);

// Expected Result:
// result ages 25 and 30; original ages 20 and 25
