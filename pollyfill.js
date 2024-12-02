// map function
const nums = [1, 2, 3, 4];
const multiplyByThree = nums.map((num) => {
  return num * 3;
});
console.log(multiplyByThree);
console.log(nums);


// filter function
const num2 = [1, 2, 3, 4, 5];
const greaterThanTwo = num2.filter((num) => {
  return num > 2;
});
console.log(greaterThanTwo);
console.log(num2);


// reduce function
const num3 = [1, 2, 3, 4, 5];
const sum = num3.reduce((acc, curr) => {
  return acc + curr;
});
console.log(sum);
console.log(num3);


// 1............... pollyfill for map.......................
// Array.map((num, i, arr) => { })

// Array.prototype.myMap = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         temp.push(cb(this[i], i, this));
//     }
//     return temp;
// };

// const nums = [1, 2, 3, 4]
// const multiplyByThree = nums.myMap((num, i, arr) => {
//     return num * 3;
// })

// console.log(multiplyByThree);

// 2............... pollyfill for filter.......................
// Array.prototype.myFilter = function (cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this))
//             temp.push(this[i]);
//     }
//     return temp;
// };

// const hello = [1, 2, 3, 4, 5];
// const greaterThanTwo = hello.myFilter((num, i, arr) => {
//     return num > 2;
// })

// console.log(greaterThanTwo);

// 3............... pollyfill for reduce.......................
// Array.prototype.myReduce = function (cb, initialValue) {
//     var accumulator = initialValue;

//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
//     }

//     return accumulator;
// }

// const nums2 = [1, 2, 3, 4, 5];
// const sum = nums2.myReduce((acc, curr) => {
//     return acc + curr;
// });

// console.log(sum);
