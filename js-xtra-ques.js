// const [, , , a] = [10, 20, 30, 40, 50];
// console.log(a);

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter1 = createCounter();
// const counter2 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

// let count = 0;
// let add = (x) => (count += x || 5);
// console.log(count,"hello");

// add(0);
// add();
// add(10);
// console.log(count);

// let x = 5;
// let y = x++;
// console.log(y); //5


// var a = 6; 
// function test(){
//     var a  = 7;
//     function again(){
//         var a = 8;
//         alert(a);
//     }
//     again();
//     alert(a);
// }
// test();
// alert(a);


// var x = 0;
// function foo() {
//   x++;
//   this.x = x;
//   return foo;
// }
// var bar = new foo();
// console.log(bar.x);

// var arr = [10, 1, 2, 3].shift();
// console.log("Shifted value:" + arr);

// const o = {name: "alex", hobbies: ["cricket", "music"]};
// Object.freeze(o);
// o.hobbies[1] = "dance";
// console.log(o.hobbies)

// ques
// const arr = ["hello", 1, "Hello"]
// arr.sort()
// console.log(arr)

// ques
// console.log(3 === 3 === 3);

// ques
// (function (x) {
//     return (function (y) {
//         console.log(x)
//     })(2)
// })(1);

// ques
// function foo1()
// {
// return {
// bar: "hello"
// };
// }
// function foo2()
// {
// return
// {
// bar: "hello"
// };
// }
