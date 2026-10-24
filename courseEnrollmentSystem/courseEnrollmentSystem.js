const course = {
  name: "JavaScript",
  maxStudents: 3,
  students: ["Ali", "Mona"],
};

function enrollStudent(course, studentName) {
  for (let i = 0; i < course.students.length; i++) {
    if (course.students[i] === studentName) {
      console.log("Student already enrolled");
      return;
    }
  }

  if (course.students.length >= course.maxStudents) {
    console.log("Course is full");
    return;
  }

  course.students[course.students.length] = studentName;

  console.log("Enrollment successful");
}

enrollStudent(course, "Omar");
enrollStudent(course, "Ali");
enrollStudent(course, "Sara");

console.log(course.students);
