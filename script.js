//  Extra ques for practice...
let students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jenny", rollNumber: 15, marks: 69 },
  { name: "kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const newArray = students.map((students) => {
  return students.name.toUpperCase();
});
console.log(newArray);

const highScore = students.filter((student) => {
  return student.marks > 60 && student.rollNumber > 15;
});
console.log(highScore);

const sum2 = students.reduce((acc, students) => {
  return (acc += students.marks);
}, 0);
console.log(sum2);

// ques
const obj = { a: 1, b: { c: 2 } };
const { ...clone } = obj;
clone.b.c = 3;
console.log(obj.b.c);
