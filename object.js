// objects in javascript

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// };

// multiplyByTwo(nums)

// function multiplyByTwo(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// };

// console.log(nums);

// console.log(undefined == null); // true

// console.log(1 + false);
// console.log(1 + true);
// console.log(1 - false);
// console.log(1 + '2' - 1);


// const obj1 = { a: 1 };
// const obj2 = { a: 1 };

// console.log(obj1 == obj2);
// console.log(obj1 === obj2);


// let str = "hello";
// console.log(str.toUpperCase()); 
// console.log(str);


// const obj = { name: "John" };
// const newObj = { ...obj, age: 30 };

// console.log(newObj);


console.log(this == window);


const numbers = [1, 2, 3];
// Using map
const doubled = numbers.map(num => num * 2);
// numbers: [1, 2, 3] (original array remains unchanged)

// Using forEach
numbers.forEach((num, index, arr) => arr[index] = num * 2);
