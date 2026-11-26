// JavaScript Debugging Challenge #142
// Fix the problem in this code. Do not change the Expected Result.

let role = "editor";
let access;
switch (role) {
  case "admin": access = "Full"; break;
  case "editor": access = "Edit"; break;
  default: access = "Read";
}
console.log(access);

// Expected Result:
// Edit
