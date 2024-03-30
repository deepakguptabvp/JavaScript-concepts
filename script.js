// map function
const nums = [1, 2, 3, 4]
const multiplyByThree = nums.map((num) => {
    return num * 3;
})
console.log(multiplyByThree);


// filter function
const hello = [1, 2, 3, 4, 5];
const greaterThanTwo = hello.filter((num) => {
    return num > 2;
})
console.log(greaterThanTwo);


// reduce function
const nums2 = [1, 2, 3, 4, 5];
const sum = nums2.reduce((acc, curr) => {
    return acc + curr;
});

console.log(sum);


//  Extra ques for practice...
let students = [
    { name: "Piyush", rollNumber: 31, marks: 80 },
    { name: "Jenny", rollNumber: 15, marks: 69 },
    { name: "kaushal", rollNumber: 16, marks: 35 },
    { name: "Dilpreet", rollNumber: 7, marks: 55 },
];

const newArray = students.map((students) => {
    return students.name.toUpperCase();
})
console.log(newArray);

const highScore = students.filter((student) => {
    return student.marks > 60 && student.rollNumber > 15
})
console.log(highScore);

const sum2 = students.reduce((acc, students) => {
    return acc += students.marks;
}, 0);
console.log(sum2);


